import React,{useState} from 'react'
import StudentTable from './Student/StudentTable'
import AddEditStudentForm from './Student/AddEditStudentForm'

const StudentManagement = () => {const [Data, setData] = useState([
    {
        id:1,
        name:"haseeb",
        Age:20,
        Cell:12345
      },
      {
        id:2,
        name:"zain",
        Age:21,
        Cell:54311
      },
      {
        id:3,
        name:"zubair",
        Age:20,
        Cell:12977
      },
      {
        id:4,
        name:"hamza",
        Age:19,
        Cell:10998
      },
])
const [CurrentStudent, setCurrentStudent] = useState(null)

const onClickUpdateHandler = (student) => {
  console.log("Selected student for update:", student);
  setCurrentStudent(student);
};

const onClickDeleteHandler=(id)=>{
    // alert(id)
    let newdata=Data.filter(item=>item.id !== id)
    setData(newdata)
    console.log("id in parent contact",id)
}
const onAddHandler=(Student)=>{
  console.log("student in contact",Student)
  setData([...Data,{
    id: Data.length+1,
    name: Student.name,
    Age: Student.Age,
    Cell : Student.Cell
  }])
}
const onUpdateHandler=(student,id)=>{
  console.log("student in home",student,id);
    let newdata = Data.map((item) => {

    if(item.id === id){
      return{
        ...item,
        name: student.name,
        Age: student.Age,
        Cell : student.Cell
      }
    }
    return item
  })
  setData(newdata)
  setCurrentStudent(null)

}
  return (
  <div className='flex flex-col items-center justify-start bg-gray-600 m-4 p-4 rounded-lg overflow-y-auto max-h-[70vh]'>

      <AddEditStudentForm  onUpdateHandler={onUpdateHandler} onAddHandler={onAddHandler}   currentStudent={CurrentStudent} 
      />

<table border={1} className='table-auto bg-blue-500 text-blue-950 text-2xl border-blue-900 border-3 rounded-lg'>
  <caption className='text-2xl text-center text-white bg-blue-950'>Student Management App</caption>
  <thead>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Cell</th>
    </tr>
  </thead>
  <tbody >
        {/* {feed.map((item,index)=>( */}
        {Data.map((item,index)=>(
            
            // <tr key={index}>
            //     <td>{item.id}</td>
            //     <td>{item.name}</td>
            //     <td>{item.Age}</td>
            //     <td>{item.Cell}</td>
            //     <button onClick={()=>onChangeHandler(item.id)}>click</button>
            // </tr>
        

                <StudentTable CurrentStudent={CurrentStudent} key={index} item={item} onUpdateHandler={onClickUpdateHandler} onClickDeleteHandler={onClickDeleteHandler}/>
            
        )
    )}
  </tbody>
      </table>
    </div>
  )

}

export default StudentManagement
