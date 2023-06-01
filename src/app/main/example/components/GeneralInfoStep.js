import { useCallback, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { AppContext } from '../StepContext.tsx';

export default function GeneralInfoStep() {
  const { formValues, handleChange, handleNext, variant, margin } = useContext(AppContext);
  const {
    firstName,
    lastName,
    contactNumber,
    email,
    streetAddress,
    streetAddressLine2,
    city,
    state,
    zipCode,
  } = formValues;

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({
        firstName,
        lastName,
        contactNumber,
        email,
        streetAddress,
        streetAddressLine2,
        city,
        state,
        zipCode,
      }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [
      formValues,
      firstName,
      contactNumber,
      lastName,
      email,
      streetAddress,
      streetAddressLine2,
      city,
      state,
      zipCode,
    ]
  );
  return (
    <>
      <Typography component="div" className="m-2.5 mb-2.5	font-medium">
        Fill in your basic information to let us know your preferences
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="First Name"
            name="firstName"
            placeholder="Your first name"
            value={firstName.value}
            onChange={handleChange}
            error={!!firstName.error}
            helperText={firstName.error}
            required={firstName.required}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            value={lastName.value}
            onChange={handleChange}
            error={!!lastName.error}
            helperText={lastName.error}
            required={lastName.required}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Contact Number"
            name="contactNumber"
            placeholder="Contact Number"
            value={contactNumber.value}
            onChange={handleChange}
            error={!!contactNumber.error}
            helperText={contactNumber.error}
            required={contactNumber.required}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            value={email.value}
            onChange={handleChange}
            error={!!email.error}
            helperText={email.error}
            required={email.required}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Street Address"
            name="streetAddress"
            placeholder="Street Address"
            type="text"
            value={streetAddress.value}
            onChange={handleChange}
            error={!!streetAddress.error}
            helperText={streetAddress.error}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Street Address Line 2"
            name="streetAddressLine2"
            placeholder="Street Address Line 2"
            type="text"
            value={streetAddressLine2.value}
            onChange={handleChange}
            error={!!streetAddressLine2.error}
            helperText={streetAddressLine2.error}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="City"
            name="city"
            placeholder="Enter your city"
            value={city.value}
            onChange={handleChange}
            error={!!city.error}
            helperText={city.error}
            required={city.required}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="State / Province"
            name="state"
            placeholder="Enter your state"
            value={state.value}
            onChange={handleChange}
            error={!!state.error}
            helperText={state.error}
            required={state.required}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Postal / Zip Code"
            name="zipCode"
            placeholder="Postal / Zip Code"
            value={zipCode.value}
            onChange={handleChange}
            error={!!zipCode.error}
            helperText={zipCode.error}
            required={zipCode.required}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          disabled={isError()}
          color="primary"
          className="rounded-none"
          onClick={!isError() ? handleNext : () => null}
        >
          CONTINUE
        </Button>
      </Box>
    </>
  );
}
