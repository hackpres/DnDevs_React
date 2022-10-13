import React from 'react'
import {Formik, Field, Form} from 'formik'

function Input(props) {
  return (

    <Field type={props.type} label={props.title} name={props.title} placeholder={props.placeholder} onChange={props.onChange} onSubmit={props.onSubmit} value={props.value}></Field>

    )
}

export default Input