import React, { FC } from 'react';
import "styles/Modal.css";

// interface declaration
import { IModal } from 'shared/interfaces';

export const Modal:FC<IModal> = (props) => {

    const { onClose, children } = props;

    return (
        <div className="modal-container">
            <div className="modal">
                
                <div className='modal-header'>
                    <span style={{ fontWeight: "bold" }}>View Data</span>
                    <span className="close" data-testid="closemodal" onClick={onClose}>&times;</span>
                </div>

                <div className='modal-content'>
                    { children }
                </div>

                <div className='modal-footer'>
                </div>

            </div>
        </div>
    )

};