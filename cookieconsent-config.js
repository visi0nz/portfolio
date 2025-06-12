import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {},
        analytics: {}
    },
    language: {
        default: "de",
        autoDetect: "browser",
        translations: {
            de: {
                consentModal: {
                    title: "Hallo, diese Webseite nutzt Cookies.",
                    description: "",
                    closeIconLabel: "",
                    acceptAllBtn: "Alle Akzeptieren",
                    acceptNecessaryBtn: "Notwendige Akzeptieren",
                    showPreferencesBtn: "Einstellungen verwalten",
                    footer: "<a href=\"datenschutz.html\">Datenschutz</a>"
                },
                preferencesModal: {
                    title: "Präferenzen für die Zustimmung",
                    closeIconLabel: "Modal schließen",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    savePreferencesBtn: "Einstellungen speichern",
                    serviceCounterLabel: "Dienstleistungen",
                    sections: [
                        {
                            title: "Verwendung von Cookies",
                            description: "Ich nutze Cookies, um dir die beste Nutzererfahrung zu bieten und die Funktionalität meiner Webseite zu verbessern. Mit der Nutzung meiner Seite stimmst du dem zu. Details findest du im Bereich Datenschutz."
                        },
                        {
                            title: "Notwendige Cookies <span class=\"pm__badge\">Immer Aktiviert</span>",
                            description: "Diese Cookies sind unerlässlich für den grundlegenden Betrieb der Webseite und ermöglichen Funktionen, die für die Bereitstellung des Dienstes erforderlich sind, wie z.B. die Navigation und den Zugriff auf sichere Bereiche. Ohne diese Cookies kann die Webseite nicht richtig funktionieren.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Weitere Informationen",
                            description: "Bei Fragen zu meiner Cookie-Richtlinie und Ihren Auswahlmöglichkeiten, kontaktieren Sie mich bitte."
                        }
                    ]
                }
            }
        }
    }
});