import React from 'react';

const TitleView = ({ title, color }) => {
  const backgroundColor = `${color}15`;
  
  return (
    <div className="relative w-full mt-4 mb-3 px-[18px] py-1" style={{ color, backgroundColor }}>
      <div className="absolute top-0 left-0 bottom-0 w-[6px]" style={{ backgroundColor: color }}></div>
      <div className="text-lg font-bold">{title}</div>
    </div>
  )
};

export default React.memo(TitleView);
