
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import { Routes, Route } from 'react-router-dom'
import Characters from './Characters/Characters';
import Games from './Game/Games';



function App() {
  return (
    <>
    <Header/>
    <div className='container'>
<Routes>
  <Route path = '/' element = { <Main/> }></Route>
  <Route path = '/Characters' element= { <Characters/> }> </Route>
  <Route path = '/games' element= { <Games/> }> </Route>
</Routes>
</div>
    </>
  );
}

export default App;
