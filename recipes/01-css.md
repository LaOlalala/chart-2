# Как организовать работу с CSS

Сначала нужно создать точку входа — основной файл стилей, в котором мы подключим остальные.

Сборка поддерживает диалекты `less` и `scss`, выбирайте, какой удобнее. Например разместим точку входа в файле `./src/styles/main.scss`.

Пропишем туда базовое содержимое:

    # ./src/styles/main.scss
    html, body {
        font-family: sans-serif;
        font-size: 40px;
    }

Дальше идет не самый очевидный момент. Чтобы сборка узнала об этом файле, его необходимо подключить в общей точке входа в приложение.
Это файл `./src/main.js`. Именно его сканирует сборщик — webpack, чтобы скомпилировать приложение. Подключение происходит так:

    # ./src/main.js
    import "@styles/main.scss";

Сокращение `@styles` указывает на директорию `./src/styles`.

Все стили, подключенные в `./src/main.js` соберутся в один файл — `./dist/css/main.css`.
Чтобы сразу увидеть результат, его нужно подключить в html-документе. Сделаем это в `./src/pages/_layout.njk`:

    <link rel="stylesheet" type="text/css" href="css/main.css">

Далее выполняем сборку:

    npm run dev-server

И убеждаемся, что стили применились:

![Basic styles](images/01-css.png)
