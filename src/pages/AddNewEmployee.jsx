/* eslint-disable no-unused-vars */
import { Alert, Button, Checkbox, Col, message, Row, Typography } from "antd";
import CustomForm from "../components/CustomForm";
import CustomInput from "../components/CustomInput";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../utilities/Api";
import { useForm } from "react-hook-form";
const { Title } = Typography;

const AddNewEmployee = () => {
    const methods = useForm()
    const { id } = useParams()
    const navigate = useNavigate()
    const [response, setResponse] = useState(null);
    const [data, setData] = useState({})
    const [error, setError] = useState(null);

    const [status, setStatus] = useState(false)
    const [loading, setLoading] = useState(false)


    //fetch data
    const fetchSingleEmployee = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`${API}/employee/${id}`);
            setData(response?.data.data);
            // console.log(response?.data.data)
        } catch (err) {
            setError(err.messages);
        } finally {
            setLoading(false);
        }

    };

    // Fetch data on component mount
    useEffect(() => {
        fetchSingleEmployee();
    }, []);

    // Add Employee
    const onSubmit = async (data) => {
        const modifiedData = {
            ...data,
            status
        }
        // console.log(modifiedData)

        if (id) {
            try {
                const res = await axios.patch(`${API}/employee/${id}`, modifiedData);
                setResponse(res.data);
                if (res.status === 200) {
                    navigate("/")
                    message.success(res.data.message)
                }
                // console.log(res)
            } catch (err) {
                setError(err.messages);
                console.log(err)
            }
        } else {
            try {
                const res = await axios.post(`${API}/employee/add`, modifiedData);
                setResponse(res.status);
                if (res.status === 200) {
                    navigate("/")
                    message.success(res.data.message)
                }
                
                // console.log(res.data.data)
            } catch (err) {
                setError(err.messages);
                console.log(err)
            }
        }
    };



    return (
        <div style={{ maxWidth: "700px", margin: "auto" }}>
            <Title level={3} style={{ marginLeft: "-12px" }}>
                Add Employee
            </Title>
            <div >

                <CustomForm submitHandler={onSubmit}>
                    <div>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <CustomInput
                                name="firstName"
                                label="First Name"
                                type="text"
                                onChange={(e) => console.log(e.target.value)}
                                value={data?.firstName}
                                style={{ width: "70%" }}
                            />
                            <CustomInput
                                name="lastName"
                                label="Last Name"
                                type="string"
                                value={data?.lastName}
                                style={{ width: "70%" }}
                            />
                            <CustomInput
                                name="email"
                                label="Email"
                                type="email"
                                value={data?.email}
                                style={{ width: "70%" }}
                            />
                            <CustomInput
                                name="salary"
                                label="Salary (&#36;)"
                                type="text"
                                value={data?.salary}
                                style={{ width: "70%" }}
                            />
                            <Col style={{ marginLeft: "-12px" }}>
                                <CustomInput
                                    name="date"
                                    label="Date"
                                    type="date"
                                    value={data?.date}
                                    style={{ width: "70%" }}
                                />
                            </Col>
                            <Col >
                                <div style={{ marginTop: 26 }}>
                                    <Checkbox
                                        checked={status}
                                        onChange={() => {
                                            setStatus(true)
                                        }}>Is Permanent</Checkbox>
                                </div>
                            </Col>
                        </Row>


                        <div style={{ marginLeft: "-12px" }}>

                            <Button
                                style={{ marginTop: 16 }}
                                htmlType="submit"
                                type="primary"

                            >
                                Add
                            </Button>
                            <Button
                                style={{ marginTop: 16, marginLeft: 8 }}
                                htmlType="submit"
                                type=""
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </CustomForm>
            </div>

            

        </div>
    )
}

export default AddNewEmployee
