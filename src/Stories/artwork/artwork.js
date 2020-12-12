import React from 'react';
import artwork from '../../assets/artwork.svg';
export const Artwork = ({ ...props }) => {

    return (
        <React.Fragment><div className="artwork">
                <img src={artwork} alt=""/>
        </div>
</React.Fragment >
);}