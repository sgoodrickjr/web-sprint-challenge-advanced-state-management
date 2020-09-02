import React from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from '../home/Home'
import NewSmurfs from '../Smurfs/newSmurfs'
import SmurfDetails from '../Smurfs/SmurfDetails'
import Navigation from './Navigation'
import AddModal from '../Smurfs/AddSmurfs'

function App() {
  return (
    <>
      <Navigation />
      <Switch>
      <Route path='/smurfs' exact component={AddModal} />
        <Route path='/smurfs/:id' exact component={SmurfDetails} />
        <Route path='/new' exact component={NewSmurfs} />
        <Route path='/' exact component={Home} />
      </Switch>
    </>
  )
}

export default App
