<script>
    import uikit from 'uikit';
    import {Inline, Button, uk_width} from "..";
    // uikit component options
    export let pos = "bottom-center";
    const positions = ["bottom-left", "bottom-center", "bottom-right", "bottom-justify", "top-left", "top-center", "top-right", "top-justify", "left-top", "left-center", "left-bottom", "right-top", "right-center", "right-bottom",];
    if(!positions.includes(pos)) pos = "bottom-center";

    export let mode = "click";
    const modes = ["click", "hover"];
    if(!modes.includes(mode)) mode = "click";

    export let flip = true;
    const flips = [true, false, "x", "y"];
    if(!flips.includes(flip)) flip = true;


    export let delayShow = 0;
    export let delayHide = 800;
    export let offset = 0;
    export let animation = false;
    export let duration = 200;
    export let boundary = "body";
    export let boundaryAlign = true;
    export let wait = false;
    export let block = false;

    export let width;

    export let padsize = "normal";
    const padsizings = ["normal", "small", "large", "remove"];
    padsize = !padsizings.includes(padsize)
            ? ""
            : padsize === "normal"
                    ? ""
                    : "-" + padsize;


    const id = Math.floor(Math.random() * 10000);

    let element;

    $: if (element) {
        const options = {
            pos, flip, offset, animation, duration, boundary, mode,
            "delay-show": delayShow, "delay-hide": delayHide, "boundary-align": boundaryAlign
        };
        uikit.drop(element, options);
    }

    export const hide = (delay) => uikit.drop(element).hide(delay);
    export const show = () => uikit.drop(element).show();

    let _class = "";
    export {_class as class}


</script>


<Inline>
    <slot name="full-button">
        <Button class={`uk-button uk-button-default mf-drop-${id} ${block ? "uk-display-block" : ""}`} disabled={wait}>
            <slot name="button">Drop</slot>
        </Button>
    </slot>

    <div bind:this={element} class={`uk-card uk-card-default uk-padding${padsize} ${_class}`} on:toggle on:beforeshow
         on:show on:shown on:beforehide on:hide on:hidden on:stack use:uk_width={width}>

        <slot/>
    </div>
</Inline>

<style>
    .uk-card {
        max-width: unset;
    }

    .uk-card {
        z-index: 1000000;
    }
</style>