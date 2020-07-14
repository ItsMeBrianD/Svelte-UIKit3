<script>
    import uikit from 'uikit';
    import {uk_width} from "..";

    export let animate = true;
    export let collapsible = true;
    export let duration = 200;
    export let multiple = false;
    export let offset = 0;
    let options, classes = [];
    $: options = {
        animation: animate,
        collapsible,
        duration,
        multiple,
        offset
    };

    export let width = "";


    let element;
    $: if(element){
        uikit.accordion(element, options);
    }
    let _class;
    export {_class as class}
</script>


<ul bind:this={element} class={_class + " " + classes.join(" ")} use:uk_width={width} on:beforeshow on:show on:shown on:beforehide on:hide on:hidden>
    <slot/>
</ul>

