import Text from './textFiledBtn'
import Card from '../assets/card.png'
const Statistic = () => {
    return (
        <div>
            <div className='h-5  sm:h-10 md:h-15 lg:h-20'></div> 
            <div className="flex justify-around items-center ">
                <Text text={'Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.'} title={'Find a better card deal in few easy steps.'} btnText={'Get Started'} />
                <div className='w-[35%]'>
                    <img src={Card} alt='card' />
                </div>
            </div> 
        </div>
     ); 

}

export default Statistic;