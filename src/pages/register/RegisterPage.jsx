import React, { useState } from "react";
import { Container, TextField, Button, Alert } from "@mui/material";
import { Link } from "react-router-dom";

import './SignInUp.scss'

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [passwrod, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const clear = () => {
    setPassword('');
    setLogin('');
    setEmail('');
  }

  return (
    <>
      {/* <Alert onClose={() => {}}>This is a success alert — check it out!</Alert> */}
      <Container>
        <div id="mainDiv">
          <h3>Welcome Khedoyans Guesthouse</h3>
          <TextField id="standard-basic" label="Username" variant="outlined" className="inputs" value={login} onChange={e => setLogin(e.target.value)} />
          <p className="space"></p>
          <TextField id="standard-basic" label="Password" variant="outlined" className="inputs" value={passwrod} onChange={e => setPassword(e.target.value)} />
          <p className="space"></p>
          <TextField id="standard-basic" label="Email" variant="outlined" className="inputs" value={email} onChange={e => setEmail(e.target.value)} />
          <p className="space"></p>
          <Button variant="contained" color='success' className="buttons">Log In</Button>
          <Button variant="contained" color="error" onClick={clear} className="buttons">Clear</Button>
          <p className="space"></p>
          <Link to='/' className="links">Already have an account ?</Link>
        </div>
      </Container>
    </>
  )
}

export default LoginPage;