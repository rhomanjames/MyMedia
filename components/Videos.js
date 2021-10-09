import React from 'react'
import YoutubeEmbed from "../components/YoutubeEmbed";
import { DocumentTextIcon, VideoCameraIcon, CollectionIcon, PuzzleIcon, MusicNoteIcon,BookmarkIcon, FireIcon, LightningBoltIcon, SparklesIcon, StarIcon } from '@heroicons/react/solid'


function Videos() {

  return (
    <div>
      {/*Home*/}
        <div id="home" className="flex-col ">
                    {/*Trending*/}
                    <h1 id="trending" className="p-4 flex w-full border-gray-500 bg-white text-lg font-bold">Trending Now <FireIcon className="h-6 ml-2 text-yellow-500 hover:animate-pulse" /> </h1>
                    <div className="grid border-b-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 bg-white flex-grow h-auto">
                        <YoutubeEmbed title="History of the True Hebrews" embedID="biPDp8pGqGg"  author="Kingdom Preppers" />
                        <YoutubeEmbed title="Vows | Narrated Story | Yah's Kids Academy" embedID="RlZbm7A8UCg"  author="ServingYah" />
                        <YoutubeEmbed title="10 Commandments Kids Song" embedID="NfEsAs2zg6k" author="ServingYah" />
                        <YoutubeEmbed title="Israel's Spiritual Blindness (Documentary)" embedID="p93ufk-WFos"  author="Kingdom Preppers" />
                    </div>
                     {/*KIDS*/}
                    <h1 className="p-4 flex  w-full border-gray-500 bg-white text-lg font-bold">Kids <PuzzleIcon className="h-6 ml-2 text-yellow-300 hover:animate-pulse" /></h1>
                    <div className="grid border-b-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 bg-white flex-grow h-auto">
                    <YoutubeEmbed title="100+ MINUTES of FUN Songs, Videos and Documentaries for KIDS" embedID="jYbN3CkyxKQ" author="ServingYah" />
                    <YoutubeEmbed title="The Prophet Daniel (LKP Story Time)" embedID="vRvU3jgjD7E" author="Kingdom Preppers" />
                    <YoutubeEmbed title="The Risen King | Resurrection of the Messiah" embedID="ufuFKR8hfI0" author="Bible Pathway Adventures" />
                    <YoutubeEmbed title="30+ MINUTES of FUN Songs, Videos and Documentaries for KIDS" embedID="7B7q4xNLbGs" author="ServingYah" />
                    <YoutubeEmbed title="Birth of the King - Birth of Yeshua" embedID="UyioC7EB3N0" author="Bible Pathway Adventures" />
                    <YoutubeEmbed title="Salt of the Earth (LKP Documentary)" embedID="2QxNDKHZNHQ" author="Kingdom Preppers" />
                    <YoutubeEmbed title="Clean and Unclean Farm Animals for Kids" embedID="cr5R60mDkW4" author="ServingYah" />
                    <YoutubeEmbed title="I Am An Israelite" embedID="T5z_eOuqb_U" author="Little Israel Music" />
                    <YoutubeEmbed title="Treasures | Narrated Story | Yah’s Young Lions" embedID="ZCALoWP8mnY" author="ServingYah" />
                    <YoutubeEmbed title="Beauty Salon | Narrated Story | Yah’s Young Lions" embedID="d1k69I-8sK8" author="ServingYah" />
                    <YoutubeEmbed title="Traffic Stop | Narrated Story | Yah’s Young Lions" embedID="LQMyGyL7AX4" author="ServingYah" />
                    <YoutubeEmbed title="Served | Narrated Story | Yah’s Kids Academy" embedID="TQbxdqY6osM" author="ServingYah" />
                    <YoutubeEmbed title="Remember the Sabbath Day" embedID="vSeDeSBP8Fo" author="Yahsaves777" />
                    <YoutubeEmbed title="Traffic Stop | Narrated Story | Yah’s Young Lions" embedID="LQMyGyL7AX4" author="ServingYah" />
                    <YoutubeEmbed title="Served | Narrated Story | Yah’s Kids Academy" embedID="TQbxdqY6osM" author="ServingYah" />
                    
                    </div>


                    {/*MUSIC VIDEOS*/}
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
                    </div>

                    {/*DOCUMENTARIES*/}
                    <h1 className="p-4 flex w-full border-gray-500 bg-white text-lg font-bold"> Documentaries <VideoCameraIcon className="h-6 ml-2 text-yellow-300 hover:animate-pulse" /></h1>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 bg-white flex-grow h-auto">
                    <YoutubeEmbed title="The Economy of Yah (Documentary)" embedID="FoPR9xZtCAg"  author="Kingdom Preppers" />
                    <YoutubeEmbed title="The Pure Convocations (Reupload)" embedID="bR9hcjqDKgg"  author="Kingdom Preppers" />
                    </div>

                    {/*Coming Soon*/}
                    <h1 className="p-4 hidden w-full border-gray-500 bg-white text-lg font-bold">Documentaries<DocumentTextIcon className="h-6 ml-2 text-yellow-300 hover:animate-pulse" /></h1>
                    <div className="hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white flex-grow h-auto">
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d1k69I-8sK8" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="d-iJ2ZkGwqs" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="3_n-Mup8HU8" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="DeiNggGnTFU" author="ServingYah" />
                    <YoutubeEmbed title="Leavened vs. Unleavened Scripture Study" embedID="MEfVONz9UTs" author="ServingYah" />
                    
                    </div>
                </div>

                {/*Recipes*/}
                <div id="home" className="hidden flex-col  overflow-x-scroll">
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

