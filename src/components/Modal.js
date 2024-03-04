import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 }
}

const containerVariant = {
    initial: { marginTop: "-50%", opacity: 0, transition: { type: "spring" } },
    isOpen: { marginTop: "0%", opacity: 1, transition: { duration: .6 } },
    exit: { marginTop: "-50%", opacity: 0, transition: { duration: .6 } }
}

const Modal = (props) => {

    const { handleClose, children, isOpen } = props

    const handleOverlayClick = (e) => {

        if (e.target.classList.contains('modalOverlay')) {
            handleClose()
        }
    }

    return (

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={"initial"}
                    animate={"isOpen"}
                    exit={"exit"}
                    variants={modalVariant}
                    className="modalOverlay"
                >
                    <motion.div
                        variants={containerVariant}
                        className="modalContainer"
                    >
                       {/* <div
                            onClick={handleClose}
                            className="flex justify-end m-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20.39 20.39"
                                className="modalCloseButton"
                            >
                                <title>close</title>
                                <line
                                    x1="19.39"
                                    y1="19.39"
                                    x2="1"
                                    y2="1"
                                    fill="none"
                                    stroke="#ffffff"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                />
                                <line
                                    x1="1"
                                    y1="19.39"
                                    x2="19.39"
                                    y2="1"
                                    fill="none"
                                    stroke="#ffffff"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                />
                            </svg>
            </div>*/}

                        {children}
                        <div className="modalFooterGraphic"></div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal