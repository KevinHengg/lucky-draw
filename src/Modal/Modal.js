import React from 'react';
import Aux from '../Auxilary/Auxilary';
import Confetti from 'react-confetti';
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => (
    <Aux>
        <Confetti 
            recycle = {true}
            style = {{
                zIndex:'101',
                opacity: props.show ? '1' : '0',
                width: '100%',
                height: '100%'
            }}
        /> 
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
            style={{
                position: 'fixed',
                zIndex: '500',
                backgroundColor: 'white',
                width: '70%',
                border: '1px solid #ccc',
                boxShadow: '1px 1px 1px black',
                padding: '16px',
                left: '15%',
                top: '30%',
                boxSizing: 'border-box',
                transition: 'all 0.3s ease-out',
                textAlign: 'center',
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;