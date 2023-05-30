import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const ConfirmationDialog = ({ open, title, message, onConfirm, onCancel }) => {
    const handleConfirm = () => {
        onConfirm();
    };
    
    const handleCancel = () => {
        onCancel();
    };
    return (
        <Dialog
            open={open}
            onClose={handleCancel}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel} color='primary'>
                    No
                </Button>
                <Button onClick={handleConfirm} color="primary" autoFocus>
                    Si
                </Button>
            </DialogActions>
        </Dialog>
    )
}



export default ConfirmationDialog