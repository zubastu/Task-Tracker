import FormGroup from "../FormGroup/FormGroup.tsx";
import AuthInput from "../AuthInput/AuthInput.tsx";
import SubmitButton from "../SubmitButton/SubmitButton.tsx";
import { FC } from "react";

type TRegistrationForm = {
  login: string;
  password: string;
};

const RegistrationForm: FC = () => {
  const onSubmit = (data: TRegistrationForm) => {
    console.log(data);
  };
  return (
    <FormGroup onSubmit={onSubmit}>
      <AuthInput name="login" />
      <AuthInput name="password" type="password" />
      <AuthInput name="replyPassword" type="password" />
      <SubmitButton label="Регистрация" />
    </FormGroup>
  );
};

export default RegistrationForm;
