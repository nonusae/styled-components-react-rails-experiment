// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.css'

const Hello = () => {
  return <div>
    <Home />
  </div>
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello />,
    document.body.appendChild(document.createElement('div')),
  )
})