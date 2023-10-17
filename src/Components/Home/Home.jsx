import './Home.css'
import Slider from './Slider'
import CartContainer from './CartContainer';
import DoctersList from './DoctersList'
import DataPara from './DataPara'
import backgroundImage from './Images/HomeBg-1.jpg'
// import FooterNav from '../Footer';
export default function Home() {

  return (
    <>

      <div className="relative">
        <div className="fixed  -z-40 bg-cover h-full bg-fixed w-full bg-top" style={{
          backgroundImage: `url(${backgroundImage})`,
        }}></div>
        <Slider />
        <CartContainer />
        <DataPara/>
        <DoctersList/>
      </div>
      {/* <FooterNav/>  */}

    </>

  );
}
