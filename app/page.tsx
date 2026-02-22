import Navbar from "@/components/Navbar";
import Image from "next/image";
import products from "@/app/productsDb"
import React from "react"



export default function Home() {
  const bgProductColor = ["#EBE1AA", "#7CCAC1", "#f1c6d2"];
  return (
    <>

      
      <div className="
        [@media(max-height:350px)]:bg-repeat
        [@media(max-height:350px)]:bg-cover
        [@media(max-height:350px)]:bg-[url('/background/image.png')]
        bg-[url('/background/backgroundhr.png')] 
        bg-cover 
        bg-no-repeat 
        lg:bg-center
        md:bg-position-[75%_center]
        bg-position-[70%_center]
        min-h-screen
        ">
        <Navbar />
        {/* chatgpt dijo volver el section relativo y no el div y que los elementos dependan de esto pa tener mas control or sum bs like that */}
        <section className="flex flex-col gap-10 items-center mt-[7vh] sm:mt-[10vh] sm:w-[45rem] sm:items-start sm:ml-[4vw] sm:max-w-[89vw]">
          <div className="relative">
            <h1 className="text-[#0A5559] text-[3.8rem] sm:text-[5rem] md:text-[5rem] lg:text-[7.5rem] font-fugaz-one leading-[3.9rem] sm:leading-[6rem] md:leading-[6rem] lg:leading-[8rem] ">
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
              className="w-[5.5rem] sm:w-[7rem] md:w-[9rem] lg:w-[12rem] absolute top-[17.50%] left-[65.80%] sm:top-[18%] sm:left-[66%] md:top-[16.50%] md:left-[65%] lg:top-[17.50%] lg:left-[65.80%] z-1"
            />
            {/* GREEN LEMON */}
            <Image 
              src={"/home_elements/Artboard-5.svg"}
              alt="Artboard-11"
              width={1}
              height={1}
              // problemas con overlapping
              className="w-[10rem] [@media(max-height:840px)]:hidden max-[376px]:hidden sm:w-[clamp(12rem,15.5vw,16rem)] absolute top-[250%] left-[55%] sm:top-[63vw] sm:left-[55vw] md:top-[45vw] md:left-[69vw] lg:top-[18vw] lg:left-[79vw] z-1"
            />
            {/* 33 SIGN*/}
            <Image 
              src={"/home_elements/Artboard-6.svg"}
              alt="Artboard-11"
              width={1}
              height={1}
              // problemas con overlapping
              className="w-[8rem] [@media(max-height:840px)]:hidden max-[376px]:hidden sm:w-[clamp(9rem,12vw,12rem)] absolute top-[260%] left-[4%] sm:top-[30vw] sm:left-[68vw] md:top-[18vw] md:left-[70vw] lg:top-[0.5vw] lg:left-[79.5vw] z-1"
            />
            {/* GREEN LOGO */}
            <Image 
              src={"/home_elements/SOCIAL-MEDIA-SUPERHERBO-1.svg"}
              alt="Artboard-11"
              width={500}
              height={500}
              className="w-[7rem] [@media(max-height:570px)]:hidden sm:w-[clamp(8.5rem,9.5vw,12rem)] absolute top-[-55%] left-[75%] sm:top-[-5.8vw] sm:left-[65vw] md:top-[-5.8vw] md:left-[61vw] lg:top-[-5.8vw] lg:left-[61vw] z-100"
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
          <button type="submit" className="bg-[#EC5D34] font-fugaz-one text-white pr-[4rem] pl-[4rem] sm:mb-[5rem] sm:pr-[6em] sm:pl-[4rem] py-[1rem] rounded-full cursor-pointer text-[1.3rem] flex justify-center items-center">
            SHOP NOW
            <svg 
              className="hidden sm:inline ml-[1rem]"
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

      {/* max-w-[89vw] antes estaba en section pero se veia raro el scroll bar */}
      <div className="bg-[#fff9e8] min-h-[30vh] max-h-[100vh]">
        <section className="flex flex-col w-full mx-auto px-[1rem]">
          {/* por que ml-20 */}
            <div className="flex flex-col max-w-[89vw] items-start sm:items-center gap-4 ml-20 sm:flex-row sm:justify-between mb-[4rem] sm:mb-[2.5rem] mt-[4rem] sm:mt-[1rem] sm:py-[3rem]">
                <h2 className="font-fugaz-one text-[#0A5559] text-[2.2rem] sm:text-[2.5rem]">
                    Our products
                  </h2>
                  <h2 className="font-roboto font-medium text-[#0A5559] text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]"> SEE ALL
                    <svg 
                      className="inline ml-4"
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
            
            <div className="flex gap-11 overflow-x-auto pl-20">
              {
                products.map((product, index) => (
                    
                  <div className="flex flex-col mb-5 justify-center items-center gap-6" key={product._id}>
                      <div 
                        className="h-[24rem] w-[14rem] relative rounded-[8rem] cursor-pointer" 
                        style={{ backgroundColor: bgProductColor[index % bgProductColor.length]}}
                      >
                        <Image 
                          src={`${product.imageUrl}`}
                          alt={`${product.product_name}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center gap-1.5">
                        <div className="font-fugaz-one text-[#0A5559] text-[1.6rem]">
                          {product.product_name}
                        </div>
                        <div className="font-roboto text-[#0A5559] text-[1rem]">
                          {product.description}
                        </div>
                        <div className="font-fugaz-one text-[#7CCAC1] text-[2rem]">
                          {product.price}.00 <span>{product.currency}</span>
                        </div>
                      </div>
                  </div>
                ))
              }
            </div>
        </section>


        <div className="overflow-hidden">

          <div className="pt-[2rem] bg-[#F9F2CE] min-h-[90vh] md:min-h-[90vh] [@media(min-width:1515px)]:min-h-[120vh]">
            <section className="flex flex-col lg:flex-row justify-center items-center sm:gap-45 pt-10 sm:pt-20 pb-40 sm:pb-10">
                <div className="flex flex-col items-start text-[1.2rem] gap-15 sm:gap-14 shrink sm:shrink-0 relative lg:ml-[-25] lg:pt-17">
                  <Image 
                    src="/home_elements/image-9.svg"
                    alt="image-9"
                    width={1}
                    height={1}
                    className="object-contain w-[20rem] sm:w-[28rem] md:w-[39rem] lg:w-[42rem]"
                  />
                  <Image 
                    src="/home_elements/Vector.svg"
                    alt="image-9"
                    width={10}
                    height={10}
                    className="absolute w-[2.8rem] sm:w-[3.9rem] md:w-[5rem] lg:w-[6rem] right-[10%] top-[-2.50%] sm:top-[-2%] sm:left-[84%] md:left-[84%] md:top-[-3%] lg:left-[84%] lg:top-[5%]"
                  />
                  <p className="font-roboto text-[#0A5559] sm:text-[1.5rem] md:text-[1.9rem] leading-9.5 pl-3">
                    For those busy days when you struggle <br />
                    to eat balanced meals or get sufficient <br />
                    vitamins and minerals, we are here to <br />
                    support you. <br />
                    Our mission is to deliver top-quality <br />
                    nutrition for your immune system, <br />
                    digestion, and more. At Super Herbo, <br />
                    we are dedicated to crafting convenient <br />
                    products that harness the power of <br />
                    rescued fruits and vegetables, ensuring <br />
                    you get all the essential nutrients <br />
                    without any waste.
                  </p>
                </div>
                <div className="mr-[7vw] lg:ml-[10] relative lg:pt-17">
                  <Image 
                    src="/home_elements/Poster-12.svg"
                    alt="Poster-12"
                    width={1}
                    height={1}
                    className="[@media(max-width:1515px)]:hidden object-contain w-full"
                  />
                  {/* ORANGE */}
                  <Image 
                    src="/home_elements/orange.svg"
                    alt="orange"
                    width={1}
                    height={1}
                    className="absolute [@media(max-width:1515px)]:hidden w-[24rem] top-32 left-87"
                  />
                  {/* GREEN FOIL */}
                  <Image 
                    src="/home_elements/foil_sachet_packaging_1.svg"
                    alt="green-foil"
                    width={1}
                    height={1}
                    className="absolute [@media(max-width:1515px)]:hidden w-[46rem] max-w-[100rem] top-72 right-30"
                  />
                  {/* PINK FOIL */}
                  <Image 
                    src="/home_elements/foil_sachet_packaging_2.svg"
                    alt="pink-foild"
                    width={1}
                    height={1}
                    className="absolute [@media(max-width:1515px)]:hidden w-[28rem] max-w-[100rem] top-92.5 left-65"
                  />
                  {/* APPLE */}
                  <Image 
                    src="/home_elements/apple.svg"
                    alt="apple"
                    width={1}
                    height={1}
                    className="absolute [@media(max-width:1515px)]:hidden w-[30rem] max-w-[100rem] top-[34rem] right-63"
                  />
                </div>
            </section>
            
          </div>

          <div className="bg-[#FFFCF4] min-h-[100vh]">
              <section className="flex flex-col justify-start items-start">
                
                <div className="relative w-[110vw] z-30 h-[4rem] sm:h-[6rem] rotate-[-7deg] sm:rotate-[-6deg] translate-x-[-5vw] top-[-2.50rem] sm:top-[-4.50rem]">
                  <div className="flex gap-4 sm:gap-8 whitespace-nowrap absolute bg-[#ebe3ab] h-full items-center sm:py-2">
                    {Array(10).fill(0).map((_, i) => (
                      <React.Fragment key={i}>
                        <p className="font-bebas-neue text-[#0A5559] text-[1.5rem] sm:text-[3.8rem]">
                          NO ADDED SUGAR
                        </p>
                        <Image
                          src="/home_elements/logo-green.svg"
                          alt="green-logo"
                          width={48}
                          height={48}
                          className="rotate-[-17.5deg] mt-[-4] sm:mt-[-10] w-[1.5rem]"
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="relative w-[110vw] z-20 h-[4rem] sm:h-[6rem] rotate-[8.50deg] sm:rotate-[6.50deg] translate-x-[-5vw] top-[-7rem] sm:top-[-12rem] w-[110vw]" >
                  <div className="flex gap-4 sm:gap-8 whitespace-nowrap absolute bg-white items-center h-full items-center sm:py-2">
                    {Array(10).fill(0).map((_, i) => (
                      <React.Fragment key={i}>
                        <p className="font-bebas-neue text-[#f6a7c4] text-[1.5rem] sm:text-[3.8rem]">
                          NO ADDED SUGAR
                        </p>
                        <Image
                          src="/home_elements/logo-pink.svg"
                          alt="pink-logo"
                          width={48}
                          height={48}
                          className="rotate-[-17.5deg] mt-[-4] sm:mt-[-10] w-[1.5rem]"
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>

              <div className="flex flex-col items-center justify-center lg:flex-row h-[100vh] w-[100vw] mt-[-50] sm:mt-0">

                  <div className="flex flex-col h-1/3 w-full bg-blue-200 justify-center items-center gap-5 sm:gap-9 shrink-0">
                    <h1 className="min-w-[9em] shrink-0 font-fugaz-one text-[#0A5559] text-[2.5rem] sm:text-[3.3rem] md:text-[4.3rem] leading-[4rem] sm:leading-[5.6rem]">
                      ONE SCOOP <br />
                      ENDLESS ENERGY! 
                    </h1>
                    <button className="w-[20rem] sm:w-[24rem] py-[0.8rem] rounded-full border border-[#BF326F] cursor-pointer text-[1.5rem] flex justify-center items-center gap-3 font-fugaz-one text-[#BF326F]">
                      SEE MORE BENEFITS

                      <svg width="36" height="21" viewBox="0 0 36 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.1662 10.0264H1" stroke="#BF326F" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M34.1662 10.0263L26.6569 18.9697" stroke="#BF326F" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M34.1662 10.0264L26.6569 1.08301" stroke="#BF326F" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  <div className="lg:hidden h-1/2 flex flex-col justify-center items-center gap-5 sm:gap-8 sm:mt-0  text-[1.5rem] sm:text-[2.2rem] w-[70%] bg-purple-200">
                    <div className="flex flex-col items-center justify-center min-w-[8em] font-roboto text-[#BF326F] leading-6.5">
                      <p>Better nails, hair and skin</p>
                      
                    </div>
                    <div className="flex flex-col items-center justify-center w-full font-roboto text-[#BF326F] leading-6.5">
                      <p>Natural-source</p>
                      <p>vitamins & minerals</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full font-roboto text-[#BF326F] leading-6.5">
                      <p>Inmune System</p>
                      <p>Booster</p>
                    </div>
                    
                    
                    <p className="hidden font-roboto text-[#BF326F] text-[1.4rem] w-[50%]">Inmune System Booster</p>
                  </div>


                  <div className="relative bg-red-200 w-full h-full">
                    <Image 
                      src={"home_elements/bigpote-2.svg"}
                      alt="bigproduct"
                      width={1}
                      height={1}
                      className="absolute object-contain h-[150%] w-full -translate-y-[20%]"
                    />

                    <Image 
                      src={"home_elements/Vector-Curly.svg"}
                      alt="Vector-Curly"
                      width={1}
                      height={1}
                      className="hidden w-[3rem] absolute top-[100%]"
                    />
                    <p className="hidden font-roboto text-[#BF326F]">Better nails, hair and ksin</p>

                    {/* <Image />
                      <p></p>

                    <Image />
                      <p></p> */}
                  </div>
              </div>
              
              </section>
            </div>
        </div>
      </div>
    </>
  );
}
