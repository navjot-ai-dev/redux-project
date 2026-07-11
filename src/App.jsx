
import Resultgrid from "./components/Resultgrid";
import Search from "./components/Search";
import Tabs from "./components/tabs";

const App = () => {
  
  

  return (
    <div className='h-screen w-full bg-gray-950 text-white '>
     <Search />
     <Tabs />
    <Resultgrid />
      </div>
  )
}

export default App