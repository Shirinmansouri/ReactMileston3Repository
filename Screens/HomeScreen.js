import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, TouchableHighlight } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ListAllPatientsScreen from '../Screens/ListAllPatientsScreen';
import ViewPatientScreen from '../Screens/ViewPatientScreen';
import NavigationContainer from '@react-navigation/native'
import Icon  from 'react-native-vector-icons/Ionicons';
import AddNewPatient from '../Screens/AddNewPatient';

Icon.loadFont()
const Tab=createMaterialTopTabNavigator();
class  HomeScreen extends Component {
   constructor(props){
     super(props);
   }
   render()
   {
    return (
      <Tab.Navigator
      screenOptions=
      {{

        tabBarLabelStyle: { fontSize: 40 },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: 'powderblue' }},

        ({route})=>({
        tabBarIcon : ({focused,size,color}) => {
          let iconName;
          if(route.name=== 'New Patients'){
            iconName="people";
            size= focused? 25 :20;
          }
          else if (route.name==='View Patients')
          {
            iconName="list";
                size= focused? 25 :20;
          }
          else if (route.name==='List Patients')
          {
            iconName="list";
                size= focused? 25 :20;
          }
          return (
                <Icon  size={size} name={iconName}/>
            );
        }
        })
      }
        >

         <Tab.Screen
          name ="New Patients"
          component={AddNewPatient}
        />

      <Tab.Screen
        name ="View Patients"
        component={ViewPatientScreen}
      />
      <Tab.Screen
        name ="List Patients"
        component={ListAllPatientsScreen}
    />
      </Tab.Navigator>


    );
  }
}


export default HomeScreen;
