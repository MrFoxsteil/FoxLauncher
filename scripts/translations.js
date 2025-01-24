const translations = {
    en: {
        goToDownload: "Go to download",
        description: "Welcome to FoxLauncher - your universal gaming launcher that combines everything you need for comfortable gaming!",
        socialTitle: "And here's where else you can find us",
        ourCapabilities: "OUR CAPABILITIES",
        freeGames: "Free games",
        freeGamesDescription: "At FoxLauncher you will find a vast library of free games for every taste. From exciting action games to exciting strategies - everyone will find something for themselves!",
        customization: "Profile and interface customization",
        customizationDescription: "Customize your profile the way you like! You can change avatars, themes, and interface design to create a unique space that reflects your personality.",
        friends: "Chatting with friends",
        friendsDescription: "FoxLauncher offers convenient tools for communicating with friends. Create groups, send messages and share gaming moments to always stay in touch with your gaming buddies.",
        mods: "Adding mods and games",
        modsDescription: "Expand your gaming experience with mods! FoxLauncher supports the integration of user modifications, allowing you to change and improve your favorite games. Easily add new games to your library and enjoy a variety of content.",
        downloadLauncher: "Download Fox Launcher",
        downloadLauncherDescription: "No SMS or registration",
        download: "Download",
        linkCopied: "Link copied to clipboard",
        downloadStarted: "Download started. Thanks for using Fox Launcher!"
    },
    ru: {
        goToDownload: "Перейти к скачиванию",
        description: "Добро пожаловать в FoxLauncher — ваш универсальный игровой лаунчер, который объединяет в себе все необходимое для комфортного гейминга!",
        socialTitle: "А вот ещё где нас можно найти",
        ourCapabilities: "НАШИ ВОЗМОЖНОСТИ",
        freeGames: "Бесплатные игры",
        freeGamesDescription: "В FoxLauncher вы найдете обширную библиотеку бесплатных игр на любой вкус. От захватывающих экшенов до увлекательных стратегий — каждый найдет что-то для себя!",
        customization: "Кастомизация профиля и интерфейса",
        customizationDescription: "Настройте свой профиль так, как вам нравится! Вы можете изменять аватары, темы и оформление интерфейса, чтобы создать уникальное пространство, отражающее вашу индивидуальность.",
        friends: "Общение с друзьями",
        friendsDescription: "FoxLauncher предлагает удобные инструменты для общения с друзьями. Создавайте группы, отправляйте сообщения и делитесь игровыми моментами, чтобы всегда оставаться на связи с вашими товарищами по играм",
        mods: "Добавление модов и игр",
        modsDescription: "Расширяйте свои игровые возможности с помощью модов! FoxLauncher поддерживает интеграцию пользовательских модификаций, что позволяет вам изменять и улучшать свои любимые игры. Легко добавляйте новые игры в свою библиотеку и наслаждайтесь разнообразием контента.",
        downloadLauncher: "Скачать Fox Launcher",
        downloadLauncherDescription: "Без смс и регистрации",
        download: "Скачать",
        linkCopied: "Ссылка скопирована в буфер обмена",
        downloadStarted: "Загрузка началась. Спасибо за использование Fox Launcher!"
    }
};

function changeLanguage(lang) {
    document.getElementById('html').setAttribute('lang', lang);

    document.querySelector('#page-start-button-download span').textContent = translations[lang].goToDownload;
    document.querySelector('#page-start-description').textContent = translations[lang].description;
    document.querySelector('#page-start-social-title').textContent = translations[lang].socialTitle;
    document.querySelector('#zero').textContent = translations[lang].ourCapabilities;
    document.querySelector('#one-title').textContent = translations[lang].freeGames;
    document.querySelector('#one-description').textContent = translations[lang].freeGamesDescription;
    document.querySelector('#two-title').textContent = translations[lang].customization;
    document.querySelector('#two-description').textContent = translations[lang].customizationDescription;
    document.querySelector('#three-title').textContent = translations[lang].friends;
    document.querySelector('#three-description').textContent = translations[lang].friendsDescription;
    document.querySelector('#four-title').textContent = translations[lang].mods;
    document.querySelector('#four-description').textContent = translations[lang].modsDescription;
    document.querySelector('#download-title').textContent = translations[lang].downloadLauncher;
    document.querySelector('#download-description').textContent = translations[lang].downloadLauncherDescription;
    document.querySelector('#button-download').textContent = translations[lang].download;
}