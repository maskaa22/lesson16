
import './App.css';
import {useEffect, useState} from "react";
import {getUser, getUsers} from "./serveses/API";
import Users from "./components/users/Users";

function App() {
  let [users, setUsers] = useState([]);
  let [userDeteils, setUserDeteils] = useState(null);

  useEffect(()=> {
    getUsers().then(respons => {
      setUsers(respons.data);

    })
  } ,[])

  function  selectUser(id){
    console.log(id);
    getUser(id).then(({data}) => {

      setUserDeteils(data)

    });
  }

  return (
    <div >
          <Users items={users} selectUser={selectUser}/>

    </div>
  );
}

export default App;
