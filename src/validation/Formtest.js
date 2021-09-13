import * as yup from 'yup'

export const schema = yup.object().shape({
    //type is string
    name: yup.string()
        .min(2, "Must be at least 2 characters long")
        .max(30, "Can be no more than 30 characters")
        .required("Enter a name for the order"),
    instructions: yup.string()
        .min(2, "Must be at least 2 characters long")
        .max(30, "Can be no more than 100 characters"),
    //type is a dropdown
    size: yup.string()
        .oneOf(["Small", "Medium", "Large", "Extra Large"], "Please choose a size"),
    //type is a radio
    sauce: yup.string()
        .oneOf(["red", "hotSauce"], "Please choose a sauce"),
    //these are  my checkboxes
    extra_cheese: yup.boolean(),
    no_cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    chicken: yup.boolean(),
    bacon: yup.boolean(),
}) 