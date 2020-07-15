<script>
    export let icon = false;
    export let small = false;
    export let vertical = false;
    let _class = "";
    export {_class as class}
</script>

<hr
        class:uk-divider-icon={icon}
        class:uk-divider-small={small}
        class:uk-divider-vertical={vertical}
        class={_class}
/>