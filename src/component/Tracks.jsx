import React from 'react'

export default function Tracks() {

  return (
    <div>
       <section className=" bg-[#3431f1] flex w-full h-10 list-none text-center">
         <p className="text-[#fff] absolete text-[20px] ml-40 font-bold">Fresh Vibes</p>
            <nav className="flex list-none; text-[#fff] text-center gap-4 ml-[40rem] mt-2 px-5">
               <li><a href="Home">Home</a></li>
               <li><a href="Tracks">Tracks</a></li>
               <li id="contact"><a href="Contact">CONTACT ME</a></li>
            </nav>
       </section>

       <section className="myImage">
         <main className="text-center pt-10">
          <h1 className="text-[#fff] text-[25px] font-bold ">Tracks</h1>
          <p className="text-[#fff]">Lorem ipsum dolor sit amet consectetur  adipisicing <br />elit. Quia sapiente autem inventore suscipit omnis at    <br /> eos  voluptates odio perferendis delectus neque iusto provident!
          </p>
         </main>
       </section>

       <section className="text-[#030303]">
        <h3>Feshow Music</h3>
        <div>
          <span>
            
          </span>
        </div>
       </section>



    </div>
  )
}
