/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { FC } from "react";
import styled from "styled-components";
import { Form, Formik, useField } from "formik";
import * as yup from "yup";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import React from "react";
import { TextFieldProps } from "@mui/material/TextField";
import Radio from "@mui/material/Radio";

const MyTextField = (props: any) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};
const FatherGrid = styled(Grid)`
  margin-top: 10px;
  margin-bottom: 40px;
`;
const FormCard = styled(Card)`
  background-color: #adf9ad !important;
`;
const validationSchema = yup.object({
  email: yup
    .string()
    .email("The Email you entered is not a valid format!")
    .required("Please enter Email Address!"),
  name: yup.string().required("Please enter your name!"),
  age: yup.string().required("Please enter your phone number!"),
  date: yup.object().shape({
    date: yup.date().nullable(),
  }),
});

const Home: NextPage<FC> = () => {
  function setValue(newValue: any) {
    throw new Error("Function not implemented.");
  }

  return (
    <FatherGrid container marginLeft="350px" alignItems="center">
      <FormCard>
        <Formik
          validateOnChange={true}
          initialValues={{
            email: "",
            name: "",
            age: "",
            date: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(data) => {
            console.log(data);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box padding={{ xs: 5, lg: 10, sm: 7 }}>
                <Grid container direction="column">
                  <Typography variant="h4" gutterBottom>
                    Registration Form
                  </Typography>
                  <Box>
                    <MyTextField name="name" label="Name" variant="outlined" />
                  </Box>

                  <Box marginTop={5}>
                    <MyTextField
                      label="Email"
                      name="email"
                      type="email"
                      variant="outlined"
                    />
                  </Box>

                  <Box marginTop={5}>
                    <MyTextField
                      label="Age"
                      name="age"
                      type="number"
                      variant="outlined"
                    />
                  </Box>

                  <Box marginTop={4}>
                    <FormLabel
                      style={{ color: "black" }}
                      id="demo-radio-buttons-group-label"
                    >
                      Driving liesense
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="2-w driving liesence"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="2-w Driving Licence"
                        control={<Radio />}
                        label="2-w Driving Licence"
                      />
                      <FormControlLabel
                        value=" 4-w Driving Licence"
                        control={<Radio />}
                        label="4-w Driving Licence"
                      />
                    </RadioGroup>
                  </Box>

                  

                  <Box marginTop={5}>
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={isSubmitting}
                      color="primary"
                    >
                      Submit
                    </Button>
                  </Box>
                </Grid>
              </Box>
            </Form>
          )}
        </Formik>
      </FormCard>
    </FatherGrid>
  );
};
export default Home;
