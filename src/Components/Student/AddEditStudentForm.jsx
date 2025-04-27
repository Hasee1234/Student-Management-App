import React,{useState,useEffect} from 'react'
import * as yup from 'yup'
const AddEditStudentForm = (props) => {
  const [Name, setName] = useState('')
  const [Age, setAge] = useState('')
  const [Cell, setCell] = useState('')
  const [Error, setError] = useState('')

  useEffect(()=>{
    if(props.currentStudent){
      setName(props.currentStudent.name)
      setAge(props.currentStudent.Age)
      setCell(props.currentStudent.Cell)
    }
  },[props.currentStudent])
  
  let schema = yup.object().shape({
    name: yup.string().max('10').min('3').required(),
    Age: yup.number().integer().required().typeError('must be in numbers'),
    Cell: yup.number().integer().required().typeError('must be in numbers'),
  })
  const onClickHandler=async()=>{
    // console.log("name",Name)
    // console.log("Age",Age)
    // console.log("Cell No",Cell)

    let data={
      name:Name,
      Age:Age,
      Cell:Cell
    }
    try{
      
      let result= await schema.validate(data)
      console.log("result",result)
      setError('')
      props.currentStudent ? props.onUpdateHandler(data,props.currentStudent.id):
      props.onAddHandler(data); 
      setName('')
      setAge('')
      setCell('')
    }catch(error){
      console.log("error",error.toString())
      setError(error.toString())
    }

  }
  return (
    <div>
      <span style={{backgroundColor:'red',color:'white'}}>{Error}</span>
      <br />
      <input value={Name} type="text" placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}/>
      <input value={Age} type="text" placeholder='Enter your Age'onChange={(e)=>setAge(e.target.value)}/>
      <input value={Cell} type="text" placeholder='Enter you Cell No.' onChange={(e)=>setCell(e.target.value)}/>
    <br />
      <button onClick={onClickHandler}>
        {/* {props.currentStudent? "Update" : "Add"}  */}
        {props.currentStudent?.id ? "Update" : "Add"}

         Student</button>
    </div>
  )
}

export default AddEditStudentForm
