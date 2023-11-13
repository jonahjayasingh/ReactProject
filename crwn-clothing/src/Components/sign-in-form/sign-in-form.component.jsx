import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";
import { useState } from "react";
import "./sign-in-form.styles.scss";
import {
  signInUsingEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const restFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInUsingEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
    restFormFields();
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sign in with gmail and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          value={email}
          required
          onChange={handleChange}
          name="email"
        />

        <FormInput
          type="password"
          label="password"
          value={password}
          required
          onChange={handleChange}
          name="password"
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button onClick={logGoogleUser} buttonType="google">
            {" "}
            Google Signin
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
