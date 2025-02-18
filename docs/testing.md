# 🧪 Testing

As highlighted in this [tweet](https://twitter.com/rauchg/status/807626710350839808), the efficacy of testing lies in the comprehensive coverage provided by integration and end-to-end (e2e) tests. While unit tests serve a purpose in isolating and validating individual components, the true value and confidence in application functionality stem from robust integration and e2e testing strategies.

## Types of tests:

### Unit Tests

Unit tests are the smallest tests you can write. They test individual parts of your application in isolation. They are useful for testing shared components and functions that are used throughout the entire application. They are also useful for testing complex logic in a single component. They are fast to run and easy to write.


### Integration Tests

Integration testing checks how different parts of your application work together. It's crucial to focus on integration tests for most of your testing, as they provide significant benefits and boost confidence in your application's reliability. While unit tests are helpful for individual parts, passing them doesn't guarantee your app will function correctly if the connections between parts are flawed. Testing various features with integration tests is vital to ensure that your application works smoothly and consistently.

### E2E

End-to-End Testing is a method that evaluates an application as a whole. These tests involve automating the complete application, including both the frontend and backend, to confirm that the entire system functions correctly. End-to-End tests simulate how a user would interact with the application.

## Recommended Tooling:

#### [Vitest](https://vitest.dev)

Vitest is a powerful testing framework with features similar to Jest, but it's more up-to-date and works well with modern tools. It's highly customizable and flexible, making it a popular option for testing JavaScript code.

#### [Testing Library](https://testing-library.com/)

Testing library is a set of libraries and tools that makes testing easier than ever before. Its philosophy is to test your app in a way it is being used by a real world user instead of testing implementation details. For example, don't test what is the current state value in a component, but test what that component renders on the screen for its user. If you refactor your app to use a different state management solution for example, the tests should still be relevant as the actual component output to the user shouldn't change.

#### [Playwright](https://playwright.dev)

Playwright is a tool for running e2e tests in an automated way.
You define all the commands a real world user would execute when using the app and then start the test. It can be started in 2 modes:

- Browser mode - it will open a dedicated browser and run your application from start to finish. You get a nice set of tools to visualize and inspect your application on each step. Since this is a more expensive option, you want to run it only locally when developing the application.
- Headless mode - it will start a headless browser and run your application. Very useful for integrating with CI/CD to run it on every deploy.

