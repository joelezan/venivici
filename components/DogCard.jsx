import React from 'react';

const DogCard = ({ dog, onBanFeature }) => {
    return (
        <div className="dog-card">
            <img src={dog.url} alt={dog.name} className="dog-image" />
            <h1>{dog.name}</h1>
            <p>Bred For: {dog.bred_for}</p>
            <div>
                <p>Breed Group: 
                    <button onClick={() => onBanFeature(dog.breed_group)}>
                        {dog.breed_group}
                    </button>
                </p>
            </div>
            <div>
                <p>Weight: 
                    <button onClick={() => onBanFeature(dog.weight.imperial)}>
                        {dog.weight.imperial} lbs
                    </button>
                </p>
            </div>
            <div>
                <p>Height: 
                    <button onClick={() => onBanFeature(dog.height.imperial)}>
                        {dog.height.imperial} inches
                    </button>
                </p>
            </div>
            <div>
                <p>Life Span: 
                    <button onClick={() => onBanFeature(dog.life_span)}>
                        {dog.life_span}
                    </button>
                </p>
            </div>
            <div>
                <p>Temperament: {dog.temperament.split(', ').map((temp, index) => (
                    <button key={index} onClick={() => onBanFeature(temp)}>
                        {temp}
                    </button>
                ))}</p>
            </div>
        </div>
    );
};

export default DogCard;
