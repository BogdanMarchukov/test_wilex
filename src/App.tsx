import React from 'react';

import './App.css';
import MainLayout from "./Layout/MainLayout";
import {TitleRescuers} from "./Component/TitleRescuers/TitleRescuers";

function App() {
  return (
    <MainLayout>
      <TitleRescuers/>
    </MainLayout>
  );
}

export default App;
