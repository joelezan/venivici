import React, { useState, useEffect } from 'react';
import DogCard from '../components/DogCard';
import BanList from '../components/BanList';
import { fetchDog } from '../util/api'; 

const App = () => {
    const [seenDogs, setSeenDogs] = useState([]); 
    const [currentDog, setCurrentDog] = useState(null); 
    const [bannedFeatures, setBannedFeatures] = useState([]); 

    // Fetch a new dog and update the state
    const discoverNewDog = async () => {
        if (currentDog) {
            setSeenDogs([...seenDogs, currentDog]); 
        }
        const newDog = await fetchDog(); 
        setCurrentDog(newDog); 
    };


    const banFeature = (feature) => {
        if (!bannedFeatures.includes(feature)) {
            setBannedFeatures([...bannedFeatures, feature]); 
        }
    };

   
    const removeFeature = (feature) => {
        setBannedFeatures(bannedFeatures.filter(item => item !== feature)); 
    };

    return (
        <div className="container"> {/* Flex container for columns */}
            <div className="left-column">
                <h2>Who have you seen so far?</h2>
                {seenDogs.map((dog, index) => (
                    <DogCard key={index} dog={dog} />
                ))}
            </div>
            <div className="middle-column">
                <h1>We love the dogs</h1>
                <h2>Aren't they beautiful?</h2>
                {currentDog ? (
                    <DogCard dog={currentDog} onBanFeature={banFeature} />
                ) : (
                    <p>No dog discovered yet. Click the button to discover one!</p>
                )}
                <button onClick={discoverNewDog}>Discover New Dogs</button>
            </div>
            <div className="right-column">
                <h2>Ban List</h2>
                <BanList bannedFeatures={bannedFeatures} removeFeature={removeFeature} />
            </div>
        </div>
    );
};

export default App;
