<script>
    import { calculateRecommendation } from "../../lib/machine/machinePicker";
    import Step from "./Step.svelte";

    import { q } from "../../lib/machine/questionnaire";

    let steps = [
            "budget",
            "machineType",
            "experience",
            "favoriteDrink",
            "dailyFrequency",
            "consecutiveShots",
        ],
        currentActive = 1;

    $: done = currentActive === 7;

    let formData = {
        budget: "",
        machineType: "",
        experience: "",
        favoriteDrink: "",
        dailyFrequency: "",
        consecutiveShots: "",
    };

    export const onClickHandler = (value, ctx) => {
        formData[ctx] = value;
        currentActive++;
    };
</script>

<div>
    {#if !done}
        <form class="form">
            <Step
                step={q[steps[currentActive - 1]]}
                handler={onClickHandler}
                stepName={[steps[currentActive - 1]]}
            />
        </form>
    {:else}
        <h2>Recommended machines based on your preferences:</h2>
        <ul>
            {#each calculateRecommendation(formData) as m}
                <li>{m.brand}:{m.model} - {m.priceUsd}</li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    div {
        display: flex;
    }
</style>
