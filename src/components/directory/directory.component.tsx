import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from  '../../components/menu-item/menu-item.component';
import './directory.styles.scss';

interface DirectoryProps {
  sections: any[];
}

const Directory: React.FC<DirectoryProps> = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...menuItemProps }) => (
      <MenuItem key={id} {...menuItemProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);