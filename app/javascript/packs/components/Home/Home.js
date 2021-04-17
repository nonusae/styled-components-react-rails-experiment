import React, {useState, useEffect} from 'react';
import Jumbotron from './Jumbotron'
import Table from './Table/Table'
import axios from 'axios'
const Home = () => {
  const [courseModules, setCourseModules] = useState([])

  useEffect(() => {
    axios.get('/episodes.json')
    .then(data => {
      const coursesData = data.data.data
      setCourseModules(coursesData.map(data => ({...data, active: false})))
    })
  }, [])

  const handleVideoChange = (item) => {
    const id = item.id
    const isActive = item.active

    const newCourseModules = courseModules.map(courseModule => (
      courseModule.id === id
      ? {...courseModule, active: !isActive}
      : {...courseModule, active: false}
    ))

    setCourseModules(newCourseModules)
  }

  return (
    <div>
      <Jumbotron />
      <Table courseModules={courseModules} handleVideoChange={handleVideoChange}/>
    </div>
  )
}

export default Home;
