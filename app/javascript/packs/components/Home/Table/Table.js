import React from 'react'
import Item from  './Item'

const Table = ({courseModules}) => {
  return(
    <div className="pt-5 pt-5">
      <div className="container">
        <div className="text-center">
          <h2 className='pt-4 pb-4'>React for Rails Developer - Video</h2>
        </div>
        {
          courseModules.map(courseModule =>
            <Item
              key={courseModule.id}
              title={courseModule.title}
              description={courseModule.description} />)
        }
      </div>
    </div>
  )
}

export default Table;

