import React from 'react'
import "../App.css"
import ShowData from './ShowData'

export default function Employee() {
    const [data, setData] = React.useState([])
    const [olddata, setOldData] = React.useState([])
    const [name, setName] = React.useState("")
    const [gender, setGender] = React.useState("")
    const [role, setRole] = React.useState("")
    const [salary, setSalary] = React.useState("")

    React.useEffect(() => {
        renderdata()
    }, [])
    function renderdata() {
        fetch(`http://localhost:3001/profile`)
            .then((res) => res.json())
            .then((res) => {
                setData(res)
                setOldData(res)
            })
    }
    function addemployee() {
        var dep = document.getElementById("department").value
        var obj = {
            name: name,
            gender: gender,
            department: dep,
            role: role,
            salary: salary
        }
        var jsonobj = JSON.stringify(obj)
        fetch(`http://localhost:3001/profile`, {
            method: "POST",
            body: jsonobj,
            headers: {
                "content-type": "application/json"
            }
        })
            .then(() => renderdata())
    }
    function alldata() {
        setData(olddata)
    }
    function marketdata() {
        var a = []
        olddata.filter((item) => {
            if (item.department === "marketing") {
                a.push(item)
            }
        })
        setData(a)
    }
    function hrdata() {
        var a = []
        olddata.filter((item) => {
            if (item.department === "hr") {
                a.push(item)
            }
        })
        setData(a)
    }
    function itdata() {
        var a = []
        olddata.filter((item) => {
            if (item.department === "it") {
                a.push(item)
            }
        })
        setData(a)
    }
    function financedata() {
        var a = []
        olddata.filter((item) => {
            if (item.department === "finance") {
                a.push(item)
            }
        })
        setData(a)
    }

    function sortbyprice(e) {
        // data.map((item) => {
        //     if (e.target.value === "lth") {
        //         item.salary.sort((a, b) => +a - +b)
        //         setData(item)
        //     } else if (e.target.value === "htl") {
        //         item.salary.sort((a, b) => +b - +a)
        //         setData(item)
        //     } else {
        //         setData(item)
        //     }
        // })
        
        var a;
        if(e.target.value === "lth") {
            a = data.salary.sort((a,b) => {
                return +a - +b
            })
        } else if(e.target.value === "htl"){
            a = data.salary.sort((a,b) => {
                return +b - +a
            })
        }
        setData(a)
    }


    return (
        <div className='inputdata'>
            <input type="text" placeholder='Name' onChange={e => setName(e.target.value)} />
            <input type="text" placeholder='Gender' onChange={e => setGender(e.target.value)} />
            <select id="department">
                <option value="all">Select Department</option>
                <option value="marketing">Marketing</option>
                <option value="hr">HR</option>
                <option value="it">IT</option>
                <option value="finance">Finance</option>
            </select>
            <input type="text" placeholder='Role' onChange={e => setRole(e.target.value)} />
            <input type="number" placeholder='Salary' onChange={e => setSalary(e.target.value)} />
            <button onClick={addemployee}>ADD EMPLOYEE</button>
            <div className="btns">
                <button onClick={alldata}>Show All Department</button>
                <button onClick={marketdata}>Show Marketing</button>
                <button onClick={hrdata}>Show HR</button>
                <button onClick={itdata}>Show IT</button>
                <button onClick={financedata}>Show Finance</button>
                <select id="sort" onChange={sortbyprice}>
                    <option value="all">Sort By</option>
                    <option value="lth">Salary Low to High</option>
                    <option value="htl">Salary High to Low</option>
                </select>
            </div>
            <div className="data">
                <h1>Employee Data</h1>
                <div className="datadiv">
                    {data.map((item, id) => <ShowData {...item} key={id} />)}
                </div>
            </div>

        </div>
    )
}
