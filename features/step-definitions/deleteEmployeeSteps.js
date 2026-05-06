const { When, Then } =
  require("@cucumber/cucumber");

const { DeleteEmployeePage } =
  require("../../pages/DeleteEmployeePage");

let deleteEmployeePage;

When("user deletes an employee", async function () {

  deleteEmployeePage =
    new DeleteEmployeePage(this.page);

  await deleteEmployeePage.deleteEmployee();

});

Then("employee should be removed", async function () {

  await deleteEmployeePage.verifyEmployeeDeleted();

});