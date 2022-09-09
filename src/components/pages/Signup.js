import React from "react";
import signupImage from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignupFrom from "../SignupFrom";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        {/* Illustration Component */}
        <Illustration image={signupImage} alt={"Signup"} />
        {/* SignupFrom Component */}
        <SignupFrom />
      </div>
    </>
  );
};

export default Signup;
