import { useCallback, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { AppContext } from '../StepContext.tsx';

export default function RecepientInfoStep() {
  const { formValues, handleChange, handleNext, variant, margin } = useContext(AppContext);
  const {
    reFirstName,
    reLastName,
    reContactNumber,
    reEmail,
    reStreetAddress,
    reStreetAddressLine2,
    reCity,
    reState,
    reZipCode,
  } = formValues;

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({
        reFirstName,
        reLastName,
        reContactNumber,
        reEmail,
        reStreetAddress,
        reStreetAddressLine2,
        reCity,
        reState,
        reZipCode,
      }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [
      formValues,
      reFirstName,
      reLastName,
      reContactNumber,
      reEmail,
      reStreetAddress,
      reStreetAddressLine2,
      reCity,
      reState,
      reZipCode,
    ]
  );
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="First Name"
            name="reFirstName"
            placeholder="Your first name"
            value={reFirstName.value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Last Name"
            name="reLastName"
            placeholder="Your last name"
            value={reLastName.value}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Contact Number"
            name="reContactNumber"
            placeholder="Contact Number"
            value={reContactNumber.value}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Email"
            name="reEmail"
            placeholder="Your email address"
            type="email"
            value={reEmail.value}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Street Address"
            name="reStreetAddress"
            placeholder="Street Address"
            type="text"
            value={reStreetAddress.value}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Street Address Line 2"
            name="reStreetAddressLine2"
            placeholder="Street Address Line 2"
            type="text"
            value={reStreetAddressLine2.value}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="City"
            name="reCity"
            placeholder="Enter your city"
            value={reCity.value}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="State / Province"
            name="reState"
            placeholder="Enter your state"
            value={reState.value}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Postal / Zip Code"
            name="reZipCode"
            placeholder="Postal / Zip Code"
            value={reZipCode.value}
            onChange={handleChange}
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
