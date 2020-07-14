<script>
    export let href = "";
    export let disabled = false;
    export let isLink = true;
    export let text = "";
    let _class;
    export {_class as class}
</script>

<li class={_class}>
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