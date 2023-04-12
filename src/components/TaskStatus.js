import React from 'react'

class TaskStatus extends React.Component {
    render() {
        const { buttonType } = this.props;    
        
        return (
            <span className = {
                buttonType === 2 ? "badge badge-warning" : buttonType === 3 ? "badge badge-success" : buttonType === 4 ? "badge badge-info": "badge badge-info"}>
                 {buttonType === 2 ? "New" : buttonType === 3 ? "Inprogress" :  buttonType === 4 ? "Done" : "Canceled"}
            </span>
        );
    }
}

export default TaskStatus;