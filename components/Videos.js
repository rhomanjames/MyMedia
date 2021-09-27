import React from 'react'
import YoutubeEmbed from "../components/YoutubeEmbed";
import { DocumentTextIcon, VideoCameraIcon, CollectionIcon, PuzzleIcon, MusicNoteIcon,BookmarkIcon, FireIcon, LightningBoltIcon, SparklesIcon, StarIcon } from '@heroicons/react/solid'


function Videos() {

  return (
    <div>
      {/*Home*/}
        <div className=" ml-20 flex-col ">
                    {/*Trending*/}
                    <h1 className="p-4 flex w-full border-gray-500 bg-white text-lg font-bold">Trending Now <FireIcon className="h-6 ml-2 text-yellow-500 hover:animate-pulse" /> </h1>
                    <div className="grid border-b-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 bg-white flex-grow h-auto">
                        <YoutubeEmbed title="History of the True Hebrews" embedID="biPDp8pGqGg"  author="Kingdom Preppers" />
                        <YoutubeEmbed title="(The True Hebrew Israelites) Scattered Among the Nations: Part 1" embedID="B4NuWqslJDs" author="Kingdom Preppers" />
                        <YoutubeEmbed title="Understanding the Sabbath: A Documentary" embedID="jq9gZFTfAfs" author="Kingdom Preppers" />
                        <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="CcCW2jjcc_c"  author="ServingYah" />
                        <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="ZCALoWP8mnY"  author="ServingYah" />
                        <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="NfEsAs2zg6k" author="ServingYah" />
                        <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="CcCW2jjcc_c"  author="ServingYah" />
                        <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="ZCALoWP8mnY"  author="ServingYah" />
                    </div>
                     {/*New*/}
                    <h1 className="p-4 flex w-full border-gray-500 bg-white text-lg font-bold">Kids <PuzzleIcon className="h-6 ml-2 text-yellow-300 hover:animate-pulse" /></h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white flex-grow h-auto">
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d1k69I-8sK8" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d-iJ2ZkGwqs" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="3_n-Mup8HU8" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="DeiNggGnTFU" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="MEfVONz9UTs" author="ServingYah" />
                    
                    </div>
                    {/*Coming Soon*/}
                    <h1 className="p-4 flex w-full border-gray-500 bg-white text-lg font-bold">Articles<DocumentTextIcon className="h-6 ml-2 text-yellow-300 hover:animate-pulse" /></h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white flex-grow h-auto">
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d1k69I-8sK8" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d-iJ2ZkGwqs" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="3_n-Mup8HU8" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="DeiNggGnTFU" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="MEfVONz9UTs" author="ServingYah" />
                    
                    </div>
                </div>

                {/*Recipes*/}
                <div className="hidden ml-20 flex-col  overflow-x-scroll">
                    {/*Trending*/}
                    <h1 className="p-4 flex w-full border-gray-500 bg-white text-lg font-bold">Trending Now <FireIcon className="h-6 ml-2 text-yellow-500 hover:animate-pulse" /> </h1>
                    <div className="grid grid-cols-5 flex-grow bg-white h-auto">
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="jYbN3CkyxKQ"  author="ServingYah" />
                    <YoutubeEmbed title="BREAKING NEWS! EXCLUSIVE Interview with a HEBREW ISRAELITE" embedID="FzsYYWT_tkE" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="NfEsAs2zg6k" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="CcCW2jjcc_c"  author="ServingYah" />
                    
                    </div>
                     {/*New*/}
                    <h1 className="p-4 flex w-full border-gray-500 bg-white text-lg font-bold">New Videos <LightningBoltIcon className="h-6 ml-2 text-yellow-300 hover:animate-pulse" /></h1>
                    <div className="flex bg-white overflow-x-scroll flex-grow h-auto">
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d1k69I-8sK8" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d-iJ2ZkGwqs" author="ServingYah" />
                   
                    </div>
                    {/*Coming Soon*/}
                    <h1 className="p-4 flex w-full border-gray-500 bg-white text-lg font-bold">Coming Soon <SparklesIcon className="h-6 ml-2 text-yellow-300 hover:animate-pulse" /></h1>
                    <div className="flex overflow-x-scroll bg-white flex-grow h-auto">
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="L7DrTx2DZ-A"  author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="L7DrTx2DZ-A"  author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="L7DrTx2DZ-A" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="L7DrTx2DZ-A"  author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="L7DrTx2DZ-A"  author="ServingYah" />
                    </div>
                </div>
    </div>
  )
};

export default Videos

