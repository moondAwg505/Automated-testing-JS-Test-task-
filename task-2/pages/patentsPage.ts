import { Page, Locator } from "@playwright/test";

export class PatentPage {
  constructor(private page: Page) {}

  
  private parseCount(text: string): number {
    // Убираем пробелы и тому подобные символы
    return Number(text.replace(/[^\d.-]/g, ""));
  }

  private async readByLabel(label: string): Promise<number> {
    const block = this.page.locator(".b-chip").filter({ hasText: label });
    const numbers = await block.locator(".b-chip__count").innerText();
    return this.parseCount(numbers);
  }

  // Находим элементы на странице
  async getInventionsPatents() {
    return this.readByLabel("Патенты РФ на изобретения");
  }
  async getLicenseForProduct() {
    return this.readByLabel("Свидетельства на продукты");
  }
  async getLicenseForTrademarks() {
    return this.readByLabel("Свидетельства на товарные знаки");
  }
  async getSamplesIndustrialPatents() {
    return this.readByLabel("Патенты РФ на промышленные образцы");
  }
  async totalPatents() {
    const totalElement = this.page.locator(".b-files-page__title-count");

    const numbers = await totalElement.innerText();
    return this.parseCount(numbers);
  }
}
