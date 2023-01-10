import { TextField } from "@mui/material";

const ModernTextField = ({ label, name, form, ...rest }) => {
  const hasError = Boolean(form.errors[name]) && form.touched[name];

  return (
    <TextField
      label={label}
      name={name}
      value={form.values[name]}
      onChange={form.handleChange}
      error={hasError}
      helperText={hasError ? form.errors[name] : null}
      {...rest}
    />
  );
};

export default ModernTextField;
