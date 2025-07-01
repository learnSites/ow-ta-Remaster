import HeadSearch from './components/HeadSearch';
import Card from './components/Card';
import './app.css';

function App() {
   const product = [{'Pdtname':'Home Appliances','logo':'/src/asset/Home Appliances.jpg'},{'Pdtname':'Computers & Accessories','logo':'/src/asset/computer.jpg'},{'Pdtname':'Mens Collection','logo':'/src/asset/mens.jpg'},{'Pdtname':'Kids Collection','logo':'/src/asset/kids.jpg'},{'Pdtname':'Women Collection','logo':'/src/asset/women.jpg'},{'Pdtname':'Smart Home Devices','logo':'/src/asset/smarthome.webp'},{'Pdtname':'Entertainment Electronics','logo':'/src/asset/game.jpg'},{'Pdtname':' Mobile & Tablets','logo':'/src/asset/mobtab.jpg'},{'Pdtname':'Networking & Connectivity','logo':'/src/asset/network.jpg'}];

  return (
    <>
      <HeadSearch />
      <div className='bodyContent'>
        {product.map((element,index) => (
         <Card key={index} src ={element.logo} name={element.Pdtname}/>
        ))}
      </div>
    </>
  );
}

export default App



