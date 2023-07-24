import { machines } from "./espresso.json"
import { q } from "./questionnaire.js"

type MachineType = "semi" | "manual";

type FormData = {
    budget: number,
    machineType: number,
    favoriteDrink: number,
    consecutiveShots: number,
    experience: number
}

const budgets = [
    [1, 500],
    [501, 1250],
    [1251, 2250],
    [2251, 20000],
]

const stripSymbolsFromCurrency = (price: string): number => {
    // omg REGEX
    return parseInt(price.replace(/[^0-9\.-]+/g, ""));
};


export function calculateRecommendation(data: FormData) {
    const {
        budget,
        machineType,
        experience,
        // favoriteDrink,
        // dailyFrequency,
        consecutiveShots,
    } = data;

    // capp and latte are indexed 0 and 1 in q[favoriteDrink] array.
    const isMilk: boolean = q.favoriteDrink <= 1;
    const needConsistentSteam: boolean = consecutiveShots >= 2 && isMilk
    const needConsistentTemp: boolean = consecutiveShots >= 2 && !isMilk

    const isLowBudget = budget == 0
    const isHighBudget = budget > 1

    const isManual = q['machineType'][machineType].toLowerCase() === 'lever manual'

    if (experience == 0) {
        console.log("Looking for machines for beginners")
        return isHighBudget
            ? filterBy(budget, ["DB"], ["La Marzocco", "Della Corte"])
            : isLowBudget
                ? filterBy(budget, ["SB"], ["Breville", "Gaggia", "VBM", "Rancilio"])
                : filterBy(budget, ["SB", "HX"], ["Lelit", "Bezzera", "Rocket", "Profitec"])
    }

    if (isManual) {
        return filterBy(budget, ["No Boiler"])
    }

    if (isHighBudget) {
        return isMilk
            ? needConsistentSteam
                ? filterBy(budget, ["SB"], ["HX", "DB"])
                : filterBy(budget, ["SB"], ["Decent"])
            : filterBy(budget, ["SB", "HX"], ["Decent", "Bezzera", "Quick Mill", "La Marzocco"])

    }

    if (isMilk) {
        return isLowBudget
            ? filterBy(budget, ["SB"], ["Breville", "Gaggia Classic Pro"])
            : needConsistentSteam
                ? filterBy(budget, ["HX"])
                : filterBy(budget, ["SB"])

    }

    if (needConsistentTemp) {
        return filterBy(budget, ["SB", "HX"])
    }

    if (!needConsistentTemp && !needConsistentSteam && isLowBudget) {
        return filterBy(budget, ["No Boiler"], ["Flair 58"])
    }

}

const filterBy = (
    budget: number,
    userBoilerType: string[] = ["SB"],
    brands?: string[],
    filter: {
        needConsistentTemp?: boolean
    } = {}
) => {
    return machines.filter((machine) => {

        // if brewBoiler property is not empty and is larger than 2
        if (filter.needConsistentTemp && machine.boilerType !== "DB" && machine.brewBoiler == "") {
            let z = parseInt(machine.brewBoiler.split("L")[0])
            if (!z || z < 1) {
                return false
            }
        }

        if (brands && !brands.some(b => b.toLowerCase() == machine.brand.toLowerCase())) {
            return false
        }

        let strippedValue = stripSymbolsFromCurrency(machine.priceUsd)

        return (
            strippedValue >= budgets[budget][0] &&
            strippedValue <= budgets[budget][1] &&
            userBoilerType &&
            userBoilerType.includes(machine.boilerType)
        );
    });
}
