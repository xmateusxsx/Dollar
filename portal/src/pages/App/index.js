import React from 'react';

import AppBar from './AppBar';
import Cards from './Cards';

import '../App/App.css';

export default function main() {

  return(
    <div>
      <AppBar />
      <div className="content">
        <Cards />
      </div>
    </div>
  )
}