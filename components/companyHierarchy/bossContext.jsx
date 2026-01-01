import React, {createContext} from 'react';

 const MyContext = createContext("")
function BossContext(props) {
    const SalaryDetails ={
        Designation:"CEO",
        salary:1000000,
        bonus:100000,
        pension:10000
    };
    const [counter,setCounter]=React.useState(0);
    return (
        <>
        <MyContext.Provider value={{SalaryDetails,counter,setCounter}}>
            {props.children}
        </MyContext.Provider>
        </>
    );
}

export  {BossContext,MyContext};