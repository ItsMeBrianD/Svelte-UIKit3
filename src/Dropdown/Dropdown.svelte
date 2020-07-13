<script>
    import Button from "../Button/Button.svelte";
    import uikit from 'uikit';

    let options = {};

    export let mode = "";
    const modes = ["hover", "click"];
    if (modes.includes(mode.toLowerCase())) {
        options.mode = mode.toLowerCase();
    }

    export let position = "";
    const positions = [
        "bottom-left", "bottom-center", "bottom-right", "bottom-justify",
        "top-left", "top-center", "top-right", "top-justify",
        "left-top", "left-center", "left-bottom",
        "right-top", "right-center", "right-bottom"
    ];
    if(positions.includes(position.toLowerCase())){
        options.pos = position.toLowerCase();
    }

    export let offset = false;
    if(offset && typeof offset === "number"){
        options.offset = offset;
    }

    export let delayShow = false;
    if(delayShow && typeof delayShow === "number"){
        options.delayShow = delayShow;
    }

    export let delayHide = false;
    if(delayHide && typeof delayHide === "number"){
        options.delayHide = delayHide;
    }

    export let boundary = false;
    if(boundary){
        options.boundary = boundary;
    }
    export let boundaryAlign = false;
    if(boundaryAlign){
        options.boundaryAlign = boundaryAlign;
    }

    export let flip = true;
    const flips = [true,false,"x","y"];
    if(flips.includes(flip)){
        options.flip = flip;
    }

    let dropdownElem;
    $: if(dropdownElem) {
        uikit.dropdown(dropdownElem, options);
    }

    let _class;
    export {_class as class};
</script>

<slot name="handle">
    <Button>
        🖖
    </Button>
</slot>
<div bind:this={dropdownElem} on:toggle on:beforeshow on:show on:shown on:beforehide on:hide on:hidden on:stack class={_class}>
    <slot>
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="/">Active</a></li>
            <li><a href="/">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="/">Item</a></li>
            <li><a href="/">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="/">Item</a></li>
        </ul>
    </slot>
</div>