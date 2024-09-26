import { useState } from "react";
import "./global.css";
import { UserLoader } from "./components/userloader";

export default function App() {
  const [Id, setId] = useState(3);
  const [user, setUser] = useState("");
  const [email,setEmail]= useState("");
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ayush",
      email: "someone@gmail.com",
    },
    {
      id: 2,
      name: "Jhon",
      email: "Jhon@gmail.com",
    },
    {
      id: 3,
      name: "maxi",
      email: "maxi@gmail.com",
    },
  ]);

  return (
    <div>
      <form>
        <div>
          <span>Username: </span>
          <input type="text" id="username" name="UserName" value={user} onChange={(e)=>
            setUser(e.target.value)
          } />
        </div>
        <div>
          <span>Email: </span>
          <input type="text" id="email" name="email" value={email} onChange={(e)=>
            setEmail(e.target.value)
          }/>
        </div>
        <button onClick={(e)=>{
          e.preventDefault();
          const newUser = {id:Id+1,name:user,email:email};
          setId(Id+1);
          setUsers((allusers)=>allusers = [...allusers,newUser])
          setUser("");
          setEmail("");
        }
        }>Add Element</button>
      </form>
      <br />
      {users.map((user) => (
        <UserLoader
          key={user.id}
          user={user}
          setUsers={setUsers}
          users={users}
          setId={setId}
        />
      ))}
    </div>
  );
}
