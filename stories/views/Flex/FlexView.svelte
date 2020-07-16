<script>
    import {cardOptions,Card, Flex} from "../../../src";
    export let props = {};
    export let items = 5;
</script>

<Flex {...props}>
    {#each Array(items) as item, i}
        <Card color={cardOptions.colors[i % cardOptions.colors.length]}/>
    {/each}
</Flex>