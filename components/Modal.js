import React from 'react'
import { XIcon } from '@heroicons/react/solid'
import YoutubeEmbed from "../components/YoutubeEmbed";


function Modal() {
    
    function closemodal() {
        let modal = document.getElementById('mymodal')

        modal.classList.add('hidden')

        let iframe = document.getElementById('iframe')

         iframe.src = ""


    }

    return (
        <div id="mymodal" class="w-full hidden h-full backdrop-blur justify-center fixed bg-opacity-50 bg-black z-40">
            <div class="flex justify-center w-full">
            <XIcon onClick={closemodal} className="absolute right-4 top-4 h-10 text-white cursor-pointer" />
            <iframe
            allowfullscreen
            id="iframe"
            className=" mt-8"
            src= "https://www.youtube.com/embed/${embedID}?modestbranding=1&autohide=1&showinfo=0"
            width="850"
            height="480"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
   />
            </div>
        </div>
    )
}

export default Modal
