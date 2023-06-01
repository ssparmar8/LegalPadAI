import { useCallback, useContext, useState } from 'react';
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
import { Grid, TextField } from '@mui/material';
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
  const { formValues, handleChange, handleNext, variant, margin } = useContext(AppContext);
  const { extraInformation } = formValues;

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({
        extraInformation,
      }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues, extraInformation]
  );

  const classes = useStyles();
  const { handleBack } = useContext(AppContext);
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
    //     const str = `
    // Client Information
    // Full Legal Name:
    //   First Name: ${form.firstName}
    //   Last Name: ${form.lastName}
    //   Contact Number: ${form.contactNumber}
    //   Email Address: ${form.email}
    //   Address
    //     Street Address: ${form.streetAddress}
    //     Street Address Line 2: ${form.streetAddressLine2}
    //     City:${form.city}
    //     State / Province:${form.state}
    //     Postal / Zip Code:${form.zipCode}

    // Personal Information
    //   Marital Status:${form.maritalStatus}
    //   Date of Birth:${form.dob}
    //   Spouse's Name/Significant Other
    //     First Name:${form.spouseFirstName}
    //     Last Name:${form.spouseLastName}
    //   Children's Names/Ages
    //      Name:${form.childName} Surname:${form.childSurname} Age:${form.childAge}
    //   Drivers License Number:${form.driveLicenseNumber}
    //   Social Security Number:${form.socialSecurityNumber}
    //   Name of Emergency Contact
    //     First Name:${form.necSpouseFirstName}
    //     Last Name:${form.necSpouseLastName}
    //     Relationship:${form.relationship}
    //     Emergency Contact Information:${form.emergencyContactInformation}

    // Accident Information:-
    //   Accident Date: ${form.accidentInformationDate}
    //   Accident Time: ${form.accidentInformationTime}
    //   Status Of Limitations: ${form.accidentInformationStatueOfLimitations}
    //   Location: ${form.accidentInformationLocation}
    //   How Did Happen?: ${form.accidentInformationHowDidHappen}
    //   Passengers in Vehicle:
    //     1 - name: ${form.accidentInformationPIVOneName}, surname: ${form.accidentInformationPIVOneSurname}
    //     2 - name: ${form.accidentInformationPIVTwoName}, surname: ${form.accidentInformationPIVTwoSurname}
    //     3 - name: ${form.accidentInformationPIVThreeName}, surname: ${form.accidentInformationPIVThreeSurname}
    //   Investigate By Police?: ${form.InvestigatedByPolice}
    //     Incident Number: ${form.incidentNumber}
    //   Statements given?: ${form.statementsGiven}
    //     Statement Given by: ${form.StatementGiverFirstName} ${form.StatementGiverLastName}

    // Injuries:-
    //   Injuries Sustained in this Accident:${form.injuriesSustainedInThisAccident}
    //   Prior Injuries:${form.priorInjuries}
    //   Pre-Existing Conditions: ${form.preExistingConditions}
    //   Medical Conditions/Diseases: ${form.medicalConditionsDiseases}

    // Client's Vehicle Information:-
    //   year: ${form.year}
    //   make: ${form.make}
    //   model: ${form.model}
    //   color: ${form.color}
    //   mileage: ${form.mileage}
    //   nameOfTowingCompany: ${form.nameOfTowingCompany}

    // Medical Treatment Information:-
    //   Ambulance?: ${form.Ambulance}
    //     Name of Ambulance Service: ${form.nameOfAmbulanceService}
    //   Emergency Room?: ${form.emergencyRoom}
    //     Name of Emergency Room: ${form.nameOfEmergencyRoom}
    //   Who has paid your medical bills?: name: ${form.medicalBillPayFirstName} ${form.medicalBillPayLastName}
    //   Treating Physician: name: ${form.treatingPhysicianFirstName} ${form.treatingPhysicianLastName}
    //   Date of Service: ${form.dateOfService}

    // Facility Address:-
    //   Street Address: ${form.facilityStreetAddress}
    //   Street Address Line 2: ${form.facilityStreetAddressLine2}
    //   City: ${form.facilityCity}
    //   State / Province: ${form.facilityState}
    //   Postal / Zip Code: ${form.facilityZipCode}
    //   Contact Number: ${form.facilityContactNumber}
    //   Email Address: ${form.facilityEmail}

    // Property Damage Information:-
    //   Property Damage Already Collected on Your Vehicle?: ${form.PDACOYV}
    //   Do you have an estimate for property damage?: ${form.DYHAEFPD}
    //   Do you have pictures of your vehicle?: ${form.DYHPOYD}

    // Lost Wages:-
    //   Did you miss work as a result of this accident?:${form.DYMWAAOTA}
    //   Employer name: ${form.employerFirstName} ${form.employerLastName}
    //   Employer contact number:${form.employerNumber}
    //   Employer email address:${form.employerEmail}
    //   If so, can you verify your lost wages?:${form.lostWages}
    //   Rate of Pay:${form.rateOfPay}
    //   Paid how often?:${form.paid}

    // Recipient Information:
    //   First Name: ${form.reFirstName}
    //   Last Name: ${form.reLastName}
    //   Contact Number: ${form.reContactNumber}
    //   Email Address: ${form.reEmail}
    //   Address:
    //     Street Address: ${form.reStreetAddress}
    //     Street Address Line 2: ${form.reStreetAddressLine2}
    //     City:${form.reCity}
    //     State / Province:${form.reState}
    //     Postal / Zip Code:${form.reZipCode}
    //     `;

    const str = `Client Information
Full Legal Name: 
  First Name: jethala
  Last Name: ghada
  Contact Number: 1123654789
  Email Address: ghada@gmail.com
  Address
    Street Address: rajkot
    Street Address Line 2: asdf
    City:rajkot
    State / Province:gujrat
    Postal / Zip Code:36000
        
Personal Information
  Marital Status:Married
  Date of Birth:1998-02-10
  Spouse's Name/Significant Other
    First Name:daya
    Last Name:ghada
  Children's Names/Ages
     Name:tapu Surname:ghada Age:20 
  Drivers License Number:212354687956413251
  Social Security Number:123123123123123123
  Name of Emergency Contact
    First Name:chahaji
    Last Name:ghada
    Relationship:father
    Emergency Contact Information:302010405060

Accident Information:-
  Accident Date: 2023-06-02
  Accident Time: 02:23
  Status Of Limitations: sol
  Location: loc
  How Did Happen?: by mistacks
  Passengers in Vehicle:
    1 - name: sonu, surname: sing
    2 - name: monu, surname: sing
    3 - name: tapu, surname: sing
  Investigate By Police?: Yes
    Incident Number: 12525
  Statements given?: Yes
    Statement Given by: bhide tukaram

Injuries:-
  Injuries Sustained in this Accident:normal
  Prior Injuries:normal
  Pre-Existing Conditions: normal
  Medical Conditions/Diseases: normal

Client's Vehicle Information:-
  year: 2010
  make: india
  model: honda 210
  color: red
  mileage: 20
  nameOfTowingCompany: tuk tuk towing

Medical Treatment Information:-
  Ambulance?: Yes
    Name of Ambulance Service: 108
  Emergency Room?: Yes
    Name of Emergency Room: icu
  Who has paid your medical bills?: name: tarak mehta
  Treating Physician: name: hanshraj hathi
  Date of Service: 2023-06-01

Facility Address:-
  Street Address: goludham
  Street Address Line 2: pawdargali
  City: mumbai
  State / Province: maharstra
  Postal / Zip Code: 35452
  Contact Number: 123654789
  Email Address: ghada@gmail.com
           
Property Damage Information:-
  Property Damage Already Collected on Your Vehicle?: Yes
  Do you have an estimate for property damage?: Yes
  Do you have pictures of your vehicle?: No
           
Lost Wages:-
  Did you miss work as a result of this accident?:Yes  
  Employer name: abdul hushen
  Employer contact number:46547894578931
  Employer email address:abdhgu@gmai.com
  If so, can you verify your lost wages?:no
  Rate of Pay:10000
  Paid how often?:2000
            
Recipient Information: 
  First Name: shyam
  Last Name: parmar
  Contact Number: 1236548979
  Email Address: shyam@gmail.com
  Address:
    Street Address: rajkot
    Street Address Line 2: rajkot
    City:rajkot
    State / Province:gujrat
    Postal / Zip Code:360001`;
    console.log('str----', str);

