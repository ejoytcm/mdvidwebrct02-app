import React from "react";
import { useState } from "react";
import { fieldValidations, formValidation } from "../../utls/formValidations";

const Signup = () => {
  const ageGroupOptions = [
    { id: "0", label: "18 - 24" },
    { id: "1", label: "25 - 44" },
    { id: "2", label: "45 - 60" },
  ];

  const genderOptions = [
    { id: "0", label: "Male" },
    { id: "1", label: "Female" },
    { id: "2", label: "Other" },
  ];

  const [signupForm, setSignupForm] = useState({
    fullname: {
      name: "Full name",
      value: "",
      valid: false,
      errorMessage: "",
      validations: {
        required: true,
      },
    },
    email: {
      name: "Email",
      value: "",
      valid: false,
      errorMessage: "",
      validations: {
        required: true,
        email: true
      },
    },
    password: {
      name: "Password",
      value: "",
      valid: false,
      errorMessage: "",
      validations: {
        required: true,
        password: true
      }
    },
    ageGroup: {
      name: "Age group",
      value: ageGroupOptions[0].id,
      valid: true,
      errorMessage: "",
      validations: {}
    },
    gender: {
      name: "Gender",
      value: genderOptions[0].id,
      valid: true,
      errorMessage: "",
      validations: {}
    },
    dob: {
      name: "DOB",
      value: "2000-01-01",
      valid: true,
      errorMessage: "",
      validations: {
        birthYear: true
      }
    },
    profilePicture: {
      name: "Profile picture ",
      filename: "",
      file: null,
      valid: true,
      errorMessage: "",
      validations: {
        imageTypes: true
      }
    },
  });
  const [formValid, setFormValid] = useState(false);

  const signupFormHandler = (event) => {
    setSignupForm((prevState) => {
      const fieldName = event.target.name;
      let updatedState = { ...prevState };
      let updatedField = { ...updatedState[fieldName] };
      if (event.target.type === "file") {
        const file = event.target.files[0];
        updatedField.filename = file.name;
        updatedField.file = file;
      } else {
        updatedField.value = event.target.value;
      }
      updatedField = fieldValidations({ ...updatedField });
      updatedState[fieldName] = updatedField;

      setFormValid(formValidation(updatedState));

      return updatedState;
    });
  };

  const signupFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(signupForm);
  };

  return (
    <form className="mt-5" onSubmit={signupFormSubmitHandler}>
      <div className="form-group">
        <label htmlFor="inputFullname">Full name</label>
        <input
          type="text"
          className="form-control"
          id="inputFullname"
          name="fullname"
          value={signupForm.fullname.value}
          onChange={signupFormHandler}
        />
        {signupForm.fullname.errorMessage && (
          <div className="alert alert-danger mt-3">
            {signupForm.fullname.errorMessage}
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="inputEmail">Email address</label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          name="email"
          value={signupForm.email.value}
          onChange={signupFormHandler}
        />
        {signupForm.email.errorMessage && (
          <div className="alert alert-danger mt-3">
            {signupForm.email.errorMessage}
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          name="password"
          value={signupForm.password.value}
          onChange={signupFormHandler}
        />
        {signupForm.password.errorMessage && (
          <div className="alert alert-danger mt-3">
            {signupForm.password.errorMessage}
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="ageGroup">Age group</label>
        <select
          className="form-control"
          id="ageGroup"
          name="ageGroup"
          onChange={signupFormHandler}
        >
          {ageGroupOptions.map((ageGroupOption) => (
            <option value={ageGroupOption.id} key={ageGroupOption.id}>
              {ageGroupOption.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="d-block">Gender</label>
        {genderOptions.map((gender) => (
          <div className="form-check form-check-inline" key={gender.id}>
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id={`radio${gender.label}`}
              value={gender.id}
              onChange={signupFormHandler}
              checked={signupForm.gender.value === gender.id}
            />
            <label
              className="form-check-label"
              htmlFor={`radio${gender.label}`}
            >
              {gender.label}
            </label>
          </div>
        ))}
      </div>
      <div className="form-group">
        <label htmlFor="inputDOB">Date of birth</label>
        <input
          type="date"
          className="form-control"
          id="inputDOB"
          name="dob"
          value={signupForm.dob.value}
          onChange={signupFormHandler}
        />
        {signupForm.dob.errorMessage && (
          <div className="alert alert-danger mt-3">
            {signupForm.dob.errorMessage}
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="inputProfilePicture">Profile picture</label>
        <input
          type="file"
          className="form-control"
          id="inputProfilePicture"
          name="profilePicture"
          filename={signupForm.profilePicture.filename}
          onChange={signupFormHandler}
        />
        {signupForm.profilePicture.errorMessage && (
          <div className="alert alert-danger mt-3">
            {signupForm.profilePicture.errorMessage}
          </div>
        )}
      </div>
      <button type="submit" className="btn btn-primary mt-2" disabled={!formValid}>
        Submit
      </button>
    </form>
  );
};

export default Signup;
