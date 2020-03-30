<template>
  <div class="container">
      <!-- <header /> Потом можно будет вынести в компоненты все-->
      <header class="header grid">
        <div class="nav">
            <button class="nav__btn">|||</button>
              <!-- <ul class="nav">
                <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
                <li class="nav__item"><a href="#" class="nav__link">Discovery</a></li>
                <li class="nav__item"><a href="#" class="nav__link">Photos</a></li>
                <li class="nav__item"><a href="#" class="nav__link">Contact</a></li>
              </ul> -->
        </div>
        <!-- Photo by M. R. on Unsplash @wherearemyshoesdude -->

        <div class="header__logo">Logo</div>
    
        <div class="logged-in-user"> 
          <img src="../assets/img/user-s.jpeg" alt="User photo" class="logged-in-user__photo">
        </div>

      </header>

      <section class="main-article grid">
        <div class="main-article__category">World News</div>
        <div class="main-article__title">Amazing places in America to visit.</div>
        <div class="main-article__text">For some reason — this country, this city, this neighborhood, this
          particular street —  is the place you are living a majority of your life in.</div>
        <button class="btn main-article__btn">Learn more</button>
      </section>

      <section class="more-news grid">
        <div class="more-news__header">
          <div class="more-news__title">More news</div>
          <div class="more-news__nav-icons">Left/Right arrows</div>
        </div>

        <!-- <div class="more-news__article-1">
          .article-
        </div> -->
      </section>

      <section class="trending grid">
        
      </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
  .container {
    background-color: $color-secondary;
  }
</style>
