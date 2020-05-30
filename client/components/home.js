import React from 'react'
import { useParams, Route, Switch } from 'react-router-dom'
import Header from './header'
import InputView from './inputview'
import ListRepositories from './listrepositories'
import Repositories from './repositorie'
// import wave from '../assets/images/wave.jpg'

const Home = () => {
  const { userName, repositoryName } = useParams()
  return (
    <div>
      {userName && <Header userName={userName} repositoryName={repositoryName} />}
      <Switch>
        <Route exact path="/" component={() => <InputView />} />
        <Route exact path="/:userName" component={() => <ListRepositories />} />
        <Route exact path="/:userName/:repositoryName" component={() => <Repositories />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default Home
