import Bill from '../assets/bill.png'
import Appel from '../assets/apple.svg'
import Google from '../assets/google.svg'




const Paypal = () => {
    return (     
    <div >
        <div className='h-5  sm:h-10 md:h-15 lg:h-20'></div>
        <div className='flex justify-around items-center m-auto'>
            <div className='w-[50%] '>
                <img src={Bill} alt='paypal ' className=' px-4 md:px-8 sm:px-6  lg:px-10' />
            </div>
            <div className='w-[35%]'>
                <h2 className=" text-[18px] sm:text-[28px] md:text-[38px] lg:text-[48px] text-[#FFFF] font-semiblod mt-2 md:mt-4 sm:mt-3 lg:mt-5">Easily control your  billing and invoicing.</h2>
                <p className="text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] text-[#FFFF] opacity-75 mt-4 md:mt-8 sm:mt-6 lg:mt-10">Elit enim sed massa etiam. Mauris eu adipiscing  ultrices ametodio aenean neque. Fusce ipsum orci  rhoncus aliporttitor integer platea placerat.</p>
                <div className='flex justify-start items-center mt-4 md:mt-8 sm:mt-6  lg:mt-10'>
                    <img src={Appel} alt='Appel' className='mr-2 md:mr-6 sm:mr-4 lg:mr-8 shadow-xl w-[28%] rounded-md hover:cursor-pointer' />
                    <img src={Google} alt='Google' className='shadow-xl w-[28%] rounded-md hover:cursor-pointer' />
                </div>
            </div>
            
        </div>
    </div> 
    );
}
 
export default Paypal;