import React from "react";
import classes from "./signupform.module.scss";
import Button from "@components/common/Button";

const SignupForm = () => {
  return (
    <form className={classes.frm}>
      <h2>Signup</h2>
      <div className="flex-bx-col gap2 py-2rem">
        <div className="frm-grp">
          <label htmlFor="username" className="lbl">
            Username
          </label>
          <input type="text" name="username" className="inp" />
        </div>
        <div className="frm-grp">
          <label htmlFor="email" className="lbl">
            Email
          </label>
          <input type="email" name="email" className="inp" />
        </div>
        <div className="frm-grp">
          <label htmlFor="password" className="lbl">
            Password
          </label>
          <input type="text" name="password" className="inp" />
        </div>
        <div className="mx-2">
          <Button variant="PRIMARY">Signin</Button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
