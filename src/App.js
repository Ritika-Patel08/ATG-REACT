import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from '../src/components/body.js'
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Navbar />
    <Login/>
    <Body/>
    <script src="https://kit.fontawesome.com/7222c65f87.js" crossorigin="anonymous"></script>
    </>
  );
}

export default App;
