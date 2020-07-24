<script>
    export let selector = "";
    export let group = "";
    let element = null;

</script>

<span bind:this={element} uk-filter-control={`filter:${selector}; group:${group}`}>
    <slot/>
</span>

<style>
    span{
        display:contents;
    }
</style>