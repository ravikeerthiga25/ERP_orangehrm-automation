class DeleteEmployeePage {

  constructor(page) {

    this.page = page;

    this.deleteIcon =
      '.oxd-icon-button i.bi-trash';

    this.confirmDeleteButton =
      'button:has-text("Yes, Delete")';

    this.toastMessage =
      '.oxd-toast-content';

  }

  async deleteEmployee() {

    await this.page.click(
      this.deleteIcon
    );

    await this.page.click(
      this.confirmDeleteButton
    );

  }

  async verifyEmployeeDeleted() {

    await this.page.waitForSelector(
      this.toastMessage
    );

  }

}

module.exports = { DeleteEmployeePage };