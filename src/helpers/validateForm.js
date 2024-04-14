const validateForm = (values) => {
    const namePattern = /^[A-Za-z\s-]+$/;

    if (!values.name || !namePattern.test(values.name)) {
        return "Name is invalid"; 
    }
    return null; 
}

export default validateForm;
