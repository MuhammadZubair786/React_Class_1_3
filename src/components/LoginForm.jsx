import React from "react"
import { Formik,Form, Field,ErrorMessage } from "formik"
import * as Yup from 'yup';

import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth,db}  from "../config/Firebase";
import {ref,push} from 'firebase/database'

// import { Form } from "react-router-dom";

function LoginForm(){
    return(
        <>
        
        <h1>Form test</h1>

        <Formik
        initialValues={{email :"",password:""}} //inital value start 
      
        validationSchema={Yup.object({
          
            password:Yup.string().min(6,"min lettr 6").required(),
            email:Yup.string().email("Invalid email address").required()
        }) }
        onSubmit={async(value)=>{
            console.log(value)
            try{

                const user = await createUserWithEmailAndPassword(auth,value.email,value.password)
                console.log(user.user.uid)
              

                // var obj ={
                //     email:value.email,
                //     password:value.password,
                //     username:"asad",
                //     uid:user.user.uid
                // }

                // const dbref= ref(db,"User_reg")
                // await push(dbref,obj)
                // alert("save data")
             

            }catch(e){
               alert(e.code)
            }
         
        }}
        >
            <Form style={{textAlign:"center"}}>
                <Field name={"email"}/>
                <br/>

                <ErrorMessage name={"email"}/>
                <br/>

                <Field name={"password"}/>
                <br/>

                <ErrorMessage name={"password"}/>
                <br/>

             

                <button name="login" type="submit">Submit</button>

            </Form>

        </Formik>
        </>

    )
}
export default LoginForm