import React from 'react';
import Victor from '../asset/Victor.png';
import Rectangle1 from '../asset/Rectangle 1.png';
import Rectangle2 from '../asset/Rectangle 2.png';
import Rectangle3 from '../asset/Rectangle 3.png';
import Rectangle4 from '../asset/Rectangle 4.png';
import Rectangle5 from '../asset/Rectangle 5.png';
import Vector from '../asset/Vector.png';
import Emmy from '../asset/Emmy.png';
import Img3 from '../asset/Img3.png';
import Border from '../asset/Border.png';
import Border1 from '../asset/Border1.png';
import Border2 from '../asset/Border2.png';
import vectorIcon3 from '../asset/vectorIcon3.png';
import vectorIcon2 from '../asset/vectorIcon2.png';
import vectorIcon1 from '../asset/vectorIcon1.png';
import fb from '../asset/fb.png';
import Ig from '../asset/Ig.png';
import In from '../asset/In.png';
import Tw from '../asset/Tw.png';
import '../App.css';

export default function Home() {
    return (
        <div>
            <section className="bg-[#3431f1] flex  w-full h-10 list-none text-center">
                <p className="text-[#fff] absolute text-[20px] ml-40 font-bold">Fesh Vibes</p>
                <nav className="flex list-none; text-[#fff] text-center gap-4 ml-[40rem] mt-2 px-5">
                    <li><a href="Home">Home</a></li>
                    <li><a href="Tracks">Tracks</a></li>
                    <li id="contact"><a href="Contact">CONTACT ME</a></li>
                </nav>
            </section>

            <section class="image">
                <main className="text-center font-bold text-[3rem] text-[#fff]">
                    <h1>FeshVibes <strong className="text-red-400">Music</strong> And <br />
                        Entertainment
                    </h1>
                    <p className="font-light text-[20px]">lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse vitae ligula <br />
                        placerat eleifend ex non, vehicular libero Suspendisse eget telluslectus
                    </p>
                    <div className="flex justify-center px-10 gap-6 mt-5">
                        <span className="font-medium text-[20px] bg-red-400 rounded-[5px]" >
                            <button type="submit" className="text-[12px] w-20 h-10">Book Me</button>
                        </span>
                        <span className="font-medium text-[15px] ">
                            <span className="flex gap-5">
                                <img src={Victor} alt="" className="align-items-center" />
                                <p className="pt-1">Watch youtube Videos</p>
                            </span>
                        </span>
                    </div>
                </main>
            </section>
            <section className="bg-black ">
                <p className="text-white ml-40 py-5 "><strong className="text-blue-800">Explore</strong> Featured Tracks</p>
                <div className="flex w-[95%] h-[50%] gap-7 ml-10 mt-5">
                    <span>
                        <img src={Rectangle1} alt="" />
                    </span>
                    <span>
                        <img src={Rectangle2} alt="" />
                    </span>
                    <span>
                        <img src={Rectangle3} alt="" />
                    </span>
                    <span>
                        <img src={Rectangle4} alt="" />
                    </span>
                    <span>
                        <img src={Rectangle5} alt="" />
                    </span>
                </div>
                <div>
                    <hr className="w-[50%] bg-[grey] mt-10 ml-[30rem]" />
                    <main className="flex ml-10 justify-center">
                        <span>
                            <img src={Emmy} alt="" className="w-[30rem]" />
                        </span>
                        <span className="mt-[8rem]">
                            <h2 className="text-white font-bold">About Feshow</h2>
                            <p className="text-white text-[20px]">
                                Feshow is a cross-platform entertainment page which is open to <br />
                                everyone between the age of 18 and above. The aim is to reach out <br />
                                to people knowing their challenges and suggesting the best possible <br />
                                solutions to ameliorate the situations.
                            </p>
                            <button type="submit" className="text-white text-[10px] mt-5 text-center gap-2 p-3 w-25 h-8 font-medium flex bg-[blue] rounded-[5px]">CONNECT<img src={Vector} alt="" /></button>
                        </span>
                    </main>
                    <hr className="w-[50%] bg-[grey] mb-15 ml-[30rem]" />
                </div>
                <section className="flex justify-center mt-10 ml-[20rem]">
                    <div className="mt-[5rem]">
                        <h2 className="text-white font-bold">Top Tracks</h2>
                        <p className="text-white font-normal text-[20px]">
                            FeshVibes Top Tracks are the hittest of the town <br />
                            as it is widely streamed globally and as a result <br />
                            our artist gets international recognition and nomination <br />
                            for top musical awards
                        </p>
                        <button type="submit" className="text-white text-[11px] mt-2  gap-3  text-center p-3 w-20 h-8 font-medium flex bg-[blue] rounded-[5px]">MORE<img src={Vector} alt="" /></button>
                    </div>
                    <div className="flex w-[50%]">
                        <span className="">
                            <img src={Rectangle1} className="w-[70%] h-[35%] m-5" alt="" />
                            <img src={Img3} className="w-[70%] h-[50%]" alt="" />
                        </span>
                        <span className="">
                            <img src={Rectangle5} className="w-[65%] h-[50%] ml-10" alt="" />
                            <img src={Rectangle4} className="w-[70%] h-[35%] m-5" alt="" />
                        </span>
                    </div>

                </section>
                <section className="mr-8">
                    <h2>Review</h2>
                    <div className="flex justify-center gap-4">
                        <span className="ml-[4rem]">
                            <p className="text-[#bcbcbc] text-[16px]"><strong className="text-[#381DDB]">"</strong>using the website has brought a lot of changes to my mental health
                                and imagination the most exciting <br />part of it was the committed who go a long way to solving human problems<strong className="text-[#381DDB]">"</strong>
                            </p>
                            <img src={Border} alt="" className="w-20 py-2 ml-[10rem]" />
                            <p className="text-white ml-[9rem]">Clement James</p>
                            <p className="text-[#381DDB] ml-[10rem]">Producer</p>
                        </span>
                        <span className="justify-center pl-7">
                            <p className="text-white text-[16px]"><strong className="text-[#381DDB]">"</strong>using the website has brought a lot of changes to my mental health
                                and imagination the most exciting <br /> part of it was the committed
                                who go a long way to solving human problems<strong className="text-[#381DDB]">"</strong>
                            </p>
                            <img src={Border1} alt="" className="w-20 ml-[10rem] py-2" />
                            <p className="text-white ml-[8rem]">Emmanuel Nwanimi</p>
                            <p className="text-[#381DDB] ml-[10rem]">Song Writer</p>
                        </span>
                        <span className="ml-[2rem]">
                            <p className="text-[#bcbcbc] text-[16px]"><strong className="text-[#381DDB]">"</strong>using the website has brought a lot of changes to my mental health
                                and imagination the most exciting <br /> part of it was the committed
                                who go a long way to solving human problems<strong className="text-[#381DDB]">"</strong>
                            </p>
                            <img src={Border2} alt="" className="w-20 ml-[10rem] py-2" />
                            <p className="text-white ml-[10rem]">John Aleke</p>
                            <p className="text-[#381DDB] ml-[11rem]">Fan</p>
                        </span>
                    </div>
                </section>
                <section className='pb-8'>
                    <h2 className="text-center text-white font-bold mt-10 mr-6">Contact Us</h2>
                    <p className="text-center text-[#fff] font-light">Have an inquiry? We will be happy to assist you</p>
                    <div className="flex justify-center gap-10 mt-20">
                        <div className="border-indigo-700 border-4 rounded-[10px] h-[100%] w-[20%]">
                            <img src={vectorIcon3} alt="" className=" w-[4rem] ml-[9rem] mb-[2rem] p-5" />
                            <hr className="w-[13rem] ml-[4rem] mb-[1rem]" />
                            <p className="text-[#fff] text-center ">Plot 252, Block 1 Phase 2</p>
                            <p className="text-[#fff] text-center mb-10">Lekki, Lagos NG</p>
                        </div>
                        <div className="border-indigo-700 border-4 rounded-[10px] h-[10%] w-[20%]">
                            <img src={vectorIcon2} alt="" className=" w-[4rem] ml-[9rem] mb-[2rem] p-5" />
                            <hr className="w-[13rem] ml-[4rem] mb-[1rem]" />
                            <p className="text-[#fff] text-center ">joinuslekki@gmail.com</p>
                            <p className=" text-center mb-10">+234 811 5028 142</p>
                        </div>
                        <div className="border-indigo-700 border-4 rounded-[10px] h-[10%] w-[20%]">
                            <img src={vectorIcon1} alt="" className=" w-[4rem] ml-[9rem] mb-[2rem] p-5" />
                            <hr className="w-[13rem] ml-[4rem] mb-[1rem]" />
                            <p className="text-[#fff] text-center ">+234 706 4219 422</p>
                            <p className="text-[#fff] text-center mb-10">+234 811 5028 142</p>
                        </div>
                    </div>
                </section>
            </section>
            <footer className="w-full h-[10rem] bg-[#222222] pb-20 pt-6 ">
                <span className="flex gap-8 justify-center ml-[20rem]">
                    <nav className="">
                        <ul className='flex flex-row gap-4 text-[#fff] font-medium'>
                            <li>HOME</li>
                            <li>TRACK</li>
                            <li>CONTACT US</li>

                        </ul>
                    </nav>

                    <span className=' w-[20px] h-[20px] flex flex-row gap-4 ml-[30rem]'>
                        <img src={fb} alt="" />
                        <img src={Ig} alt="" />
                        <img src={In} alt="" />
                        <img src={Tw} alt="" />
                    </span>
                </span>
                <p className="text-[#BCBCBC] text-center pt-[3rem] font-normal"> &copy; copyright 2023</p>

            </footer>
        </div>
    )
}
