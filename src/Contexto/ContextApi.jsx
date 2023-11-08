import { createContext, useContext, useEffect, useState } from 'react';

const ContextApi = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (gender) => {
    setLoading(true);
    try {
      const response = await fetch(`https://randomuser.me/api/?gender=${gender}`);
      const json = await response.json();
      setData(json.results);
      setLoading(false);
      console.log('info del api', json.results);
    } catch (error) {
      console.error('Error al traer la data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
  
  }, []);

    return <ContextApi.Provider value={{ data, loading, fetchRandomUser: fetchData }}>{children}</ContextApi.Provider>;
};

export const useApi = () => {
  return useContext(ContextApi);
};
