import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TaskButton from './TaskButton';
import TaskStatus from './TaskStatus';
import axios from "axios";
import { format } from 'date-fns'



class Todos extends Component {
    state = {
        todos: [],
        isError: false,
        errorMessage: ""
    }
    componentDidMount() {
        let user = localStorage.getItem("user");

        if(user === null || user === ""){
            alert("User is not found!");
        }

        axios.get("http://localhost:59749/api/tasks").then((response) => {
            this.setState({ todos: response.data });
        }).catch((err) => {
            const { code } = err;
            this.setState({ isError: true, errorMessage: code });
        });
    }

    handleDoneClick = () => {
        let todo = this.state.todos.find(x => x.id === 1);
        let index = this.state.todos.findIndex(x => x.id === 1);
        console.log("Todo:", todo, "Index:", index);
        todo.status = 3;
    }

    alertItemName = (item) => {
        console.log("alert item name");
    }
    getParsedDate(date) {
        var dateType = new Date(date)
        return format(dateType, 'dd.MM.yyyy HH:mm:ss');
    }
    render() {
        const { isError, errorMessage } = this.state;

        return (
            <div className='container'>
                {
                    isError === true ? <div className="alert alert-danger" role="alert">
                        <strong> {errorMessage} : </strong> API service is not working...
                    </div> : ""
                }

              
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">CreatedOn</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.length > 0 ?
                                this.state.todos.map((item, index) => (
                                    <tr key={"todorow_" + item.id} id={"todorow_" + item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.title}</td>
                                        <td>{item.shortDescription}</td>
                                        <td>{this.getParsedDate(item.createDate)}</td>
                                        <td>
                                            <TaskStatus buttonType={item.taskStatusId} />
                                        </td>
                                        <td>

                                            <Link to={"/todos/" + item.id} className="btn btn-primary"> Detail </Link>
                                            &nbsp;
                                            <TaskButton buttonType={item.status} taskId={item.id} />

                                        </td>
                                    </tr>
                                )) :
                                <tr>
                                    <td colSpan="6" align='center'>Kayıt Bulunamadı</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Todos;