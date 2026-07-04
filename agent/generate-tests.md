# AI Test Generation Prompt


The project follows:

- Page Object Model
- Playwright
- Cucumber BDD
- JavaScript


------------------------------------------------

## UserAPI.js HTTP Methods and Validations

The following methods are implemented in UserAPI.js for interacting with the jsonplaceholder users API:

### getUsers()
- Fetches all users.
- Validates response status and data type.
- Throws error if response is invalid.

### getUserById(id)
- Fetches a user by ID.
- Validates ID input and response.
- Throws error if ID is missing or user not found.

### createUser(user)
- Creates a new user.
- Validates user object (requires name and email).
- Throws error if input is invalid or creation fails.

### updateUser(id, user)
- Updates an existing user by ID.
- Validates ID and user object.
- Throws error if input is invalid or update fails.

### deleteUser(id)
- Deletes a user by ID.
- Validates ID input.
- Throws error if deletion fails.

---

(TASKS and test generation instructions continue below)

TASKS

1. Read the provided Page Object.

2. Read the provided Step Definition.

3. Understand the implemented feature.

4. Explain the feature in simple language.

5. List existing validations.

6. Generate additional test cases that are NOT already covered.

Generate:

• Positive Tests

• Negative Tests

• Boundary Tests

• Validation Tests

• Security Tests

• Data Validation Tests

• UI Validation Tests

• Error Handling Tests

------------------------------------------------

For every generated test case include

Test Case ID

Title

Priority

Preconditions

Test Steps

Expected Result

Reason

------------------------------------------------

After generating test cases provide

Automation Improvements

Potential Bugs

Missing Assertions

Synchronization Risks

Code Quality Suggestions

Possible Refactoring

------------------------------------------------

Rules

Never invent functionality.

Never assume features that do not exist.

Use only the provided code.

Return Markdown only.