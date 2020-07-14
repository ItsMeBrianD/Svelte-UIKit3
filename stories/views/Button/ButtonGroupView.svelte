<script>
    import {ButtonGroup} from "../../../src";
    import {Button} from "../../../src"
    export let button1 = {};
    export let button2 = {};
    export let button3 = {};
    export let width;
</script>


<ButtonGroup {width}>
    <Button {...button1} />
    <Button {...button2} />
    <Button {...button3} />
</ButtonGroup>