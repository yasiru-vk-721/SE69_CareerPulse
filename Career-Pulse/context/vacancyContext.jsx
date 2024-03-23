// import axios from 'axios';
// import  { createContext, useState, useEffect } from 'react';

// export const VacancyContext = createContext({});
// import PropTypes from 'prop-types';
// export function VacancyContextProvider({ children }) {
//     const [vacancy, setVacancy] = useState(null);
//     useEffect(() => {
//         if(!vacancy){
//             axios.get('/vacancy').then(({data}) =>{
//                 setVacancy(data);
//                 console.log(vacancy)
//             })
//         }
//     }, []);
//     return (
//         <VacancyContext.Provider value={{vacancy, setVacancy}}>
//             {children}
//         </VacancyContext.Provider>
//     )
// }
// VacancyContextProvider.propTypes = {
//     children: PropTypes.node.isRequired
// }