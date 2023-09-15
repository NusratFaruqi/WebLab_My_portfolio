import React from 'react';

const SkillsChart = () => {
  return (
    <div className="skills-chart text-sm">
      <div className="bar ">
        <div className="label ">Researcher</div>
        <div className="progress" style={{ width: '80%' }}>80%</div>
      </div>
      <div className="bar">
        <div className="label">Content Writing</div>
        <div className="progress" style={{ width: '70%' }}>70%</div>
      </div>
      <div className="bar">
        <div className="label">Development</div>
        <div className="progress" style={{ width: '60%' }}>60%</div>
      </div>
      <div className="bar">
        <div className="label">Designing</div>
        <div className="progress" style={{ width: '60%' }}>60%</div>
      </div>
    </div>
  );
};

export default SkillsChart;
