import Image from 'next/image'

import Link from 'next/link';


import Socials from '../components/Socials'
const Header = () => {
  return <header className="  absolute z-30 w-full flex items-center px-16 xl:px-0  xl:h-[90px]">
    
    <div className=' container mx-auto'>
<div className='  flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
  {/* logo */}
<Link href="/"> <h className="  block font-bold text-2xl md:text-3xl relative"> <div className=' bg-red-700 w-2 h-2 -right-2 rounded-full  bottom-1 absolute'></div>Ahmed <span className=' font-light'>Anwar</span></h>
</Link> 
  {/* socials */}
<Socials/>

</div>


    </div>
    
    </header>;
};

export default Header;
