import React from 'react' 
import '../styles/login.css'                   
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import loginImg from '../assets/images/logIn.webp'                 
import {Link} from 'react-router-dom'

const Login = () => {
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
                <h2>Login</h2>
                <Form>
                  <FormGroup>
                     <input type='email' placeholder='Email' required id='email' />
                  </FormGroup>
                  <FormGroup>
                    <input type='password' placeholder='password' required id='password' />
                  </FormGroup>
                  <Button classname='btn primary__ btn'>Login</Button>
                </Form>
                <br></br>
                <p>don't have an account <Link to='/register'>Create/Register</Link></p>
              </div>
            </div>
          </Col>
        </Row>
       </Container>
    </section>
  )
}
  export default Login