document.addEventListener('DOMContentLoaded', () => {
    const translations = {
            'fr': {
            'Retour': 'Back', 'Mission': 'Mission', 'Activités': 'Activities', 'Activités hebdomadaires': 'Weekly Activities', 'Lundis · 19 h à 20 h': 'Mondays · 7–8 p.m.', 'Complexe Branchaud-Brière': 'Branchaud-Brière Complex', '499, boulevard Labrosse, suite 100, Gatineau (Québec) J8P 4R1': '499 Labrosse Boulevard, Suite 100, Gatineau, Quebec J8P 4R1', 'Vendredis · 19 h à 20 h': 'Fridays · 7–8 p.m.', 'Mise en forme': 'Fitness', 'École Carle': 'École Carle', '306, rue Jacques-Buteux, Gatineau (Québec) J8P 6A2': '306 Jacques-Buteux Street, Gatineau, Quebec J8P 6A2', 'Participez': 'Get involved', 'Galerie': 'Gallery', 'Nous joindre': 'Contact us', 'Soutien': 'Support', 'Partenariat': 'Partnership', 'Bénévolat': 'Volunteer',
            'Athlètes': 'Athletes', 'Nos athlètes': 'Our athletes', 'Natation': 'Swimming', 'Ski de fond': 'Cross-country skiing', 'Raquette': 'Racquet sports', 'Patinage': 'Skating', 'Athlétisme': 'Track and field', 'Une liste complète pour présenter les athlètes, leur sport et leur parcours au fil du temps.': 'A complete list showcasing athletes, their sport, and their journey over time.',
            'Tous': 'All', 'Autres sports': 'Other sports', 'Athlète motivé qui aime travailler en équipe et améliorer chaque lancer.': 'A motivated athlete who enjoys teamwork and improving every throw.',
            'Passionnée de natation, toujours prête à donner le meilleur dans chaque séance.': 'Passionate about swimming and always ready to give her best at every practice.', 'Joueur énergique qui adore la dynamique de jeu et le travail d’équipe.': 'An energetic player who loves the pace of the game and teamwork.',
            'Persévérante et calme sous pression, avec un grand amour pour le golf.': 'Persistent and calm under pressure, with a great love for golf.', 'Digne d’admiration pour sa discipline et sa force mentale sur la neige.': 'Admired for discipline and mental strength on the snow.',
            'Joueuse souriante qui apporte de la bonne humeur et de l’énergie à chaque match.': 'A cheerful player who brings good energy to every match.', 'Très motivé à améliorer sa technique et à célébrer chaque progression.': 'Highly motivated to improve technique and celebrate every step forward.', 'Fière de sa détermination et toujours prête à repousser ses limites.': 'Proud of her determination and always ready to push her limits.',
            'Aidez-nous à créer plus d’opportunités sportives': 'Help us create more opportunities in sport', 'Votre contribution aide à offrir des activités sportives inclusives, sécuritaires et inspirantes à nos athlètes et à leur communauté.': 'Your contribution helps provide inclusive, safe, and inspiring sports activities for our athletes and community.',
            'Faire un don': 'Make a donation', 'Votre générosité soutient l’équipement, les activités, les déplacements et les opportunités de participation de nos athlètes.': 'Your generosity supports equipment, activities, travel, and participation opportunities for our athletes.', 'Envoyer un message': 'Send a message',
            'Devenir bénévole': 'Become a volunteer', 'Aidez nos athlètes à participer, grandir et réussir en tant qu’entraîneur, accompagnateur, organisateur ou soutien communautaire.': 'Help our athletes participate, grow, and succeed as a coach, companion, organizer, or community supporter.', 'Joindre l’équipe': 'Join the team',
            'Soutenir la mission': 'Support the mission', 'Nous travaillons avec des partenaires locaux qui font la différence dans la création d’un environnement plus inclusif et accessible.': 'We work with local partners who help create a more inclusive and accessible environment.', 'Voir nos partenaires': 'View our partners',
            'Pourquoi votre soutien compte': 'Why your support matters', 'Athlètes impliqués': 'Athletes involved', 'Sports offerts': 'Sports offered', 'Bénévoles et encadrants': 'Volunteers and coaches', 'Accueillant et inclusif': 'Welcoming and inclusive',
            'Section locale affiliée à Olympiques Spéciaux Québec, offrant des programmes sportifs adaptés dans la région de l’Outaouais.': 'A local chapter affiliated with Special Olympics Quebec, offering adapted sports programs in the Outaouais region.', 'Contactez-nous': 'Contact us', 'Liens rapides': 'Quick links', 'Tous droits réservés.': 'All rights reserved.',
            'Région de l’Outaouais': 'Outaouais Region', 'Des athlètes en action': 'Athletes in action', 'Rencontrez nos athlètes': 'Meet our athletes', 'Conseil d’administration': 'Board of Directors', 'Merci à notre communauté': 'Thank you to our community'
        },
        'en': {}
    };
    Object.keys(translations.fr).forEach((french) => { translations.en[translations.fr[french]] = french; });

    const languagePage = document.body.dataset.pageLanguage;
    const languageToggles = document.querySelectorAll('[data-language-toggle]');
    if (languagePage && languageToggles.length) {
        let currentLanguage = 'fr';
        document.querySelectorAll('body *').forEach((element) => {
            if (element.children.length === 0 && translations.fr[element.textContent.trim()]) {
                element.dataset.translate = element.textContent.trim();
            }
        });
        const translatePage = () => {
            document.documentElement.lang = currentLanguage;
            document.querySelectorAll('body [data-translate]').forEach((element) => {
                const source = element.dataset.translate;
                element.textContent = currentLanguage === 'fr' ? source : translations.fr[source] || source;
            });
            languageToggles.forEach((toggle) => {
                toggle.textContent = currentLanguage === 'fr' ? 'EN' : 'FR';
                toggle.setAttribute('aria-label', currentLanguage === 'fr' ? 'Switch to English' : 'Passer au français');
            });
        };
        languageToggles.forEach((toggle) => {
            toggle.addEventListener('click', () => {
                currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
                translatePage();
            });
        });
        translatePage();
    }

    document.querySelectorAll('[data-menu-toggle]').forEach((toggle) => {
        const menuId = toggle.getAttribute('aria-controls');
        const menu = document.getElementById(menuId);
        if (!menu) return;

        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });

        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                menu.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    });

    const filterButtons = document.querySelectorAll('[data-filter]');
    const athleteCards = document.querySelectorAll('[data-sport]');
    if (filterButtons.length && athleteCards.length) {
        filterButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                filterButtons.forEach((item) => {
                    const active = item === button;
                    item.classList.toggle('is-active', active);
                    item.setAttribute('aria-pressed', String(active));
                });
                athleteCards.forEach((card) => {
                    card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.sport !== filter);
                });
            });
        });
    }

    document.querySelectorAll('[data-contact-form]').forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const status = form.querySelector('.form-status');
            if (!status) return;
            status.hidden = false;
            status.textContent = 'Merci ! Votre message est prêt à être envoyé. Nous vous contacterons sous peu.';
            form.reset();
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            document.querySelectorAll('.site-mobile-menu.is-open').forEach((menu) => {
                menu.classList.remove('is-open');
                const toggle = document.querySelector(`[aria-controls="${menu.id}"]`);
                if (toggle) toggle.setAttribute('aria-expanded', 'false');
            });
        }
    });
});
