import axios from "axios";
import { useSelector } from "react-redux";

const createPatient = async ({ user, age, gender, accessToken }) => {
  const response = await axios.post(
    "http://127.0.0.1:8000/api/patients/create/",
    { user, age, gender },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};


export { createPatient };
