import React, { FC } from 'react';
import './App.css';
import { LoadResult } from 'components/LoadResult/LoadResult';

interface IApp{}

const App:FC<IApp> = (props) => {

  return(

    <div className='app display-column' id="app">
      <h6 className='app-title'>Test App Data</h6>

      <LoadResult />
    </div>

  );

}

export default App;
