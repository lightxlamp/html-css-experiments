<template>
    <div class="happening-now__column-1">
        <div class="article article--happening-now" v-for="article in happening_now_articles_column_1" :key="article.fileName">
            <div class="article__image">
                <img
                :src="require(`../assets/img/${article.imgName}.jpg`)"
                :alt="article.imgAlt"
                class="article__image article__image--happening-now"
                />
            </div>

            <div class="article__wrap article__wrap--happening-now">
            <div class="article__category article__category--happening-now">{{article.category}}</div>
            <div class="article__info article__info--happening-now">
            <div class="article__title article__title--happening-now">{{article.title}}/div>
            <div
                class="article__text article__text--happening-now"
                >{{article.text}}
            </div>
            <div class="date-time date-time--happening-now">
                <div class="date-time__icon"></div>
                <div class="date-time__time">{{article.dateTime}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex' 

export default {
    computed: {
        happening_now_articles () {
            console.log(this.$store.state.happening_now_articles);
            return this.$store.state.happening_now_articles;
        }
    }
}
</script>