import { Button, Checkbox, Col, Row, Typography } from "antd";
import CustomForm from "../components/CustomForm";
import CustomInput from "../components/CustomInput";
import { useState } from "react";


const { Title } = Typography;
const AddNewEmployee = () => {
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

                                style={{ width: "70%" }}
                            />
                            <CustomInput
                                name="lastName"
                                label="Last Name"
                                type="string"

                                style={{ width: "70%" }}
                            />
                            <CustomInput
                                name="email"
                                label="Email"
                                type="email"

                                style={{ width: "70%" }}
                            />
                            <CustomInput
                                name="salary"
                                label="Salary (&#36;)"
                                type="text"

                                style={{ width: "70%" }}
                            />
                            <Col style={{marginLeft:"-12px"}}>
                                <CustomInput
                                    name="date"
                                    label="Date"
                                    type="date"

                                    style={{ width: "70%" }}
                                />
                            </Col>
                            <Col >
                                <div style={{ marginTop: 26 }}>
                                    <Checkbox
                                        value={status}
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
