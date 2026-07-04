const { Given, Then } =
  require("@cucumber/cucumber");

const { expect } =
  require("@playwright/test");

const { UserAPI } =
  require("../../api/UserAPI");

let response;

Given(
  "user sends GET API request",
  async function () {

    const userAPI =
      new UserAPI();

    response =
      await userAPI.getUsers();

  }
);

Then(
  "API response status should be 200",
  async function () {
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('email');
  }
);