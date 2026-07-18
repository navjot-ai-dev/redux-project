import React from 'react'
import Resultgrid from "./components/Resultgrid";
import Search from "./components/Search";
import Tabs from "./components/tabs";



const HomePage = ({ theme }) => {
  return (
    <div>
      <Search theme={theme} />
      <Tabs theme={theme} />
      <Resultgrid theme={theme} />
    </div>
  )
}

export default HomePage