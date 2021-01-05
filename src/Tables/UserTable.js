import React from 'react';
import EditUserForm from '../forms/EditUserForm'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const UserTable = (props) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.users.length > 0 ? (
                props.users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <button
                            onClick={() => {
                                props.editRow(user)
                            }}
                            className="button muted-button"
                            >
                            Edit
                        </button>
                        {/* 追加 */}
                        <button type="button" onClick={handleOpen}>
                            react-transition-group
                        </button>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                            <div className={classes.paper}>
                                <h2 id="transition-modal-title">編集してください</h2>
                                <EditUserForm
                                    setEditing={props.setEditing}
                                    currentUser={props.currentUser}
                                    updateUser={props.updateUser}
                                />
                            </div>
                            </Fade>
                        </Modal>
                        {/* 追加終了 */}
                        <button
                            onClick={() => props.deleteUser(user.id)}
                            className="button muted-button"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan={3}>No users</td>
                </tr>
            )}
            </tbody>
        </table>
    )
  
}

export default UserTable