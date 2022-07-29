import React, { useEffect, useState } from "react";

import axios from "axios";

const GetCustomerLogin = async () => {
  try {
    const response = await axios.get("http://localhost:9090/api/v1/customer");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Login = () => {
  const [userEmail, setuserEmail] = useState([]);
  useEffect(() => {
    GetCustomerLogin().then((infos) => {
      console.log(infos);
      setuserEmail(infos);
    });
  }, []);

  return (
    <div>
      <div className="username">
        {userEmail.map((item, index) => (
          <div className="user-email" key={item.cusId}>
            {item.cusEmail}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;
