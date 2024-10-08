
import './App.css';
import Navbar from './components/Navbar';
import Header from "./components/Header"
import HeroSection from './components/HeroSection';
import Collections from './components/Collections';
import Items from './components/Items';
import Logo from './components/Logo';
import ShopCategory from './components/ShopCategory';
import ShopCollection from './components/ShopCollection';
import Beginning from './components/Beginning';
import StoreLocator from './components/StoreLocator';
import Signup from './components/Signup';
import Footer from './components/Footer';



function App() {
  return (
    <div className='overflow-x-hidden'>
     <Navbar></Navbar>
     <Header></Header>
     <HeroSection></HeroSection>
     <Collections></Collections>
     <Items></Items>
     <Logo></Logo>
     <ShopCategory></ShopCategory>
     <div className='relative bottom-[200px]'>
     <Logo></Logo>
     <ShopCollection></ShopCollection>
     </div>
     <Beginning></Beginning>
     <StoreLocator></StoreLocator>
     <Signup></Signup>
     <Footer></Footer>
    </div>
   
  );
}

export default App;
