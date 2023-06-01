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

export default function PersonalInfoStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } =
    useContext(AppContext);
  const {
    maritalStatus,
    spouseFirstName,
    spouseLastName,
    childName,
    childSurname,
    childAge,
    dob,
    driveLicenseNumber,
    socialSecurityNumber,
    necSpouseFirstName,
    necSpouseLastName,
    relationship,
    emergencyContactInformation,
    more,
  } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        maritalStatus,
        spouseFirstName,
        spouseLastName,
        childName,
        childSurname,
        childAge,
        dob,
        driveLicenseNumber,
        socialSecurityNumber,
        necSpouseFirstName,
        necSpouseLastName,
        relationship,
        emergencyContactInformation,
        more,
      }).some(
        (ele) => (formValues[ele].required && !formValues[ele].value) || formValues[ele].error
      ),
    [
      formValues,
      maritalStatus,
      spouseFirstName,
      spouseLastName,
      childName,
      childSurname,
      childAge,
      dob,
      driveLicenseNumber,
      socialSecurityNumber,
      necSpouseFirstName,
      necSpouseLastName,
      relationship,
      emergencyContactInformation,
      more,
    ]
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <FormLabel>Marital Status: &nbsp;&nbsp;</FormLabel>
          <RadioGroup
            className="inline-block"
            variant={variant}
            margin={margin}
            name="maritalStatus"
            value={maritalStatus.value}
            onChange={handleChange}
          >
            <FormControlLabel value="Single" control={<Radio />} label="Single" />
            <FormControlLabel value="Married" control={<Radio />} label="Married" />
            <FormControlLabel value="Divorced" control={<Radio />} label="Divorced" />
            <FormControlLabel value="Window" control={<Radio />} label="Window" />
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
            label="Date of birth"
            name="dob"
            type="date"
            defaultValue={dob.value}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Drivers License Number"
            name="driveLicenseNumber"
            placeholder="Drivers License Number"
            value={driveLicenseNumber.value}
            onChange={handleChange}
            error={!!driveLicenseNumber.error}
            helperText={driveLicenseNumber.error}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Social Security Number"
            name="socialSecurityNumber"
            placeholder="Social Security Number"
            value={socialSecurityNumber.value}
            onChange={handleChange}
            error={!!socialSecurityNumber.error}
            helperText={socialSecurityNumber.error}
          />
        </Grid>

        <Card sx={{ width: '100%', boxShadow: 'none' }}>
          <CardContent>
            <Typography component="div" className="text-blue-600">
              Spouse's Name/Significant Other
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="First Name"
                  name="spouseFirstName"
                  placeholder="Your first name"
                  value={spouseFirstName.value}
                  onChange={handleChange}
                  error={!!spouseFirstName.error}
                  helperText={spouseFirstName.error}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="Last Name"
                  name="spouseLastName"
                  placeholder="Your last name"
                  value={spouseLastName.value}
                  onChange={handleChange}
                  error={!!spouseLastName.error}
                  helperText={spouseLastName.error}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ width: '100%', boxShadow: 'none' }}>
          <CardContent>
            <Typography component="div" className="text-blue-800">
              Children's Names/Ages
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="Name"
                  name="childName"
                  placeholder="Name"
                  value={childName.value}
                  onChange={handleChange}
                  error={!!childName.error}
                  helperText={childName.error}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="Surname"
                  name="childSurname"
                  placeholder="Surname"
                  value={childSurname.value}
                  onChange={handleChange}
                  error={!!childSurname.error}
                  helperText={childSurname.error}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="Age"
                  name="childAge"
                  placeholder="Age"
                  value={childAge.value}
                  onChange={handleChange}
                  error={!!childAge.error}
                  helperText={childAge.error}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ width: '100%', boxShadow: 'none' }}>
          <CardContent>
            <Typography component="div" className="text-blue-800">
              Name of Emergency Contact
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="First Name"
                  name="necSpouseFirstName"
                  placeholder="Your first name"
                  value={necSpouseFirstName.value}
                  onChange={handleChange}
                  error={!!necSpouseFirstName.error}
                  helperText={necSpouseFirstName.error}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="Last Name"
                  name="necSpouseLastName"
                  placeholder="Your last name"
                  value={necSpouseLastName.value}
                  onChange={handleChange}
                  error={!!necSpouseLastName.error}
                  helperText={necSpouseLastName.error}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="Relationship"
                  name="relationship"
                  placeholder="Relationship"
                  value={relationship.value}
                  onChange={handleChange}
                  error={!!relationship.error}
                  helperText={relationship.error}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="Emergency Contact Information"
                  name="emergencyContactInformation"
                  placeholder="Emergency Contact Information"
                  value={emergencyContactInformation.value}
                  onChange={handleChange}
                  error={!!emergencyContactInformation.error}
                  helperText={emergencyContactInformation.error}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ width: '100%', boxShadow: 'none' }}>
          <CardContent>
            <Typography component="div" className="text-blue-800">
              Prior Criminal Record
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  label="If yes, please explain."
                  name="more"
                  placeholder="Enter Text"
                  value={more.value}
                  onChange={handleChange}
                  error={!!more.error}
                  helperText={more.error}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
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
