export default {
     async fetchPatientRecords(id){
    try {
      const response = await fetch(
        'http://127.0.0.1:5000/patients/' + id + '/tests'
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  },
  async fetchPatients(){
  try {
   const response = await fetch(
'http://127.0.0.1:5000/patients'
   );
   const json = await response.json();
   return json;
  } catch (error) {
   console.error(error);
  }
  },
  async fetchPatientbyId(id){
    try {
      const response = await fetch(
        'http://127.0.0.1:5000/patients/' + id
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  }
};
