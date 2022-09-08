import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login.svg";
import classes from "../../styles/Auth.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        {/* Illustration Component */}
        <Illustration image={loginImage} alt="Login" />

        {/* Form Component */}
        <Form className={` ${classes.login}`}>
          {/* TextInput Component */}
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />

          {/* Button Component */}
          <Button>
            <span>Submit now</span>
          </Button>

          <div class="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
