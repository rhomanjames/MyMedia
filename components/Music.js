import React from 'react'
import Image from 'next/image'
import Albums from '../components/Albums'
import { DocumentTextIcon, VideoCameraIcon, CollectionIcon, PuzzleIcon, MusicNoteIcon,BookmarkIcon, FireIcon, LightningBoltIcon, SparklesIcon, StarIcon } from '@heroicons/react/solid'


function Music() {
    return (
        <div className="pl-20 hidden bg-gray-50 flex-col w-full flex">
            <div className="">
                {/*Title and Music Header*/}
                <div className="align-left flex flex-col">
                    <h1 className="pl-8 py-4 flex align-left w-full border-gray-500 bg-white text-lg font-bold">New Albums<MusicNoteIcon className="h-6 ml-2 text-yellow-500 hover:animate-pulse" /> </h1>
                </div>
                {/*List of Mixtape Covers */}
                <div className=" border-b-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                    <Albums ImageID="N7VU9LcY2McWRhrj-kdDXeg" Title="Prodigal Son" Artist="NoNameServant" Genre="Rap/Hip Hop"/>
                    <Albums ImageID="000538108917-y9y11j" Title="7 Trumpetz" Artist="Darak iBar" Genre="Rap/Hip Hop"/>
                    <Albums ImageID="g47jXdyx7zOBdTVv-Nd32YA" Title="Ahch Emeht" Artist="Ahch Ehmet" Genre="Rap/Hip Hop"/>
                </div>
            </div>
        </div>
    )
}

export default Music
