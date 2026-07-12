import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/features/searchslice';

const Tabs = () => {
  const tabs = ['photos', 'videos', 'gif'];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className='mx-auto flex max-w-7xl flex-wrap gap-3 px-4 pb-4 sm:px-6 lg:px-10'>
      {tabs.map((elem, idx) => {
        const isActive = activeTab === elem;
        return (
          <button
            className={`rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition ${isActive ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => dispatch(setActiveTab(elem))}
            key={idx}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs