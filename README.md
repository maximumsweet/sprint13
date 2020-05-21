# Проектная работа 13 
## Актуальная версия v1.0.4
Данная проектная работа предназначена для оттачивания навыков с работой Node.js, API, Express.js, MongoDB.
Для установки проекта требуется:

1. Клонировать репозиторий командой *git clone https://github.com/maximumsweet/sprint13.git*;
2. Установить все npm зависимости с помощью команды *npm i*;
3. Запустить сборку проекта командой *npm run start* (запуск на 3000 порту локального сервера, hot reload отсутствует) или *npm run dev* (запуск на 3000 порту на локальном сервере, сайт откроется в браузере автоматически и будет обновляться при пересохранении файлов).
----

**Возвращение всех пользователей из базы**

  `GET /users`
----

**Возвращение конкретного пользователя**

  `GET /users/:userId`
----

**Создание нового пользователя**

  `POST /users`
----

**Возвращение всех карточек всех пользователей**

  `GET /cards`
----

**Создание карточки**

  `POST /cards`
----

**Удаление карточки по идентификатору**

  `DELETE /cards/:cardId`
----
