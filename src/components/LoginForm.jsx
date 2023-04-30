import React from "react"
import { Formik,Form, Field,ErrorMessage } from "formik"
import * as Yup from 'yup';
// import { Form } from "react-router-dom";

function LoginForm(){
    return(
        <>
        <h1>Form</h1>
        <Formik
        initialValues={{email :"",firstName:""}} //inital value start 
      
        validationSchema={Yup.object({
            firstName:Yup.string().min(10,"min lettr 10").required(),
            email:Yup.string().email("Invalid email address").required()
        }) }
        onSubmit={(value)=>{
            console.log(value)
        }}
        >
            <Form style={{textAlign:"center"}}>
                <Field name={"email"}/>
                <br/>

                <ErrorMessage name={"email"}/>
                <br/>

                <Field name={"firstName"}/>
                <br/>

                <ErrorMessage name={"firstName"}/>
                <br/>

                <button type="submit">Submit</button>

            </Form>

        </Formik>
        </>

    )
}

export default LoginForm