import React from 'react'
import { ErrorMessage, Field, Formik,Form } from 'formik'
import * as Yup from 'yup'
import { Alert, Button, Col,  FormGroup, Label, Row } from 'reactstrap';

import Layout from '../core/Layout'

const Signup = () => {
    const initialValues = {name: '', email: '', password: ''}
    const validationSchema = Yup.object({
        name: Yup.string().required(),
        password: Yup.string().required(),
        email: Yup.string().email().required()
     });
     const onSubmit = (values, onSubmitProps) => {
         console.log(values)
     }
  return (
    <Layout 
            title="Signup page" 
            description="SignUp Node react Ecommerce app" 
            className="container">
    <Row  className="justify-content-md-center">
         <Col md="6">
         <Formik initialValues={ initialValues} 
          onSubmit={onSubmit}
                 validationSchema={validationSchema} 
                 validateOnChange={false} >

            {formik => (
                
         <Form>
            <FormGroup className="mb-3" >
                <Label>Name:</Label>
                <Field className='form-control' type="text" name="name" 
                                   id="name" placeholder="Enter name" />    
                       
                        
            </FormGroup>
                 <ErrorMessage className='alert-danger' name='name' component={Alert}/>
            <FormGroup className="mb-3" >
                <Label>Email address</Label>
                <Field className='form-control' type="email" name="email" 
                                   id="email" placeholder="Enter email" />    
                       
            </FormGroup>
                 <ErrorMessage className='alert-danger ' name='email' component={Alert}/>

            <FormGroup className="mb-3" >
                <Label>Password</Label>
                <Field className='form-control' type="password" name="password" 
                                   id="password" placeholder="Password" />    
                       
            </FormGroup>
                 <ErrorMessage className='alert-danger' name='password' component={Alert}/>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            )}
            </Formik>
         </Col>
    </Row>
    </Layout>
  )
}

export default Signup