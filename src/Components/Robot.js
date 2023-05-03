import ArrowUp from './arrowUp';
import robot from '../assets/robot.png';
import Discount from '../assets/Discount.svg';

const Robot =()=>{
    return(
        <div>
            <div className='flex justify-end items-center pt-5 md:pt-15 sm:pt-10 lg:pt-20'>
                <div className=' w-[260px] md:w-[360px] lg:w-[460px]  mt-2 md:mt-4 sm:mt-3 lg:mt-5 flex items-center order-3'>
                <img src= {robot}  alt='robot img' className='w-full h-full'/> 
                </div>

                <div className='w-[55px] h-[55px] order-2 md:w-[100px] md:h-[100px] lg:w-[140px] lg:h-[140px] '>
                    <ArrowUp />
                </div>
                <div className='flex items-center order-1  ml-4 md:ml-8 sm:ml-6 lg:ml-10  w-[50%]  '>
                    <div className='flex-col justify-start '>
                        <div className='  w-[130px] sm:w-[140px] md:w-[190px] lg:w-[270px]  bg-[#272727] rounded-full shadow-xl flex justify-start items-center '>
                            <img src={Discount} alt="discount " className=':w-[15px] h-[15px] md:w-[22px] md:h-[22px] lg:w-[32px] lg:h-[32px]'/>
                            <p className='text-[0.36rem]   md:text-[0.55rem] lg:text-[0.75rem] font-[400] text-[#FFFF] leading-[1.688rem] p-auto text-center  sm:text-[1,125rem] '> 20%<span className='opacity-50'>DISCOUNT FOR</span> 1 MONTH <span className='opacity-50' >ACCOUNT</span></p>
                        </div>
                        <div className='w-[100%] h-[62.89%] mt-2 md:mt-4 sm:mt-3 lg:mt-5'>
                            <p className='text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] font-[600] text-[#FFFF] text-left lg:leading-[6.25rem] md:leading-[5.25rem]'>
                                The Next <br/> <span className='text-[#33BBCF]'>Generation </span> <br/>Payment method
                            </p>
                        </div> 
                        <div className='mt-2 md:mt-4 sm:mt-3 lg:mt-5'>
                            <p className='text-[0.75rem] md:text-[0.9rem] lg:text-[1.125rem] font-[400] text-[#FFFF] text-left lg:leading-[1.913rem] md:leading-[1.6rem] opacity-75'>
                                Our team of experts uses a methodology to identify <br/>
                                the credit cards most likely to fit your needs. <br />
                                We examine annual percentage rates, annual fees. 
                            </p>
                        </div>
                    </div>
                
                </div>
            </div> 
            <div className='h-5  sm:h-10 md:h-15 lg:h-20'></div>  
            <div className='flex justify-center items-center  w-[80%]  mr-[10%] ml-[10%] '>
                <p className='text-[10px]  text-[#FFFF] sm:text-[20px] md:text-[30px] lg:text-[40px]'>3800+</p> 
                <p className='text-[7px] text-[#33BBCF]  p-1 sm:p-2 md:p-3 lg:p-4 sm:text-[10px] md:text-[15px] lg:text-[20px]'> USER ACTIVE </p>
                <p className='text-[7px] text-[#33BBCF] p-1 sm:p-2 md:p-3 lg:p-4 sm:text-[10px] md:text-[15px] lg:text-[20px]'> | </p>
                <p className='text-[10px] text-[#FFFF] sm:text-[20px] md:text-[30px] lg:text-[40px] '>230+</p> 
                <p className='text-[7px] text-[#33BBCF] p-1 sm:p-2 md:p-3 lg:p-4 sm:text-[10px] md:text-[15px] lg:text-[20px]'> TRUSTED BY COMPANY </p>
                <p className='text-[7px] text-[#33BBCF] p-1 sm:p-2 md:p-3 lg:p-4 sm:text-[10px] md:text-[15px] lg:text-[20px]'> | </p>
                <p className='text-[10px] text-[#FFFF] sm:text-[20px] md:text-[30px] lg:text-[40px]'>$230M+</p> 
                <p className='text-[7px] text-[#33BBCF] p-1 sm:p-2 md:p-3 lg:p-4 sm:text-[10px] md:text-[15px] lg:text-[20px]'> TRANSACTION </p>
                <p className='text-[7px] text-[#33BBCF] p-1 sm:p-2 md:p-3 lg:p-4 sm:text-[10px] md:text-[15px] lg:text-[20px]'> | </p>

            </div>
        </div> 
    );
}

export default Robot ;