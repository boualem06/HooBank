import arrow from '../assets/arrow-up.svg'


const ArrowUp = () => {
    return (
        <div className='border-2 md:border-4 border-[#33BBCF] rounded-full px-6 py-6 md:px-8 w-full h-full hover:cursor-pointer hover:drop-shadow-[4px_0px_10px_white] '>
                <div className='flex justify-center w-full h-full m-auto flex items-center'>
                    <h3 className=' text-[0.4rem] font-[500] text-[#FFFF] leading-[1.463rem] text-center  flex items-center   md:text-[1rem] lg:text-[1.25rem] '>Get  Started</h3>
                    <div className='w-[34%] h-[30%]  flex items-center' >
                        <img src= {arrow} alt='arrow img' className='w-full h-full'/> 
                    </div>
                </div>
        </div>    
);
}

export default ArrowUp ;