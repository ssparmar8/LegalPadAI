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

export default function PropertyDamageInfoStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } =
    useContext(AppContext);
  const { PDACOYV, DYHAEFPD, DYHPOYD } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        PDACOYV,
        DYHAEFPD,
        DYHPOYD,
      }).some(
        (ele) => (formValues[ele].required && !formValues[ele].value) || formValues[ele].error
      ),
    [formValues, PDACOYV, DYHAEFPD, DYHPOYD]
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <FormLabel>Property Damage Already Collected on Your Vehicle? &nbsp;&nbsp;</FormLabel>
          <RadioGroup
            className="inline-block"
            variant={variant}
            margin={margin}
            name="PDACOYV"
            value={PDACOYV.value}
            onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormLabel>Do you have an estimate for property damage? &nbsp;&nbsp;</FormLabel>
          <RadioGroup
            className="inline-block"
            variant={variant}
            margin={margin}
            name="DYHAEFPD"
            value={DYHAEFPD.value}
            onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormLabel>Do you have pictures of your vehicle? &nbsp;&nbsp;</FormLabel>
          <RadioGroup
            className="inline-block"
            variant={variant}
            margin={margin}
            name="DYHPOYD"
            value={DYHPOYD.value}
            onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
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
