import './App.css';
import {useEffect, useState} from "react"
import pavanImg from "./pavan.jpg"
import { CloseIcon } from './icons/CloseIcon';
import {LinkdinIcon} from "./icons/linkdin"
import {FaceboookIcon} from "./icons/facebook"
import {TwitterIcon} from "./icons/twitter"
import {InstagramIcon} from "./icons/instagram"
import {GithubIcon} from "./icons/Github"
import { Route, Switch } from 'react-router-dom';

function App() {
  useEffect(()=>{
    document.body.scrollTop=0;
  },[])
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
      </Switch>
      <Footer />
      </div>
    </div>
  );
}


function Resume(){
  return(
    <div className='animate-slide-in-fwd-center bg-orange-50 ml-4 md:mx-96'>
      <p className='font-bold text-4xl mt-20'>
        Resume
      </p>
      <ResumeCategory />
      <hr className='w-full border border-black' />
      <ResumeCategory />
    </div>
  )
}

function ResumeCategory(){
  return(
    <div className='mb-20 mt-10 md:mt-20 flex gap-y-10 flex-wrap'>
        <p className='font-bold text-2xl md:text-3xl w-48'>Work Experience</p>
        <div className='ml-auto'>
        <ResumeData />
        <ResumeData />
        <ResumeData />
        </div>
      </div>
  )
}

function ResumeData(){
  return(
    <div className='flex gap-x-10 mb-10 flex-wrap'>
      <p className='text-m font-thin'>2020 - Present</p>
      <div className='flex flex-col gap-y-2'>
        <p className='font-bold text-l'>Editor</p>
        <p className='w-72'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
      </div>
    </div>
  )
}

function Header(){
  const [isMenuClicked,setMenuClicked] = useState(false)
  return(
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center">
        <div className='flex items-center gap-x-2' >
          <div className='p-4 bg-red-300 rounded-full inline-block'></div>
          <a href="/" className="w-42 icon lin text-2xl font-semibold inline-block">Pavan Kumar</a>
        </div>
      <div onClick={()=>
        setMenuClicked(!isMenuClicked)
      } className="lg:hidden">
        <button className="navbar-burger flex items-center text-gray-600 p-3">
          <svg
            className="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul style={{marginLeft:"60%"}} className="hidden links transform  lg:flex  lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li><a className="font-medium text-gray-500 hover:text-gray-900 " href="/resume">Resume </a></li>
        <li><a className="font-medium text-gray-500 hover:text-gray-900" href="#">Projects</a></li>
        <li><a className="font-medium text-gray-500 hover:text-gray-900" href="blog">Contact</a></li>
      </ul>
        </nav>
        <div className={`navbar-menu relative z-50 ${isMenuClicked?"block":"hidden"}`}>
          <nav
            className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-blue-50 border-r overflow-y-auto"
          >
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
              </a>
              <button onClick={(isMenuClicked)=>setMenuClicked(!isMenuClicked)} className="navbar-close">
                <CloseIcon />
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-m font-semibold text-gray-400 hover:text-gray-900 rounded"
                    href="#"
                    >About me</a
                  >
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-m font-semibold text-gray-400 hover:text-gray-900 rounded"
                    href="#features"
                    >Resume</a
                  >
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-m font-semibold text-gray-400 hover:text-gray-900 rounded"
                    href="#"
                    >Projects</a
                  >
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-m font-semibold text-gray-400 hover:text-gray-900 rounded"
                    href="#"
                    >Contact</a
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
    </>
  )
}


function Profile(){
  return(
    <div className='py-5 bg-orange-50 lg:py-28 md:py-16 animate-slide-in-fwd-center'>
      <div className='flex flex-wrap gap-x-5 ml-4 mr-5 md:ml-64 lg:ml-96'>
        <img src={pavanImg} className='profilepic' alt='pavan profilr pic' />
        <div>
          <p className='font-semibold text-8xl md:pt-4'>Hello</p>
          <p style={{fontFamily:"Poppins"}} className='font-semibold font-sans text-l px-2 mb-2 md:mt-4'>A Bit About Me</p>
          <p style={{fontFamily:"Poppins"}} className='px-2'>I am Pavan.A science Freak<br />Always ready to learn new Technologies.</p>
          <div className='flex flex-wrap gap-y-4 mt-4 gap-x-4'>
            <div className='p-10 py-14 border cursor-pointer border-black rounded-full bg-yellow-500'>Resume</div>
            <div className='p-10 py-14 border cursor-pointer border-black rounded-full bg-red-500'>Projects</div>
            <div className='p-10 py-14 border cursor-pointer border-black rounded-full bg-blue-500'>Contact</div>
        </div>
        </div>
      </div>
    </div>
  )
}


function Footer(){
  return(
    <div className='pt- bg-orange-50'>
      <hr className='border-y-2 mx-4 md:mx-16' />
      <div className='mt-2 mx-4 md:ml-16 flex flex-wrap gap-y-10 gap-x-48 lg:gap-x-72 mb-2 py-5 pb-16'>
      <div>
        <p>Phone</p>
        <p>+91 855910132</p>
      </div>
      <div>
        <p>Email</p>
        <p>pavanguntupally12@gmail.com</p>
      </div>
      <div>
        <p>Follow Me</p>
        <p className='flex gap-x-4'>
          <a href='https://www.linkedin.com/in/pavan-kumar-guntupalli-6436aa130' target="_blank" ><LinkdinIcon  /></a>
          <a href='https://github.com/Pavan-rmes?tab=repositories' target="_blank" ><GithubIcon /></a>
        </p>
      </div>
      <div>
        <p>© 2022.</p>
        <p>Proudly created by Pavan Kumar </p>
      </div>
    
    </div>
    </div>
  )
}

//https://www.linkedin.com/in/pavan-kumar-guntupalli-6436aa130

export default App;
