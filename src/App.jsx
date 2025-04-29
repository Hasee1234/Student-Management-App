import React from 'react'
import StudentManagement from './Components/StudentManagement'
import './App.css';
const App = () => {
  return (
    
      <div className='bg-gray-300 pt-9 rounded border-20 h-screen'>
      <h1 className='text-blue-900 text-4xl flex  justify-center'>Student Managemant App</h1>
      <StudentManagement/>
      </div>
  )
}

export default App
