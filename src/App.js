// import logo from './logo.svg';
import './App.css';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import axios from 'axios'

function App() {
  const [setData] = useState({})
  const [text, setText] = useState("")

  return (
    <div className="container">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          contactNumber: '',
          email: "",
          streetAddress: "",
          streetAddressLine2: "",
          city: "",
          state: "",
          zipCode: "",
          maritalStatus: "",
          dob: "",
          childName: "",
          childSurname: "",
          childAge: "",
          driveLicenseNumber: "",
          socialSecurityNumber: "",
          necSpouseFirstName: "",
          necSpouseLastName: "",
          relationship: "",
          emergencyContactInformation: "",
          more: "",
        }}
        onSubmit={async (values) => {
          setData(values)
          console.log('value----------------', values)
          const { firstName,
            lastName,
            contactNumber,
            email,
            streetAddress,
            streetAddressLine2,
            city,
            state,
            zipCode,
            maritalStatus,
            dob,
            childName,
            childSurname,
            childAge,
            driveLicenseNumber,
            socialSecurityNumber,
            necSpouseFirstName,
            necSpouseLastName,
            spouseFirstName,
            spouseLastName,
            relationship,
            emergencyContactInformation } = values
          const str = `
        Client Information
            Full Legal Name: 
                  First Name: ${firstName}
                  Last Name: ${lastName}
                  Contact Number: ${contactNumber}
                  Email Address: ${email}
                  Address
                      Street Address: ${streetAddress}
                      Street Address Line 2: ${streetAddressLine2}
                      City:${city}
                      State / Province:${state}
                      Postal / Zip Code:${zipCode}
        
        Personal Information
            Marital Status:${maritalStatus}
            Date of Birth:${dob}
            Spouse's Name/Significant Other
                First Name:${spouseFirstName}
                Last Name:${spouseLastName}
            Children's Names/Ages
                Name:${childName}
                Surname:${childSurname}
                Age:${childAge} 
            Drivers License Number:${driveLicenseNumber}
            Social Security Number:${socialSecurityNumber}
            Name of Emergency Contact
                First Name:${necSpouseFirstName}
                Last Name:${necSpouseLastName}
            Relationship:${relationship}
            Emergency Contact Information:${emergencyContactInformation}

            generate law demand latter based on give input
        
        `
          try {
            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
              // prompt: 'generate demand latter based on give input',
              model: 'gpt-3.5-turbo',
              messages: [{ role: 'user', content: JSON.stringify(str) }]
              // max_tokens: 50,  // Adjust the desired response length
              // temperature: 0.7,  // Adjust the temperature parameter for response randomness
            }, {
              headers: {
                'Authorization': 'Bearer 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',
                'Content-Type': 'application/json',
              },
            });

            // Extract the generated response from the API response
            const generatedText = response.data.choices[0]?.message.content.trim();
            setText(generatedText)
            console.log('generatedText', generatedText)
          } catch (error) {
            console.error('ChatGPT API request error:', error);
            return null;
          }

          console.log(str);

        }}
      >
        <Form>
          <div className='col-lg-12 col-sm-12 col-md-12'>

            <h4 className='caption-color'>General Information</h4>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label>First Name</label>
                <Field id="firstName" name="firstName" placeholder="First Name" className="form-control" />
              </div>
              <div className="form-group col-md-4">
                <label>Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Last Name" className="form-control" />
              </div>
              <div className="form-group col-md-4">
                <label>Contact Number</label>
                <Field id="contactNumber" name="contactNumber" placeholder="Contact Number" className="form-control" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label>Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                  className="form-control"
                />
              </div>

              <div className="form-group col-md-4">
                <label>Street Address</label>
                <Field id="streetAddress" name="streetAddress" placeholder="Street Address" className="form-control" />
              </div>

              <div className="form-group col-md-4">
                <label>Street Address Line 2</label>
                <Field id="streetAddressLine2" name="streetAddressLine2" placeholder="Street Address Line 2" className="form-control" />
              </div>
            </div>

            <div className="form-row">

              <div className="form-group col-md-4">
                <label>City</label>
                <Field id="city" name="city" placeholder="City" className="form-control" />
              </div>

              <div className="form-group col-md-4">
                <label>State / Province</label>
                <Field id="state" name="state" placeholder="State / Province" className="form-control" />
              </div>

              <div className="form-group col-md-4">
                <label>Postal / Zip Code</label>
                <Field id="zipCode" name="zipCode" placeholder="Postal / Zip Code" className="form-control" />
              </div>
            </div>
            <hr/>
            <h4 className='caption-color'>Personal Information</h4>
            <div role="group" aria-labelledby="my-radio-group">

              <div className="form-row">
                <div className="form-group col-md-5">

                  <label>Marital Status </label>
                  <div className="row">
                    <div className="form-check">
                      <Field type="radio" name="maritalStatus" value="Single" id="gridRadios1" />
                      <label className="form-check-label" htmlFor="gridRadios1">&nbsp;
                        Single
                      </label>
                    </div>
                    <div className="form-check">
                      <Field type="radio" name="maritalStatus" value="Married" id="gridRadios2"/>
                      <label className="form-check-label" htmlFor="gridRadios2">&nbsp;
                        Married
                      </label>
                    </div>
                    <div className="form-check disabled">
                      <Field type="radio" name="maritalStatus" value="Divorced" id="gridRadios3" />
                      <label className="form-check-label" htmlFor="gridRadios3">&nbsp;
                        Divorced
                      </label>
                    </div>
                    <div className="form-check disabled">
                      <Field type="radio" name="maritalStatus" value="Window" id="gridRadios4"/>
                      <label className="form-check-label" htmlFor="gridRadios4">&nbsp;
                        Window
                      </label>
                    </div>
                  </div>


                </div>
                <div className="form-group col-md-4">
                  <label>Last Name</label>
                  <Field id="lastName" name="lastName" placeholder="Last Name" className="form-control" />
                </div>
                <div className="form-group col-md-3">
                  <label>Contact Number</label>
                  <Field id="contactNumber" name="contactNumber" placeholder="Contact Number" className="form-control" />
                </div>
              </div>

              <fieldset>
                <legend><p className="blue">Spouse's Name/Significant Other</p></legend>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>First Name</label>
                    <Field id="spouseFirstName" name="spouseFirstName" placeholder="First Name" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Last Name</label>
                    <Field id="spouseLastName" name="spouseLastName" placeholder="Last Name" className="form-control" />
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend><p className="blue">Children's Names/Ages</p></legend>
              
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>Name</label>
                  <Field id="childName" name="childName" placeholder="Name" className="form-control" />
                </div>
                <div className="form-group col-md-4">
                  <label>Surname</label>
                  <Field id="childSurname" name="childSurname" placeholder="Surname" className="form-control" />
                </div>
                <div className="form-group col-md-4">
                  <label>Age</label>
                  <Field id="childAge" name="childAge" placeholder="age" className="form-control" />
                </div>
              </div>
              </fieldset>

              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>Date Of Birth</label>
                  <Field id="dob" name="dob" type="date" placeholder="Date Of Birth" className="form-control" />
                </div>
                <div className="form-group col-md-4">
                  <label>Drivers License Number</label>
                  <Field id="driveLicenseNumber" name="driveLicenseNumber" placeholder="Drivers License Number" className="form-control" />
                </div>
                <div className="form-group col-md-4">
                  <label>Social Security Number</label>
                  <Field id="socialSecurityNumber" name="socialSecurityNumber" placeholder="Social Security Number" className="form-control" />
                </div>
              </div>

              <fieldset>
                <legend><p className="blue">Name of Emergency Contact</p></legend>
              
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>First Name</label>
                  <Field id="necSpouseFirstName" name="necSpouseFirstName" placeholder="First Name" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label>Last Name</label>
                  <Field id="necSpouseLastName" name="necSpouseLastName" placeholder="Last Name" className="form-control" />
                </div>
              </div>
              </fieldset>


              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Relationship</label>
                  <Field id="relationship" name="relationship" placeholder="Relationship" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label>Emergency Contact Information</label>
                  <Field id="emergencyContactInformation" name="emergencyContactInformation" placeholder="Emergency Contact Information" className="form-control" />
                </div>
              </div>

              <fieldset>
                <legend> <p className="blue">Prior Criminal Record</p></legend>
             
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label>If yes, please explain.</label>
                  <Field id="necSpouseFirstName" name="necSpouseFirstName" placeholder="Enter Text" className="form-control" as="textarea"/>
                </div>
              </div>
              </fieldset>

            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </Form>
      </Formik>
      <hr/>
        <div className='col-lg-12 col-sm-12 col-md-12'>
          <h4 className='caption-color'>Generated Text</h4>
        </div>
      
      <div>{text}</div>
    </div>
  );
}

export default App;
