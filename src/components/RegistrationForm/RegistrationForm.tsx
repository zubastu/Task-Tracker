import { FormProvider, useForm } from "react-hook-form";

const RegistrationForm = () => {
  const formMethods = useForm<TSearchForm>();
  const { formState, register, handleSubmit, setValue } = formMethods;

  const onSubmit = (data) => {};
  return (
    <FormProvider {...formMethods}>
      <form
        noValidate={true}
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <button
          className={styles.button}
          disabled={!formState.isValid}
          type="submit"
        ></button>
        <input
          className={styles.input}
          type="text"
          {...register("")}
          required={true}
          autoFocus={true}
        />
      </form>
    </FormProvider>
  );
};

export default RegistrationForm;
