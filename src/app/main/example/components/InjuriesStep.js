import { useCallback, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AppContext } from '../StepContext.tsx';

export default function InjuriesStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } =
    useContext(AppContext);
  const {
    injuriesSustainedInThisAccident,
    priorInjuries,
    preExistingConditions,
    medicalConditionsDiseases,
  } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        injuriesSustainedInThisAccident,
        priorInjuries,
        preExistingConditions,
        medicalConditionsDiseases,
      }).some(
        (ele) => (formValues[ele].required && !formValues[ele].value) || formValues[ele].error
      ),
    [
      formValues,
      injuriesSustainedInThisAccident,
      priorInjuries,
      preExistingConditions,
      medicalConditionsDiseases,
    ]
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Injuries Sustained in this Accident"
            name="injuriesSustainedInThisAccident"
            placeholder="type here..."
            value={injuriesSustainedInThisAccident?.value}
            onChange={handleChange}
            error={!!injuriesSustainedInThisAccident?.error}
            helperText={injuriesSustainedInThisAccident?.error}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Prior Injuries"
            name="priorInjuries"
            placeholder="Prior Injuries"
            value={priorInjuries?.value}
            onChange={handleChange}
            error={!!priorInjuries?.error}
            helperText={priorInjuries?.error}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Pre-Existing Conditions"
            name="preExistingConditions"
            placeholder="Pre-Existing Conditions"
            value={preExistingConditions?.value}
            onChange={handleChange}
            error={!!preExistingConditions?.error}
            helperText={preExistingConditions?.error}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Medical Conditions/Diseases"
            name="medicalConditionsDiseases"
            placeholder="Medical Conditions/Diseases"
            value={medicalConditionsDiseases?.value}
            onChange={handleChange}
            error={!!medicalConditionsDiseases?.error}
            helperText={medicalConditionsDiseases?.error}
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
