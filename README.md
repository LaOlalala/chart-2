# machaon/std-frontend

Система сборки стилей, скриптов и страниц для использования в Bitrix-проектах.

Поддерживает React/Vue, LESS/SASS, JavaScript/TypeScript. Сборка страниц на Nunjucks, тестирование через Jest.

Также содержит универсальные классы и функции для решения типовых задач.

Документация в процессе, несколько конкретных рецептов доступны [здесь](https://gitlab.machaon-dev.ru/machaon/std-frontend/tree/master/recipes).

Начиная новый фронтенд-проект на основе этой сборки рекомендуется удалять папку `.git` и инициализировать репозиторий заново,
чтобы не тащить в новый проект лишнюю историю коммитов. Это необходимо делать ДО выполнения npm install, т.к. в противном случае
хуки на пре-коммит будут удалены вместе со старым репозиторием.

## Использование

`npm run build`: Сборка в режиме development (без минификации, с картами исходных кодов).

`npm run watch`: То же, что и `build`, но в режиме отслеживания изменений.

`npm run dev-server`: То же, что и `watch`, но дополнительно запускает веб-сервер.

`npm run network-server`: То же, что и `watch`, но дополнительно запускает веб-сервер в локальной сети.

`npm run release`: Сборка в режиме production (минификация скриптов/стилей).

`npm test`: Прогон тестов.

`npm run lint`: Прогон линтера.

На пре-коммит хуке висят Jest и ESLint - если тесты не проходят или есть нарушение стиля, коммит не будет пропущен.

## Как внести свой вклад

    git clone git@gitlab.machaon-dev.ru:machaon/std-frontend.git
    cd std-frontend

Все изменения делаются в отдельной ветке, по возможности пишутся тесты.
Далее - Merge request в Gitlab. Все тесты должны проходить.
