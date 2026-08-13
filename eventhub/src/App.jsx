import React from "react"
import Header from './components/header/Header'
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import SubFooter from "./components/footer/subFooter"
import Contact from "./pages/contact/Contact";

function App() {


  return (
<div className="min-h-screen bg-gray-100 ">
{/* <h1 className="text-4xl font-bold text-blue-600">

        Hello Tailwind!
</h1> */}


<Header/>
 <Home/>
 <Contact/>
 <SubFooter/>
<Footer/>

</div>

  )

}

export default App;