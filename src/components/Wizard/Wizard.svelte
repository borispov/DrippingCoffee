<script>
    import Select from "./Select.svelte";
    import * as C from "./constants.js";

    import { onMount } from "svelte";

    let steps = $state([1, 2, 3, 4]);

    let activeStep = $state(0);
    let loading = $state(false);

    const initialForm = {
        typeOfUser: "",
        volumePerServing: "",
        volumePerDay: "",
        warmUp: "",
        budget: "",
        message: "",
    };

    let form = $state({
        typeOfUser: "",
        volumePerServing: "",
        volumePerDay: "",
        typeOfDrink: "",
        dedicatedGrinder: "",
        steamAndPull: "",
        warmUp: "",
        budget: "",
        message: "",
    });

    let recommendations = $state([]);
    let getMainRecommendation = () => {
        if (recommendations.espressoMachines.length) {
            let budgetLevel = Object.values(C.BUDGET).indexOf(form.budget);
            let espressoMachine =
                recommendations["espressoMachines"][budgetLevel][0];
            const rec = {
                espressoMachine: espressoMachine,
                grinder: recommendations["grinders"][budgetLevel][0],
                accessories: [...C.accessories.juggs, ...C.accessories.scales],
            };
            return rec;
        }
    };
    let recommendation = $state(null);
    // let recommendation = $derived(getMainRecommendation());

    onMount(() => {
        steps = beginnerTypes;
    });

    const stepHandler = (step, value) => {
        form[step] = value;
        if (activeStep == steps.length - 1) {
            // set a loader now...
            loading = true;
            setTimeout(() => {
                recommendations = C.naiveSolution(form);
                recommendation = getMainRecommendation();
                // disable loader
                loading = false;
                activeStep = -1;
            }, 2000);
            return;
        }
        activeStep++;
    };

    const beginnerTypes = [
        "Type",
        "Volume",
        "Frequency",
        "Drinks",
        "Grinder",
        "Budget",
    ];
    const advancedTypes = [
        "Type",
        "Volume",
        "Frequency",
        "Drinks",
        "Warm-up",
        "Grinder",
        "Budget",
    ];

    const cards = [
        {
            title: "Average User",
            subtitle: "",
            value: "consumer",
            features: [
                "Just looking around",
                "Don't enjoy tinkering too much",
                "Coffee for yourself and SO, but no parties",
                "Best bang for your buck",
            ],
        },
        {
            title: "Serious Hobbyist",
            subtitle: "",
            value: "prosumer",
            features: [
                "Experienced home barista",
                "Enjoy tinkering and wasting time honing in on your skills",
                "Might serve guests and host parties",
                "Give me the best tools for each job",
            ],
        },
    ];
</script>

<section
    class="min-h-screen h-full pt-12 sm:pt-20 bg-white flex flex-col justifyn-center"
