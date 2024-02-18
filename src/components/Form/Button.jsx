import React from "react";
import styles from './button.module.css';
import PropTypes from "prop-types";
import classNames from 'classnames';



const Button = ({text, type, className, onClickLogout, onClickSubmit}) => {
    return (
        <><button className={classNames(styles.btn, className)} onSubmit={onClickSubmit} onClick={onClickLogout} type={type}>{text}</button></>
    )
}



export default Button;

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string.isRequired,
    onClickSubmit: PropTypes.func,
}