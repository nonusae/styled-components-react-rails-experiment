import React, {useState} from 'react';
import Jumbotron from './Jumbotron'

const Home = () => {
  const [courseModules, setCourseModules] = useState([
    { id: 1, title: '1. Setting Up a new rails app', description: 'Lorem ipsum', active: false },
    { id: 2, title: '2. Adding React to an existing rails app', description: 'Lorem ipsum', active: false },
    { id: 3, title: '3. Building an hello world app', description: 'Lorem ipsum', active: false },
    { id: 4, title: '4. Add React Router Dom to You App', description: 'Lorem ipsum', active: false },
  ])

  return (
    <div>
      <Jumbotron />
    </div>
  )
}

export default Home;