//     const prompt = `
// Client Information:
// Let's start with your information.
// What is your full legal name?
//   - First Name: ${form.firstName || ''}
//   - Last Name: ${form.lastName || ''}
// Please provide your contact number and email address.
//   - Contact Number: ${form.contactNumber || ''}
//   - Email Address: ${form.email || ''}
// Next, let's talk about your address.
// Please provide your street address, city, state/province, and postal/zip code.
// - Street Address: ${form.streetAddress || ''}
//   - City: ${form.city || ''}
//   - State / Province: ${form.state || ''}
//   - Postal / Zip Code: ${form.zipCode || ''}`;

// const prompt = `Client full name is ${form.firstName} ${form.lastName}, client first name is ${form.firstName}, client last name is ${form.lastName}, client’s contact number is ${form.contactNumber}, client’s email address is ${form.email}, client’s address is  ${form.streetAddress}, ${form.streetAddressLine2}, ${form.city},${form.state}, ${form.zipCode}`

const prompt = `
Client Information
Full Legal Name:
  First Name: ${form.firstName}
  Last Name: ${form.lastName}
Contact Number: ${form.contactNumber}
Email Address: ${form.email}
Address:
  Street Address: ${form.streetAddress}
  Street Address Line 2: ${form.streetAddressLine2}
  City: ${form.city}
  State / Province: ${form.state}
  Postal / Zip Code: ${form.zipCode}

Personal Information
Marital Status: ${form.maritalStatus}
Date of Birth: ${form.dob}
Spouse's Name/Significant Other
  First Name: ${form.spouseFirstName}
  Last Name: ${form.spouseLastName}
Children's Names/Ages
  Name: ${form.childName}
  Surname: ${form.childSurname}
  Age: ${form.childAge}
Drivers License Number: ${form.driveLicenseNumber}
Social Security Number: ${form.socialSecurityNumber}
Name of Emergency Contact
  First Name: ${form.necSpouseFirstName}
  Last Name: ${form.necSpouseLastName}
Relationship: ${form.relationship}
Emergency Contact Information: ${form.emergencyContactInformation}

Accident Information:
Accident Date: ${form.accidentInformationDate}
Accident Time: ${form.accidentInformationTime}
Status Of Limitations: ${form.accidentInformationStatueOfLimitations}
Location: ${form.accidentInformationLocation}
How Did It Happen?: ${form.accidentInformationHowDidHappen}
Passengers in Vehicle:
  1 - Name: ${form.accidentInformationPIVOneName}, Surname: ${form.accidentInformationPIVOneSurname}
  2 - Name: ${form.accidentInformationPIVTwoName}, Surname: ${form.accidentInformationPIVTwoSurname}
  3 - Name: ${form.accidentInformationPIVThreeName}, Surname: ${form.accidentInformationPIVThreeSurname}
Investigated By Police?: ${form.InvestigatedByPolice}
Incident Number: ${form.incidentNumber}
Statements given?: ${form.statementsGiven}
Statement Given by: ${form.StatementGiverFirstName} ${form.StatementGiverLastName}

Injuries:
Injuries Sustained in this Accident: ${form.injuriesSustainedInThisAccident}
Prior Injuries: ${form.priorInjuries}
Pre-Existing Conditions: ${form.preExistingConditions}
Medical Conditions/Diseases: ${form.medicalConditionsDiseases}

Client's Vehicle Information:
Year: ${form.year}
Make: ${form.make}
Model: ${form.model}
Color: ${form.color}
Mileage: ${form.mileage}
Name of Towing Company: ${form.nameOfTowingCompany}

Medical Treatment Information:
Ambulance?: ${form.Ambulance}
Name of Ambulance Service: ${form.nameOfAmbulanceService}
Emergency Room?: ${form.emergencyRoom}
Name of Emergency Room: ${form.nameOfEmergencyRoom}
Who has paid your medical bills? Name: ${form.medicalBillPayFirstName} ${form.medicalBillPayLastName}
Treating Physician: Name: ${form.treatingPhysicianFirstName} ${form.treatingPhysicianLastName}
Date of Service: ${form.dateOfService}
Facility Address:
  Street Address: ${form.facilityStreetAddress}
  Street Address Line 2: ${form.facilityStreetAddressLine2}
  City: ${form.facilityCity}
  State / Province: ${form.facilityState}
  Postal / Zip Code: ${form.facilityZipCode}

Recipient Information
Full Legal Name:
  First Name: ${form.reFirstName}
  Last Name: ${form.reLastName}
Contact Number: ${form.reContactNumber}
Email Address: ${form.reEmail}
Address:
  Street Address: ${form.reStreetAddress}
  Street Address Line 2: ${form.reAddressLine2}
  City: ${form.reCity}
  State / Province: ${form.reState}
  Postal / Zip Code: ${form.reZipCode}

incident details: ${form.extraInformation}
`;


  console.log('promptpromptpromptpromptprompt', prompt)
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a lawyer helping a client draft a demand letter.' },
            {
              role: 'user',
              content: `Create a demand letter  by combining the provided information. The demand letter should be well-formatted and include appropriate salutations, headers, and footers.
              `,
            },
            {
              role: 'assistant', content: prompt
            },
          ],
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
        console.log(generatedText);
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
      <Grid item xs={12} sm={4}>
        <TextField
          variant={variant}
          margin={margin}
          fullWidth
          label="Write a Short Summary Of Issue"
          name="extraInformation"
          placeholder="Write a Short Summary Of Issue"
          value={extraInformation?.value}
          onChange={handleChange}
        />
      </Grid>
      {/* <List disablePadding>
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
      </List> */}

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
            Confirm And Generate Demand Letter
          </Button>
          {loading && <CircularProgress size={20} className={classes.buttonProgress} />}
        </div>
      </Box>
    </>
  );
}

export default Confirm;
