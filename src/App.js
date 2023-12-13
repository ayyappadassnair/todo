import SignUp from './components/SignUp'
import SignIn from './components/SingIn'
import TodoMain from './components/TodoMain'
import { Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUp/>}></Route>
        <Route path='/login' element={<SignIn/>}></Route>
        <Route path='/todo' element={<TodoMain/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
