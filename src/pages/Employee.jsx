/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, message, Modal } from "antd"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { API } from "../utilities/Api"


const Employee = ({ employee, index }) => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { _id,firstName, lastName, email, date, salary, status } = employee
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Function to show the modal
    const showModal = () => {
        setIsModalVisible(true);
    };

    // Function to handle delete confirmation
    const handleDelete = async() => {
        try {
            setLoading(true)
            const response = await axios.delete(`${API}/employee/${_id}`);
            console.log(response?.data.data)

        } catch (err) {
            setError(err.message);

        } finally {
            setLoading(false);

        }
        message.success("Data deleted successfully!");
        setIsModalVisible(false);
    };

    // Function to handle modal cancel
    const handleCancel = () => {
        setIsModalVisible(false);
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
                    <Button onClick={showModal} type='' color='' variant='filled'>Delete</Button>
                </td>

            </tr>
            <Modal
                title="Confirm Delete"
                open={isModalVisible}
                onOk={handleDelete}
                onCancel={handleCancel}
                okText="Delete"
                okButtonProps={{ danger: true }}
                cancelText="Cancel"
            >
                <p>Are you sure you want to delete this employee?</p>
            </Modal>


        </>
    )
}

export default Employee
