<script>
    import {Input} from "../../../src";

    export let props = {};
    let value = "";
</script>

<Input {...props} bind:value/>
<h1>{value}</h1>