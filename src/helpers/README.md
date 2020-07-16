# Accordion
> [UIKit documentation](https://getuikit.com/docs/animation)

> [Storybook](https://0c370t.github.io/Svelte-UIKit3/docs/?path=/story/accordion--main)
## Usage

#### Props
| name        | type  | description                  |
|-------------|-------|------------------------------|
| animate     | bool  | Animate open/close of items  |
| collapsible | bool  | Allow closing all items      |
| duration    | int   | Animation Duration           |
| multiple    | bool  | Allow opening multiple items |
| offset      | num   | Offset of item from title    |
#### Real Example
Note that all props are default values
```html
<script>
    import {Accordion, AccordionItem} from 'svelte-uikit3';
</script>

<Accordion  animate={true} collapsible={true} duration={200}
            multiple={false} offset={0}>
    <AccordionItem title={"Accordion Item"}>
        <p>
            This is an item in my accordion
        </p>
    </AccordionItem>
</Accordion>
```

