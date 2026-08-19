# Задание №2: Тестирование сайта infotecs.ru с использование Playwright и Node.JS/Bun

## Требования по задаче
* Node.js или Bun
* Playwright
* JavaScript или TypeScript

## Стек проекта
* TypeScript
* Playwright
* Node.js
* Git Bash

## Установка

```bash
npm install
npx playwright install
```

## Запуск проекта

Запуск тестов в Full HD (1920x1080)

```bash
npx playwright test
```

Запуск тестов с отображением браузеров

```bash
npx playwright test --headed
```

Запуск сформированного HTML-отчёта

```bash
npx playwright show-report
```

Запуск теста именно в браузере Chromium:
```bash
npx playwright test --project=chromium
```