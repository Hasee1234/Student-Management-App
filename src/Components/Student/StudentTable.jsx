import React from 'react'

const StudentTable = (props) => {
    // const onChangeHandler=(id)=>{
        // console.log("clicked",props.item)
        // alert(id)
    // }
    let myData="my data in child"
  return (
    
      <tr >
        
        <td>{props.item?.id}</td>
        <td>{props.item?.name}</td>
        <td>{props.item?.Age}</td>
        <td>{props.item?.Cell}</td>
        <td><button className='border-3 border-blue-900 rounded-lg m-2 hover:bg-blue-300 transition-transform duration-1000' onClick={()=>props.onUpdateHandler(props.item)}>update</button></td>
        {/* <button onClick={()=>props.onChangeHandler(myData)}>click me</button> */}
        {/* this is method to pass data from child to parent in which function is made in parent but the arguement is passes in child  */}
        <td><button className='border-3 border-blue-900 rounded-lg m-2 hover:bg-blue-300 transition-transform duration-1000' onClick={()=>props.onClickDeleteHandler(props.item.id)}>Delete</button></td>

        {/* <tr >
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.Age}</td>
          <td>{item.Cell}</td>
      </tr> */}
    </tr>
    
  )
}

export default StudentTable
