<script>
    import {Column} from "../../../src";

    export let props;
    export let items = 2;
</script>

<Column {...props}>
    {#each Array(items) as j, i}
        <p class:uk-text-danger={i % 2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam architecto delectus distinctio esse hic
            iusto libero natus non officiis provident quaerat quibusdam quidem, sint tempore tenetur velit. Fugit,
            magnam!
        </p>
    {/each}
</Column>

