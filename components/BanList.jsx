import React from 'react';

const BanList = ({ bannedFeatures, removeFeature }) => {
    return (
        <div className="ban-list">
            {bannedFeatures.length > 0 ? (
                bannedFeatures.map((feature, index) => (
                    <button key={index} onClick={() => removeFeature(feature)}>
                        {feature} (Click to remove)
                    </button>
                ))
            ) : (
                <p>No banned features</p>
            )}
        </div>
    );
};

export default BanList;
