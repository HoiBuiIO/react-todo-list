import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {

        const {title, handleDelete, handleEdit} = this.props;

        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2 border">
                <h6>{title}</h6>
                <div className="todo-icon" onClick={handleEdit}>
                    <span className="mx-2 text-success">
                        <i className="fas fa-pen"/>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash"/>
                    </span>

                </div>
            </li>
        )
    }
}

export default TodoItem
