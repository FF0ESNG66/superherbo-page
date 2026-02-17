import Navbar from "@/components/Navbar";
import Image from "next/image";



export default function Home() {
  return (
    <>
      <div className="bg-[url('/background/backgroundhr.png')] 
        bg-cover 
        bg-no-repeat 
        lg:bg-center
        md:bg-position-[center_right_-250]
        bg-position-[center_right_-320]
        min-h-screen
        ">
        <Navbar />

        <section className="flex flex-col gap-10 items-center mt-[10vh] sm:w-[45rem] sm:items-start sm:ml-[4vw] ">
          <div className="relative">
            <h1 className="text-[#0A5559] text-[3.8rem] sm:text-[5rem] md:text-[5rem] lg:text-[7.5rem] font-fugaz-one leading-[3.9rem] sm:leading-[6rem] md:leading-[6rem] lg:leading-[8rem]">
              GET YOUR
            </h1>
            <h1 className="text-[#0A5559] text-[3.8rem] sm:text-[5rem] md:text-[5rem] lg:text-[7.5rem] font-fugaz-one leading-[3.9rem] sm:leading-[6rem] md:leading-[6rem] lg:leading-[8rem]">
              GREENS
            </h1>
            <h1 className="text-[#0A5559] text-[3.8rem] sm:text-[5rem] md:text-[5rem] lg:text-[7.5rem] font-fugaz-one leading-[3.9rem] sm:leading-[6rem] md:leading-[6rem] lg:leading-[8rem]">
              ON THE GO!
            </h1>

            {/* PINK FLOWER */}
            <Image 
              src={"/home_elements/Artboard-11.svg"}
              alt="Artboard-11"
              width={1}
              height={1}
              className="w-[5.5rem] sm:w-[7rem] md:w-[9rem] lg:w-[12rem] absolute top-[17.50%] left-[65.80%] sm:top-[18%] sm:left-[66%] md:top-[16.50%] md:left-[65%] lg:top-[17.50%] lg:left-[65.80%]"
            />
            {/* GREEN LEMON */}
            <Image 
              src={"/home_elements/Artboard-5.svg"}
              alt="Artboard-11"
              width={1}
              height={1}
              className="w-[11rem] sm:w-[clamp(12rem,15.5vw,16rem)] absolute top-[240%] left-[58%] sm:top-[63vw] sm:left-[55vw] md:top-[45vw] md:left-[70vw] lg:top-[18vw] lg:left-[79vw]"
            />
            {/* 33 SIGN*/}
            <Image 
              src={"/home_elements/Artboard-6.svg"}
              alt="Artboard-11"
              width={1}
              height={1}
              className="w-[9rem] sm:w-[clamp(rem,10vw,12rem)] absolute top-[250%] left-[1%] sm:top-[30vw] sm:left-[68vw] md:top-[18vw] md:left-[70vw] lg:top-[-0.5vw] lg:left-[80.5vw] "
            />
            {/* GREEN LOGO */}
            <Image 
              src={"/home_elements/SOCIAL-MEDIA-SUPERHERBO-1.svg"}
              alt="Artboard-11"
              width={500}
              height={500}
              className="w-[7rem] sm:w-[clamp(8.5rem,9.5vw,12rem)] absolute top-[-55%] left-[90%] sm:top-[-5.8vw] sm:left-[65vw] md:top-[-5.8vw] md:left-[61vw] lg:top-[-5.8vw] lg:left-[61vw] z-1000"
            />
          </div>
          <div className="mb-[0.5rem]">
              <div className="hidden sm:block lg:block">
                  <p className="text-[#0A5559] font-roboto sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.5rem]">
                      We rescue fruits and veggies to give you all the  
                  </p>
                  <p className="text-[#0A5559] font-roboto sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.5rem]">
                      fiber and vitamins you need to shine bright everyday
                  </p>
              </div>
            
              {/* Mobile (below sm) */}
              <div className="block sm:hidden flex flex-col gap-2">
                  <p className="text-[1.3rem] text-[#0A5559] font-roboto font-bold bg-[#d2f3f5]/60 sm:bg-transparent">
                      We rescue fruits and veggies to
                  </p>
                  <p className="text-[1.3rem] text-[#0A5559] font-roboto font-bold bg-[#d2f3f5]/60 sm:bg-transparent">
                      give you all the fiber and vitamins
                  </p>
                  <p className="text-[1.3rem] text-[#0A5559] font-roboto font-bold bg-[#d2f3f5]/60 sm:bg-transparent">
                      you need to shine bright everyday
                  </p>
              </div>
          </div>
          <button type="submit" className="bg-[#EC5D34] font-fugaz-one text-white pr-[6em] pl-[4rem] py-[1rem] rounded-full cursor-pointer text-[1.3rem] flex justify-center items-center">
            SHOP NOW
            <svg 
              className="inline ml-[1rem]"
              width="42" 
              height="20" 
              viewBox="0 0 42 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg">
              <path d="M40.5 9.94339H1" stroke="currentcolor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M40.5 9.9434L31.5566 1" stroke="currentcolor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M40.5 9.94338L31.5566 18.8868" stroke="currentcolor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </section>
      </div>


      <div className="bg-[#FFFCF4] min-h-full">
        <section>
            <div className="flex justify-between py-[3rem] px-[5rem]">
                <h2 className="font-fugaz-one text-[#0A5559] text-[2.6rem]">
                  Our products
                </h2>
                <h2 className="font-roboto font-[500] text-[#0A5559] text-[2.3rem]"> SEE ALL
                  <svg 
                    className="inline ml-[1rem]"
                    width="42" 
                    height="20" 
                    viewBox="0 0 42 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.5 9.94339H1" stroke="currentcolor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M40.5 9.9434L31.5566 1" stroke="currentcolor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M40.5 9.94338L31.5566 18.8868" stroke="currentcolor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </h2>
            </div>
            <div>
              
            </div>
        </section>
      </div>
    </>
  );
}
