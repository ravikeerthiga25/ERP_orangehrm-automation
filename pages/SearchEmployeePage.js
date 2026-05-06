class SearchEmployeePage {

  constructor(page) {

    this.page = page;

    // Locators

    this.employeeSearchBox =
      'input[placeholder="Type for hints..."]';

    this.searchButton =
      'button:has-text("Search")';

    this.resultTable =
      '.oxd-table-body';

    this.resultRows =
      '.oxd-table-card';

  }

  // Search employee

  async searchEmployee(name) {

    await this.page.fill(
      this.employeeSearchBox,
      name
    );

    await this.page.click(
      this.searchButton
    );

  }

  // Verify results displayed

  async verifyEmployeeResults() {

    await this.page.waitForSelector(
      this.resultTable
    );

  }

  // Get results count

  async getResultsCount() {

    return await this.page.locator(
      this.resultRows
    ).count();

  }

}

module.exports = { SearchEmployeePage };