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

export default function AccidentInfoStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } =
    useContext(AppContext);
  const {
    accidentInformationDate,
    accidentInformationTime,
    accidentInformationStatueOfLimitations,
    accidentInformationLocation,
    accidentInformationHowDidHappen,
    accidentInformationPIVOneName,
    accidentInformationPIVOneSurname,
    accidentInformationPIVTwoName,
    accidentInformationPIVTwoSurname,
    accidentInformationPIVThreeName,
    accidentInformationPIVThreeSurname,
    InvestigatedByPolice,
    incidentNumber,
    statementsGiven,
    StatementGiverFirstName,
    StatementGiverLastName,
  } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        accidentInformationDate,
        accidentInformationTime,
        accidentInformationStatueOfLimitations,
        accidentInformationLocation,
        accidentInformationHowDidHappen,
        accidentInformationPIVOneName,
        accidentInformationPIVOneSurname,
        accidentInformationPIVTwoName,
        accidentInformationPIVTwoSurname,
        accidentInformationPIVThreeName,
        accidentInformationPIVThreeSurname,
        InvestigatedByPolice,
        incidentNumber,
        statementsGiven,
        StatementGiverFirstName,
        StatementGiverLastName,
      }).some(
        (ele) => (formValues[ele].required && !formValues[ele].value) || formValues[ele].error
      ),
    [
      formValues,
      accidentInformationDate,
      accidentInformationTime,
      accidentInformationStatueOfLimitations,
      accidentInformationLocation,
      accidentInformationHowDidHappen,
      accidentInformationPIVOneName,
      accidentInformationPIVOneSurname,
      accidentInformationPIVTwoName,
      accidentInformationPIVTwoSurname,
      accidentInformationPIVThreeName,
      accidentInformationPIVThreeSurname,
      InvestigatedByPolice,
      incidentNumber,
      statementsGiven,
      StatementGiverFirstName,
      StatementGiverLastName,
    ]
  );

  return (
    <>
      <Grid container spacing={2}>
        <Card sx={{ width: '100%', boxShadow: 'none' }}>
          <CardContent>
            <Typography component="div" className="text-blue-600">
              Date & Time of Accident
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
                  label="Date"
                  name="accidentInformationDate"
                  type="date"
                  defaultValue={accidentInformationDate?.value}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Time"
                  name="accidentInformationTime"
                  type="time"
                  defaultValue={accidentInformationTime?.value}
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
            label="Statue of Limitations"
            name="accidentInformationStatueOfLimitations"
            placeholder="Statue of Limitations"
            value={accidentInformationStatueOfLimitations?.value}
            onChange={handleChange}
            error={!!accidentInformationStatueOfLimitations?.error}
            helperText={accidentInformationStatueOfLimitations?.error}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Location"
            name="accidentInformationLocation"
            placeholder="Location"
            value={accidentInformationLocation?.value}
            onChange={handleChange}
            error={!!accidentInformationLocation?.error}
            helperText={accidentInformationLocation?.error}
          />
        </Grid>

        <Card sx={{ width: '100%', boxShadow: 'none' }}>
          <CardContent>
            <Typography component="div" className="text-blue-600">
              How did the accident happen?
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Type here..."
                  name="accidentInformationHowDidHappen"
                  defaultValue={accidentInformationHowDidHappen?.value}
                  onChange={handleChange}
                  multiline
                  maxRows={10}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ width: '100%', boxShadow: 'none' }}>
          <CardContent>
            <Typography component="div" className="text-blue-600">
              Passengers in Vehicle
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
                  label="Name"
                  name="accidentInformationPIVOneName"
                  defaultValue={accidentInformationPIVOneName?.value}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Surname"
                  name="accidentInformationPIVOneSurname"
                  defaultValue={accidentInformationPIVOneSurname?.value}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Name"
                  name="accidentInformationPIVTwoName"
                  defaultValue={accidentInformationPIVTwoName?.value}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Surname"
                  name="accidentInformationPIVTwoSurname"
                  defaultValue={accidentInformationPIVTwoSurname?.value}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Name"
                  name="accidentInformationPIVThreeName"
                  defaultValue={accidentInformationPIVThreeName?.value}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Surname"
                  name="accidentInformationPIVThreeSurname"
                  defaultValue={accidentInformationPIVThreeSurname?.value}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Grid item xs={12} sm={12}>
          <FormLabel>Investigated by Police?: &nbsp;&nbsp;</FormLabel>
          <RadioGroup
            className="inline-block"
            variant={variant}
            margin={margin}
            name="InvestigatedByPolice"
            value={InvestigatedByPolice?.value}
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
            label="Incident Number"
            name="incidentNumber"
            defaultValue={incidentNumber?.value}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <FormLabel>Statements given? &nbsp;&nbsp;</FormLabel>
          <RadioGroup
            className="inline-block"
            variant={variant}
            margin={margin}
            name="statementsGiven"
            value={statementsGiven?.value}
            onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>

        <Card sx={{ width: '100%', boxShadow: 'none' }}>
          <CardContent>
            <Typography component="div" className="text-blue-600">
              If yes, to whom?
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
                  label="First Name"
                  name="StatementGiverFirstName"
                  defaultValue={StatementGiverFirstName?.value}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant={variant}
                  margin={margin}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Last Name"
                  name="StatementGiverLastName"
                  defaultValue={StatementGiverLastName?.value}
                  onChange={handleChange}
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
