import Comment from "./comment";
import People1 from '../assets/people01.png'
import People2 from '../assets/people02.png'
import People3 from '../assets/people03.png'
import Binance from '../assets/binance.png'
import Airbnb from '../assets/airbnb.png'
import CoinBase from '../assets/coinbase.png'
import DropBox from '../assets/dropbox.png'





const Avis = () => {
    const persons =[{Oui:true ,name:'Herman Jensen' ,text:'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.' ,job:'Founder & Leader' ,img:People1 } ,
    {Oui:false ,name:'Steve Mark' ,text:'Money makes your life easier. If you are lucky to have it, you are lucky.' ,job:'Founder & Leader' ,img:People2 },
    {Oui:false ,name:'Kenn Gallagher' ,text:'It is usually people in the money business, finance, and international trade that are really rich.' ,job:'Founder & Leader' ,img:People3 }]
    return (
    <div>
        <div className='h-5  sm:h-10 md:h-15 lg:h-20'></div> 
        <div className='flex justify-center items-center mr-5 ml-5 md:ml-15 sm:ml-10 lg:ml-20 md:mr-15 sm:mr-10 lg:mr-20'>
            <div className=" flex justify-center">
                <h3 className=" text-[18px] md:text-[38px] sm:text-[28px] lg:text-[48px] text-[#FFFF]  w-[75%] ">What people are saying about us</h3>
            </div>
            <div className="  flex justify-center">
                <p className="text-[8px] md:text-[10px] sm:text-[14px] lg:text-[18px] text-[#FFFF] opacity-75 w-[75%] ">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
        </div>
        
        <div className='h-3  sm:h-5 md:h-8 lg:h-10'></div>

        <div className=" flex justify-center ">
            {persons.map((elem)=> {
                   return( <Comment  name={elem.name} image={elem.img} job={elem.job}  text={elem.text} Oui={elem.Oui}  /> ) 
            }
             )} 
        </div>
        <div className='h-5  sm:h-10 md:h-15 lg:h-20'></div> 

        <div className="flex justify-around ml-2 mr-2">
            <img src={Airbnb} alt='airbnb' className="w-[10%]"/>
            <img src={Binance} alt='binance' className='w-[10%]' />
            <img src={CoinBase} alt='coinbox' className='w-[10%]' />
            <img src={DropBox} alt='dropbox' className='w-[10%]' />
        </div>
        <div className='h-5  sm:h-10 md:h-15 lg:h-20'></div> 
 
        <div className="flex justify-between lg:p-10 md:p-8 sm:p-6 p-4 rounded-lg bg-[#6D6D6D] bg-opacity-25 ml-[10%] mr-[10%] ">
            <div >
                <h2 className=" text-[18px] sm:text-[28px] md:text-[38px] lg:text-[48px] text-[#FFFF] font-semiblod mt-2 md:mt-4 sm:mt-3 lg:mt-5">Let’s try our service now!</h2>
                <p className=" w-[65%] text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] text-[#FFFF] opacity-75 mt-2 md:mt-4 sm:mt-3 lg:mt-5">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div> 
            <button className=" px-2 rounded-lg bg-[#33BBCF] self-center  mt-4 md:mt-8 sm:mt-6 lg:mt-10  text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px]  w-[40px] sm:w-[80px] md:w-[120px] lg:w-[160px] h-[28px] sm:h-[38px] md:h-[48px] lg:h-[58px] drop-shadow-xl hover:text-white" >Get Started</button>
        </div>
    </div>  );
}
 
export default Avis ;