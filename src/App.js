
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import NavBar from './NavBar';
import Start from './Start/Start';
import Layout from './Layout/Layout';
import About from './About/About';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio'
import Notfound from './Notfound/Notfound';

function App() {
  const routs=createBrowserRouter([
    {
      path:"/",element:<Layout></Layout>,children:[
        {index:true,element:<Start></Start>},
        {path:"about",element:<About></About>},
        {path:"portfolio",element:<Portfolio></Portfolio>},
        {path:"contact",element:<Contact></Contact>},
        {path:'*',element:<Notfound></Notfound>}
      ]
      
    }
  ])
  return (
    <div >
      <RouterProvider router={routs}/>
    </div>
  );
}

export default App;
