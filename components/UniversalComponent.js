import React from "react";
import PropTypes from "prop-types";
import Image from 'next/image';


const UniversalComponent = ({ image, title, author }) => ( 

        <div className="mx-4 cursor-pointer p-4 transition hover:shadow-md">
            <div>
            <Image 
            className="cursor-pointer"
            src={image}
            width="200"
            height="200"/>
            </div>
            <h1 className="font-bold">{title}</h1>
            <h1 className="">{author}</h1>
        </div>
    );

    UniversalComponent.propTypes = {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
      };

export default UniversalComponent
