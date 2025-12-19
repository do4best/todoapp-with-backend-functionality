import React from 'react';
import {useNavigate} from 'react-router';
function ErrorPage() {
    const navigate = useNavigate();
    return (
        <>
        <div className="">
            <h1>Your Page Does not Exist</h1>
            <button className="btn btn-primary" onClick={()=>navigate('/')}>Go Home</button>
        </div>
        </>
    );
}

export default ErrorPage;