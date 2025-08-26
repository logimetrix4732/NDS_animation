import React from 'react';
import {
    Box,
    Dialog,
    Button,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText,
    CircularProgress,
    Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteConfirmationModal = ({ open, onClose, onConfirm, loading }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            TransitionProps={{
                timeout: {
                    enter: 700,
                    exit: 300
                }
            }}
            PaperProps={{
                sx: {
                    borderRadius: 3,
                    boxShadow: '0 8px 40px rgba(0, 0, 0, 0.3)',
                    minWidth: { xs: '90%', sm: 400 },
                    overflow: 'hidden',
                    animation: 'fadeIn 0.5s ease-out',
                    '@keyframes fadeIn': {
                        from: {
                            opacity: 0,
                            transform: 'translateY(-20px) scale(0.95)',
                        },
                        to: {
                            opacity: 1,
                            transform: 'translateY(0) scale(1)',
                        },
                    },
                }
            }}
        >
            <Box sx={{
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: 'linear-gradient(90deg, #ff4d4d 0%, #ff1a1a 100%)',
                }
            }}>
                <DialogTitle
                    sx={{
                        pb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        background: (theme) => theme.palette.mode === 'dark'
                            ? 'linear-gradient(45deg, rgba(25,25,25,0.9) 0%, rgba(40,40,40,0.9) 100%)'
                            : 'linear-gradient(45deg, rgba(250,250,250,0.9) 0%, rgba(255,255,255,0.9) 100%)',
                    }}
                >
                    <DeleteIcon color="error" sx={{ fontSize: 28 }} />
                    <Typography variant="h6" component="span" sx={{ fontWeight: 600 }}>
                        Delete Publication
                    </Typography>
                </DialogTitle>

                <DialogContent sx={{ pt: 3, pb: 3 }}>
                    <DialogContentText
                        sx={{
                            color: 'text.primary',
                            fontSize: '1.1rem',
                            textAlign: 'center',
                        }}
                    >
                        Are you sure you want to delete this publication?
                    </DialogContentText>
                </DialogContent>

                <DialogActions sx={{ px: 3, py: 2, gap: 1, background: (theme) => theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.01)' }}>
                    <Button
                        onClick={onClose}
                        disabled={loading}
                        variant="outlined"
                        sx={{
                            borderRadius: 2,
                            px: 3,
                            borderColor: 'divider',
                            '&:hover': {
                                borderColor: 'divider',
                                background: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                            }
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onConfirm}
                        color="error"
                        variant="contained"
                        disabled={loading}
                        autoFocus
                        sx={{
                            borderRadius: 2,
                            px: 3,
                            position: 'relative',
                            background: 'linear-gradient(90deg, #ff4d4d 0%, #ff1a1a 100%)',
                            '&:hover': {
                                background: 'linear-gradient(90deg, #ff3333 0%, #ff0000 100%)',
                            }
                        }}
                    >
                        {loading ? 'Deleting...' : 'Delete'}
                        {loading && (
                            <CircularProgress
                                size={20}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-10px',
                                    marginLeft: '-10px',
                                    color: 'white'
                                }}
                            />
                        )}
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};

export default DeleteConfirmationModal;
