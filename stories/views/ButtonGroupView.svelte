<script>
    import ButtonGroup from "../../src/Button/ButtonGroup.svelte";
    import Button from "../../src/Button/Button.svelte";
    export let button1 = {};
    export let button2 = {};
    export let button3 = {};
</script>


<ButtonGroup>
    <Button {...button1} />
    <Button {...button2} />
    <Button {...button3} />
</ButtonGroup>