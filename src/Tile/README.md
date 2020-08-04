# Tile
> [UIKit documentation](https://getuikit.com/docs/tile)

> [Storybook](https://0c370t.github.io/Svelte-UIKit3/docs/?path=/story/Tile--main)
## Usage

#### Props
| name        | type  | description                  | see also                                        |
|-------------|-------|------------------------------|-------------------------------------------------|
| style       | enum  | Background / Text color      | Module context of [Tile.svelte](./Tile.svelte)  |
| width       | enum  | Width of the tile            | [helpers/width.js](../helpers/)                 |  

#### Slots
| name    | type | inside                 | description                               |
|---------|------|------------------------|-------------------------------------------|
| default | any  | root element (div)     | Content of the tile                       |

#### Real Example
> Note that all props are default values
```html
<script>
    import {Tile} from 'svelte-uikit3';
</script>

<Tile style={""} width={""}>
    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
</Tile>
```
