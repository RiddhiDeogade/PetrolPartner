import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import pic1 from '../assets/scooty.jpg';
import HeadingSwitcher from './HeadingSwitcher'; 
import Footer from './Footer';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div className="homepage-container">
                <div className="homepage-left">
                    <h1 className="animated-heading">Welcome to Petrol Partner</h1>
                     <HeadingSwitcher />
                    <p>
                        Petrol Partner is a ride-sharing web application designed to connect vehicle owners and travel partners.
                        Passengers can view a filtered list of available drivers based on their
                        route or stops, making it easier to find convenient and affordable travel partners. The platform ensures a smooth and secure
                        connection between riders and drivers through a simple and user-friendly interface.
                    </p>
                    <button
                        onClick={() => navigate('/signup')}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: '#333',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginTop: '1rem'
                        }}
                    >
                        
                        Get Started
                    </button>
                </div>

                <div className="homepage-right">
                    <img src={pic1} alt="Ride Sharing Illustration" />
                </div>
            </div>
        </div>
        
        <Footer />
            </>
    );
};

export default HomePage;
