import React from 'react';

import './menu-item.styles.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  imageSize: string;
  linkUrl: string;
}

const MenuItem: React.FC<MenuItemProps & RouteComponentProps> = ({ title, imageUrl, imageSize, history, linkUrl, match }) => {
  return (
    <div className={`menu-item ${imageSize}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);