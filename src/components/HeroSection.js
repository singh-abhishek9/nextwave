import React from 'react'
import girl from '../assets/first.png'
import { CiStar } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";
import SmallSection from './SmallSection';
import vdo from '../assets/video.mp4';
import Items from './Items';
export default function HeroSection() {
  return (
    <div>
    <div className='h-fit w-full bg-pink-200 -z-10'>

      <section className='w-[80%] flex flex-row justify-between mx-auto h-fit mt-[80px] pb-[80px] pt-16'>
            {/* left part */}

            <div className='w-[300px] flex flex-col gap-4 font-bold text-gray-800'>
                  {/*  */}
                  <div>
                    The Leader in Online Learning
                  </div>
                  {/*  */}
                  <div className='text-2xl font-bold '>
                  Engaging, Accessible
                  & Affordable Online
                  Courses For V to XII
                  </div>

                  {/*  */}

                  <div>
                  Own your future learning new skills online
                  </div>
                   {/* Search Bar */}
                   <div className='w-full bg-white border rounded flex flex-row justify-between h-7 items-center px-1'>
                       
                       <p><IoIosSearch /></p>
                       <p className='text-sm text-slate-400 font-normal'> Search Classes Courses and Instructors</p>
                       <p><FaArrowAltCircleRight /></p>
                  </div>

                  {/*  */}

                  <div>
                  Trusted by over 15k Users
                  pan India since August 2023
                  </div>

                     {/*  */}

                  <div className='flex flex-row text-2xl font-bold justify-between'>
                      <p>1000+</p>
                      <p>4</p>
                      <p className='flex text-orange-500 gap-1'><CiStar /><CiStar /><CiStar /><CiStar /></p>
                  </div>
            </div>


            {/* right part */}
            <div>
                <img src={girl} alt='girl in hero section' className='w-[400px] h-[400px]'/>
            </div>
      </section>
          {/* another section */}
          

    </div>
          

          {/* how to work section */}
              <section className='bg-slate-300 h-fit w-full'>
                      <section className='relative -top-12 w-full z-10'>
                          <div className='flex flex-row justify-between gap-5 mx-auto w-[80%]'>
                              <SmallSection image={<CiStar />} number={"Class 5 TO 12"} p={"Online Courses"}/>
                              <SmallSection image={<CiStar />} number={"100 +"} p={"Subject Experts"}/>
                              <SmallSection image={<CiStar />} number={"20 +"} p={"Years of Experience"}/>
                              <SmallSection image={<CiStar />} number={"15k +"} p={"Online Students"}/>
                          </div>
                      </section>
                      <div className='flex flex-col items-center w-[80%] mx-auto'>
                        {/* first line */}

                        <div className='text-2xl font-bold'>
                        How It Works!
                        </div>
                        {/* second line  */}
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </div>

                        {/* third line */}
                        <div>
                        Mauris felis semper consequat nec faucibus nisl.
                        </div>

                        {/* fourth line */}
                        <div className='flex flex-row'>
                            {/* first box */}
                            <div className='flex flex-col justify-between p-3 items-center'>
                                <div className='h-16 w-10 bg-black border rounded items-center flex flex-col transform rotate-45'>
                                  <div className='bg-blue-300 h-5 w-5 rounded-full items-center'>
                                  <CiStar />
                                  </div>

                                </div>
                                <div className='text-2xl font-bold'>Search For Course</div>
                                <div className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a eros sagittis, a netus ultrices sed. Cras neque egestas morbi</div>

                            </div>
                            {/* second box */}
                            <div className='flex flex-col justify-between p-3 items-center'>
                                <div className='h-16 w-10 bg-black border rounded items-center flex flex-col transform rotate-90'>
                                  <div className='bg-blue-300 h-5 w-5 rounded-full items-center'>
                                  <CiStar />
                                  </div>

                                </div>
                                <div className='text-2xl font-bold'>Purchase</div>
                                <div className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a eros sagittis, a netus ultrices sed. Cras neque egestas morbi</div>

                            </div>


                            {/* third box */}
                            <div className='flex flex-col justify-between p-3 items-center'>
                                <div className='h-16 w-10 bg-black border rounded items-center flex flex-col transform -rotate-45'>
                                  <div className='bg-blue-300 h-5 w-5 rounded-full items-center'>
                                  <CiStar />
                                  </div>

                                </div>
                                <div className='text-2xl font-bold'>Start to Learn</div>
                                <div className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a eros sagittis, a netus ultrices sed. Cras neque egestas morbi</div>

                            </div>

                        </div>
                        {/* video section */}
                       
                            <div className='text-xl font-bold'>See How it Works</div>
                            <div className='text-sm font-medium mt-2 mb-2'>Upgrade Your Life, Upgrade Your Skills</div>
                            <div>
                              <video className='w-[600px] border-4 border-pink-400' autoPlay loop>
                                <source src={vdo} type='video/mp4'/>

                              </video>
                            </div>
                       
                      </div>
                      <div className='mx-auto w-[80%] justify-end flex ml-20'>
                      <div className='h-7 w-7 border-2 border-pink-500 rounded-full mr-0'></div>

                     
                      </div>
                <Items/>
                  </section>
                 

    </div>
  )
}
