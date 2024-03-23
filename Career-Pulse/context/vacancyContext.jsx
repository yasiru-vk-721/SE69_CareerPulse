import axios from 'axios';
import  { createContext, useState, useEffect } from 'react';

export const VacancyContext = createContext({});




export function VacancyContextProvider({children}){
    const [vacancy, setVacancy] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/vacancy');
            setVacancy(response.data.vacancy); // Assuming response.data.vacancy is your array of data
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <VacancyContext.Provider value={{vacancy, setVacancy}}>
            {children}
        </VacancyContext.Provider>
    )
}

