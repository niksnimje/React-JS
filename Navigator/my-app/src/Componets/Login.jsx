import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Authcontext } from '../Routers/Authcontext';

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const {login}=useContext(Authcontext)

  const hendelsubmit = (e) => {
    e.preventDefault();
    let userdata = {
      email,
      password,
    };

    axios.post("https://reqres.in/api/login", userdata)
      .then((res) => {
        const tokenformapi = res.data.token;
        login('Received token from API:', tokenformapi);
        // setauth({
        //   islogin: true,
        //   token: tokenformapi,
        // });
      })
      .catch((err) => console.error('Login error:', err));
  };

 

  return (
    <div>
      <h1>Please Login</h1>
      <form onSubmit={hendelsubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder='Enter Email'
          className='email-form'
        /> 
        <br /> <br />
        <input
          type="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder='Enter Password'
          className='pass-form'
        /> <br /> <br />
        <input type="submit" className='sub-form' />
      </form>
      <h5>eve.holt@reqres.in</h5>
    </div>
  );
}

export default Login;
