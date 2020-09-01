import React from 'react'

import Header from './layout/header/header'
import Videos from './layout/videos/videos'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Videos />
      <div className='line'>
        <div className='line__simple'></div>
        <div className='line__center'></div>
      </div>
    </React.Fragment>
  )
}

export default App
