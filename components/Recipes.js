import React from 'react'
import Chocolate from "../public/chococake.jpg"
import UniversalComponent from "../components/UniversalComponent";
import { DocumentTextIcon, VideoCameraIcon, CollectionIcon, PuzzleIcon, MusicNoteIcon,BookmarkIcon, FireIcon, LightningBoltIcon, SparklesIcon, StarIcon } from '@heroicons/react/solid'



function Home() {
  return (
    <div>
      {/*Home*/}
        <div className="flex hidden ml-20 flex-col">
          <div> 
            <h1 className="pl-8 py-4 flex align-left w-full border-gray-500 bg-white text-lg font-bold">Recipes<CollectionIcon className="h-6 ml-2 text-yellow-500 hover:animate-pulse" /> </h1>
          </div>
          <div className=" flex">
              <UniversalComponent title="Chocolate Cake" author="Yahlicious" image={Chocolate}/>
              <UniversalComponent title="test" author="testing" image="https://i1.sndcdn.com/artworks-SzwazLyKXXEvaKq8-CM3tgg-t500x500.jpg"/>
          </div>
        </div>
    </div>
  )
}

export default Home

