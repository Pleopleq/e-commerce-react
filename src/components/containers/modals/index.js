import Modal from '@material-ui/core/Modal'

const SimpleModal = ( props ) => {
    return (
        <Modal
        onClose={props.handleClose}
        open={props.handleOpen}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >{props.children}</Modal>
    )
}

export default SimpleModal