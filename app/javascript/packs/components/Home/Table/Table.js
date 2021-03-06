import React from 'react'
import Item from  './Item'
import ActiveItem from './ActiveItem'

const Table = ({courseModules, handleVideoChange}) => {
  const items = courseModules.map(data =>
    data.active ?
      <ActiveItem
        handleVideoChange={() => handleVideoChange(data)}
        key={data.id}
        title={data.title}
        description={data.description}
      />
    : <Item
        key={data.id}
        title={data.title}
        description={data.description}
        handleVideoChange={() => handleVideoChange(data)}/>
    )

  return(
    <div className="pt-5 pt-5">
      <div className="container">
        <div className="text-center">
          <h2 className='pt-4 pb-4'>React for Rails Developer - Video</h2>
        </div>

        {items}
      </div>
    </div>
  )
}

export default Table;

