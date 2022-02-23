import './App.css';
import {useEffect} from "react"
import { Route, Switch } from 'react-router-dom';
import { Header, Profile, Footer } from './components/profile';
import { Resume } from './components/Resume';
import { Projects } from './components/Projects';

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
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
      </div>
    </div>
  );
}



function Contact(){
  return(
    <div className='animate-slide-in-fwd-center bg-orange-50 ml-4 md:mx-96'>
      <div className='flex flex-wrap mb-48 mt-36'>
        <div>
          <p className='font-bold text-4xl'>
            Contact
          </p>
          <p>Looking forward to hearing from you</p>
          <p className='font-bold text-xl mt-4'>Phone</p>
          <p>+91 8555910132</p>
          <p className='font-bold text-xl mt-4'>Email</p>
          <p>pavanguntupally12@gmail.com</p>
        </div>
        <div className='ml-auto'>
          <div className='flex flex-wrap gap-x-2 gap-y-4 md:gap-x-8'>
            <div>
              <p>First Name</p>
              <input type="text" className='p-2 w-full border  border-black bg-orange-50'></input>
            </div>
            <div>
              <p>Last Name</p>
              <input type="text" className='p-2 border  border-black bg-orange-50'></input>
            </div>
          </div>
          <div className='flex mt-10 flex-wrap gap-x-2 gap-y-4 md:gap-x-8'>
            <div>
              <p>Email *</p>
              <input type="text" className='p-2 border  border-black bg-orange-50'></input>
            </div>
            <div>
              <p>Subject</p>
              <input type="text" className='p-2 border  border-black bg-orange-50'></input>
            </div>
          </div>
          <div className='flex gap-x-2 md:gap-x-16 gap-y-4 items-center flex-wrap mt-14'>
            <div>
              <p className=''>Message</p>
              <textarea className='border border-1 border-black h-32 w-72 bg-orange-50 p-2'></textarea>
            </div>
            <buuton className="border rounded-full bg-green-500 p-5 hover:bg-green-400 cursor-pointer hover:text-white">Save</buuton>
          </div>
        </div>
      </div>
    </div>
  )
}

//https://www.linkedin.com/in/pavan-kumar-guntupalli-6436aa130

export default App;
