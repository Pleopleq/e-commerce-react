import { useState } from 'react'
import { useDispatch } from 'react-redux'
import getModalTypeDispatch from '../helpers/getModalTypeDispatch'

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const handleOpenModal = (modalType) => {
        const modalTypeDispatch = getModalTypeDispatch(modalType)

        dispatch(modalTypeDispatch(modalType))
        setIsOpen(true)
    }

    const handleCloseModal = (modalType) => {
        const modalTypeDispatch = getModalTypeDispatch(modalType)

        dispatch(modalTypeDispatch(modalType))
        setIsOpen(false)
    }

    return { isOpen, handleOpenModal, handleCloseModal }
}

export default useModal
