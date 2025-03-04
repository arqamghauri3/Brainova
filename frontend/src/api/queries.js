import axios from "axios";

const viewPatient = async ({ user }) => {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/profile/${user}`,
    {
      headers:{
        "Content-Type": "application/json"
      }
    }
  );
  return response.data;
};

export { viewPatient };
