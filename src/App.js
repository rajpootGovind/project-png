
import './App.css';
import Navbar from './components/Navbar';
import Header from "./components/Header"
import HeroSection from './components/HeroSection';
import Collections from './components/Collections';
import Items from './components/Items';
import Category from './components/Category';



function App() {
  return (
    <div className='overflow-x-hidden'>
     <Navbar></Navbar>
     <Header></Header>
     <HeroSection></HeroSection>
     <Collections></Collections>
     <Items></Items>
     <Category></Category>
    </div>
  );
}

export default App;
