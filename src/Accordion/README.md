# Accordion
> [UIKit documentation](https://getuikit.com/docs/accordion)

> [Storybook](https://0c370t.github.io/Svelte-UIKit3/docs/?path=/story/accordion--main)
## Usage

#### Props
| name        | type  | description                  | see also                        |
|-------------|-------|------------------------------|---------------------------------|
| animate     | bool  | Animate open/close of items  |                                 |
| collapsible | bool  | Allow closing all items      |                                 |
| duration    | int   | Animation Duration           |                                 |
| multiple    | bool  | Allow opening multiple items |                                 |
| offset      | num   | Offset of item from title    |                                 |
| width       | enum  | Width of the accordion       | [helpers/width.js](../helpers#width) |

#### Slots

| name    | type           | inside              | description                                 |
|---------|----------------|---------------------|---------------------------------------------|
| default | AccordionItems | root element (ul)   | AccordionItems that belong inside Accordion |

#### Real Example
> Note that all props are default values
```html
<script>
    import {Accordion, AccordionItem} from 'svelte-uikit3';
</script>

<Accordion  animate={true} collapsible={true} duration={200}
            multiple={false} offset={0} width={""}>
    <AccordionItem title={"Accordion Item"}>
        <p>
            This is an item in my accordion
        </p>
    </AccordionItem>
</Accordion>
```

# AccordionItem
This component should only exist within `Accordion`

## Usage

#### Props
| name        | type  | description                  | see also                        |
|-------------|-------|------------------------------|---------------------------------|
| title       | str   | Title of accordion item      |

#### Slots

| name    | type  | inside                     | description                                 |
|---------|-------|----------------------------|---------------------------------------------|
| default | any   | div.uk-accordion-content   | Content that is unfurled by the accordion   |
