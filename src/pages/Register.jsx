import React, {useState} from 'react' 
import '../styles/login.css'                   
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import loginImg from '../assets/images/logIn.webp'                 
import {Link} from 'react-router-dom'

const Register = () => {

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  return (
    <section>
      <Container>
        <Row>
        <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} />
              </div>
                <div className="login__form">
                <h2>Register</h2>
                <Form>
                  <FormGroup>
                    <input type='text' placeholder='Username' id='username' />
                  </FormGroup>
                  <FormGroup>
                     <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' required id='email' />
                  </FormGroup>
                  <FormGroup>
                    <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' required id='password' />
                  </FormGroup>
                  <Button classname='btn primary__ btn'>Register</Button>
                </Form>
                <br></br>
                <p>already have an account? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
       </Container>
    </section>
  )
}
  export default Register