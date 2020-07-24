<script>
    import {Button, FilterControl, Flex, Filter, Card} from "../../../src";

    export let props = {};
    export let items = 4;

    let filterBox;
</script>

<Filter {...props}>
    <div slot="controls" class="uk-margin-large-bottom">
        <FilterControl selector="">
            <Button width="1-1" style="secondary" text='All'/>
        </FilterControl>
        <hr/>
        <Flex width="1-1">
            <FilterControl selector=".a">
                <Button width="expand" style="default" text='"A"'/>
            </FilterControl>
            <FilterControl selector=".b">
                <Button width="expand" style="primary" text='"B"'/>
            </FilterControl>
            <FilterControl selector=".c">
                <Button width="expand" style="default" text='"C"'/>
            </FilterControl>
        </Flex>
        <hr/>
        <Flex width="1-1">
            <FilterControl selector=".uk-card-primary">
                <Button width="expand" style="default" text='Blue'/>
            </FilterControl>
            <FilterControl selector=".uk-card-secondary">
                <Button width="expand" style="primary" text='Grey'/>
            </FilterControl>
        </Flex>
        <hr/>
    </div>
    <!-- TODO: Make Grid -->
    <Flex bind:element={filterBox} justification="center" class="uk-child-width-1-3" wrap="wrap">
        {#each Array(items) as item, i}
        <!-- Note that this logic exists to make cards "different"                          -->
            <!-- The use of class here is arbitrary, data attributes, ids, can also be used.    -->
            <Card color={
    i%2===0 ? "primary" : "secondary"
            } class={
    i%3===0 ? "a" : i%3===1 ? "b" : "c"
        }>
                {#if i%3===0}
                    "A" Element
                {:else if i%3===1}
                    "B" Element
                {:else if i%3===2}
                    "C" Element
                {/if}
            </Card>
        {/each}
    </Flex>
</Filter>