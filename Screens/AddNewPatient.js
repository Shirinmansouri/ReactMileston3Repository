import React from 'react'
import {TextInput,View, Text, Alert,TouchableOpacity} from 'react-native'
import {GlobalStyles} from '../Style/Global';
import {useState} from 'react';
import DatePicker from 'react-native-neat-date-picker'


const AddNewPatient = ({navigation, route})=>{

  var [firstName, onChangeText] = React.useState('');
  var [lastName, onChangeText2] = React.useState('');
  var [doctor, onChangeText3] = React.useState('');
  var [department, onChangeText4] = React.useState('');
  var [dateOfBirth, onChangeText5] = React.useState('');
  var [address, onChangeText6] = React.useState('');
  var [servicePlan, onChangeText7] = React.useState('');
  var [phone, onChangeText8] = React.useState('');

  const clearAll = () => {
    onChangeText('');
    onChangeText2('');
    onChangeText3('');
    onChangeText4('');
    onChangeText5('');
    onChangeText6('');
    onChangeText7('');
    onChangeText8('');
  }
  const cancelAll = () => {
    clearAll();
    alert("Cancelled");
  }

  const [showDatePicker, setShowDatePicker] = useState(false)

  const addPatient = async () => {

    //start input validation
    if (firstName.trim().length == 0) {
      Alert.alert('Error', 'First Name is mandatory');
      return;
    }
    if (lastName.trim().length == 0) {
      Alert.alert('Error', 'Last Name is mandatory');
      return;
    }
    if (doctor.trim().length == 0) {
      Alert.alert('Error', 'Doctor is mandatory');
      return;
    }
    if (department.trim().length == 0) {
      Alert.alert('Error', 'Department is mandatory');
      return;
    }
    if (dateOfBirth.trim().length == 0) {
      Alert.alert('Error', 'Date of Birth is mandatory');
      return;
    }
    if (address.trim().length == 0) {
      Alert.alert('Error', 'Address is mandatory');
      return;
    }
    if (servicePlan.trim().length == 0) {
      Alert.alert('Error', 'Service Plan is mandatory');
      return;
    }
    if (phone.trim().length == 0) {
      Alert.alert('Error', 'Phone is mandatory');
      return;
    }
    if (isNaN(phone.trim())) {
      Alert.alert('Error', 'Phone must be a number');
      return;
    }
    //end input validation

    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        doctor: doctor,
        department: department,
        servicePlan: servicePlan,
        address: address,
        phone: phone
      })
    };
    try{
      const URL = 'https://patient-mobile-application.herokuapp.com'
      const response = await fetch( URL + '/patients', requestOptions).catch(err => console.log(err));
      // console.log(response._bodyBlob)
      // console.log(response)
      // const data = await response.json();
      // console.log(data)
    } catch (error) {
      alert("Error in server connection!");
      console.error(error);
    }
    clearAll();
    alert("New patient has been added");
    navigation.navigate("View Patients", {msg: 'New patient has been added successfully'});
  }
  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
  }

  const onConfirm = ( date ) => {
    // You should close the modal in here
    setShowDatePicker(false)
    onChangeText5(date.toString().split(" 00:00", 1).toString())
    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(date.getDate())

  }
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<View style={[GlobalStyles.textButtonRowContainer]}>
    <Text>First Name:        </Text>
  <TextInput
  style={[GlobalStyles.textInputContainer]}
  placeholder="Enter your first name"
  placeholderTextColor="gray"
  onChangeText={text => onChangeText(text)}
  value={firstName}
  />
   <View style={{width:"12%",
    height:15,
    alignItems:"center",
    justifyContent:"center",
    margin: 5}}></View>
  </View>
  <View style={[GlobalStyles.textButtonRowContainer]}>
    <Text>Last Name:        </Text>
  <TextInput
  style={[GlobalStyles.textInputContainer]}
  placeholder="Enter your last name"
  placeholderTextColor="gray"
  onChangeText={text => onChangeText2(text)}
  value={lastName}
  />
   <View style={{width:"12%",
    height:15,
    alignItems:"center",
    justifyContent:"center",
    margin: 5}}></View>
  </View>
  <View style={[GlobalStyles.textButtonRowContainer]}>
    <Text>Doctor:               </Text>
  <TextInput
  style={[GlobalStyles.textInputContainer]}
  placeholder="Enter your doctor name"
  placeholderTextColor="gray"
  onChangeText={text => onChangeText3(text)}
  value={doctor}
  />
   <View style={{width:"12%",
    height:15,
    alignItems:"center",
    justifyContent:"center",
    margin: 5}}></View>
  </View>
  <View style={[GlobalStyles.textButtonRowContainer]}>
    <Text>Department:       </Text>
  <TextInput
  style={[GlobalStyles.textInputContainer]}
  placeholder="Enter your department name"
  placeholderTextColor="gray"
  onChangeText={text => onChangeText4(text)}
  value={department}
  />
   <View style={{width:"12%",
    height:15,
    alignItems:"center",
    justifyContent:"center",
    margin: 5}}></View>
  </View>


  <View style={[GlobalStyles.textButtonRowContainer]}>
    <Text>HealthID:            </Text>
  <TextInput
  style={[GlobalStyles.textInputContainer]}
  placeholder="Enter HealthID"
  placeholderTextColor="gray"
  onChangeText={text => onChangeText7(text)}
  value={servicePlan}
  />
  <View style={{width:"12%",
    height:15,
    alignItems:"center",
    justifyContent:"center",
    margin: 5}}></View>
  </View>

  <View style={[GlobalStyles.textButtonRowContainer]}>
    <Text>Date of Birth:     </Text>
  <TextInput
  style={[GlobalStyles.textInputContainer]}
  placeholder="             /            /            "
  placeholderTextColor="gray"
  onChangeText={text => onChangeText5(text)}
  value={dateOfBirth}
  />
  <View style={{width:"12%",
    backgroundColor:"orange",
    height:15,
    alignItems:"center",
    justifyContent:"center",
    margin: 5}}>

