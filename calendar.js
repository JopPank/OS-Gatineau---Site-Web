function calendarContent() {
    const bilingual = (fr, en) => ({ fr, en });
    return {
        lang: new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'fr',
        category: 'all',
        status: 'all',
        period: 'all',
        copy: {
            fr: {
                title: 'OS Gatineau — Calendrier prévisionnel 2027',
                heading: 'Une année pour participer, ensemble.',
                eyebrow: 'Calendrier prévisionnel · 2027',
                intro: 'Compétitions, rencontres et nouveaux projets : une vue d’ensemble pour préparer la prochaine année.',
                notice: 'Document de planification — aucun événement 2027 n’est confirmé ici. Les activités du bilan 2025–2026 sont reprises comme hypothèses, pas comme annonces officielles. Les mois connus servent de repères provisoires; les dates, lieux, inscriptions et participations restent à valider.',
                nationalNote: 'Attention : les Jeux canadiens ne sont pas présumés annuels. Leur présence en 2027 doit être vérifiée auprès de l’organisateur; Medicine Hat est seulement le lieu de l’édition citée au bilan.',
                back: 'Retour au site', skip: 'Aller au contenu principal',
                category: 'Type d’activité', status: 'État de planification', period: 'Période envisagée',
                all: 'Tout afficher', sport: 'Sports et compétitions', community: 'Vie communautaire', development: 'Projets en développement',
                recurring: 'Récurrence supposée', proposed: 'Nouveau projet proposé', verify: 'Édition 2027 à vérifier',
                count: 'élément(s) affiché(s)', empty: 'Aucun élément ne correspond à ces filtres.',
                noMonth: 'Aucune activité ne correspond aux filtres pour cette période. Cela ne signifie pas qu’aucune activité n’aura lieu.',
                source: 'Origine', recap: 'Hypothèse issue du bilan 2025–2026', outlook: 'Projet issu des perspectives 2026–2027',
                when: 'Repère de planification', where: 'Lieu 2027', unknownVenue: 'À confirmer',
                next: 'À suivre', eventLabel: 'Événement ou projet',
                export: 'Exporter le suivi CSV', print: 'Imprimer',
                maintenance: 'Ce calendrier est une liste de planification, pas un système d’inscription. Les mises à jour sont faites dans le contenu du site. L’export CSV permet un suivi dans un tableur; les modifications du tableur ne sont pas synchronisées avec le site.',
                weekly: 'Les activités hebdomadaires restent présentées sur la page d’accueil. Leurs horaires et interruptions pour 2027 devront être confirmés séparément.',
                weeklyLink: 'Voir les activités hebdomadaires', outlookLink: 'Lire les perspectives 2026–2027',
                reset: 'Réinitialiser les filtres', rights: 'Tous droits réservés.'
            },
            en: {
                title: 'OS Gatineau — 2027 planning calendar',
                heading: 'A year to participate, together.',
                eyebrow: 'Planning calendar · 2027',
                intro: 'Competitions, gatherings, and new projects: an overview to help prepare for the year ahead.',
                notice: 'Planning document — no 2027 event is confirmed here. Activities from the 2025–2026 review are included as assumptions, not official announcements. Known months are provisional reference points; dates, venues, registration, and participation still need validation.',
                nationalNote: 'Please note: the Canadian Games are not assumed to be annual. A 2027 edition must be checked with the organizer; Medicine Hat is only the location of the edition mentioned in the review.',
                back: 'Back to the website', skip: 'Skip to main content',
                category: 'Activity type', status: 'Planning status', period: 'Proposed period',
                all: 'Show all', sport: 'Sports and competitions', community: 'Community life', development: 'Projects in development',
                recurring: 'Assumed recurrence', proposed: 'New proposed project', verify: '2027 edition to verify',
                count: 'item(s) displayed', empty: 'No items match these filters.',
                noMonth: 'No activity matches the filters for this period. This does not mean there will be no activities.',
                source: 'Source', recap: 'Assumption based on the 2025–2026 review', outlook: 'Project from the 2026–2027 outlook',
                when: 'Planning reference', where: '2027 venue', unknownVenue: 'To be confirmed',
                next: 'Next action', eventLabel: 'Event or project',
                export: 'Export tracking CSV', print: 'Print',
                maintenance: 'This is a planning list, not a registration system. Updates are made in the website content. The CSV export supports spreadsheet tracking; spreadsheet changes do not sync back to the website.',
                weekly: 'Weekly activities remain listed on the homepage. Their 2027 schedules and breaks will need separate confirmation.',
                weeklyLink: 'See weekly activities', outlookLink: 'Read the 2026–2027 outlook',
                reset: 'Reset filters', rights: 'All rights reserved.'
            }
        },
        periods: [
            { id: '01', label: bilingual('Janvier', 'January') },
            { id: '02', label: bilingual('Février', 'February') },
            { id: '03', label: bilingual('Mars', 'March') },
            { id: '04', label: bilingual('Avril', 'April') },
            { id: '05', label: bilingual('Mai', 'May') },
            { id: '06', label: bilingual('Juin', 'June') },
            { id: '07', label: bilingual('Juillet', 'July') },
            { id: '08', label: bilingual('Août', 'August') },
            { id: '09', label: bilingual('Septembre', 'September') },
            { id: '10', label: bilingual('Octobre', 'October') },
            { id: '11', label: bilingual('Novembre', 'November') },
            { id: '12', label: bilingual('Décembre', 'December') },
            { id: 'winter', label: bilingual('Hiver · mois à définir', 'Winter · month to be determined') },
            { id: 'summer', label: bilingual('Saison estivale · mois à définir', 'Summer season · month to be determined') },
            { id: 'undated', label: bilingual('Période à définir', 'Period to be determined') }
        ],
        events: [
            {
                id: 'fitness', period: '01', category: 'development', status: 'proposed',
                title: bilingual('Programme d’exercices individualisé', 'Individualized exercise program'),
                timing: bilingual('Janvier 2027 · objectif envisagé', 'January 2027 · tentative goal'),
                text: bilingual('Préparation physique adaptée avec l’appui envisagé d’Anik Laflamme et de Mathieu Michaud. Il s’agit d’exercices, pas de suivis de santé.', 'Adapted physical preparation with proposed support from Anik Laflamme and Mathieu Michaud. This is exercise programming, not health follow-ups.'),
                next: bilingual('Préciser les besoins, l’encadrement et la faisabilité du démarrage en janvier.', 'Define needs, professional support, and the feasibility of a January start.')
            },
            {
                id: 'alpine', period: '03', category: 'sport', status: 'recurring',
                title: bilingual('Championnat provincial de ski alpin', 'Provincial alpine skiing championship'),
                timing: bilingual('Début mars · repère tiré de 2026', 'Early March · reference from 2026'),
                text: bilingual('Reconduction envisagée de la participation au provincial. Gatineau a accueilli l’édition citée au bilan sous la direction de Marc; l’accueil en 2027 n’est pas confirmé.', 'Participation in another provincial championship is anticipated. Gatineau hosted the edition in the review under Marc’s leadership; hosting in 2027 is not confirmed.'),
                next: bilingual('Vérifier l’édition 2027, le lieu, les critères de participation et les besoins bénévoles.', 'Check the 2027 edition, venue, participation criteria, and volunteer needs.')
            },
            {
                id: 'autism', period: '04', category: 'community', status: 'recurring',
                title: bilingual('Grand Rendez-vous de l’autisme', 'Grand Rendez-vous de l’autisme'),
                timing: bilingual('Avril · repère tiré de 2026', 'April · reference from 2026'),
                text: bilingual('Envisager une nouvelle présence pour rencontrer les familles et explorer des collaborations. L’édition du bilan avait lieu à Philemon Wright avec la Western Quebec School Board.', 'Consider attending again to meet families and explore collaborations. The edition in the review took place at Philemon Wright with the Western Quebec School Board.'),
                next: bilingual('Contacter l’organisateur pour confirmer l’événement, le lieu et la représentation de la section.', 'Contact the organizer to confirm the event, venue, and section representation.')
            },
            {
                id: 'athletics', period: '06', category: 'sport', status: 'recurring',
                title: bilingual('Championnat provincial d’athlétisme', 'Provincial track and field championship'),
                timing: bilingual('Début juin · repère tiré de 2026', 'Early June · reference from 2026'),
                text: bilingual('Prévoir une possible participation des athlètes au provincial. Montréal est le lieu de l’édition citée au bilan, pas un lieu confirmé pour 2027.', 'Plan for possible athlete participation at provincials. Montréal is the venue from the review, not a confirmed 2027 location.'),
                next: bilingual('Confirmer le calendrier provincial, les inscriptions, l’accompagnement et les déplacements.', 'Confirm the provincial schedule, registration, support, and travel.')
            },
            {
                id: 'soccer', period: '09', category: 'sport', status: 'proposed',
                title: bilingual('Objectif : championnat provincial de soccer', 'Goal: provincial soccer championship'),
                timing: bilingual('Fin septembre 2027 · à confirmer', 'Late September 2027 · to be confirmed'),
                text: bilingual('Développer une équipe compétitive en s’appuyant sur la collaboration avec le Club de soccer des Collines. La participation dépendra de la préparation et du calendrier officiel.', 'Develop a competitive team with support from the collaboration with Club de soccer des Collines. Participation will depend on preparation and the official schedule.'),
                next: bilingual('Confirmer les modalités du championnat et préparer l’équipe, l’encadrement et le transport.', 'Confirm championship arrangements and prepare the team, support, and transportation.')
            },
            {
                id: 'polar', period: 'winter', category: 'community', status: 'recurring',
                title: bilingual('Défi Ours polaire', 'Polar Bear Challenge'),
                timing: bilingual('Hiver envisagé · période à valider', 'Winter anticipated · period to validate'),
                text: bilingual('Envisager une nouvelle édition après la deuxième édition décrite au bilan. La période hivernale est une hypothèse de planification.', 'Consider another edition following the second edition described in the review. Winter timing is a planning assumption.'),
                next: bilingual('Vérifier la reconduction, la date, le lieu et les modalités de participation avec l’organisateur.', 'Check recurrence, date, venue, and participation arrangements with the organizer.')
            },
            {
                id: 'snow', period: 'winter', category: 'sport', status: 'recurring',
                title: bilingual('Provinciaux de raquette et de ski de fond', 'Provincial snowshoeing and cross-country skiing'),
                timing: bilingual('Saison hivernale · mois à confirmer', 'Winter season · month to be confirmed'),
                text: bilingual('Prévoir ces deux disciplines dans la préparation hivernale. Québec était le lieu mentionné au bilan; les deux compétitions pourraient avoir des calendriers distincts.', 'Include both sports in winter planning. Québec City was the location in the review; the two competitions may have separate schedules.'),
                next: bilingual('Obtenir les dates et lieux de chaque discipline, puis préciser les inscriptions et déplacements.', 'Obtain each sport’s dates and venues, then define registration and travel.')
            },
            {
                id: 'barbecue', period: 'summer', category: 'community', status: 'recurring',
                title: bilingual('Barbecue de début de saison estivale', 'Summer season-opening barbecue'),
                timing: bilingual('Début de saison estivale · date à fixer', 'Start of summer season · date to be set'),
                text: bilingual('Renouveler le rassemblement convivial en tenant compte des besoins alimentaires. Le soutien reçu lors de l’édition précédente ne vaut pas engagement pour 2027.', 'Repeat the friendly gathering while accommodating dietary needs. Support received for the previous edition is not a commitment for 2027.'),
                next: bilingual('Choisir la date et le lieu, confirmer les contributions, les bénévoles et les besoins alimentaires.', 'Choose a date and venue; confirm contributions, volunteers, and dietary needs.')
            },
            {
                id: 'golf', period: 'summer', category: 'sport', status: 'recurring',
                title: bilingual('Activités de golf', 'Golf activities'),
                timing: bilingual('Saison estivale envisagée · séances à définir', 'Summer season anticipated · sessions to be defined'),
                text: bilingual('Préparer une nouvelle saison de golf avec des possibilités intérieures et sur le terrain selon les conditions. Aucune organisation de championnat local n’est annoncée.', 'Prepare another golf season with possible indoor and on-course sessions depending on conditions. No local championship hosting is being announced.'),
                next: bilingual('Confirmer les partenaires, les installations et le calendrier des séances.', 'Confirm partners, facilities, and the session schedule.')
            },
            {
                id: 'unified', period: 'undated', category: 'sport', status: 'recurring',
                title: bilingual('Grand Défi Unifié', 'Grand Défi Unifié'),
                timing: bilingual('2027 · période inconnue', '2027 · period unknown'),
                text: bilingual('Envisager une nouvelle participation au rassemblement unifié. McGill à Montréal et le transport offert figurent au bilan précédent, sans confirmation pour 2027.', 'Consider participating again in the unified event. McGill in Montréal and donated transportation appear in the previous review, without confirmation for 2027.'),
                next: bilingual('Vérifier la tenue de l’événement, le lieu, les inscriptions et les options de transport.', 'Check whether the event is taking place, its venue, registration, and transportation options.')
            },
            {
                id: 'swimming', period: 'undated', category: 'sport', status: 'recurring',
                title: bilingual('Championnat provincial de natation', 'Provincial swimming championship'),
                timing: bilingual('2027 · période inconnue', '2027 · period unknown'),
                text: bilingual('Prévoir une possible participation de la section après les deux représentantes de l’édition précédente. Aucun effectif 2027 n’est fixé.', 'Plan for possible section participation following the two representatives at the previous edition. No 2027 team size is set.'),
                next: bilingual('Confirmer les dates, le lieu, l’admissibilité et l’accompagnement des athlètes.', 'Confirm dates, venue, eligibility, and athlete support.')
            },
            {
                id: 'school', period: 'undated', category: 'community', status: 'recurring',
                title: bilingual('Jeux scolaires', 'School Games'),
                timing: bilingual('2027 · période inconnue', '2027 · period unknown'),
                text: bilingual('Envisager un nouveau soutien aux Jeux scolaires de la région. La polyvalente Le Carrefour est le lieu de l’édition précédente uniquement.', 'Consider supporting the region’s School Games again. Polyvalente Le Carrefour is only the previous edition’s venue.'),
                next: bilingual('Valider la reconduction avec OSQ et les écoles, puis préciser l’aide attendue de la section.', 'Validate recurrence with OSQ and the schools, then define the support expected from the section.')
            },
            {
                id: 'canadian', period: 'undated', category: 'sport', status: 'verify',
                title: bilingual('Jeux canadiens d’été — vérification du cycle', 'Canadian Summer Games — check the event cycle'),
                timing: bilingual('Aucune édition 2027 présumée', 'No 2027 edition assumed'),
                text: bilingual('Conserver un point de suivi pour vérifier la prochaine édition et les possibilités de sélection. Ne pas reconduire automatiquement les Jeux ni le lieu de Medicine Hat.', 'Keep a follow-up item to check the next edition and selection opportunities. Do not automatically repeat the Games or the Medicine Hat venue.'),
                next: bilingual('Vérifier le cycle officiel auprès d’OSQ avant d’ajouter une date ou une participation.', 'Check the official cycle with OSQ before adding a date or participation.')
            },
            {
                id: 'social-one', period: 'undated', category: 'community', status: 'proposed',
                title: bilingual('Nouveau rassemblement convivial — 1', 'New community gathering — 1'),
                timing: bilingual('Pendant l’année · date à choisir', 'During the year · date to be chosen'),
                text: bilingual('Première activité supplémentaire proposée pour permettre aux athlètes et aux familles de se retrouver au-delà du sport.', 'First proposed additional activity for athletes and families to connect beyond sport.'),
                next: bilingual('Définir la formule, le budget, le lieu et les disponibilités des familles.', 'Define the format, budget, venue, and families’ availability.')
            },
            {
                id: 'social-two', period: 'undated', category: 'community', status: 'proposed',
                title: bilingual('Nouveau rassemblement convivial — 2 (facultatif)', 'New community gathering — 2 (optional)'),
                timing: bilingual('Pendant l’année · selon les possibilités', 'During the year · subject to feasibility'),
                text: bilingual('Deuxième possibilité de rencontre dans l’objectif d’ajouter une ou deux activités. Ce n’est pas un engagement à tenir deux événements.', 'A second possible gathering within the goal of adding one or two activities. This is not a commitment to hold two events.'),
                next: bilingual('Évaluer l’intérêt et les ressources avant de retenir cette deuxième activité.', 'Assess interest and resources before committing to this second activity.')
            },
            {
                id: 'skating', period: 'undated', category: 'development', status: 'proposed',
                title: bilingual('Projet de patinage artistique adapté', 'Adapted figure skating project'),
                timing: bilingual('2027 · lancement non confirmé', '2027 · launch unconfirmed'),
                text: bilingual('Poursuivre les discussions avec le Club de patinage artistique de Hull, avec le suivi de Jonathan et Marie-Josée.', 'Continue discussions with Club de patinage artistique de Hull, with follow-up from Jonathan and Marie-Josée.'),
                next: bilingual('Préciser l’accueil, l’encadrement et les conditions avant toute annonce d’inscription.', 'Define participation, support, and conditions before any registration announcement.')
            },
            {
                id: 'basketball', period: 'undated', category: 'development', status: 'proposed',
                title: bilingual('Projet de basketball', 'Basketball project'),
                timing: bilingual('2027 · lancement non confirmé', '2027 · launch unconfirmed'),
                text: bilingual('Explorer un nouveau volet avec Mathieu Michaud et des partenaires à mobiliser. Aucun horaire ni lieu n’est arrêté.', 'Explore a new program with Mathieu Michaud and potential partners. No schedule or venue has been set.'),
                next: bilingual('Définir les partenaires, les installations, le format et la faisabilité.', 'Define partners, facilities, format, and feasibility.')
            }
        ],
        get filteredEvents() {
            return this.events.filter(event =>
                (this.category === 'all' || event.category === this.category) &&
                (this.status === 'all' || event.status === this.status) &&
                (this.period === 'all' || event.period === this.period));
        },
        get groups() {
            return this.periods
                .filter(period => this.period === 'all' || period.id === this.period)
                .map(period => ({ ...period, events: this.filteredEvents.filter(event => event.period === period.id) }))
                .filter(group => group.events.length || this.period !== 'all');
        },
        reset() {
            this.category = 'all';
            this.status = 'all';
            this.period = 'all';
        },
        exportCsv() {
            const text = this.copy[this.lang];
            const rows = [[text.period, 'ID', text.category, text.status, text.eventLabel, text.when, text.where, text.source, text.next]];
            this.periods.forEach(period => {
                this.filteredEvents.filter(event => event.period === period.id).forEach(event => {
                    rows.push([period.label[this.lang], event.id, text[event.category], text[event.status],
                        event.title[this.lang], event.timing[this.lang], text.unknownVenue,
                        text[event.status === 'proposed' ? 'outlook' : 'recap'], event.next[this.lang]]);
                });
            });
            const csv = '\uFEFF' + rows.map(row => row.map(value => '"' + value.replace(/"/g, '""') + '"').join(',')).join('\r\n');
            const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
            const link = document.createElement('a');
            link.href = url;
            link.download = 'OS-Gatineau-2027-' + this.lang + '.csv';
            document.body.appendChild(link);
            link.click();
            link.remove();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
        }
    };
}
