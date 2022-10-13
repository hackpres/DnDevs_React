import { Formik, Field, Form } from "formik";
import signupSchema from "../utils/signupSchema";

function Login2() {
  function onSubmit(values) {
    alert(JSON.stringify(values, null, 2));
  }
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={signupSchema}
      onSubmit={onSubmit}
    >
      {(values, errors, touched) => (
        <Form className="baseForm">
          <Field
            type="text"
            id="username"
            className="username formField"
            name="username"
          />
          {errors.username && touched.username
            ? console.log(errors.username)
            : null}
          <Field
            type="password"
            id="password"
            className="password formField"
            name="password"
          />
          {errors.password && touched.password
            ? console.log(errors.password)
            : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