<TouchableOpacity onPress={openDatePicker}>

    <Text>Pick</Text>
    <DatePicker
  isVisible={showDatePicker}
  mode={'single'}
  onCancel={onCancel}
  onConfirm={onConfirm}
  />

  </TouchableOpacity>


  </View>
  </View>
  <View style={[GlobalStyles.textButtonRowContainer]}>
    <Text>Address:            </Text>
  <TextInput
  style={[GlobalStyles.textInputContainer]}
  placeholder="Enter your address"
  placeholderTextColor="gray"
  onChangeText={text => onChangeText6(text)}
  value={address}
  />
   <View style={{width:"12%",
    height:15,
    alignItems:"center",
    justifyContent:"center",
    margin: 5}}></View>
  </View>

  <View style={[GlobalStyles.textButtonRowContainer]}>
    <Text>Phone:                </Text>
  <TextInput
  style={[GlobalStyles.textInputContainer]}
  placeholder="Enter your phone"
  placeholderTextColor="gray"
  onChangeText={text => onChangeText8(text)}
  value={phone}
  />
   <View style={{width:"12%",
    height:15,
    alignItems:"center",
    justifyContent:"center",
    margin: 5}}></View>
  </View>


  <View style={{flex: 1 , flexDirection: 'row' }}>
<View style={[GlobalStyles.appButtonContainer ,  {flex: 1 ,flexDirection:'column' }]}>
<TouchableOpacity
  onPress={addPatient}
    >
    <Text style = {GlobalStyles.appButtonText}>Add</Text>
    </TouchableOpacity>
    </View>

    <View style={[GlobalStyles.appButtonContainer ,  {flex: 1 ,flexDirection:'column' }]}>


<TouchableOpacity onPress={cancelAll}>
    <Text style = {GlobalStyles.appButtonText}>Cancel</Text>
    </TouchableOpacity>
    </View>

    </View>
    </View>
);
}



export default AddNewPatient;
