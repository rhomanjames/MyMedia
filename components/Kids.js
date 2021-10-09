import React from 'react'
import YoutubeEmbed from "./YoutubeEmbed";
import { DocumentTextIcon, VideoCameraIcon, CollectionIcon, PuzzleIcon, MusicNoteIcon,BookmarkIcon, FireIcon, LightningBoltIcon, SparklesIcon, StarIcon } from '@heroicons/react/solid'



function Home() {
  return (
    <div>
      {/*Home*/}
        <div className="flex ml-20 hidden bg-green-300 flex-col ">
                    {/*Trending*/}
                    <h1 className="p-4 flex w-full border-gray-500 bg-white text-lg font-bold">Trending Now <FireIcon className="h-6 ml-2 text-yellow-500 hover:animate-pulse" /> </h1>
                     {/*New*/}
                    <h1 className="p-4 flex w-full border-gray-500 bg-white text-lg font-bold"> Music Videos <LightningBoltIcon className="h-6 ml-2 text-yellow-300 hover:animate-pulse" /></h1>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 bg-white flex-grow h-auto">
                    <YoutubeEmbed title="Attention - Zoog" embedID="vmviL4wKeD0" author="Became Humble Muzic" />
                    <YoutubeEmbed title="Light Bulb - AnuahYahu Ft.Yom" embedID="MMOyjbjdfgw" author="Became Humble Muzic" />
                    <YoutubeEmbed title="Lorvins - Elohim (OFFICIAL MUSIC VIDEO)" embedID="-mjKXJ1DtJ0" author="Son of Shemites Lorvins" />
                    <YoutubeEmbed title="Beautiful -  Anuahyahu Ft Zoog" embedID="e70Y_NsHyD0" author="Became Humble Muzic" />
                    <YoutubeEmbed title="Nonameservant - Humble (Official Video)" embedID="ejOwHnYXUNI" author="NoNameServant" />
                    <YoutubeEmbed title="Darak iBar - Guard Your Light (Prod. By Bandit Luce)" embedID="FhyCdT6x-Js" author="Darak iBar" />
                    <YoutubeEmbed title="Ahch Chakaam - Help (Official Music Video)" embedID="AZ4qXm3oLzI" author="Sap Squad Yasharala" />
                    <YoutubeEmbed title="HezekiYah-Sorrows" embedID="PcoLYq5hWVk" author="HezekiYah" />
                    <YoutubeEmbed title="HIS Image (prod. Yashiyah) - Video by Mimi Mode" embedID="pBFQyb3B_Y0" author="Yoel Melek" />
                    <YoutubeEmbed title="KORAH - Video by Kallah'Yasar Bat’YAHUAH" embedID="oc21h8nuqio" author="Yoel Melek" />
                    </div>
                    {/*Coming Soon*/}
                    <h1 className="p-4 flex w-full border-gray-500 bg-white text-lg font-bold">Coming Soon <SparklesIcon className="h-6 ml-2 text-yellow-300 hover:animate-pulse" /></h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white flex-grow h-auto">
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d1k69I-8sK8" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d-iJ2ZkGwqs" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="3_n-Mup8HU8" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="DeiNggGnTFU" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="MEfVONz9UTs" author="ServingYah" />
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
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="ZCALoWP8mnY"  author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="ZCALoWP8mnY"  author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="ZCALoWP8mnY"  author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="ZCALoWP8mnY"  author="ServingYah" />
                    </div>
                     {/*New*/}
                    <h1 className="p-4 flex w-full border-gray-500 bg-white text-lg font-bold">New Videos <LightningBoltIcon className="h-6 ml-2 text-yellow-300 hover:animate-pulse" /></h1>
                    <div className="flex bg-white overflow-x-scroll flex-grow h-auto">
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d1k69I-8sK8" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d-iJ2ZkGwqs" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="3_n-Mup8HU8" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="DeiNggGnTFU" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="MEfVONz9UTs" author="ServingYah" />
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
}

export default Home

