import React, { useState } from "react";
import useForm from "../hooks/useForm";

const Forms = () => {
  const {form, onChange} = useForm({
    email: "test@test.com",
    password: "123456",
  });
  return (
    <>
      <h3>Forms</h3>
      <input
        type="text"
        className="form-control"
        placeholder="E-mail"
        value={form.email}
        onChange={(event) => onChange(event.target.value, "email")}
      ></input>
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={form.password}
        onChange={(event) => onChange(event.target.value, "password")}
      ></input>
      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  );
};

export default Forms;
