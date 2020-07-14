<script>
    export let href = "";
    export let disabled = false;
    export let isLink = true;
    export let text = "";
</script>

<li>
    {#if isLink}
        <a {href} class:uk-disabled={disabled}>
            <slot>
                {text}
            </slot>
        </a>
    {:else}
        <span class:uk-disabled={disabled}>
            <slot>
                {text}
            </slot>
        </span>
    {/if}
</li>