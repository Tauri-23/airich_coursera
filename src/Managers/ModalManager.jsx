import { GeneralConfirmationModal1 } from "../components/modals/general_confirmation_modal";
import { GeneralInformationModal1 } from "../components/modals/general_information_modal";
import { useModal } from "../contexts/ModalContext"

const ModalManager = () => {
    const {modalState, hideModal} = useModal();

    const renderModal = () => {
        switch(modalState.type) {
            /**
             * General
             */
            case 'GeneralConfirmationModal1':
                return <GeneralConfirmationModal1 {...modalState.props} onClose={hideModal}/>
            case 'GeneralInformationModal1':
                return <GeneralInformationModal1 {...modalState.props} onClose={hideModal}/>





            /*
            |   DEFAULT
            */
            default:
                return null;
        }
    };

    return(
        <>
            {renderModal()}
        </>
    )
}

export default ModalManager