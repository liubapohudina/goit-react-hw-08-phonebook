import React from "react";
import PropTypes from "prop-types";
import styles from './title.module.css';



const Title = ({title, children}) => {
    return (
        <section>
        <h2 className={styles.title}>{title}</h2>
        {children}
        </section>     
    )
}

export default Title;

Title.propTypes = {
    title: PropTypes.string.isRequired,
}