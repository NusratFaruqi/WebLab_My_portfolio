'use client'
import React, { useState } from 'react';
import SkillsChart from './Chart';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Skills', 'Education', 'Certifications'];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabContents = [
    (
      <div  className={`${activeTab === 0 ? 'block' : 'hidden'}`}>
  <SkillsChart />
</div>
    ),
    (
      <div className='text-sm'>
        <h2 className='font-bold '>B.Sc. in Computer Science & Engineering</h2>
        <p>Daffodil International University</p>
        <p>2020-2024</p>
        <div className='pt-5'>
        <h2 className='font-bold'>Higher Secondary Certificate</h2>
        <p>Uttara High School and college</p>
        <p>2017-2018</p>
      </div>
      </div>
    ),
    (
      <ul>
        <li>Certification 1</li>
        <li>Certification 2</li>
        <li>Certification 3</li>
      </ul>
    ),
  ];

  return (
    <div className="tabs-container">
      <div className={`flex flex-col md:flex-row md:justify-start`}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`relative mb-2 ${activeTab === index ? 'md:mr-2' : ''}`}
          >
            <a
              href={`#tab${index + 1}`}
              className={`tab flex items-center p-4 cursor-pointer ${activeTab === index ? 'underline text-transparent  bg-clip-text bg-gradient-to-r from-purple-300 to-purple-600 top-0 duration-500' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </a>
            <div
              className={`p-4 ${activeTab === index ? 'block' : 'hidden'}`}
            >
              {tabContents[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
