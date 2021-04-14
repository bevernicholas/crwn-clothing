import React from 'react';

import './menu-item.styles.scss';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  imageSize: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, imageSize }) => {
  return (
    <div className={`menu-item ${imageSize} `}>
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`,
      }} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;