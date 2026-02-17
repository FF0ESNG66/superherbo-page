
import Image from 'next/image'
import MobileNavbar from './MobileNavbar'



const Navbar = () => {

  return (
 
    <header className="flex-between w-full h-6 px-[4vw] py-15 top-0">
        <div className="flex-none">
            <Image
                src="/home_elements/icon.svg"
                width={40}
                height={40}
                alt="logo"
                className='cursor-pointer'
            />
        </div>
        <div className='hidden lg:flex flex-2 justify-end gap-4 ml-[2.5vw] mr-[2.5vw]'>
            <button className="nav-btn">Store</button>
            <button className="nav-btn">About us</button>
            <button className="nav-btn">Benefits</button>
            <button className="nav-btn">Contact</button>
        </div>
        <div className='flex gap-4 items-center ml-[2vw] shrink-0'>
            <Image
                src="/navbar-elements/Union.svg"
                width={19}
                height={19}
                alt="search-icon"
                className='hidden lg:block cursor-pointer'
                
            />
            <Image
                src="/navbar-elements/Frame-6.svg"
                width={42}
                height={42}
                alt="profile-icon"
                className='hidden lg:block cursor-pointer'
                
            />
            <Image
                src="/navbar-elements/Frame-5.svg"
                width={42}
                height={42}
                alt="car-icon"
                className='hidden lg:block cursor-pointer'
              
            />
        </div>
        
        <MobileNavbar />
    </header>
    

  )
}

export default Navbar
