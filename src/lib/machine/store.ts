import { createStore } from "solid-js/store"

export const [state, setState] = createStore({
    steps: [
        {
            id: 1,
            label: "Machine Type",
            description: "What kind of machine are you interested in?",
            current: false,
        },
        {
            id: 2,
            label: "Budget Range",
            description: "Pick a budget range",
            current: false,
        },
        {
            id: 3,
            label: "Favorite Drink",
            description: "Cappuccino, Latte, Espresso, Americano",
            current: false,
        },
    ],
    userInfo: {
        name: "",
        email: ""
    }
})
