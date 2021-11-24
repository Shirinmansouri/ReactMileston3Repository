import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, TouchableHighlight,Button,Alert,TouchableOpacity} from 'react-native'
import {GlobalStyles} from '../Style/Global';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DatePicker from 'react-native-neat-date-picker'


const AddNewPatient = ({navigation, route})=> {
  var [firstName, onChangeText] = React.useState('');
  var [lastName, onChangeText2] = React.useState('');
  var [doctor, onChangeText3] = React.useState('');
  var [department, onChangeText4] = React.useState('');
  var [dateOfBirth, onChangeText5] = React.useState('');
  var [address, onChangeText6] = React.useState('');
  var [servicePlan, onChangeText7] = React.useState('');
  var [phone, onChangeText8] = React.useState('');
  // const [count, setCount] = React.useState(0);
  // const onPress = () => setCount(prevCount => lastName / (firstName/100) / (firstName/ 100));
  const [cancelPressed, setCancel] = React.useState(0);
  // const onPress = () => setCancel(prevCount => lastName = "");
  const onPress = () => {
    setCancel(prevCount => lastName = "")
  }

    const [showDatePicker, setShowDatePicker] = useState(false)


  const addPatinet = async () => {


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

    const response = await fetch('http://127.0.0.1:5000/patients', requestOptions).
    catch(err => console.log(err));

  } catch (error) {
    console.error(error);
  }
 
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
      </View>


      <View style={[GlobalStyles.textButtonRowContainer]}>
        <Text>servicePlan:        </Text>
        <TextInput
          style={[GlobalStyles.textInputContainer]}
          placeholder="Enter service plan"
          placeholderTextColor="gray"
          onChangeText={text => onChangeText7(text)}
          value={servicePlan}
        />
      </View>

      <View style={[GlobalStyles.textButtonRowContainer]}>
        <Text>Date of Birth:    </Text>
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
        <Text>Address:              </Text>
        <TextInput
          style={[GlobalStyles.textInputContainer]}
          placeholder="Enter your address"
          placeholderTextColor="gray"
          onChangeText={text => onChangeText6(text)}
          value={address}
        />
      </View>

      <View style={[GlobalStyles.textButtonRowContainer]}>
        <Text>Phone:                 </Text>
        <TextInput
          style={[GlobalStyles.textInputContainer]}
          placeholder="Enter your phone"
          placeholderTextColor="gray"
          onChangeText={text => onChangeText8(text)}
          value={phone}
        />
      </View>


      <View style={{flex: 1 , flexDirection: 'row' }}>
              <View style={[GlobalStyles.appButtonContainer ,  {flex: 1 ,flexDirection:'column' }]}>
        <TouchableOpacity
          onPress={addPatinet}
        >
          <Text style = {GlobalStyles.appButtonText}>Add</Text>
        </TouchableOpacity>
        </View>

              <View style={[GlobalStyles.appButtonContainer ,  {flex: 1 ,flexDirection:'column' }]}>


                  <TouchableOpacity onPress={onPress}>
          <Text style = {GlobalStyles.appButtonText}>Cancel</Text>
        </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}


export default AddNewPatient;
