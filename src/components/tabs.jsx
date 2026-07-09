import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchslice';

const Tabs = () => {
       
    const Tabs = ['Photos','Videos','GIFs']
  const dispatch = useDispatch();
 const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className='flex gap-5 mt-5 ml-5'>
        {Tabs.map(function (elem,idx) {
            return <button className={`${activeTab===elem?'bg-blue-600':'bg-gray-700'} px-7 py-4 cursor-pointer rounded-xl uppercase active:scale-90`}
            onClick={() =>{
                dispatch(setActiveTab(elem))
                console.log(elem);
                
            }}
             key={idx}>
                {elem}
             </button>
        })}
    </div>
  )
}

export default Tabs