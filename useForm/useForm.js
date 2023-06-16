import { useEffect, useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState({ 
            ...formState, 
            [name]: value });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    useEffect(() => {
        // console.log('Use effect >>>>')
    }, [])

    useEffect(() => {
        // console.log('formState changed >>>>')
    }, [formState])

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
