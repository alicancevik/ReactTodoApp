import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AddTodo() {
    // useState ile set işlemi yapabiliriz.
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:59749/api/tasks/add", {
            title: e.target.title.value,
            shortDescription: e.target.shortDescription.value,
            fullDescription: e.target.fullDescription.value,
            projectId: 1128
        }).then((response) => {
            console.log("Success", response);
            navigate('/tasks');
        }).catch((err) => {
            const { code } = err;
            setIsError(true);
            setErrorMessage(code);
        })

    };

    return (
        <form onSubmit={handleSubmit}>
            {
                isError === true ? <div className="alert alert-danger" role="alert">
                    <strong> {errorMessage} : </strong> API service is not working...
                </div> : ""
            }
            <div className="form-group">
                <label htmlFor="exampleInputTitle">Title</label>
                <input type="text" className="form-control" id="title" placeholder="Enter title" />
                <small id="titleHelp" className="form-text text-muted">Title is required.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputShortDescription">Short Description</label>
                <input type="text" className="form-control" id="shortDescription" placeholder="Enter short description" />
                <small id="descHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputFullDesc">Full Description</label>
                <input type="text" className="form-control" id="fullDescription" placeholder="Enter description" />
                <small id="descHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>

        </form>
    );
}

export default AddTodo;