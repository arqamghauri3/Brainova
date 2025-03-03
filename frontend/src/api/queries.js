import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBooks = async () => {
    const { data } = await axios.get("http://127.0.0.1:8000/api/patients/");
    return data;
  };
  
const {} = useQuery({
    queryKey: ['patient'],
    queryFn: () => {

    }
})