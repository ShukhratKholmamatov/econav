// Initialize Icons
        lucide.createIcons();

        // Translation Data
        const translations = {
            uz: {
                heroTag: "BMB Holding Экотизими",
                heroTitle: "Келажак – сифатли <span class='text-teal-brand'>уруғдан</span> бошланади.",
                heroDesc: "Инновацион ёндашув ва илм-фанга асосланган юқори унувчан уруғлар етиштириш маркази.",
                btnCatalog: "Уруғлар каталоги",
                videoTitle: "Видеолавҳа билан танишинг",
                feat1T: "Илм-фан ва Инновация",
                feat1D: "Селекционер олимлар ва замонавий технологиялар уйғунлиги.",
                feat2T: "Сифат Назорати",
                feat2D: "Уруғларни калибрлаш ва дорилаш бўйича замонавий ечимлар.",
                feat3T: "Барқарор Ҳосил",
                feat3D: "Маҳаллий тупроқ ва иқлим шароитига мос чидамли уруғлар.",
                contactTitle: "Биз билан боғланинг"
            },
            ru: {
                heroTag: "Экосистема BMB Holding",
                heroTitle: "Будущее начинается с качественных <span class='text-teal-brand'>семян</span>.",
                heroDesc: "Центр производства высокоурожайных семян на основе инновационного подхода и науки.",
                btnCatalog: "Каталог семян",
                videoTitle: "Ознакомьтесь с видео",
                feat1T: "Наука и Инновации",
                feat1D: "Гармония селекционеров и современных технологий.",
                feat2T: "Контроль Качества",
                feat2D: "Современные решения по калибровке и протравливанию семян.",
                feat3T: "Стабильный Урожай",
                feat3D: "Семена, адаптированные к местной почве и климату.",
                contactTitle: "Свяжитесь с нами"
            },
            en: {
                heroTag: "BMB Holding Ecosystem",
                heroTitle: "The Future Begins with Quality <span class='text-teal-brand'>Seeds</span>.",
                heroDesc: "A center for producing high-yield seeds based on innovation and scientific research.",
                btnCatalog: "Seed Catalog",
                videoTitle: "Watch Our Video",
                feat1T: "Science & Innovation",
                feat1D: "A blend of expert breeders and modern technologies.",
                feat2T: "Quality Control",
                feat2D: "Modern solutions for seed calibration and treatment.",
                feat3T: "Sustainable Yield",
                feat3D: "Hardy seeds adapted to local soil and climatic conditions.",
                contactTitle: "Contact Us"
            }
        };

        function changeLanguage(lang) {
            const t = translations[lang];
            document.getElementById('hero-tag').innerText = t.heroTag;
            document.getElementById('hero-title').innerHTML = t.heroTitle;
            document.getElementById('hero-desc').innerText = t.heroDesc;
            document.getElementById('btn-catalog').innerText = t.btnCatalog;
            document.getElementById('video-title').innerText = t.videoTitle;
            document.getElementById('feat-1-t').innerText = t.feat1T;
            document.getElementById('feat-1-d').innerText = t.feat1D;
            document.getElementById('feat-2-t').innerText = t.feat2T;
            document.getElementById('feat-2-d').innerText = t.feat2D;
            document.getElementById('feat-3-t').innerText = t.feat3T;
            document.getElementById('feat-3-d').innerText = t.feat3D;
            document.getElementById('contact-title').innerText = t.contactTitle;
        }