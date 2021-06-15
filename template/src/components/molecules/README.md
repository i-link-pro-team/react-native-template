# Molecules

A molecule is a group of atoms:

<sub>**molecules/Field**</sub>

```tsx
const Field = ({ label, ...inputProps }) => (
  <View>
    {label}
    <Input {...inputProps} />
  </View>
);
```