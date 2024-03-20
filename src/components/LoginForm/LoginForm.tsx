import FormGroup from "../FormGroup/FormGroup.tsx";
import AuthInput from "../AuthInput/AuthInput.tsx";
import SubmitButton from "../SubmitButton/SubmitButton.tsx";
const LoginForm = () => {
  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <FormGroup onSubmit={onSubmit}>
      <AuthInput name="login" />
      <AuthInput name="password" type="password" />
      <SubmitButton label="Войти" />
    </FormGroup>
  );
};

export default LoginForm;
