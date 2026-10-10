const SUPABASE_URL = 'https://qloogluysebqufcevpqf.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_eOLBZT_LFxmMy64U7wfDhw_v_zcld0d';
const isConfigured = !SUPABASE_URL.includes('YOUR-PROJECT') && !SUPABASE_ANON_KEY.includes('YOUR-ANON-KEY');
const supabaseClient = isConfigured ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const loginPanel = document.getElementById('login-panel');
const dashboardPanel = document.getElementById('dashboard-panel');
const loginForm = document.getElementById('login-form');
const loginStatus = document.getElementById('login-status');
const workoutList = document.getElementById('workout-list');
const workoutEmpty = document.getElementById('workout-empty');
const athleteName = document.getElementById('athlete-name');
const coachPanel = document.getElementById('coach-panel');
const athleteSelect = document.getElementById('athlete-select');
const workoutForm = document.getElementById('workout-form');
const coachStatus = document.getElementById('coach-status');

function showStatus(message, isError = true) {
    loginStatus.textContent = message;
    loginStatus.className = `text-sm mt-4 ${isError ? 'text-red-700' : 'text-emerald-700'}`;
}

function showLogin() {
    loginPanel.classList.remove('hidden');
    dashboardPanel.classList.add('hidden');
    coachPanel.classList.add('hidden');
}

function showDashboard() {
    loginPanel.classList.add('hidden');
    dashboardPanel.classList.remove('hidden');
    coachPanel.classList.add('hidden');
}

async function renderWorkouts(workouts) {
    workoutList.innerHTML = '';
    workoutEmpty.classList.toggle('hidden', workouts.length > 0);
        for (const workout of workouts) {
        const item = document.createElement('article');
        item.className = 'border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3';
            item.innerHTML = `<div><h3 class="font-bold text-slate-900"></h3><p class="text-sm text-slate-600 mt-1"></p></div>${workout.file_path || workout.file_url ? '<a class="text-sm font-bold text-[#12314A] hover:text-[#C9A227]" target="_blank" rel="noopener">Ouvrir le document</a>' : ''}`;
        item.querySelector('h3').textContent = workout.title;
        item.querySelector('p').textContent = workout.description || 'Programme personnalisé';
            if (workout.file_path) {
                const { data } = await supabaseClient.storage.from('workout-files').createSignedUrl(workout.file_path, 300);
                if (data?.signedUrl) item.querySelector('a').href = data.signedUrl;
                else item.querySelector('a').remove();
            } else if (workout.file_url) item.querySelector('a').href = workout.file_url;
        workoutList.appendChild(item);
        }
}

async function loadDashboard(user) {
    showDashboard();
    const { data: profile } = await supabaseClient.from('profiles').select('full_name, role').eq('id', user.id).maybeSingle();
    athleteName.textContent = profile?.full_name || user.email.split('@')[0];
    const { data: workouts, error } = await supabaseClient.from('workouts').select('id, title, description, file_url, file_path').eq('athlete_id', user.id).order('created_at', { ascending: false });
    if (error) {
        renderWorkouts([]);
        workoutEmpty.textContent = 'Impossible de charger les programmes pour le moment.';
        workoutEmpty.classList.remove('hidden');
        return;
    }
    await renderWorkouts(workouts || []);
    if (profile?.role === 'coach' || profile?.role === 'admin') loadCoachPanel();
}

async function loadCoachPanel() {
    coachPanel.classList.remove('hidden');
    const { data: athletes, error } = await supabaseClient.from('profiles').select('id, full_name').eq('role', 'athlete').order('full_name');
    if (error) {
        coachStatus.textContent = 'Impossible de charger la liste des athlètes.';
        coachStatus.className = 'text-sm mt-4 text-red-700';
        return;
    }
    athleteSelect.innerHTML = '';
    athletes.forEach((athlete) => {
        const option = document.createElement('option');
        option.value = athlete.id;
        option.textContent = athlete.full_name;
        athleteSelect.appendChild(option);
    });
}

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!isConfigured) {
        showStatus('Le portail doit encore être relié à votre projet Supabase.');
        return;
    }
    showStatus('Connexion en cours...', false);
    const { error } = await supabaseClient.auth.signInWithPassword({
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    });
    if (error) showStatus('Courriel ou mot de passe invalide.');
});

document.getElementById('logout-button').addEventListener('click', () => supabaseClient?.auth.signOut());

workoutForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    coachStatus.textContent = 'Enregistrement...';
    coachStatus.className = 'text-sm mt-4 text-slate-600';
    const { error } = await supabaseClient.from('workouts').insert({
        athlete_id: athleteSelect.value,
        title: document.getElementById('workout-title').value,
            description: document.getElementById('workout-description').value,
            file_path: await uploadWorkoutFile(athleteSelect.value)
    });
    if (error) {
        coachStatus.textContent = 'Le programme n’a pas pu être enregistré.';
        coachStatus.className = 'text-sm mt-4 text-red-700';
        return;
    }
    coachStatus.textContent = 'Programme attribué.';
    coachStatus.className = 'text-sm mt-4 text-emerald-700';
    workoutForm.reset();
});

async function uploadWorkoutFile(athleteId) {
    const file = document.getElementById('workout-file').files[0];
    if (!file) return null;
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
    const filePath = `${athleteId}/${crypto.randomUUID()}-${safeName}`;
    const { error } = await supabaseClient.storage.from('workout-files').upload(filePath, file, { upsert: false });
    if (error) throw error;
    return filePath;
}

if (supabaseClient) {
    supabaseClient.auth.onAuthStateChange((event, session) => {
        if (session?.user) loadDashboard(session.user);
        else showLogin();
    });
} else {
    showStatus('Configuration Supabase requise avant la mise en service.');
}
