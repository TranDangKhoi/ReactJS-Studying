import React, { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if(localStorage.getItem("user-info")){
        history.push("/add")
    }
  }, []);
  function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("",{
        method:"POST",
        headers:{
            "Content-Type":"application-json",
            "Accept":"application/json"
        },
        body:JSON.stringify(item);
    });
    result = await result.json();
  }

  return (
    <div>
      <h1>Login Testing</h1>
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your email"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
