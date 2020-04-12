<template>
    <div :class="containerClass" v-if="articles.length">
        <div :class="articleClass" v-for="article in articles" :key="article.fileName">
    
            <div class="article__image" v-if="withImage == 'true'">
                <img
                    :src="require(`../assets/img/${article.imgName}.jpg`)"
                    :alt="article.imgAlt"
                    :class="articleImage"
                />
            </div>

            <div :class="articleWrap">
                <div :class="articleCategory">{{article.category}}</div>
                <div :class="articleInfo"> 
                    <div :class="articleTitle">{{article.title}}</div>
                    <div :class="articleText">{{article.text}}</div>
                    <div :class="dateTime">
                        <div class="date-time-author__icon"></div>
                        <div class="date-time-author__time">{{article.dateTime}}&nbsp;</div>
                        <span 
                            v-if="haveAuthor == 'true'"
                            class="date-time-author__author">{{article.author}}</span>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
// Переписать... Избавиться от this.modifier. И подставлять article.className (переименовать на article.prefix)
// Все есть жж. Сам запутался, что не оттуда префикс берется. И это к ошибкам привело
import { mapMutations } from 'vuex' 

export default {
    props: {
        articles: Array,
        modifier: String,
        containerClass: String,
        withImage: String,
        haveAuthor: String
    },
    computed: {
        articleClass() {
            return 'article article--' + this.modifier;
        },  
        articleWrap() {
            return 'article__wrap article__wrap--' + this.modifier;
        },
        articleCategory() {
            return 'article__category article__category--' + this.modifier;
        },
        articleTitle() { 
            return 'article__title article__title--' + this.modifier;
        }, 
        articleImage() { 
            return 'article__image article__image--' + this.modifier;
        }, 
        articleText() { 
            return 'article__text article__text--' + this.modifier;
        },   
        articleInfo() { 
            return 'article__info article__info--' + this.modifier;
        }, 
        dateTime() { 
            return 'date-time-author date-time-author--' + this.modifier;
        },
    }  
}
</script>