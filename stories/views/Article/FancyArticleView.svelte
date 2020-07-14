<script>
    import {Article, Button} from "../../../src";
    export let width;
    export let backgroundColor;
</script>

<Article {width} {backgroundColor}>
    <div slot="header"
         class="article-hero uk-height-medium uk-background-cover uk-position-relative uk-flex uk-flex-middle uk-flex-center">
        <h2 class="uk-article-title uk-text-secondary uk-overlay uk-overlay-default uk-width-1-1 uk-text-center">
            Hero Article
        </h2>
    </div>
    <div slot="meta" class="uk-flex uk-flex-center">
        <span class="uk-padding-small">Brian Donald</span>
        <span class="uk-padding-small">Jan 1, 1970</span>
    </div>
    <div class="uk-padding">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad distinctio doloribus ducimus eligendi est, et,
            facere fugiat id magnam magni minima minus odio optio quaerat quibusdam quis quisquam. Porro, quidem.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam asperiores aut blanditiis commodi
            dolore, eligendi explicabo illum minima, nam nemo nostrum nulla numquam officia quae quidem ratione sit
            voluptatum?
        </p>

        <Button style="primary" width="1-1">
            Read More
        </Button>
    </div>
</Article>

<style>
    .article-hero {
        background-image: url("https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    }
</style>