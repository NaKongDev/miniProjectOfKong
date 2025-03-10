import React from 'react'
import articleImg01 from '../../assets/img/article-01.png'
import articleImg02 from '../../assets/img/article-02.png'
import articleImg03 from '../../assets/img/article-03.png'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Article() {
  return (
    <div className='pt-10 pb-20 text-center'>
        <div className='container mx-auto max-w-[1320px]'>
            <h3 className='text-[#4D4D4D] text-[2.2rem] font-semibold'>Caring is the new marketing</h3>
            <p className='text-[#717171] '>The Nexcent blog is the best place to read about the latest membership insights, <br /> trends and more. See who's joining the community, 
            read about how our community <br /> are increasing their membership income and lot's more.​</p>

            <div className='my-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    <div className='relative m-5 md:m-0'>
                        <img className='rounded-xl' src={articleImg01} alt="" />

                        <div className='absolute bg-[#F5F7FA] bottom-[-50px] left-[50%] translate-x-[-50%] w-full max-w-[350px] p-5 shadow-lg rounded-xl'>
                            <p className='font-bold text-[1.25rem] text-[#717171] mb-5'>Creating Streamlined Safeguarding Processes with OneRen</p>
                            <a href="#" className='text-[#4CAF4F] flex justify-center items-center font-bold '>Readmore <HiOutlineArrowNarrowRight className='ml-1' /></a>
                        </div>
                    </div>

                    <div className='relative m-5 md:m-0'>
                        <img className='rounded-xl' src={articleImg02} alt="" />

                        <div className='absolute bg-[#F5F7FA] bottom-[-50px] left-[50%] translate-x-[-50%] w-full max-w-[350px] p-5 shadow-lg rounded-xl'>
                            <p className='font-bold text-[1.25rem] text-[#717171] mb-5'>What are your safeguarding responsibilities and how can you manage them?</p>
                            <a href="#" className='text-[#4CAF4F] flex justify-center items-center font-bold '>Readmore <HiOutlineArrowNarrowRight className='ml-1' /></a>
                        </div>
                    </div>

                    <div className='relative m-5 md:m-0'>
                        <img className='rounded-xl' src={articleImg03} alt="" />

                        <div className='absolute bg-[#F5F7FA] bottom-[-50px] left-[50%] translate-x-[-50%] w-full max-w-[350px] p-5 shadow-lg rounded-xl'>
                            <p className='font-bold text-[1.25rem] text-[#717171] mb-5'> Revamping the Membership Model with Triathlon Australia</p>
                            <a href="#" className='text-[#4CAF4F] flex justify-center items-center font-bold '>Readmore <HiOutlineArrowNarrowRight className='ml-1' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Article