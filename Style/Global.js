import {StyleSheet} from 'react-native';

export const GlobalStyles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  contentflex: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ABD3EC',
      borderRadius: 10,
  },
  appButtonContainer: {
    elevation: 1,
    backgroundColor: "#60839C",
    borderRadius: 10,
    paddingVertical: 10,
   marginHorizontal: 20,
   height: 45,
   margin: 10,
  },
  appButtonContainerTwo: {
    elevation: 1,
    backgroundColor: "#60839C",
    borderRadius: 10,
    paddingVertical: 10,
   marginHorizontal: 20,
   height: 45,
   margin: 10,
  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  appButtonTextTwo: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  tableButton: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  recordContainer: {
    paddingTop:30,
    justifyContent: 'space-around',
    marginHorizontal: 16,
  },
  patientData: {
    padding: 20,
    backgroundColor: '#ABD3EC',
    fontSize: 10,
    fontWeight: "bold",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  recordRow: {
    fontSize: 10,
    fontWeight: "bold",
  },
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pickedDateContainer: {
  padding: 20,
  backgroundColor: '#eee',
  borderRadius: 10,
},
pickedDate: {
  fontSize: 18,
  color: 'black',
},
btnContainer: {
    padding: 50,
  },
  dropDownContainer :{
    height: 40 ,
    width: 210,
    margin: 10,
    zIndex: 1000,
    elevation: 1000

  },
  textInputStyles: {
   height: 50,
   margin: 10,
   borderWidth: 2,
   padding: 0,
   width: 200,
   backgroundColor: '#fafafa',
   borderRadius: 10,

 },
 titleText :
 {
   fontWeight: 'bold',
   paddingHorizontal: 10,
   paddingVertical: 12,
 },
 pickerStyle :
 {
   flex: 1,
   paddingTop: 40,
   alignItems: "center",
   width: 100,
   height: 100,
 },
 textInputContainer :
 {
   height: 20,
   alignItems: 'flex-end',
   borderColor: 'gray',
   borderWidth: 1,
   width: 150,
   color: "black",
  },
  textButtonRowContainer :
  {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: "row",
    marginTop:10,
    marginBottom:0,
  },
  pickerItem: {

    marginTop: 0,
    paddingTop: 0,
    marginLeft: 0,
    backgroundColor: 'transparent',

  },

  picker: {
    width:  300,
   paddingBottom: 0,
   paddingLeft: 0,
   marginLeft: 0,
   marginRight: 0,
   transform: [{ scaleX: 0.6 }, { scaleY: 1 }],

   backgroundColor: 'transparent',

  },
});
