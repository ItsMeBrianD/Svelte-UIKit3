# Article
> [UIKit documentation](https://getuikit.com/docs/Article)

> [Storybook](https://0c370t.github.io/Svelte-UIKit3/docs/?path=/story/Article--main)
## Usage

#### Props
| name            | type  | description                                  | see also                                          |
|-----------------|-------|----------------------------------------------|---------------------------------------------------|
| title           | str   | Title of article, if title slot not used     |                                                   |
| meta            | str   | Metadata for article, if slot not used       |                                                   |
| lead            | str   | Lead Paragraph for article, if slot not used |                                                   |
| content         | str   | Content of article, if slot not used         |                                                   |
| backgroundColor | enum  | Background color of article                  | [../helpers/background.js](../helpers#background) |
| width           | enum  | Width of article                             | [../helpers/width.js](../helpers#width)           |

#### Slots

| name    | type | inside                 | description                               |
|---------|------|------------------------|-------------------------------------------|
| title   | any  | h2.uk-article-title    | Title content, overrides prop             |
| meta    | any  | p.uk-article-meta      | Metadata, overrides prop                  |
| lead    | any  | p.uk-text-lead         | Lead Paragraph, overrides prop            |
| default | any  | root element (article) | Article Content, overrides prop (content) |

#### Real Example
> Note that all props are default values

##### Slot Usage
```html
<script>
    import {Article} from 'svelte-uikit3';

</script>

<Article width={""} backgroundColor={"default"}>
    <h3 slot="header">My Article</h3>
    <span slot="meta">Brian Donald | Jan 1, 1970</span>
    <span slot="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid exercitationem fuga nam omnis qui? Alias aperiam, consequuntur, eaque est eveniet inventore itaque laborum minus nam neque officia recusandae rerum.</span>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid exercitationem fuga nam omnis qui? Alias aperiam, consequuntur, eaque est eveniet inventore itaque laborum minus nam neque officia recusandae rerum.    
    </p>
</Article>

```

##### Prop Usage
```html
<script>
    import {Article} from 'svelte-uikit3';
    let header = "My Article";
    let meta = "Brian Donald |  Jan 1, 1970";
    let lead = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid exercitationem fuga nam omnis qui? Alias aperiam, consequuntur, eaque est eveniet inventore itaque laborum minus nam neque officia recusandae rerum."
    let content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid exercitationem fuga nam omnis qui? Alias aperiam, consequuntur, eaque est eveniet inventore itaque laborum minus nam neque officia recusandae rerum."
</script>

<Article width={""} backgroundColor={"default"}
         {header} {meta} {lead} {content} /> 

```