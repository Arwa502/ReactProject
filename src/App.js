import logo from './logo.svg';
import './App.css';
import {Users} from './components/Users.js';
import ProfilePic from './components/ProfilePic';
import Info from './components/Info';
function App() {
  return (
    <>
    <ProfilePic pic = {Users[0].profilePicture}/>
    <Info username = {Users[0].UserName} classLevel = {Users[0].ClassLevel} email = {Users[0].Email} school = {Users[0].School}/>

    <ProfilePic pic = {Users[1].profilePicture}/>
    <Info username = {Users[1].UserName} classLevel = {Users[1].ClassLevel} email = {Users[1].Email} school = {Users[1].School}/>
    
    <ProfilePic pic = {Users[2].profilePicture}/>
    <Info username = {Users[2].UserName} classLevel = {Users[2].ClassLevel} email = {Users[2].Email} school = {Users[2].School}/>
    </>
  );
}

export default App;
