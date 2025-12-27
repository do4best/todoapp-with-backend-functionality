import React, {useEffect, useState} from 'react';

function FetchApi(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                const netData = data.slice(0, 5);
                setUsers(netData);
            } catch (err) {
                console.log(err);
            }
        };
void fetchData();

    },[])

    return (
        <>
        <h1>Hello Friend</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.title}</li>
                ))}
            </ul>

        </>
    );
}

export default FetchApi;