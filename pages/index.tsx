import { FormikValues, FormikHelpers } from "formik";

import Head from "next/head";
import Form from "../components/Form";
import TextField from "../components/TextField";
import Select from "../components/Select";
import Button from "../components/Button";
import { userValidationSchema } from "../validation/userValidation";
import { useUserStore } from "../store/user";
// import { fetchJSON } from "../../utils/api";

export default function Home() {
  const { user, updateUser } = useUserStore();

  const onSubmit = async (
    values: FormikValues,
    { setSubmitting, setErrors }: FormikHelpers<FormikValues>,
  ) => {
    // try {
    //   const result = await fetchJSON("login", {
    //     method: "POST",
    //     mode: "no-cors",
    //     body: JSON.stringify(values),
    //   });
    //   console.log(result);
    //   setSubmitting(false);
    //   updateUser({ ...values });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Form
        handleSubmit={onSubmit}
        initalValues={{ ...user }}
        validationSchema={userValidationSchema}
        render={(errors, touched) => (
          <>
            <TextField
              type="name"
              name="name"
              placeholder="Name"
              label="Name"
              isInvalid={touched.name && errors.name}
              errorMessage={errors.name}
            />
            <TextField
              type="email"
              name="email"
              placeholder="Email"
              label="Email"
              isInvalid={touched.email && errors.email}
              errorMessage={errors.email}
            />
            <TextField
              type="password"
              name="password"
              placeholder="Password"
              label="Password"
              isInvalid={touched.password && errors.password}
              errorMessage={errors.password}
            />
            <Select
              options={["Admins", "Users", "Viewers"]}
              name="team"
              placeholder="Team"
              label="Team"
              isInvalid={touched.team && errors.team}
              errorMessage={errors.team}
            />
            <Button>Save</Button>
          </>
        )}
      />
    </div>
  );
}
