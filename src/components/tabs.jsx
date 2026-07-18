import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/features/searchslice';

const Tabs = ({ theme }) => {
  const tabs = ['photos', 'videos', 'gif'];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  const isDark = theme === 'dark';

  return (
    <div className='mx-auto flex max-w-6xl flex-wrap gap-2 px-3 pb-3 sm:px-4 lg:px-6'>
      {tabs.map((elem, idx) => {
        const isActive = activeTab === elem;
        return (
          <button
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${isActive ? (isDark ? 'btn-primary' : 'bg-gradient-to-r from-sky-500 to-emerald-500 text-white') : isDark ? 'btn-secondary' : 'border border-sky-200 bg-white text-slate-700 hover:bg-sky-50'}`}
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