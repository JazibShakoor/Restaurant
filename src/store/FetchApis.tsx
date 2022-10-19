import { useState } from "react";

type Api = {
  id: string, name: string; image: string, discount?: number
};

//to tell react that we are making custome-hook
const useFetchApi = () => {
  const [data, setData] = useState<Api[]>([]);

  const fetchedValue = async () => {
    try {
      const response = await fetch('https://react-http-86b84-default-rtdb.firebaseio.com/restaurant.json');
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setData(data.meals);
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
  return { fetchedValue, data };
};

export default useFetchApi;
