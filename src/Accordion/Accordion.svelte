<script>
    import uikit from 'uikit';

    export let animate = true;
    export let collapsible = true;
    export let duration = 200;
    export let multiple = false;
    export let offset = 0;
    let options;
    $: options = {
        animate,
        collapsible,
        duration,
        multiple,
        offset
    };

    let element;
    $: if(element){
        console.log(options);
        uikit.accordion(element, options);
    }
    let _class;
    export {_class as class}
</script>


<ul bind:this={element} class={_class} on:beforeshow on:show on:shown on:beforehide on:hide on:hidden>
    <slot/>
</ul>

