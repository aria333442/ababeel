import React, { useState } from "react";

function useFormSignup(validate) {
  const [values, setvalues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    username: "",
  });

  const [errors, seterrors] = useState({});
  const handleChange = (e) => {
    setvalues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    seterrors(validate(values));
  };
  return { handleChange, values, handleSubmit, errors };
}

export default useFormSignup;
