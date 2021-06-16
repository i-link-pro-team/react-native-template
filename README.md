# :space_invader: React Native Template

> React Native template for a quick start. Based on [react-native-template-typescript](https://github.com/react-native-community/react-native-template-typescript)
## :star: Features

- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli)
- Consistent with the [React Native TypeScript]((https://github.com/react-native-community/react-native-template-typescript)) template
- With additional dependencies

## :gear: Additional dependencies

- pre-commit-hooks by [husky v6](https://typicode.github.io/husky/)
- Path aliases
- [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)
- Atomic Design file structure
- Code generation by [hygen](https://www.hygen.io/)
- [SemVer](https://semver.org/) with [standart-version](https://github.com/conventional-changelog/standard-version) and [react-native-version](https://github.com/stovmascript/react-native-version)

## :arrow_forward: Usage

```sh
npx react-native init MyApp --template i-link-pro-team/react-native-template
```

### Note on the legacy CLI
There seems to be quite some confusion about the legacy CLI. This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`), for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

Further information can be found here: https://github.com/react-native-community/cli#about

## :bookmark: License

This project is [MIT](LICENSE) licensed.
