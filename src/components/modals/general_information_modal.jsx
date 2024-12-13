// import * as Icon from 'react-bootstrap-icons';
import propTypes from 'prop-types';

export const GeneralInformationModal1 = ({ note, onClose }) => {
    return(
        <div className= {`modal1 ff-karla`}>
            <div className="modal-box3">
                <div className="circle-btn1 text-l1" onClick={onClose}>
                    x
                </div>

                {/* Desc */}
                <div className="text-center mar-bottom-1 d-flex flex-direction-y gap3">
                    <div className="text-m2 w-50 m-auto">{note}</div>
                </div>

                {/* Btns */}
                <div className="d-flex flex-direction-y gap3">
                        
                    <div 
                    onClick={() => onClose()} 
                    className="primary-btn-yellow1 text-center"
                    >
                        Okay
                    </div>
                </div>
            </div>
        </div>
    );
};

GeneralInformationModal1.propTypes = {
    onClose: propTypes.func.isRequired,
};