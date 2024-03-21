import axios from 'axios';
import  { createContext, useState, useEffect } from 'react';

export const CompanyContext = createContext({});

export function CompanyContextProvider({children}){
    const [company, setCompany] = useState(null);
    useEffect(() => {
        if (!company) {
            axios.get('/company-profile').then(({ data }) => {
                console.log(data); // Log the data received from the API
                setCompany(data);
            });
        }
    }, []);

    return (
        <CompanyContext.Provider value={{company, setCompany}}>
            {children}
        </CompanyContext.Provider>
    )
}
