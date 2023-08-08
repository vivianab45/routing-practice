
import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './Views/HomePage'
import TextOrNumber from './Views/TextOrNumber'
import HelloColors from './Views/HelloColors'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<HomePage/>}/> 
        <Route path='/:value' element={<TextOrNumber/>}/>
        <Route path='/hello/:color1/:color2' element={<HelloColors/>}/>
      </Routes>
    </div>
  );
}

export default App;
