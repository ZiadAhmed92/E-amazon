import React from 'react'

const FormaterPrice = ({amount}) => {
    let formatedPrice = new Number(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      });
  return (
    <>{formatedPrice}</>
  )
}

export default FormaterPrice