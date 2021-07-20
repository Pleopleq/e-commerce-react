import Modal from '@material-ui/core/Modal'

const SimpleModal = ({body, handleOpen, handleClose}) => {
    return (
            <Modal
            onClose={handleClose}
            open={handleOpen}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >{body}</Modal>
    )
}

export default SimpleModal