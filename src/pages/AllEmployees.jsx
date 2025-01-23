
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const AllEmployees = () => {
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
    return (
        <div style={{ margin: 32 }}>

            <Title level={3} style={{ margin: 32, color: "rgb(72, 71, 71)" }}>
                Employee Management Software
            </Title>


            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Salary</th>
                            <th>Permanent?</th>
                            <th style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((record, i) => (
                            <tr key={record.id}>
                                <td>{i + 1}</td>
                                <td>{record.firstName}</td>
                                <td>{record.lastName} </td>
                                <td>{record.email} </td>
                                <td>{record.date} </td>
                                <td>{record.salary} </td>
                                <td>{record.status === true ? "Yes" : "No"} </td>
                                <td style={{ textAlign: "center" }}>
                                    <Button type='' style={{ marginRight: 10 }}>
                                        <Link to={`/employee/add/${record.id}`}>Edit</Link>
                                    </Button>
                                    <Button type='' color='' variant='filled'>Delete</Button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllEmployees;
