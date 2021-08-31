import React from 'react';
import OptionList from './OptionList';
import MainSectionContent from './MainSectionContent';
import '../css/MainSection.css';

function MainSection() {
  return (
    <div className="main-section-container">
      <OptionList />
      <MainSectionContent />
    </div>
  )
}

export default MainSection;
