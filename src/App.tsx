import React from 'react';

import './App.css';
import MainLayout from "./Layout/MainLayout";
import {TitleRescuers} from "./Component/TitleRescuers/TitleRescuers";
import {Input} from "./Component/Input/Input";
import {SearchList} from "./Component/SearchList/SearchList";

function App() {
  return (
    <MainLayout>
      <TitleRescuers/>
      <Input/>
      <SearchList dataList={null}/>
    </MainLayout>
  );
}

export default App;
