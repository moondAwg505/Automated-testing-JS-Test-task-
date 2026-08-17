import { Page, Locator } from "@playwright/test";

export class HeaderTest {
  private readonly aboutCompanyMenu: Locator;
  private readonly patentsSection: Locator;

  // Создаём шаблон страницы
  constructor(private page: Page) {
    this.aboutCompanyMenu = page.getByRole('link', {name: "О компании"}).first();
    this.patentsSection = page.locator('[href="/about/patents/"]:visible');
  }

  async open() {
    // Ссылка на сайт, где проходят тесты
    await this.page.goto('https://infotecs.ru/');
  }
 
  // Наведение на раздел о компании
  async hoverSection() {
        await this.aboutCompanyMenu.hover();

  }

  // Переход во вкладку патентов
  async patentsSectionNavigate() {
    await this.aboutCompanyMenu.hover();
    await this.patentsSection.click()
  }
}
