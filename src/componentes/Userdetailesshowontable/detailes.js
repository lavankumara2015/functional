import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react"



const UserDetails = () => {

    const [table, setTable] = useState([])

    const [employeename, setEmpolyeename] = useState("")
    const [designation, setdesignation] = useState("");
    const [salary, setSalary] = useState("")



    const handleform = (event) => {
        event.preventDefault();

        const details = {

            employeename: employeename,
            designation: designation,
            salary: salary

        }
        const data = [...table, details];

        setTable(data)

        setEmpolyeename("")

        setdesignation("")

        setSalary("")

    }

    const handleemployeename = (event) => {
        setEmpolyeename(event.target.value)

        console.log(event.target.value);

    }

    const handledesigantion = (event) => {
        setdesignation(event.target.value)

    }
    const handlesalary = (event) => {

        setSalary(event.target.value);


    }


    return (
        <>

            <form onSubmit={handleform}>

                <span> Employee name :</span> <input type="text" placeholder="enter name" value={employeename} onChange={handleemployeename} /><br /><br />
                <span> designation  : </span> <input type="text" placeholder="enter designation" value={designation} onChange={handledesigantion} /><br /><br />
                <span> salary : </span> <input type="text" placeholder="enter salary" value={salary} onChange={handlesalary} /> <br /> <br />
                <input type="submit"></input> <br /><br />
            </form>

            {
                <table border="2" cellPadding="10" cellSpacing="0">
                    <thead>

                        <tr>

                            <th>Employee Name</th>

                            <th>Designation</th>

                            <th>Salary</th>

                        </tr>

                    </thead>

                    <tbody>

                        {table.map((value, index) => (
                            <tr key={index}>

                                <td>{value.employeename}</td>

                                <td>{value.designation}</td>

                                <td>{value.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </>
    )
}

export default UserDetails