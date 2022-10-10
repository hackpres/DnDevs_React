import * as Yup from "yup";

const signupSchema = Yup.object().shape({
  username: Yup.string()
    .required("This field is required")
    .min(3, "Username must be at least 3 characters long.")
    .trim(),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^(?=.*\d{1})(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[!@#$%^&*{|}?~_=+.-]{1})(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/,
      "Password must contain 8-32 characters, at least one uppercase, one lowercase, one number and one special character."
    ),
});

export default signupSchema;
