import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScreenSetting from './ScreenSetting'; 
const EmployeeList = () => {

    //initislise the array of employees with []
    const [employees, setEmployees] = useState([]);
    // const [employee, setEmployee] = useState();
 
    const addNewEmp = (e) => {
        //to protect default rerendering , e.preventdefault is used
        e.preventDefault()
        const newEmployee = 
        { 
            "login": "rakesh",
            "id": 47,
            "node_id": "MDQ6VXNlcjE=",
            "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/mojombo",
            "html_url": "https://github.com/mojombo",
            "followers_url": "https://api.github.com/users/mojombo/followers",
            "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
            "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
            "organizations_url": "https://api.github.com/users/mojombo/orgs",
            "repos_url": "https://api.github.com/users/mojombo/repos",
            "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
            "received_events_url": "https://api.github.com/users/mojombo/received_events",
            "type": "User",
            "site_admin": false
        }
        setEmployees([...employees, newEmployee])
        //newEmployee && employees.push(newEmployee);
        localStorage.setItem("employeelist", JSON.stringify([...employees, newEmployee]));
        //const localemployees = JSON.parse(localStorage.getItem("employeelist"));
        //setEmployees(localemployees)

        // axios.post('https://api.github.com/users',employee)
        // .then(res => {
        //     setEmployees(res.data)
        // })

    }
    const updateEmployee = (e) => {
        e.preventDefault()
        //we can fetch data via. localstorage or employees (in offline mode, fetching from localstorage is recommended)
        let employees = JSON.parse(localStorage.getItem("employeelist"));
        const updatedEmployees = employees && employees.map(employee => {
            //checking id == 4 to update
            if(employee.id === 4){
                return {
                    ...employee,
                    login: "ytfdss",
                    organizations_url : "https://api.github.com/users/mojombo/organization",
                    repos_url: "https://api.github.com/users/mojombo/repository"

                }
            }
            return employee;
        })

        setEmployees(updatedEmployees);
        localStorage.setItem("employeelist", JSON.stringify(updatedEmployees));
        
        //comments: online mode
        // axios.put('https://api.github.com/users/2',{
        //     organizations_url : "https://api.github.com/users/mojombo/organization",
        //     repos_url: "https://api.github.com/users/mojombo/repository"

        // })
        // .then(res => {
        //     setEmployees(res.data)
        // })

    }
    const deleteEmployee = (e) => {
        //comments:  to protect default unnecessary rendering due to event, e.preventdefault is used for stopping
        e.preventDefault()

        //fetch data from local storage through parse method
        const employees = JSON.parse(localStorage.getItem("employeelist"));
        //Fiter out remaining datas
        const restEmployees = employees.filter((employee) => employee.id !== 5);

        //setting data in localstorage and setEmployees
        setEmployees(restEmployees)
        localStorage.setItem("employeelist", JSON.stringify(restEmployees));

        // const employees = JSON.parse(localStorage.getItem("employeelist"));
        // setEmployees(employees)
        // axios.delete('https://api.github.com/users/3')
        // .then(res => {
        //     setEmployees(res.data)
        //     // setEmployees(res.data.filter(employee => employee.id !== 3))
        // })

    }




    useEffect(() => {
        axios.get('https://api.github.com/users')
        .then(res => {
            console.log(res)
            //setEmployees(res.data)

            localStorage.setItem("employeelist", JSON.stringify(res.data));
            const employees = JSON.parse(localStorage.getItem("employeelist"));
            setEmployees(employees)
        })
        .catch(err => {
            console.log(err);
        })
    },[])



    // const getEmployees = JSON.parse(localStorage.getItem("employeelist"));
    // useEffect(() => {
    //     getEmployees && setEmployees(getEmployees);
    // },[])

    // useEffect(() => {
    //     axios.get('https://api.github.com/users/1')
    //     .then(res => {
    //         console.log(res)
    //         setEmployee(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // },[])

  return (
    <div>
    
        <button onClick={addNewEmp}>Add Emlpoyee</button>
        <button onClick={updateEmployee}>Update Employee</button>
        <button onClick={deleteEmployee}> Delete Employee</button>  
        
        <ul>
            {
            employees && employees.map((employee) => {
                return (<li key={employee.id}>{employee.login}</li>)
            })
            
            }
        </ul>
        <ScreenSetting />
    </div>
  )
}

export default EmployeeList;