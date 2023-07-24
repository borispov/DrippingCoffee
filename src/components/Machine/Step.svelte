<script>
    // todo: add a description prop to describe each step well.
    export let handler, step, stepName;
</script>

<div class="button-group">
    <h2>{stepName}:</h2>
    {#each step as item, i}
        <button on:click|preventDefault={() => handler(i, stepName)}>
            {item}
        </button>
    {/each}
</div>

<style>
    .button-group {
        display: flex;
        gap: 10px;
        transition: all 100ms ease-in-out;
    }
    button {
        padding: 10px 18px;
        border-radius: 12px;
        background: #882de7;
        color: white;
        border: none;
        width: 150px;
        cursor: pointer;
        transition: all 100ms ease-out;
    }

    button:hover {
        box-shadow: 2px 2px 0 var(--theme-accent);
        transition: all 100ms ease-out;
    }
</style>
