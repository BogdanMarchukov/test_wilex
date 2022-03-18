import React from 'react';

import './App.css';
import MainLayout from "./Layout/MainLayout";
import {TitleRescuers} from "./Component/TitleRescuers/TitleRescuers";
import {Input} from "./Component/Input/Input";

function App() {
  return (
    <MainLayout>
      <TitleRescuers/>
      <Input/>
    </MainLayout>
  );
}

export default App;
