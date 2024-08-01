import './App.css';
import logo from './assets/img/logo.png'
function App() {
  return (
    <>
    <div className="container">
      <div className="navBar">
        <div className='logoClass'>
          <img src={logo} className='logo'/>
          <div className="name">Innov8ture</div>
        </div>
        <div className='tabs'>
          <a href='' className='tab'>Home</a>
          <a href='' className='tab'>About Us</a>
          <a href='' className='tab'>Contact</a>
          <a href='' className='tab'>Services</a>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
