import React from "react";
import PropTypes from "prop-types";
import Image from 'next/image';
import Modal from "../components/Modal";
import Videos from "../components/Videos";


const YoutubeEmbed = ({ embedID, title, author }) => (

    

  <div onClick={
    function test () {

        let modal = document.getElementById('mymodal')
        let iframe = document.getElementById('iframe')

        modal.classList.remove('hidden')

        iframe.src = `https://www.youtube.com/embed/${embedID}?modestbranding=1&autohide=1&autoplay=1&rel=1&showinfo=0`}}
  
   className="p-4 cursor-pointer border-2 border-transparent hover:border-gray-200 transition">
    <Image 
    className="cursor-pointer"
    src={`http://i3.ytimg.com/vi/${embedID}/maxresdefault.jpg`} 
    width="320"
    height="180"/>
   {/* <iframe
    className="rounded-lg"
      width="425"
      height="240"
      src={`https://www.youtube.com/embed/${embedID}?modestbranding=1&autohide=1&showinfo=0`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
   />*/}

   
   
   <div className="flex flex-col">
        <h1 className="font-bold w-full text-sm align-center">{title}</h1>
        <h4 className=" text-xs w-full align-center">{author}</h4>
    </div>
  </div>
);


YoutubeEmbed.propTypes = {
  embedID: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};



export default YoutubeEmbed;