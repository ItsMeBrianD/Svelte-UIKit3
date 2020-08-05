<script context="module">
    const modes = ["hover", "click"];
    const positions = [
        "bottom-left", "bottom-center", "bottom-right", "bottom-justify",
        "top-left", "top-center", "top-right", "top-justify",
        "left-top", "left-center", "left-bottom",
        "right-top", "right-center", "right-bottom"
    ];
    const flips = [true, false, "x", "y"];
    export const dropdownOptions = {
        modes,
        positions,
        flips
    }
</script>

<script>
    import Button from "../Button/Button.svelte";
    import uikit from 'uikit';

    let options = {};

    export let mode = "";
    export let position = "";
    export let offset = false;
    export let delayShow = false;
    export let delayHide = false;
    export let boundary = false;
    export let boundaryAlign = false;
    export let flip = true;

    $: {
        if (modes.includes(mode.toLowerCase())) {
            options.mode = mode.toLowerCase();
        }
        if (positions.includes(position.toLowerCase())) {
            options.pos = position.toLowerCase();
        }
        if (offset && typeof offset === "number") {
            options.offset = offset;
        }
        if (delayShow && typeof delayShow === "number") {
            options.delayShow = delayShow;
        }
        if (delayHide && typeof delayHide === "number") {
            options.delayHide = delayHide;
        }
        if (boundary) {
            options.boundary = boundary;
        }
        if (boundaryAlign) {
            options.boundaryAlign = boundaryAlign;
        }
        options = options;
    }


    if (flips.includes(flip)) {
        options.flip = flip;
    }

    let dropdownElem;
    $: if (dropdownElem) {
        uikit.dropdown(dropdownElem, options);
    }

    let _class = "";
    export {_class as class};
</script>

<slot name="handle">
    <Button>
        🖖
    </Button>
</slot>
<div bind:this={dropdownElem} on:toggle on:beforeshow on:show on:shown on:beforehide on:hide on:hidden on:stack
     class={_class}>
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