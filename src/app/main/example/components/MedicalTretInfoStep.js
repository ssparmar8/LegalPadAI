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

export default function MedicalTretInfoStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } =
    useContext(AppContext);
  const {
    Ambulance,
    nameOfAmbulanceService,
    emergencyRoom,
    nameOfEmergencyRoom,
    medicalBillPayFirstName,
    medicalBillPayLastName,
    treatingPhysicianFirstName,
    treatingPhysicianLastName,
    dateOfService,
    facilityStreetAddress,
    facilityStreetAddressLine2,
    facilityCity,
    facilityState,
    facilityZipCode,
    facilityContactNumber,
    facilityEmail,
  } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        Ambulance,
        nameOfAmbulanceService,
        emergencyRoom,
        nameOfEmergencyRoom,
        medicalBillPayFirstName,
        medicalBillPayLastName,
        treatingPhysicianFirstName,
        treatingPhysicianLastName,
        dateOfService,
        facilityStreetAddress,
        facilityStreetAddressLine2,
        facilityCity,
        facilityState,
        facilityZipCode,
        facilityContactNumber,
        facilityEmail,
      }).some(
        (ele) => (formValues[ele].required && !formValues[ele].value) || formValues[ele].error
      ),
    [
      formValues,
      Ambulance,
      nameOfAmbulanceService,
      emergencyRoom,
      nameOfEmergencyRoom,
      medicalBillPayFirstName,
      medicalBillPayLastName,
      treatingPhysicianFirstName,
      treatingPhysicianLastName,
      dateOfService,
      facilityStreetAddress,
      facilityStreetAddressLine2,
      facilityCity,
      facilityState,
      facilityZipCode,
      facilityContactNumber,
      facilityEmail,
    ]
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <FormLabel>Ambulance?: &nbsp;&nbsp;</FormLabel>
          <RadioGroup
            className="inline-block"
            variant={variant}
            margin={margin}
            name="Ambulance"
            value={Ambulance?.value}
            onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            label="Name of Ambulance Service"
            name="nameOfAmbulanceService"
            defaultValue={nameOfAmbulanceService?.value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4} />
        <Grid item xs={12} sm={4}>
          <FormLabel>Emergency Room?: &nbsp;&nbsp;</FormLabel>
          <RadioGroup
            className="inline-block"
            variant={variant}
            margin={margin}
            name="emergencyRoom"
            value={emergencyRoom?.value}
            onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            label="Name of Emergency Room"
            name="nameOfEmergencyRoom"
            defaultValue={nameOfEmergencyRoom?.value}
            onChange={handleChange}
          />
        </Grid>

        <Card sx={{ width: '100%', boxShadow: 'none' }}>
          <CardContent>
            <Typography component="div" className="text-blue-800">
              Who has paid your medical bills?
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="First Name"
                  name="medicalBillPayFirstName"
                  placeholder="Name"
                  value={medicalBillPayFirstName?.value}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="Last Name"
                  name="medicalBillPayLastName"
                  placeholder="Surname"
                  value={medicalBillPayLastName?.value}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ width: '100%', boxShadow: 'none' }}>
          <CardContent>
            <Typography component="div" className="text-blue-800">
              Treating Physician
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="First Name"
                  name="treatingPhysicianFirstName"
                  placeholder="Name"
                  value={treatingPhysicianFirstName?.value}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="Last Name"
                  name="treatingPhysicianLastName"
                  placeholder="Surname"
                  value={treatingPhysicianLastName?.value}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ width: '100%', boxShadow: 'none' }}>
          <CardContent>
            <Typography component="div" className="text-blue-800">
              Date of Service
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Date of Service"
                  name="dateOfService"
                  type="date"
                  defaultValue={dateOfService?.value}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ width: '100%', boxShadow: 'none' }}>
          <CardContent>
            <Typography component="div" className="text-blue-800">
              Facility Address
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="Street Address"
                  name="facilityStreetAddress"
                  placeholder="Street Address"
                  type="text"
                  value={facilityStreetAddress?.value}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="Street Address Line 2"
                  name="facilityStreetAddressLine2"
                  placeholder="Street Address Line 2"
                  type="text"
                  value={facilityStreetAddressLine2?.value}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="City"
                  name="facilityCity"
                  placeholder="Enter your city"
                  value={facilityCity?.value}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="State / Province"
                  name="facilityState"
                  placeholder="Enter your state"
                  value={facilityState?.value}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="Postal / Zip Code"
                  name="facilityZipCode"
                  placeholder="Postal / Zip Code"
                  value={facilityZipCode?.value}
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
            name="facilityContactNumber"
            placeholder="Contact Number"
            value={facilityContactNumber.value}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Email"
            name="facilityEmail"
            placeholder="Email address"
            type="email"
            value={facilityEmail.value}
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
