import React from 'react'

const Video =  () => {
  return (
    <div className="pt-4 pb-4">
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/b0-DX76x0SQ"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  )
}


export default Video;
