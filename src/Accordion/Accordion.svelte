<script>
    import uikit from 'uikit';
    import {getWidthClass} from "../helpers/width";

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
    classes.push(getWidthClass(width));


    let element;
    $: if(element){
        console.log(options);
        console.log(uikit.accordion(element, options));
    }
    let _class;
    export {_class as class}
</script>


<ul bind:this={element} class={_class + " " + classes.join(" ")} on:beforeshow on:show on:shown on:beforehide on:hide on:hidden>
    <slot/>
</ul>

