
import { Button, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utilities/Api";
import Employee from "./Employee";

const { Title } = Typography;

const AllEmployees = () => {
    const [data, setData] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

      //fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API}/employee`); 
      setData(response.data.data); 
      console.log(response)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); 
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);
  
  const checkingData = () =>{
    switch (data.length) {
        case 0:
            return <tr><td>No Employees</td></tr>

        default:
            return data?.map((employee, i) => <Employee employee={employee} index={i} key={i}/>)
    }
  }



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
                        {checkingData()}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllEmployees;
