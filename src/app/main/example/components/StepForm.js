import { useContext, useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { makeStyles } from '@mui/styles';
import StepLabel from '@mui/material/StepLabel';
import Card from '@mui/material/Card';
import StepContent from '@mui/material/StepContent';
import GeneralInfoStep from './GeneralInfoStep';
import PersonalInfoStep from './PersonalInfoStep';
import Confirm from './Confirm';
import Success from './Success';
import { AppContext } from '../StepContext.tsx';
import AccidentInfoStep from './AccidentInfoStep';
import InjuriesStep from './InjuriesStep';
import ClientVehicleInformation from './ClientVehicleInfo';
import MedicalTretInfoStep from './MedicalTretInfoStep';
import PropertyDamageInfoStep from './PropertyDamageInfoStep';
import LostWages from './LostWages';
import RecepientInfoStep from './RecepientInfoStep';

const useStyles = makeStyles({
  customLabelStyle: {
    fontSize: '20px',
  },
});

// Step titles
const labels = [
  "Client's Details",
  "Client's personal information",
  'Accident Information',
  'Injuries',
  "Client's Vehicle Information",
  'Medical Treatment Information',
  'Property Damage Information',
  'Lost Wages',
  'Recipient Information',
  'Incident Information',
];

export default function StepForm() {
  const classes = useStyles();
  const { activeStep } = useContext(AppContext);
  const [content, setContent] = useState();

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return <GeneralInfoStep />;
      case 1:
        return <PersonalInfoStep />;
      case 2:
        return <AccidentInfoStep />;
      case 3:
        return <InjuriesStep />;
      case 4:
        return <ClientVehicleInformation />;
      case 5:
        return <MedicalTretInfoStep />;
      case 6:
        return <PropertyDamageInfoStep />;
      case 7:
        return <LostWages />;
      case 8:
        return <RecepientInfoStep />;
      case 9:
        return <Confirm generateText={(e) => setContent(e)} />;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {activeStep === labels.length ? (
        <Success generateText={content} />
      ) : (
        <>
          <Card sx={{ width: '100%', padding: '20px' }}>
            <Stepper activeStep={activeStep} sx={{ py: 3 }} orientation="vertical">
              {labels.map((label, index) => (
                <Step key={label}>
                  <StepLabel classes={{ label: classes.customLabelStyle }}>{label}</StepLabel>
                  <StepContent>{handleSteps(activeStep)}</StepContent>
                </Step>
              ))}
            </Stepper>
          </Card>
        </>
      )}
    </>
  );
}
