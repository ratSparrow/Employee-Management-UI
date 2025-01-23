/* eslint-disable react/prop-types */
import { Button } from "antd"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { API } from "../utilities/Api"


const Employee = ({ employee,index }) => {
        const [error,setError] = useState(null)
        const [loading,setLoading] = useState(false)
    const {firstName, lastName, email, date, salary, status} = employee
    
      //Delete Employee Data
  const deleteEmployee = async (id) => {
    try {
        setLoading(true)
        const response = await axios.delete(`${API}/employee/${id}`);
        console.log(response?.data.data)
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
};
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{firstName}</td>
                <td>{lastName} </td>
                <td>{email} </td>
                <td>{date} </td>
                <td>{salary} </td>
                <td>{status === true ? "Yes" : "No"} </td>
                <td style={{ textAlign: "center" }}>
                    <Button type='' style={{ marginRight: 10 }}>
                        <Link to={`/employee/add/${employee._id}`}>Edit</Link>
                    </Button>
                    <Button onClick={() => deleteEmployee(employee._id)} type='' color='' variant='filled'>Delete</Button>
                </td>

            </tr>
        </>
    )
}

export default Employee
