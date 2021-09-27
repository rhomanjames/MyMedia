import React from 'react'
import Image from 'next/image'
import PropTypes from "prop-types";



const Albums = ({ ImageID, Artist, Title, Genre }) => (

        <div onClick={()=>{ alert(`${Title} by ${Artist}`); }} className="mx-4 cursor-pointer p-4 hover:scale-110 transition hover:shadow-md">
            <Image
            src={`https://i1.sndcdn.com/artworks-${ImageID}-t500x500.jpg`}
            width="200" height="200"
            />
            <h1 className="font-bold">{Title}</h1>
            <h1 className="">{Artist}</h1>
            <h1 className="text-sm text-gray-400">{Genre}</h1>
        </div>
);
    Albums.propTypes = {
        ImageID: PropTypes.string.isRequired,
        Artist: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Genre: PropTypes.string.isRequired,
      };


export default Albums
