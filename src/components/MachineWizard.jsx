import { createSignal } from 'solid-js'
import { setState, state } from "../lib/machine/store"

const budgets = ["low", "mid", "high", "lux"]
const machines = {
    super: {
        value: "super",
        machines: ["Juras", "Gaggias"],
    },
    semi: {
        value: "super",
        machines: ["Juras", "Gaggias"],

    },
    manual: {

    },
}

const Option = ({ isSelected, value, handler }) => {
    return (
        <div>
            <input
                onClick={handler}
                type="button"
                value={value}
                class={isSelected && 'selected'} />
        </div>
    )
}

const WizardApp = () => {
    const [machineType, setMachineType] = createSignal("")
    const [drink, setDrink] = createSignal("")
    const [budget, setBudget] = createSignal("")

    const setType = event => {
        const value = event.target?.value
        setMachineType(value)
    }

    const handleSubmit = () => {
        // Logic Here
    }

    return (
        <>
            <div>
                <h1>Machine Type:</h1>

                {
                    Object.keys(machines).map(t => (
                        <Option value={machines[t].value} handler={setType} isSelected={machineType === machines[t].value} />
                    ))
                }

                <pre>{machineType}</pre>

                <hr />

                <h1>Budget Range:</h1>
                <input onClick={() => setBudget(budgets[e.target.id])} id={0} type="button" value="low" placeholder='600' />
                <input onClick={() => setBudget(budgets[e.target.id])} id={1} type="button" value="mid" />
                <input onClick={() => setBudget(budgets[e.target.id])} id={2} type="button" value="high" />
                <input onClick={() => setBudget(budgets[e.target.id])} id={3} type="button" value="lux" />
                <pre>{budget}</pre>


                <h1>Favorite Drinks:</h1>
                <input onClick={(e) => setDrink(e.target.value)} id={0} type="button" value="cappuccino" />
                <input onClick={(e) => setDrink(e.target.value)} id={1} type="button" value="espresso" />
                <input onClick={(e) => setDrink(e.target.value)} id={2} type="button" value="americano" />
                <input onClick={(e) => setDrink(e.target.value)} id={3} type="button" value="latte" />
                <pre>{drink}</pre>

                <h1>Favorite Drinks:</h1>
                <input onClick={(e) => setDrink(e.target.value)} id={0} type="button" value="cappuccino" />
                <input onClick={(e) => setDrink(e.target.value)} id={1} type="button" value="espresso" />
                <input onClick={(e) => setDrink(e.target.value)} id={2} type="button" value="americano" />
                <input onClick={(e) => setDrink(e.target.value)} id={3} type="button" value="latte" />
                <pre>{drink}</pre>



            </div>
        </>
    )
}

export default WizardApp;
