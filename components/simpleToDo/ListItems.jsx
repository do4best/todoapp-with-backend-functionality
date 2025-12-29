import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import {TextField,Grid} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function ListItems({todoList, handelDelete, handelTodo}) {


    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 10 }}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todoList.map((value) => {
                const labelId = `checkbox-list-label-${value.id}`;


                return (
                    <ListItem
                        key={value.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => handelDelete(value.id)}>
                                <DeleteOutlineIcon/>
                            </IconButton>
                        }

                    >
                        <ListItemButton role={undefined} onClick={() => handelTodo(value.id)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={value.isDone}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                id={labelId}
                                primary={`Line item ${value.item}`}
                                sx={{
                                    textDecoration: value.isDone ? 'line-through' : 'none',
                                    bgcolor: value.isDone ? 'red' : 'white'
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
        </Grid>
    );
}