<script>
  let {
    value = $bindable(),
    setVal,
    label,
    description,
    options,
    prefix = "",
  } = $props();

  let checked = $state("");
  let checkedIndex = $state(null);

  function selectOption() {
    let a = options[checkedIndex];
    let x = (typeof a == "string" && a) || a.value;
    setVal(x);
  }
</script>

<div class="text-left">
  <label
    for={label}
    class={`[ font-medium block ] [ leading-[1.35em] lg:leading-normal ]`}
  >
    {label}
  </label>
  <div class={"text-base font-normal leading-relaxed"}>
    {description}
  </div>

  <fieldset class="mt-4 !grid gap-x-4 gap-y-4">
    {#each options as option, index}
      <!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
      <div class="mt-0 inline-block">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
        <label
          aria-checked={checkedIndex === index}
          role="radio"
          onclick={() => {
            checkedIndex = index;
            selectOption();
          }}
          for={`option-${index}`}
          data-checked={checkedIndex === index}
          class={`
          [ relative flex w-full ]
          [ cursor-pointer rounded-md ]
          [ py-2 px-4 shadow-sm ]
          [ focus:outline-none border-indigo-200 ring-2 border-transparent transition duration-75 ease-in-out ]
          ${checkedIndex === index ? "border-neutral-600 ring-indigo-500 shadow-lg" : ""}`}
        >
          <input
            required
            value={checkedIndex}
            name={`option-${index}`}
            type="radio"
            class="sr-only"
            bind:group={checked}
          />
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div>
            <div class="flex flex-1 justify-between">
              {prefix + ((typeof option == "string" && option) || option.value)}
              <svg
                class:hidden={value !== index}
                class="h-5 w-5 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            {#if typeof option !== "string" && option.desc}
              <p class="text-xs text-neutral-600 text-left">{option.desc}</p>
            {/if}
          </div>
        </label>
      </div>
    {/each}
  </fieldset>
</div>
