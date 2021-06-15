# React-Native application

## Branches

- master: Only for production ready versions
- dev: Current dev version

## Environment

- Node: 12.19.0
- React-Native: 0.64.2
- React: 17.0.1
- xCode: 12.2
- Gradle: 6.5

### Android:

| Suffix | Sdk Version | Android Version
:---: | :---: | :---:
| min | 21 | 6.0
| compile | 29 | 10
| target | 29 | 10

### iOS:

- TargetVersion: iOS 10

## Installation

```bash
# if your default nodeJS version is not v12.19.0
$ nvm use

# install all dependencies
$ yarn
```

### Android:
- No additional actions

### iOS:
```bash
$ npx pod-install
```
## Run project
```bash
# start metro bundler
$ yarn start

# build android (dev) version
$ yarn android

# build iOS (dev) verion
$ yarn ios
```

## Code generation (with [Hygen](https://www.hygen.io/))

### Component generation

```bash
# To start generation enter command
$ yarn new:component

# After command execution cli ask question about what atomic design level this component be:

$ ? Which Atomic design level? …
  atoms
  molecules
  organisms
  templates
  pages

# After atomic type selection cli ask you about component name and directory (optional)
✔ Which Atomic design level? · atoms
✔ What is the component name? · TestComponent
? Where is the directory(Optional) ›

# Finally, then all points completed, cli write result of generation:

Loaded templates: .hygen
       added: src/components/atoms/TestComponent/index.tsx
       added: src/components/atoms/TestComponent/README.md
       added: src/components/atoms/TestComponent/styles.ts
```

#### Result of generation

```tsx
//index.tsx
import React from 'react';
import { styles } from './styles';

interface TestComponentProps {

};

export const TestComponent: React.FC<TestComponentProps> = ({}) => {
  return ();
};
```

```ts
//styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

});
```

```md
[fileName]: README.md
# TestComponent
```

### Hooks generation

```bash
# To start generation enter command
$ yarn new:hook

# After command execution cli ask questions about name and directory

✔ What is the hook name? · useTest
✔ Where is the directory (skip for generate hook to services/hooks or enter atomicFolder/componentName ) · atoms/TestComponent

# Finally, then all points completed, cli write result of generation:

Loaded templates: .hygen
       added: src/components/atoms/TestComponent/useTest/index.ts
       added: src/components/atoms/TestComponent/useTest/README.md
```

#### Result of generation

```tsx
// TestComponent/useTest/index.tsx
export function useTest() {
  return {};
}
```

```md
[fileName]: TestComponent/useTest/README.md
# useTest
```

## Components alias

Don't import components by relative path, use alias instead!

### Import example (wrong):

```tsx
    import { ShadowText } from '../components/atoms/ShadowText';
```

### Import example (right):

```tsx
    import { ShadowText } from '@atoms/ShadowText';
```

### Alias list:

- @atoms: "./src/components/atoms"
- @molecules: "./src/components/molecules"
- @organisms: "./src/components/organisms"
- @templates: "./src/components/templates"
- @pages: "./src/components/pages"
- @assets: "./src/assets"
- @hooks: "./src/hooks'

