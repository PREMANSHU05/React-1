import { useState } from "react";

export default function Form() {
  //   let [fullname, setfullname] = useState("");
  //   let [username, setusername] = useState("");
  let [formdata, setformdata] = useState({
    fullname: "",
    username: "",
    password: "",
  });
  //   let handlenamechange = (event) => {
  //     setfullname(event.target.value);
  //   };
  //   let handleusername = (event) => {
  //     setusername(event.target.value);
  //   };
  let handleinputchange = (event) => {
    let fildname = event.target.name;
    let newvalue = event.target.value;
    setformdata((currdata) => {
      return { ...currdata, [fildname]: newvalue };
    });
  };

  let handlesubmit = (event) => {
    event.preventDefault();
    console.log(formdata);
    setformdata({
      fullname: "",
      username: "",
      password: "",
    });
  };
  return (
    <form onSubmit={handlesubmit}>
      <label htmlFor="fullname">Full Name : </label>
      <input
        placeholder="Enter Full Name"
        type="text"
        value={formdata.fullname}
        onChange={handleinputchange}
        id="fullname"
        name="fullname"
      />
      <br />
      <br />
      <label htmlFor="username">Username : </label>
      <input
        placeholder="Enter UserName"
        type="text"
        value={formdata.username}
        onChange={handleinputchange}
        id="username"
        name="username"
      />
      <br />
      <br />
      <label htmlFor="password">Password : </label>
      <input
        placeholder="Password"
        type="text"
        value={formdata.password}
        onChange={handleinputchange}
        id="password"
        name="password"
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
