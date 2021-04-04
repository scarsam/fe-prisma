import { useRouter } from "next/router";
import Head from "next/head";
import { useState } from "react";
import { FormikValues } from "formik";
import Form from "../components/Form";
import TextField from "../components/TextField";
import ErrorMessage from "../components/ErrorMessage";
import Button from "../components/Button";
import { sessionValidationSchema } from "../validation/sessionValidation";
import { useUserStore } from "../store/user";
import api from "../utils/api";

const initalValues = {
  email: "",
  password: "",
};

const Login: React.VFC = () => {
  const [error, setError] = useState<string | null>(null);
  const { updateUser, updateUserState } = useUserStore();
  const router = useRouter();

  const onSubmit = async (values: FormikValues) => {
    try {
      const result = await api("/login", values);
      updateUserState(true);
      updateUser({ name: "Monkey", team: "Admins", ...result });
      setError(null);
      router.push("/");
    } catch (err) {
      setError(err?.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Form
        handleSubmit={onSubmit}
        initalValues={initalValues}
        validationSchema={sessionValidationSchema}
        render={(errors, touched) => (
          <>
            {error && (
              <div className="bg-red-50 border-red-200 border rounded-sm p-2 pb-1 mb-3">
                <ErrorMessage message={error} />
              </div>
            )}
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
            <Button>Login</Button>
          </>
        )}
      />
    </div>
  );
};

export default Login;
