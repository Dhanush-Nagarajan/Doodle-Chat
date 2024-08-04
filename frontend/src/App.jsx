
import './App.css'
import Home from './pages/home/Home.jsx'

// eslint-disable-next-line no-unused-vars
import Login from './pages/login/Login.jsx'
// eslint-disable-next-line no-unused-vars
import SignUp from './pages/signup/SignUp.jsx'

function App() {

  return (
    <>
    <div className='p-4 h-screen flex items-center justify-center'>
       {/*<Login/>*/}
       {/* <SignUp/> */}
        <Home/>
    </div>
    </>
  )
}

export default App
