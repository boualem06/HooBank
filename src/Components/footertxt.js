const FooterText = ({title , text}) => {
    return (  
        <div>
            <h5 className=" text-[6px] md:text-[14px] sm:text-[10px] lg:text-[18px]  text-[#FFFF] font-semiblod">{title} </h5>
            {
                text.map((elem)=>{
                    return(<p className=" hover:cursor-pointer text-[6px] sm:text-[8px] md:text-[12px] lg:text-[16px] text-[#FFFF] opacity-50 mt-2 md:mt-4 sm:mt-3 lg:mt-5">{elem}</p>)
                })
            }
        </div>
    );
}
 
export default FooterText;