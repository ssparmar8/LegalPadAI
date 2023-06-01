import { useCallback, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { AppContext } from '../StepContext.tsx';

export default function LostWages() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } =
    useContext(AppContext);
  const {
    DYMWAAOTA,
    employerFirstName,
    employerLastName,
    employerNumber,
    employerEmail,
    lostWages,
    rateOfPay,
    paid,
  } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        DYMWAAOTA,
        employerFirstName,
        employerLastName,
        employerNumber,
        employerEmail,
        lostWages,
        rateOfPay,
        paid,
      }).some(
        (ele) => (formValues[ele].required && !formValues[ele].value) || formValues[ele].error
      ),
    [
      formValues,
      DYMWAAOTA,
      employerFirstName,
      employerLastName,
      employerNumber,
      employerEmail,
      lostWages,
      rateOfPay,
      paid,
    ]
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <FormLabel>Did you miss work as a result of this accident? &nbsp;&nbsp;</FormLabel>
          <RadioGroup
            className="inline-block"
            variant={variant}
            margin={margin}
            name="DYMWAAOTA"
            value={DYMWAAOTA.value}
            onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Card sx={{ width: '100%', boxShadow: 'none' }}>
          <CardContent>
            <Typography component="div" className="text-blue-800">
              Employer
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="First Name"
                  name="employerFirstName"
                  placeholder="Name"
                  value={employerFirstName?.value}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="Last Name"
                  name="employerLastName"
                  placeholder="Last Name"
                  value={employerLastName?.value}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Contact Number"
            name="employerNumber"
            placeholder="Contact Number"
            value={employerNumber.value}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Email"
            name="employerEmail"
            placeholder="Email address"
            type="email"
            value={employerEmail.value}
            onChange={handleChange}
          />
        </Grid>
        <Card sx={{ width: '100%', boxShadow: 'none' }}>
          <CardContent>
            <Typography component="div" className="text-blue-800">
              If so, can you verify your lost wages?
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  name="lostWages"
                  value={lostWages?.value}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Rate of Pay"
            name="rateOfPay"
            placeholder="Rate of Pay"
            value={rateOfPay.value}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Paid how often?"
            name="paid"
            placeholder="Paid how often?"
            value={paid.value}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
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
