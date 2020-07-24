<script>

    import {onMount} from 'svelte';
    import uikit from 'uikit';
    export let contentElement = false;
    let element, _contentElement;


    onMount(() => {
        try {
            console.log(contentElement);
            if(contentElement){
                uikit.filter(element, {target: contentElement});
            } else {
                uikit.filter(element, {target: _contentElement});
            }
        } catch (e) {
            console.log(e);
        }
    })
</script>


<div bind:this={element}>

    <slot name="controls"/>

    <div bind:this={_contentElement}>
        <slot/>
    </div>
</div>

<style>
    div{
        display:contents;
    }
</style>