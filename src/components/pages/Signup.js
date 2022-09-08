import React from "react";
import { Link } from "react-router-dom";
import signupImage from "../../assets/images/signup.svg";
import classes from "../../styles/Auth.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        {/* Illustration Component */}
        <Illustration image={signupImage} alt={"Signup"} />

        {/* Form Component */}
        <Form className={` ${classes.signup}`}>
          {/* TextInput Component */}
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          {/* Checkbox Component */}
          <Checkbox
            text="I agree to the Terms &amp; Conditions"
            type="checkbox"
          />

          {/* Button Component */}
          <Button>
            <span>Submit now</span>
          </Button>

          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
