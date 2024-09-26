import PropTypes from "prop-types";
import { useState } from "react";

export function UserLoader(props) {
  const [isEditing, useisEditing] = useState(true);
  const [username, setusername] = useState(props.user.name);
  const [email, setEmail] = useState(props.user.email);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            useisEditing((state) => !state);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            props.setUsers((allusers) =>
              allusers.filter((curruser) => curruser.name != username)
            );
          }}
        >
          Delete
        </button>
        {isEditing === false && (
          <button
            onClick={() => {
              props.setUsers((currusers) => {
                return currusers.map((curruser) => {
                  if (curruser.id === props.user.id) {
                    return { ...curruser, name: username, email: email };
                  }
                  return curruser;
                });
              });
              useisEditing(true);
            }}
          >
            Save
          </button>
        )}
      </div>
      <div>
        <b>User ID :</b>
        <span>{props.user.id}</span>
        <br />
        <b>userName :</b>
        {isEditing ? (
          <span>{props.user.name}</span>
        ) : (
          <input
            id="userName"
            name="username"
            type="text"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
        )}
        <br />
        <b>Email :</b>
        {isEditing ? (
          <span>{props.user.email}</span>
        ) : (
          <input
            id="email"
            value={email}
            name="email"
            type="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        )}
        <br />
      </div>
    </div>
  );
}

UserLoader.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setUsers: PropTypes.func.isRequired,
};
