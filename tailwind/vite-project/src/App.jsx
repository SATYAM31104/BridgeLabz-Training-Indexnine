import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/Section2/Section2'
import Navbar from './components/section1/Navbar'

const App = () => {
  const users = [
    {
      img : 'https://images.unsplash.com/photo-1671016233693-53162078ca1c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVvJTIwbWVzc2l8ZW58MHx8MHx8fDA%3D',
      intro : "Messi jersey is a great peace absorber",
      tag : "satisfied with the new acquisition",
      gender : "male"
    },
    {
      img : 'https://images.unsplash.com/photo-1641947521468-a2699a318c62?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : "PSG was a very bad day for him and he hates this team a lot",
      tag : " Not satisfied",
      gender : "male"
    },
    {
      img : 'https://images.unsplash.com/photo-1659990370632-28bbe6e355c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : "FCB was a home for leo messi",
      tag : " satisfied with the new acquisition",
      gender : "male"
    },
    {
      img : 'https://images.unsplash.com/photo-1659990370632-28bbe6e355c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : "FCB was a home for leo messi",
      tag : " satisfied with the new acquisition",
      gender : "male"
    }
  ]
  return (
    <div >
      <Section1 users={users}>
      </Section1>
      <Section2></Section2>

    </div>

  )
}

export default App