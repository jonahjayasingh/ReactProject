import SignUpForm from "../../Components/sign-up-form/sign-up-form.components";
import SignInForm from "../../Components/sign-in-form/sign-in-form.component";
import "./Authentication.style.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />

      <SignUpForm />
    </div>
  );
};
export default Authentication;
