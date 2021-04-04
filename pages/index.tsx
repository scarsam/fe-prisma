import { FormikValues, FormikHelpers } from "formik";
import { userValidationSchema } from "../validation/userValidation";
import { useState } from "react";
import { useUserStore } from "../store/user";
import api from "../utils/api";
import Button from "../components/Button";
import Form from "../components/Form";
import Head from "next/head";
import Select from "../components/Select";
import ServerError from "../components/ServerError";
import TextField from "../components/TextField";

export default function Home() {
  const [error, setError] = useState<string | null>(null);
  const { user, updateUser } = useUserStore();

  const onSubmit = async (
    values: FormikValues,
    { setSubmitting, setErrors }: FormikHelpers<FormikValues>,
  ) => {
    try {
      const result = await api(`/update/${user?.id || 1}`, "PUT", values);
      updateUser({ ...result });
      setError(null);
    } catch (err) {
      setError(err?.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Prisma | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Form
        handleSubmit={onSubmit}
        initalValues={{ ...user }}
        validationSchema={userValidationSchema}
        render={(errors, touched) => (
          <>
            {error && <ServerError message={error} />}
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
