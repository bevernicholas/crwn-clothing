import React from 'react';

import './homepage.styles.scss';
import { HomePageContainer } from './homepage.styles';
import DirectoryComponent from '../../components/directory/directory.component';

const HomePage: React.FC = () => (
  <HomePageContainer>
    <DirectoryComponent />
  </HomePageContainer>
)

export default HomePage;