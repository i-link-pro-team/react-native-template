# Templates

A template is a layout to be used on pages, see [why templates are good practice](https://github.com/diegohaz/arc/issues/20#issuecomment-265934388):

<sub>**templates/PageTemplate**</sub>

```tsx
const PageTemplate = ({ header, children }) => (
  <SafeAreaView>
    {header && <View>{header}</View>}
    {children}
  </SafeAreaView>
);
```
