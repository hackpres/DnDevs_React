import React from 'react'
import {Formik, Field, Form} from 'formik'

function Input(props) {
  return (

        <Field type={props.type} label={props.title} name={props.title} placeholder={props.title} value={props.title} validate={props.validate}></Field>

    )
}

export default Input