# Contributing

**The issue tracker is only for bug reports and enhancement suggestions. If you have a question, please ask it in the [Discord server](https://favware.tech/redirect/server) instead of opening an issue – you will get redirected there anyway.**

If you wish to contribute to the Favware project's codebase or documentation, feel free to fork the repository and submit a
pull request. We use ESLint to enforce a consistent coding style, any PR that does not follow the linting rules will not be
merged until the formatting is resolved.

## Setup
To get ready to work on the codebase, please do the following:

1. Fork & clone the repository, and make sure you're on the **master** branch
2. Run `yarn install`
3. Code your heart out!
4. If you have any substantial code changes make sure these are covered in unit tests
5. Run `yarn lint && yarn test` to run ESLint and ensure all tests pass
6. Run `yarn commit` to start commitizen and create a good commit message
7. Push your changes
8. Submit a pull request