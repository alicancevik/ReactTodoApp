import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";



class TaskButton extends React.Component {
    handleClickTask(buttonType, taskId) {
        console.log("handleClick",buttonType);
        axios.post("http://localhost:59749/api/tasks/changestatus",{
            taskId: taskId,
            statusId: 3
          }).then((response) => {
            console.log(response);
            
        });

    }

    navigateToPage = () => {
        this.context.router.push('/')
      };

    render() {
        const { buttonType, taskId } = this.props;    
        
        return (
            <button onClick={() => this.handleClickTask(buttonType,taskId)} 
                    className = {buttonType === 2 ? "btn btn-primary" : buttonType === 3 ? "btn btn-warning" : buttonType === 3 ? "btn btn-success" : "btn btn-danger"}
            >
                {buttonType === 2 ? "New" : buttonType === 3 ? "Inprogress" :  buttonType === 4 ? "Done" : "Canceled"}
            </button>
        );
    }
}

export default TaskButton;