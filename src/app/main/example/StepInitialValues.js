import { ValidationSchema } from './StepContext.tsx';

export const initialValues: ValidationSchema = {
  firstName: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message',
  },
  lastName: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
  },
  contactNumber: {
    value: '',
    error: '',
    validate: 'phone',
    maxLength: 15,
    required: true,
  },
  email: {
    value: '',
    error: '',
    validate: 'email',
    required: true,
  },
  streetAddress: {
    value: '',
    error: '',
  },
  streetAddressLine2: {
    value: '',
    error: '',
  },
  zipCode: {
    value: '',
    error: '',
    validate: 'zip',
  },
  childName: {
    value: '',
    error: '',
  },
  childSurname: {
    value: '',
    error: '',
  },
  driveLicenseNumber: {
    value: '',
    error: '',
  },
  socialSecurityNumber: {
    value: '',
    error: '',
  },
  necSpouseFirstName: {
    value: '',
    error: '',
  },
  necSpouseLastName: {
    value: '',
    error: '',
  },
  childAge: {
    value: '',
    error: '',
    validate: 'age',
    maxLength: 3,
  },
  maritalStatus: {
    value: '',
    error: '',
  },
  spouseFirstName: {
    value: '',
    error: '',
  },
  spouseLastName: {
    value: '',
    error: '',
  },
  relationship: {
    value: '',
    error: '',
  },
  emergencyContactInformation: {
    value: '',
    error: '',
  },
  more: {
    value: '',
    error: '',
  },
  gender: {
    value: '',
    error: '',
    validate: 'select',
  },
  dob: {
    value: '',
    error: '',
  },
  city: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 2,
    maxLength: 20,
  },
  state: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 2,
    maxLength: 20,
  },
  agreenemt: {
    value: false,
    error: '',
    required: true,
    validate: 'checkbox',
    helperText: 'Please accept our terms and conditions',
  },
  phone: {
    value: '',
    error: '',
    validate: 'phone',
    maxLength: 15,
  },
  accidentInformationDate: { value: '', error: '' },
  accidentInformationTime: { value: '', error: '' },
  accidentInformationStatueOfLimitations: {
    value: '',
    error: '',
  },
  accidentInformationLocation: {
    value: '',
    error: '',
  },
  accidentInformationHowDidHappen: { value: '', error: '' },
  accidentInformationPIVOneName: {},
  accidentInformationPIVOneSurname: { value: '', error: '' },
  accidentInformationPIVTwoName: { value: '', error: '' },
  accidentInformationPIVTwoSurname: { value: '', error: '' },
  accidentInformationPIVThreeName: { value: '', error: '' },
  accidentInformationPIVThreeSurname: { value: '', error: '' },
  InvestigatedByPolice: { value: '', error: '' },
  incidentNumber: { value: '', error: '' },
  statementsGiven: { value: '', error: '' },
  StatementGiverFirstName: { value: '', error: '' },
  StatementGiverLastName: { value: '', error: '' },
  formValues: { value: '', error: '' },
  injuriesSustainedInThisAccident: { value: '', error: '' },
  priorInjuries: { value: '', error: '' },
  preExistingConditions: { value: '', error: '' },
  medicalConditionsDiseases: { value: '', error: '' },
  year: { value: '', error: '' },
  make: { value: '', error: '' },
  model: { value: '', error: '' },
  color: { value: '', error: '' },
  mileage: { value: '', error: '' },
  nameOfTowingCompany: { value: '', error: '' },
  PDACOYV: { value: '', error: '' },
  DYHAEFPD: { value: '', error: '' },
  DYHPOYD: { value: '', error: '' },
  Ambulance: { value: '', error: '' },
  nameOfAmbulanceService: { value: '', error: '' },
  emergencyRoom: { value: '', error: '' },
  nameOfEmergencyRoom: { value: '', error: '' },
  medicalBillPayFirstName: { value: '', error: '' },
  medicalBillPayLastName: { value: '', error: '' },
  treatingPhysicianFirstName: { value: '', error: '' },
  treatingPhysicianLastName: { value: '', error: '' },
  dateOfService: { value: '', error: '' },
  facilityStreetAddress: { value: '', error: '' },
  facilityStreetAddressLine2: { value: '', error: '' },
  facilityCity: { value: '', error: '' },
  facilityState: { value: '', error: '' },
  facilityZipCode: { value: '', error: '' },
  facilityContactNumber: { value: '', error: '' },
  facilityEmail: { value: '', error: '' },
  DYMWAAOTA: { value: '', error: '' },
  employerFirstName: { value: '', error: '' },
  employerLastName: { value: '', error: '' },
  employerNumber: { value: '', error: '' },
  employerEmail: { value: '', error: '' },
  lostWages: { value: '', error: '' },
  rateOfPay: { value: '', error: '' },
  paid: { value: '', error: '' },
  reFirstName: { value: '', error: '' },
  reLastName: { value: '', error: '' },
  reContactNumber: { value: '', error: '' },
  reEmail: { value: '', error: '' },
  reStreetAddress: { value: '', error: '' },
  reStreetAddressLine2: { value: '', error: '' },
  reCity: { value: '', error: '' },
  reState: { value: '', error: '' },
  reZipCode: { value: '', error: '' },
  extraInformation: { value: '', error: '' },
};
