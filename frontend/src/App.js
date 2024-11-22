import {BrowserRouter,Routes,Route} from 'react-router-dom'
//pages and comonent
import Home from './pages/home'
import Navbar from './components/nav'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
          <div className="pages">
              <Routes>
                <Route 
                    path='/'
                    element={<Home />}
                />
              </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
