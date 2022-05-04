import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { Alert, Button, Col, FormGroup, Label, Row } from 'reactstrap';
import { API_URL } from '../../config';
import Layout from '../../core/Layout'
import { isAuthenticated } from '../../helpers/IsAuthenticated';
import { notify } from '../../helpers/Toast';
const AddProduct = () => {
    const initialValues = { name: '', description: '', price: 0, quantity: 0, photo: '',category: '', shipping: false }
    const validationSchema = Yup.object({
        name: Yup.string().required(),
        description: Yup.string().required(),
        price: Yup.number().required(),
        quantity: Yup.number().required(),
        photo: Yup.string().required(),
        category: Yup.string().required(),
        shipping:  Yup.bool().required(),
    });
    const onSubmit = (values, onSubmitProps) => {
        const {user, token} = isAuthenticated();
        fetch(`${API_URL}/products/create/${user._id}`,{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(values)
        } )
         .then(res =>res.json() )
        .then(res =>{
            if(res.error){
                notify('warning',res.error, "Please Check Your Form !")
            }else{

                notify('success',`Product ${values.name} created`)
               navigate('/admin/dashboard')
            }
        })
        .catch(error =>
            notify('error',error,'Internal Server Error')
        )
     }
    return (
        <div>
            <Layout
                title="Product"
                description="Create Product"
                className="container">
                <Row className="justify-content-md-center">
                    <Col md="6">
                        <Formik initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                            validateOnChange={false} >

                            {formik => (

                                <Form>
                                    <FormGroup className="mb-3" >
                                        <Label>Name:</Label>
                                        <Field className='form-control' type="text"  name="name"
                                            id="name" placeholder="Enter name" />
                                    </FormGroup>
                                    <ErrorMessage className='alert-danger' name='name' component={Alert} />
                                   
                                    <FormGroup className="mb-3" >
                                        <Label>Description:</Label>
                                        <Field className='form-control' type="text"  name="description" 
                                            id="description" placeholder="Enter description" />
                                    </FormGroup>
                                    <ErrorMessage className='alert-danger' name='description' component={Alert} />
                                   
                                    <FormGroup className="mb-3" >
                                        <Label>Price:</Label>
                                        <Field className='form-control' type="number"  name="price"
                                            id="price"  />
                                    </FormGroup>
                                    <ErrorMessage className='alert-danger' name='price' component={Alert} />
                                   
                                    <FormGroup className="mb-3" >
                                        <Label>Quantity:</Label>
                                        <Field className='form-control' type="number"  name="quantity"
                                            id="quantity"  />
                                    </FormGroup>
                                    <ErrorMessage className='alert-danger' name='quantity' component={Alert} />
                                   
                                    <FormGroup className="mb-3" >
                                        <Label>Photo:</Label>
                                        <Field className='form-control' type="text"  name="photo"
                                            id="photo" placeholder="Enter photo" />
                                    </FormGroup>
                                    <ErrorMessage className='alert-danger' name='photo' component={Alert} />
                                    <FormGroup className="mb-3" >
                                        <Label>category:</Label>
                                        <Field className='form-control' type="text"  name="category"
                                            id="category" placeholder="Enter category" />
                                    </FormGroup>
                                    <ErrorMessage className='alert-danger' name='category' component={Alert} />
                                    <FormGroup className="mb-3" >
                                        <Label>shipping:</Label>
                                        <Field className='form-control' type="text"  name="shipping"
                                            id="shipping" placeholder="Enter shipping" />
                                    </FormGroup>
                                    <ErrorMessage className='alert-danger' name='shipping' component={Alert} />
                                   
                                    <Button outline color={'success'} block disabled={!formik.isValid} >{'Save'}</Button>

                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Layout>
        </div>
    )
}

export default AddProduct