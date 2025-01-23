import { Button, Checkbox, Col, Row, Typography } from "antd";
import CustomForm from "../components/CustomForm";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import { useParams } from "react-router-dom";
const { Title } = Typography;

const AddNewEmployee = () => {
    const data = [
        {
            id: 1,
            firstName: "Rafiul Alam",
            lastName: "Tonmoy",
            email: "mrafiul.alam7@gmail.com",
            date: "24-01-2025",
            salary: "40000",
            status: true
        }
    ]
    const {id} = useParams()
    const [status, setStatus] = useState(false)
    const checkHandler = () => {
        setStatus(true)
    }

    const onSubmit = async (data) => {
        const modifiedData = {
            ...data,
            status
        }
        console.log(modifiedData)
    };
        const employeeData = data.find(employee=>employee.id == id)
        // console.log("employeeData", employeeData)

    
    
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
                                value={employeeData?.firstName}
                                style={{ width: "70%" }}
                            />
                            <CustomInput
                                name="lastName"
                                label="Last Name"
                                type="string"
                                value={employeeData?.lastName}
                                style={{ width: "70%" }}
                            />
                            <CustomInput
                                name="email"
                                label="Email"
                                type="email"
                                value={employeeData?.email}
                                style={{ width: "70%" }}
                            />
                            <CustomInput
                                name="salary"
                                label="Salary (&#36;)"
                                type="text"
                                value={employeeData?.salary}
                                style={{ width: "70%" }}
                            />
                            <Col style={{marginLeft:"-12px"}}>
                                <CustomInput
                                    name="date"
                                    label="Date"
                                    type="date"
                                    value={employeeData?.date}
                                    style={{ width: "70%" }}
                                />
                            </Col>
                            <Col >
                                <div style={{ marginTop: 26 }}>
                                    <Checkbox
                                        checked={employeeData?.status}
                                        onChange={checkHandler}>Is Permanent</Checkbox>
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
