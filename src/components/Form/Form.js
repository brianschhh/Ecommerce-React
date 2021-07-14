import React, { useContext, useState } from "react";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import { useCartContext } from "../../CartContex";
import { db } from "../../Firebase";

const FormCart = () => {
  const { cart, isDarkMode } = useCartContext();
  const initialState = {
    firstName: "",
    lastName: "",
    Email: "",
  };

  const [values, setValues] = useState(initialState);
  const [order, setOrder] = useState([]);

  const addOrEdit = async (object) => {
    console.log("obj", object);
    await db.collection("ordenes").doc().set(object);

    console.log("nuevo producto agregado!");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value);
    //Copiamos los valores actuales, y el input [name] que estemos actualizando, le colocamos el valor actual que estemos tipeando
    setValues({ ...values, [name]: value });
    setOrder({ values, product: cart });
    console.log(values);
  };

  const handleOnSubmit = (e) => {
    addOrEdit({ order });
    setValues({ ...initialState });
  };

  return (
    <div>
      {isDarkMode ? (
        <Form onSubmit={handleOnSubmit}>
          <Form.Field>
            <label style={{ color: "white" }}>First Name</label>
            <input
              placeholder="First Name"
              name="firstName"
              onChange={handleOnChange}
              value={values.firstName}
            />
          </Form.Field>
          <Form.Field>
            <label style={{ color: "white" }}>Last Name</label>
            <input
              placeholder="Last Name"
              name="lastName"
              onChange={handleOnChange}
              value={values.lastName}
            />
          </Form.Field>

          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Email"
            placeholder="example@example.com"
            name="Email"
            onChange={handleOnChange}
            value={values.Email}
          />

          <Button type="submit" size="Medium" color="black">
            Submit
          </Button>
        </Form>
      ) : (
        <Form onSubmit={handleOnSubmit}>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              name="firstName"
              onChange={handleOnChange}
              value={values.firstName}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              name="lastName"
              onChange={handleOnChange}
              value={values.lastName}
            />
          </Form.Field>

          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Email"
            placeholder="example@example.com"
            name="Email"
            onChange={handleOnChange}
            value={values.Email}
          />

          <Button type="submit" size="Medium" color="black">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};

export default FormCart;
