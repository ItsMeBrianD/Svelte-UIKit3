<script>
    import {Section} from "../../../src";
    export let props = {};

    $: console.log(props)
</script>

<Section {...props}>
    <h3>Section Heading Test</h3>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</Section>

