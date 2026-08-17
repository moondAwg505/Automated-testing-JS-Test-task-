import { test, expect } from '@playwright/test';
import {PatentPage} from '../pages/patentsPage'
import { HeaderTest } from '../pages/headerTest';

test('Проверка наличия вкладок в разделе "О компании"', async ({ page }) => {
  // Создавём старницу
  const mainPage = new HeaderTest(page)

  // Открываем страницу
  await mainPage.open()

  // Наводимся на меню
  await mainPage.hoverSection()

  // Проверка на наличие вкладок
  await expect(page.getByRole('link', {name: "Компания «ИнфоТеКС»"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Экосистема ИнфоТеКС"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Лицензии"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Академия"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Патенты"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Акционерам"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Реквизиты"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Вакансии"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Контакты"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Информационные материалы"})).toBeVisible();
});

test('Сумма патентов', async ({ page }) => {

  // Создавём старницу
  const mainPage = new HeaderTest(page)
  const patentpage = new PatentPage(page)

  // Открываем страницу
  await mainPage.open()

  // Навигация до раздела матернов
  await mainPage.patentsSectionNavigate()

  // Сохранение числа петентов
  const Inventions = await patentpage.getInventionsPatents()
  const Product = await patentpage.getLicenseForProduct()
  const Trademarks = await patentpage.getLicenseForTrademarks()
  const Samples = await patentpage.getSamplesIndustrialPatents()
  const total = await patentpage.totalPatents()

  // Суммирование
  const sum = Inventions + Product + Trademarks + Samples
  
  // Результат
  expect(sum).toBe(total)
});
