import React from 'react'
import { ListItem, ListItemAvatar, ListItemText,List, Button } from '@material-ui/core';
import db from './Firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>

                </ListItemAvatar>
            <ListItemText primary={props.todo.todo} /*secondary={todo.timestamp}*//>
            </ListItem>
<Button onClick={event=>db.collection('todos').doc(props.todo.id).delete()}>
🔴<DeleteForeverIcon/>
    </Button>
        </List>
    )
}

export default Todo
