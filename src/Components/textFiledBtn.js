const text = ({title,text,btnText}) => {
    return (  
    <div className="flex flex-col justify-around items-start ml-4 md:ml-8 sm:ml-6 lg:ml-10 w-[40%] ">
        <h2 className=" text-[18px] sm:text-[28px] md:text-[38px] lg:text-[48px] text-[#FFFF] font-semiblod mt-2 md:mt-4 sm:mt-3 lg:mt-5">{title}</h2>
        <p className="text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] text-[#FFFF] opacity-75 mt-2 md:mt-4 sm:mt-3 lg:mt-5">{text}</p>
    <button className="rounded-lg bg-[#33BBCF]  mt-4 md:mt-8 sm:mt-6 lg:mt-10  text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px]  w-[40px] sm:w-[80px] md:w-[120px] lg:w-[160px] h-[28px] sm:h-[38px] md:h-[48px] lg:h-[58px] drop-shadow-xl hover:text-white px-2" >{btnText}</button>
</div>
 );
}
 
export default text;