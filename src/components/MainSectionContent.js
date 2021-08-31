import React from 'react';
import '../css/MainSection.css';
import MainSectionContentTable from './MainSectionContentTable';

function MainSectionContent() {
  return (
    <div className="main-section-content-container">
      <h4 className="main-section-title">Locais de Trabalho</h4>
      <MainSectionContentTable />
    </div>
  )
}

export default MainSectionContent;
