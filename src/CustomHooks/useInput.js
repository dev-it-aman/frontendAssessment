import {useState} from 'react'

const useInput = (initialValue, validateValue) =>{
    const [enteredValue, setEnteredValue] = useState(initialValue);
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = (event) =>{
        console.log("here");
        setIsTouched(true);
    }

    const reset = () => {
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;