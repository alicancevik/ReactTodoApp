import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TodoDetail extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Task1",
                description: "Task1 Description",
                status: 1,
            },
            {
                id: 2,
                title: "Task2",
                description: "Task2 Description",
                status: 2,
            },
            {
                id: 3,
                title: "Task3",
                description: "Task3 Description",
                status: 3,
            }
        ]
    }
    render() {
        return (
            <div className='container'>
               TodoDetail
            </div>
        )
    }
}


export default TodoDetail;