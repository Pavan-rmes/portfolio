import './App.css';
import {useEffect} from "react"
import { Route, Switch } from 'react-router-dom';
import { Header, Profile, Footer } from './components/profile';
import { Resume } from './components/Resume';

function App() {
  return (
    <div className='bg-orange-50 lg:h-screen'>
      <Header />
      <div className='bg-orange-50'>
      <Switch>
        <Route exact path="/">
          <Profile />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Footer />
      </div>
    </div>
  );
}


function Projects(){
  return(
    <div className='animate-slide-in-fwd-center bg-orange-50 ml-4 md:mx-96'>
      <p className='font-bold text-4xl mt-20'>
        Projects
      </p>
    </div>
  )
}


//https://www.linkedin.com/in/pavan-kumar-guntupalli-6436aa130

export default App;
