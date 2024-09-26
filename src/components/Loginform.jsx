import { useState } from "react";

export function Loginform() {
  var [formFields, setFormFields] = useState({
    name: "",
    password: "",
    displayName: "",
  });
  console.log(formFields);
  return (
    <form>
      <label htmlFor="username">Username :</label>
      <input
        id="username"
        value={formFields.name}
        onChange={(e) => {
          setFormFields((currValues) => ({
            ...currValues,
            name: e.target.value,
          }));
        }}
      />
      <br />
      <label htmlFor="password">Password :</label>
      <input
        type="password"
        id="password"
        value={formFields.password}
        onChange={(e) => {
          setFormFields((currValues) => ({
            ...currValues,
            password: e.target.value,
          }));
        }}
      />
      <br />
      <label htmlFor="displayName">Display Name :</label>
      <input
        id="displayName"
        value={formFields.displayName}
        onChange={(e) => {
          setFormFields((currValues) => ({
            ...currValues,
            displayName: e.target.value,
          }));
        }}
      />
      <br />
      <button>Login</button>
    </form>
  );
}
