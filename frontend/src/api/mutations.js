import axios from "axios";
import { useSelector } from "react-redux";

const createPatient = async ({ user, age, gender }) => {
  // Get the access token from Redux store
  const accessToken = useSelector((state) => state.auth.access);

  const response = await axios.post(
    "http://127.0.0.1:8000/api/patients/create/",
    { user, age, gender },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`, // Include access token
      },
    }
  );

  return response.data;
};

export default createPatient;
