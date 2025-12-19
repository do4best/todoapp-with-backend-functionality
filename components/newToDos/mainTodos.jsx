import React from 'react';
import Header from "./header.jsx";
import Formdata from "./formdata.jsx";
import ListOfResults from "./listOfResults.jsx";
import Footer from "./footer.jsx";

function MainTodos() {
    return (
        <>
            <Header/>
            <main>
                <Formdata/>
                <ListOfResults/>
            </main>
            <Footer/>
        </>
    );
}

export default MainTodos;