import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, } from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import Registation from './Components/Registation';
import {Provider} from 'react-redux'
import Store from './redux/Store';
import { AuthProvider } from './Components/Auth';
import { RequireAuth, RequireLogin } from './Components/RequireAuth';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import Profile from './Components/Profile';
import ProfileDisplay from './Components/ProfileDisplay';


function App() {
  return (
    <>
    <AuthProvider>
    {/* <Provider store={Store}> */}
      <Routes>
      <Route element={<RequireAuth/>}><Route path="home" element={<Home></Home>}> </Route></Route>
      <Route element={<RequireLogin/>}><Route path="login" element={<Login></Login>}> </Route></Route>
       
      <Route path="/" element={<Registation/>} />
      <Route path="login" element={<Login/>} />
      <Route path="profile" element={<Profile/>} />
      <Route path="profile/display" element={<ProfileDisplay/>} />
    
      {/* <Route element={<RequireLogin/>}><Route path=":login" element={<Login></Login>}> </Route></Route> */}

      </Routes>
      {/* </Provider> */}
      </AuthProvider>
     
    </>
  );
}

export default App;
