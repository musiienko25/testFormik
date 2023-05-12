import React, { useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

const ContactForm = () => {
  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: 'auto',
      '& > *': {
        margin: '8px 0',
      },
    },
    submitButton: {
      marginTop: '16px',
    },
    input: {
      marginBottom: 20
    },
    button: {
      maxWidth: '100%',
      margin: 'auto'
    }
  };

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = useCallback((values) => {
    console.log(values);
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form style={styles.form} onSubmit={formik.handleSubmit}>
      <TextField
        style={styles.input}
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        style={styles.input}
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        style={styles.input}
        id="message"
        name="message"
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />
      <Button style={styles.button} disabled={formik.errors.message ? true : false} variant="contained" color="primary" type="submit">
        Submit
      </Button>
      {formik.submitCount > 0 && (
        <Alert severity="success">Form submitted successfully!</Alert>
      )}
    </form>
  );
};

export default ContactForm;
