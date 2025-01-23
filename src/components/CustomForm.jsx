
import { FormProvider, useForm } from "react-hook-form";

const CustomForm = ({ children, submitHandler, defaultValues }) => {
  const formConfig = {};
  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;

  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    submitHandler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default CustomForm;
