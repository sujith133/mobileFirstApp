import React, { useState, useEffect } from 'react';
import { useNavigate  } from "react-router-dom";
import Cookies from "js-cookie";
import './index.css';

const Home = () => {
    const [jokes, setJokes] = useState([]);
    const token = Cookies.get("jwt_token");
    const navigate= useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (!token) {
                
                navigate('/login')
                
            }

            try {
                const response = await fetch("https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10");
                const jsonData = await response.json();
                setJokes(jsonData.jokes);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const logout = () => {
        Cookies.remove("jwt_token");
        navigate('/login')
       
    };

    return (
        <div className='p-5'>
            <div className='d-flex flex-row justify-content-between'>
                <h1>Welcome User</h1>
                <button type='button' className='btn btn-danger' onClick={logout}>Logout</button>
            </div>

            <div className='d-flex flex-row flex-wrap align-items-between'>
                {jokes.map((joke, index) => (
                    <div className='jokeBox' key={index}>
                        <p>{joke.joke}</p>
                        <div className='d-flex flex-row justify-content-between marginbox'>
                            <p>{joke.category}</p>
                            <p>{joke.lang}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
