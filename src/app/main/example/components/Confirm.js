import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { makeStyles } from '@mui/styles';
import { green } from '@mui/material/colors';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import { useSnackbar } from 'notistack';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import axios from 'axios';
import { AppContext } from '../StepContext.tsx';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -5,
    marginLeft: -5,
  },
}));

function Confirm(props) {
  const classes = useStyles();
  const { formValues, handleBack, handleNext } = useContext(AppContext);
  const { firstName, lastName, email, dob, city, contactNumber } = formValues;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // eslint-disable-next-line consistent-return
  const handleSubmit = async () => {
    setLoading(true);
    // Remove unwanted properties from formValue object
    let form = {};

    Object.keys(formValues).map((name) => {
      form = {
        ...form,
        [name]: formValues[name].value,
      };
      return form;
    });
    const str = `
        Client Information
            '''Full Legal Name: 
                  First Name: ${form.firstName}
                  Last Name: ${form.lastName}
                  Contact Number: ${form.contactNumber}
                  Email Address: ${form.email}
                  Address
                      Street Address: ${form.streetAddress}
                      Street Address Line 2: ${form.streetAddressLine2}
                      City:${form.city}
                      State / Province:${form.state}
                      Postal / Zip Code:${form.zipCode}'''
        
            '''Personal Information
                    Marital Status:${form.maritalStatus}
                    Date of Birth:${form.dob}
                    Spouse's Name/Significant Other
                        First Name:${form.spouseFirstName}
                        Last Name:${form.spouseLastName}
                    Children's Names/Ages
                        Name:${form.childName}
                        Surname:${form.childSurname}
                        Age:${form.childAge} 
                    Drivers License Number:${form.driveLicenseNumber}
                    Social Security Number:${form.socialSecurityNumber}
                    Name of Emergency Contact
                        First Name:${form.necSpouseFirstName}
                        Last Name:${form.necSpouseLastName}
                    Relationship:${form.relationship}
                    Emergency Contact Information:${form.emergencyContactInformation}'''
            '''Accident Information:-
            Accident Date: ${form.accidentInformationDate}
            Accident Time: ${form.accidentInformationTime}
            Status Of Limitations: ${form.accidentInformationStatueOfLimitations}
            Location: ${form.accidentInformationLocation}
            How Did Happen?: ${form.accidentInformationHowDidHappen}
            Passengers in Vehicle:
              1 - name: ${form.accidentInformationPIVOneName}, surname: ${form.accidentInformationPIVOneSurname}
              2 - name: ${form.accidentInformationPIVTwoName}, surname: ${form.accidentInformationPIVTwoSurname}
              3 - name: ${form.accidentInformationPIVThreeName}, surname: ${form.accidentInformationPIVThreeSurname}
            Investigate By Police?: ${form.InvestigatedByPolice}
            Incident Number: ${form.incidentNumber}
            Statements given?: ${form.statementsGiven}
            Statement Given by: ${form.StatementGiverFirstName} ${form.StatementGiverLastName}
            '''
            '''Injuries":-
            Injuries Sustained in this Accident:${form.injuriesSustainedInThisAccident}
            Prior Injuries:${form.priorInjuries}
            Pre-Existing Conditions: ${form.preExistingConditions}
            Medical Conditions/Diseases: ${form.medicalConditionsDiseases}
            '''
            '''Client's Vehicle Information:-
            year: ${form.year}
            make: ${form.make}
            model: ${form.model}
            color: ${form.color}
            mileage: ${form.mileage}
            nameOfTowingCompany: ${form.nameOfTowingCompany}
            '''Medical Treatment Information:-
            Ambulance?: ${form.Ambulance}
            Name of Ambulance Service: ${form.nameOfAmbulanceService}
            Emergency Room?: ${form.emergencyRoom}
            Name of Emergency Room: ${form.nameOfEmergencyRoom}
            Who has paid your medical bills?: name: ${form.medicalBillPayFirstName} ${form.medicalBillPayLastName}
            Treating Physician: name: ${form.treatingPhysicianFirstName} ${form.treatingPhysicianLastName}
            Date of Service: ${form.dateOfService}
            Facility Address:-
                      Street Address: ${form.facilityStreetAddress}
                      Street Address Line 2: ${form.facilityStreetAddressLine2}
                      City: ${form.facilityCity}
                      State / Province: ${form.facilityState}
                      Postal / Zip Code: ${form.facilityZipCode}
                      Contact Number: ${form.facilityContactNumber}
                      Email Address: ${form.facilityEmail}
            '''
            '''Property Damage Information:-
            Property Damage Already Collected on Your Vehicle?: ${form.PDACOYV}
            Do you have an estimate for property damage?: ${form.DYHAEFPD}
            Do you have pictures of your vehicle?: ${form.DYHPOYD}
            '''
            '''Lost Wages:-
            Did you miss work as a result of this accident?:${form.DYMWAAOTA}  
            Employer name: ${form.employerFirstName} ${form.employerLastName}
            Employer contact number:${form.employerNumber}
            Employer email address:${form.employerEmail}
            If so, can you verify your lost wages?:${form.lostWages}
            Rate of Pay:${form.rateOfPay}
            Paid how often?:${form.paid}
            '''
        `;
    console.log('str----', str);
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          // prompt: 'generate demand latter based on give input',
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content:
                'you are lawyer bot and you need to generate the some document which one ask by user and also the details information is provided to you',
            },
            { role: 'user', content: JSON.stringify(str) },
            {
              role: 'user',
              content:
                'generate injure law demand latter based on client Information, and put the related information in side the form like name, address, dates etc',
            },
          ],
          // max_tokens: 50,  // Adjust the desired response length
          // temperature: 0.7,  // Adjust the temperature parameter for response randomness
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Extract the generated response from the API response
      if (response.data && response.data && response.data.choices && response.data.choices.length) {
        const generatedText = response.data.choices[0]?.message.content.trim();
        props.generateText(generatedText);
        handleNext();
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Something went wrong!', {
        variant: 'error',
        autoHideDuration: 2000,
      });
      return null;
    }
  };

  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemText primary="First Name" secondary={firstName.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Last Name" secondary={lastName.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Contact Number"
            secondary={contactNumber.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Email Address" secondary={email.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Date of birth" secondary={dob.value || 'Not Provided'} />
        </ListItem>
      </List>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <div className={classes.wrapper}>
          <Button sx={{ mr: 1 }} onClick={handleBack}>
            Back
          </Button>
          <Button
            variant="contained"
            color="success"
            disabled={loading}
            onClick={handleSubmit}
            className="rounded-none"
          >
            Confirm & Continue
          </Button>
          {loading && <CircularProgress size={20} className={classes.buttonProgress} />}
        </div>
      </Box>
    </>
  );
}

export default Confirm;
