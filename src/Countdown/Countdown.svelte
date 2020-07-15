<script>
    import uikit from 'uikit';

    export let date;
    export let separator = false;

    export let showDays = true;
    export let dayLabel = "days";
    export let showHours = true;
    export let hourLabel = "hours";
    export let showMinutes = true;
    export let minutesLabel = "minutes";
    export let showSeconds = true;
    export let secondsLabel = "seconds";

    let element;

    $: if (element) try{uikit.countdown(element, {date: new Date(date).toISOString()});}catch{}
</script>

<div bind:this={element} class="uk-flex">
    {#if showDays}
        <div class="uk-flex uk-flex-column uk-flex-middle uk-margin-small-right">
            <span class="uk-countdown-number uk-countdown-days"></span>
            {#if dayLabel} <span class="uk-countdown-label">{dayLabel}</span> {/if}
        </div>
        {#if separator} <span class="uk-countdown-separator uk-margin-small-right">{separator}</span> {/if}
    {/if}
    {#if showHours}
        <div class="uk-flex uk-flex-column uk-flex-middle uk-margin-small-right">
            <span class="uk-countdown-number uk-countdown-hours"></span>
            {#if hourLabel} <span class="uk-countdown-label">{hourLabel}</span> {/if}
        </div>
        {#if separator} <span class="uk-countdown-separator uk-margin-small-right">{separator}</span> {/if}
    {/if}
    {#if showMinutes}
        <div class="uk-flex uk-flex-column uk-flex-middle uk-margin-small-right">
            <span class="uk-countdown-number uk-countdown-minutes"></span>
            {#if minutesLabel} <span class="uk-countdown-label">{minutesLabel}</span> {/if}
        </div>
        {#if separator} <span class="uk-countdown-separator uk-margin-small-right">{separator}</span> {/if}
    {/if}
    {#if showSeconds}
        <div class="uk-flex uk-flex-column uk-flex-middle uk-margin-small-right">
            <span class="uk-countdown-number uk-countdown-seconds"></span>
            {#if secondsLabel} <span class="uk-countdown-label">{secondsLabel}</span> {/if}
        </div>
    {/if}

</div>

