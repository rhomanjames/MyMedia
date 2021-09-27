import React from 'react'
import YoutubeEmbed from "./YoutubeEmbed";
import { DocumentTextIcon, VideoCameraIcon, CollectionIcon, PuzzleIcon, MusicNoteIcon,BookmarkIcon, FireIcon, LightningBoltIcon, SparklesIcon, StarIcon } from '@heroicons/react/solid'



function Home() {
  return (
    <div>
      {/*Home*/}
        <div className="flex ml-20 hidden bg-yellow-400 flex-col ">
                    {/*Trending*/}
                    <h1 className="p-4 flex w-full border-gray-500 bg-white text-lg font-bold">Trending Now <FireIcon className="h-6 ml-2 text-yellow-500 hover:animate-pulse" /> </h1>
                    <div className="grid border-b-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white flex-grow h-auto">
                        <YoutubeEmbed title="100+ Minutes of Yah's Kids Academy" embedID="jYbN3CkyxKQ"  author="ServingYah" />
                        <YoutubeEmbed title="Interview with a HEBREW ISRAELITE" embedID="FzsYYWT_tkE" author="ServingYah" />
                        <YoutubeEmbed title="10 Commandments Song for Kids" embedID="NfEsAs2zg6k" author="ServingYah" />
                        <YoutubeEmbed title="Leavened vs. Unleavened in the Scriptures" embedID="CcCW2jjcc_c"  author="ServingYah" />
                        <YoutubeEmbed title="Beauty Salon | Narrated Story" embedID="d1k69I-8sK8"  author="ServingYah" />
                        <YoutubeEmbed title="Judaism is NOT the Religion of Yah" embedID="PW6jBciMw3I" author="ServingYah" />
                        <YoutubeEmbed title="30 Minutes of Tah's Kids Academy! for Kids!" embedID="7B7q4xNLbGs"  author="ServingYah" />
                        <YoutubeEmbed title="Blame | Narrated Story" embedID="gKMgZ1p5-vI"  author="ServingYah" />
                    </div>
                     {/*New*/}
                    <h1 className="p-4 flex w-full border-gray-500 bg-white text-lg font-bold">New Videos <LightningBoltIcon className="h-6 ml-2 text-yellow-300 hover:animate-pulse" /></h1>
                    <div className="grid grid-cols-1 border-gray-500 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white flex-grow h-auto">
                      <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d1k69I-8sK8" author="ServingYah" />
                      <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d-iJ2ZkGwqs" author="ServingYah" />
                      <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="3_n-Mup8HU8" author="ServingYah" />
                      <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="DeiNggGnTFU" author="ServingYah" />
                    </div>
                    {/*Coming Soon*/}
                    <h1 className="p-4 flex w-full border-gray-500 bg-white text-lg font-bold">Coming Soon <SparklesIcon className="h-6 ml-2 text-yellow-300 hover:animate-pulse" /></h1>
                    <div className="grid grid-cols-1 border-gray-500 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white flex-grow h-auto">
                      <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d1k69I-8sK8" author="ServingYah" />
                      <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d-iJ2ZkGwqs" author="ServingYah" />
                      <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="3_n-Mup8HU8" author="ServingYah" />
                    </div>
                </div>
    </div>
  )
}

export default Home