>
    <div class="max-w-96 md:max-w-7xl px-2 md:px-8 lg:px-12 tac">
        <div class="flow mx-auto">
            <h1>The Setup Wizard</h1>
            <p>
                I've put up a special (it's actually quite simple) wizard to
                give you a set of recommendations based on your experience
                level, goals and <strong>budget</strong>
            </p>
        </div>
        <div class={`${!recommendation && "h-[100px]"}  mt-12`}>
            {#if activeStep == 0}
                <h2>Let's get to know you, who are you?</h2>
            {/if}
            {#if loading}
                <h2>Assembling The Best Package For You</h2>
            {/if}
            <!-- probably means we got a recommendation -->
            {#if recommendation !== null}
                <h2>Here's a recommendation for you...</h2>
                <div class="stats stats-vertical shadow">
                    <div class="stat inline-grid">
                        <div class="stat-figure">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="inline-block h-8 w-8 stroke-current"
                            >
                                <path
                                    fill="currentColor"
                                    d="M6 2c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h1v2H4v2h3c1.11 0 2-.89 2-2v-2h2v2c0 1.11.89 2 2 2h3v-2h-3v-2h1c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm4 2.97a2 2 0 1 1 .001 3.999A2 2 0 0 1 10 4.97M8 14.5h4V16H8zm10 .5h2v2h-2zm0-8h2v6h-2z"
                                />
                            </svg>
                        </div>
                        <div class="stat-tile">Hosting Needs</div>
                        <div class="stat-value text-base">
                            {form.volumePerServing}
                        </div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="inline-block h-8 w-8 stroke-current"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M2 21h18v-2H2M20 8h-2V5h2m0-2H4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
                                />
                            </svg>
                        </div>
                        <div class="stat-tile">Fav Drink</div>
                        <div class="stat-value text-base">
                            {form.typeOfDrink}
                        </div>
                    </div>
                    <div class="stat">
                        <div class="stat-figure">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="inline-block h-8 w-8 stroke-current"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m.5 5v5.2L9.8 17l-1.3-.8l2.5-4.4V7z"
                                />
                            </svg>
                        </div>
                        <div class="stat-tile">Ready To Brew</div>
                        <div class="stat-value text-base">{form.warmUp}</div>
                    </div>
                    <div class="stat">
                        <div class="stat-figure">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="inline-block h-8 w-8 stroke-current"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15"
                                />
                            </svg>
                        </div>
                        <div class="stat-tile">Budget</div>
                        <div class="stat-value text-secondary text-base">
                            ${form.budget}
                        </div>
                    </div>
                </div>
            {/if}
        </div>

        <!-- Steps // show only if quiz is ON - stupid way to check is whether we got active recommendation -->
        {#if recommendation == null}
            <ul class="steps steps-horizontal mx-auto">
                {#each steps as step, stepNumber}
                    <!-- skipping first step -->
                    {#if stepNumber}
                        <li
                            class={`step ${activeStep === stepNumber ? "step-secondary" : ""}`}
                        ></li>
                    {/if}
                {/each}
            </ul>
        {/if}

        <div
            class="border border-amber-700 rounded-md pt-8 pb-20 px-4 md:px-12 mt-8 max-w-2xl mx-auto"
        >
            <!-- First Step -->
            {#if activeStep == 0}
                <!-- Cards -->
                <div
                    class="stack md:repel items-center space-y-4"
                    data-pos="center"
                >
                    {#each cards as card, index}
                        <div
                            class="card border-[1px] border-amber-700 bg-base-100 w-10/12 md:w-96 shadow-xl rounded-lg"
                        >
                            <div class="card-body">
                                <div class="card-title serif">{card.title}</div>
                                <ul class="list-disc pl-4">
                                    {#each card.features as feat}
                                        <li class="text-start text-sm">
                                            {feat}
                                        </li>
                                    {/each}
                                </ul>
                                <button
                                    disabled={index == 0}
                                    class="btn btn-primary btn-secondary"
                                    onclick={() =>
                                        stepHandler("typeOfUser", index)}
                                >
                                    {index == 0 ? "Work In Progress" : "Select"}
                                </button>
                            </div>
                        </div>
                    {/each}
                </div>
            {:else if activeStep == 1}
                <Select
                    bind:value={form.volumePerServing}
                    label={"Do you plan on hosting parties and having guests?"}
                    description={""}
                    options={[
                        {
                            value: C.VOLUME_PER_SERVING.SOLO,
                            desc: "Lonely, I am so lonely",
                        },
                        {
                            value: C.VOLUME_PER_SERVING.DUO,
                            desc: "Significant Other, friend, colleague",
                        },
                        {
                            value: C.VOLUME_PER_SERVING.SMALL_GATHERING,
                            desc: "You host infrequent or small gatherings",
                        },
                    ]}
                    setVal={(v) => stepHandler("volumePerServing", v)}
                />
                <!-- VOLUME PER DAY -->
            {:else if activeStep == 2}
                <Select
                    bind:value={form.volumePerDay}
                    label={"How many drinks per day do you have?"}
                    description={"Throughout the day, how many drinks do you intend to brew, whether it's for yourself only or not"}
                    options={[
                        C.VOLUME_PER_DAY.LOW,
                        C.VOLUME_PER_DAY.MEDIUM,
                        C.VOLUME_PER_DAY.HIGH,
                        C.VOLUME_PER_DAY.VERY_HIGH,
                    ]}
                    setVal={(v) => stepHandler("volumePerDay", v)}
                />
            {:else if activeStep == 3}
                <Select
                    value={form.typeOfDrink}
                    label={"What's your poison?"}
                    description={"Your favorite drink can determine which espresso machine would be most sensible for your needs"}
                    setVal={(v) => stepHandler("typeOfDrink", v)}
                    options={[
                        C.TYPE_OF_DRINK.ESPRESSO,
                        C.TYPE_OF_DRINK.CAPPUCCINO_LATTE,
                        C.TYPE_OF_DRINK.AMERICANO,
                        C.TYPE_OF_DRINK.ALL,
                    ]}
                />
            {:else if activeStep == 4}
                <Select
                    value={form.warmUp}
                    label={"How fast you want your machine to be ready to brew coffee?"}
                    description={"Some machines take 45+ minutes to ramp up, some under 15 minutes, it's up to you whether or not you're willing to use a Smart WiFi plug to mitigate long warmup time or rather have a machine that is quick to warmup"}
                    setVal={(v) => stepHandler("warmUp", v)}
                    options={[
                        C.WARMUP_TIME.FAST,
                        C.WARMUP_TIME.MEDIUM,
                        C.WARMUP_TIME.SLOW,
                    ]}
                />
            {:else if activeStep == 5 && !loading}
                <Select
                    value={form.budget}
                    prefix={"$"}
                    label={"What can you spend on machine alone? Please, consider that you must get a grinder as well, unless you're getting a Breville Express which costs above $1,000"}
                    description={""}
                    setVal={(v) => stepHandler("budget", v)}
                    options={[
                        C.BUDGET.LOW,
                        C.BUDGET.MID,
                        C.BUDGET.HIGH,
                        C.BUDGET.VERY_HIGH,
                    ]}
                />
            {:else if loading}
                <div class="container p-4 mx-auto">
                    <div class="loading loading-bars loading-lg"></div>
                </div>
            {:else if activeStep == -1}
                <div class="p-4 mx-auto">
                    <h2 class="underline">Recommendation:</h2>

                    <div
                        class="card border-[1px] mx-auto border-amber-700 bg-base-100 w-full md:w-96 shadow-xl rounded-lg"
                    >
                        <div class="card-body">
                            <div class="card-title serif">
                                Machine: {recommendation.espressoMachine
                                    .machine}
                            </div>
                            <ul class="list-disc pl-4">
                                <li class="text-start text-sm">
                                    <a href={recommendation.grinder.url}>
                                        Grinder: {recommendation.grinder
                                            .machine}
                                    </a>
                                </li>
                            </ul>
                            <div class="card-actions">
                                {#if recommendation.espressoMachine.url}
                                    <a
                                        class="btn btn-secondary btn-sm"
                                        href={recommendation.espressoMachine
                                            .url}
                                    >
                                        Machine Details
                                    </a>
                                {/if}
                                {#if recommendation.espressoMachine.purchase}
                                    <a
                                        class="btn btn-accent btn-sm"
                                        href={recommendation.espressoMachine
                                            .url}
                                    >
                                        Purchase Here
                                    </a>
                                {/if}
                            </div>

                            <h4 class="mt-4">
                                Here's a bunch of accessories you might consider
                                getting for your machine:
                            </h4>
                            <ul class="list text-left">
                                {#each recommendation.accessories as tool}
                                    <li>
                                        <a
                                            class="text-left link text-sm"
                                            href={tool.url}
                                        >
                                            {tool.type}: {tool.machine}
                                        </a>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="prose">
                            <p>{recommendations.message}</p>
                            <p>
                                Please, note that the recommendation is based on
                                a budget for an espresso machine only. You're
                                ought to get a dedicated grinder unless the
                                recommended machine has a built-in grinder.
                                Frankly, there are only two machines with such a
                                grinder and those are <a
                                    href="https://amzn.to/3zB9Jr3"
                                    target="_blank">Breville Barista Express</a
                                > and the Lelit PL042EMI
                            </p>
                        </div>
                    </div>

                    <button
                        onclick={() => {
                            form = initialForm;
                            recommendations = [];
                            recommendation = null;
                            activeStep = 0;
                        }}
                        class="btn btn-danger mt-4">Start over</button
                    >
                </div>
            {/if}
            {#if false && activeStep !== 0}
                <button
                    class="btn btn btn-danger mt-4"
                    onclick={() => {
                        activeStep--;
                    }}
                >
                    Back
                </button>
            {/if}
        </div>
    </div>
</section>
