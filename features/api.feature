Feature: API Testing

  Scenario: Get users API

    Given user sends GET API request
    Then API response status should be 200