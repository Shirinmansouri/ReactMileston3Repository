export default {

     async fetchPatientRecords(id){
      const URL = 'https://patient-mobile-application.herokuapp.com'
    try {
      const response = await fetch(
       // 'http://127.0.0.1:5000/patients/' + id + '/tests'
       URL + '/patients/' + id + '/tests'
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  },
  async fetchPatients(){
    const URL = 'https://patient-mobile-application.herokuapp.com'
  try {
   const response = await fetch(
    //'http://127.0.0.1:5000/patients'
    URL + '/patients'
   );
   const json = await response.json();
   return json;
  } catch (error) {
   console.error(error);
  }
  },
  async fetchPatientsBySearch(servicePlan, firstName, lastName){
    //const URL = 'http://127.0.0.1:5000'
   const URL =  'https://patient-mobile-application.herokuapp.com'
  try {
   const response = await fetch(
    //'https://patient-mobile-application.herokuapp.com'
    URL + '/patientsbyhealthid' + '/' + servicePlan + '/' + firstName + '/' + lastName
   );
   const json = await response.json();
   return json;
  } catch (error) {
   console.error(error);
  }
},
  async fetchPatientbyId(id){
    const URL = 'https://patient-mobile-application.herokuapp.com'
    try {
      const response = await fetch(
        URL + '/patients/' + id
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  }
};
