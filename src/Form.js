import React from "react";
    export default function Form(props) {
        const{ values, toppings, changes, submit, errors, disable} = props;

        const onChange= (event) => {
            const { value, name, type, checked } = event.target;
            const updatedValue = type === "checkbox" ? checked : value;
            changes(name, updatedValue) 
        }
        const onSubmit = (event) => {
            event.preventDefault();
            submit();
        }
        console.log(values)
        return(
            //go back and do erros
            <form id="pizza-form" onSubmit={onSubmit}>
                <h2>Customize Your Pizza</h2>
                <div>
                    <label>Tells us a name for your order:</label>
                    <p>{errors.name}</p>
                    <input id="name-input"
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <h2>What Size Would you Like?</h2>
                    <p>{errors.size}</p>
                    <select id="size-dropdown" value={values.size} name="size" onChange={onChange}>
                        <option value="">Select</option>
                        <option value="Small" name="small">Small - 10</option>
                        <option value="Medium" name="medium">Medium - 12</option>
                        <option value="Large" name="large">Large - 14</option>
                        <option value="Extra Large" name="extraLarge">Extra Large - 18</option>
                    </select>
                </div>
                <div>
                    <h2>Choice of Sauce</h2>
                    <p>{errors.sauce}</p>
                    <ul>
                        <li>
                            <label>Classic Red
                                <input
                                    type="radio"
                                    name="sauce"
                                    value="red"
                                    checked={values.sauce === "red"}
                                    onChange={onChange}
                                />
                            </label>
                        </li>
                        <li>
                            <label>Red Hot, Hot sauce
                                <input
                                    type="radio"
                                    name="sauce"
                                    value="hotSauce"
                                    checked={values.sauce === "hotSauce"}
                                    onChange={onChange}
                                />
                            </label>
                        </li>
                    </ul>

                </div>
                <div>
                    <h2>Add Toppings</h2>
                        <ul>
                            {toppings.map(topping => {
                                return (
                                    <li>
                                    <label>{topping}
                                        <input
                                            type="checkbox"
                                            name={topping.toLowerCase()}
                                            checked={values.topping}
                                            onChange={onChange}
                                        />
                                    </label>
                                    </li>
                                );
                            })}
                        </ul>
                </div>
                <div>
                    <h2>Special Instructions</h2>

                    <input id="special-text"
                        type="text"
                        name="instructions"
                        value={values.instructions}
                        placeholder="Special requests go here"
                        onChange={onChange}
                        className="instructions"
                    />
                </div>

                <button id="order-button" disabled={disable} className="submitBtn">Add to Order</button>
            </form>
        )
    }