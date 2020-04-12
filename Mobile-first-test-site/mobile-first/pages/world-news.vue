<template>
  <div class="container-world-news-page">
    <Header />
    <div class="container-world-news-page-top">
        <div class="breadcrumbs">
            <div class="back-btn"></div>
            <div class="path-and-settings">
                <div class="path-and-settings__icon"></div>
                <div class="path-and-settings__path">
                    <span class="path-and-settings__path--root"> Story &nbsp; / &nbsp;</span>
                    <span class="path-and-settings__path--page"> World News </span>
                </div>
            </div>
            <div class="breadcrumbs__settings-icon-wrapper">
                <div class="breadcrumbs__settings-icon"></div>
            </div>
        </div>

        <section class="search-news">
            <div class="search-news-main">
                <div class="search-news-main__title">World news</div>
                <div class="search-news-main__line"></div>
                <div class="search-news-main__text">Stay informed without overdosing on the news vix id nullam detracto vidit.</div>
                <div class="author">
                    <img src="../assets/img/boy.jpg" alt="Jonathan Walker" class="author__photo" />
                </div>
            </div>
            <div class="search-news-fields">
                <div class="input-box">
                    <div class="input-box__title">Select a date</div>
                    <input class="input-box__field" type="text" placeholder="Select..."/>
                    <div class="input-box__icon input-box__icon--down"></div>
                </div>  
                
                <div class="input-box">
                    <div class="input-box__title">Enter the first keywords</div>
                    <input class="input-box__field" type="search"/>
                </div>

                <div class="search-news-fields__btn btn">Search</div>
            </div>
        </section>

        <section class="three-columns-section">
            <div class="three-columns-section__col-1">
                <div class="author author--story">
                    <img
                    src="../assets/img/boy.jpg"
                    alt="Jonathan Walker"
                    class="author__photo author__photo--story"
                    />
                </div>

                <h2>Phasellus eu nulla malesuada, luctus diam.</h2>
            </div>
            <div class="three-columns-section__col-2">Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit, 
                condimentum mauris convallis cras iaculis at tempus dignissim arcu, sollicitudin posuere porta non 
                tellus dictumst penatibus. Commodo ante quis senectus quisque semper dapibus porttitor libero lacus
                 hendrerit volutpat, in cras a himenaeos leo ridiculus taciti ultrices cursus mattis. Tempor mi 
                 fames senectus taciti 
            </div>
            <div class="three-columns-section__col-3">
                himenaeos leo ridiculus taciti ultrices cursus mattis. Tempor mi fames senectus taciti condimentum lacinia ante, 
                non netus rhoncus eget habitant sollicitudin, cubilia luctus consequat pharetra natoque porta. Sodales tristique
                habitasse massa ultrices ligula semper interdum dictumst.
                <div class="date-time-author">
                    <div class="date-time-author__icon"></div>
                    <div class="date-time-author__time">2m ago</div>
                </div>
            </div>
        </section>

        <section class="image-and-two-text-block-section">
            <div class="image-and-two-text-block-section__col-1"></div>
            <div class="image-and-two-text-block-section__col-2">
                Lorem ipsum dolor sit amet, consectetur opikhfkseo adipisifwcing elit, sed do eiusmod temporeop 
                iodkjnl incididunt ut labore et dolore roipi magnaropi aliquia. Ut enim ad minim veeniam, 
                quiswepo nostruklad uio exercitation ullamco laboris nisi ut aliquip ex eawiopl commodo consequat. 
                Duis ropil aute irure dolor inop reprehenderit in tufpoyiopy voluptate velit esse plijxn 
                cillum dolore eu fugiatupi nulla parieratur. Excepteuri sint. <br /><br /> Culpa qui officia deserunt mollit 
                anim id estio ropiluyl laborum. Sed ut perspiciatis unde omnis iste natuswi error sit voluptartem 
                accusantium polu doloremquep laudantium, totam rem aperiam, eaque ipsa.
            </div>
            <div class="image-and-two-text-block-section__col-3">In hac habitasse platea dictumst. Sed nec 
                venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus.</div>
        </section>

        <section class="pagination">
            <ul class="pagination__ul">
                <li class="pagination__li pagination__li--active">01</li>
                <li class="pagination__li">02</li>
                <li class="pagination__li">03</li>
                <li class="pagination__li">04</li>
                <li class="pagination__li">05</li>
                <li class="pagination__li">06</li>
                <li class="pagination__li pagination__li--more"></li>
            </ul>
        </section>
    </div>

    <Footer />
  </div>
</template>


<script>
import ArticlesList from "~/components/ArticlesList";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import MainArticle from "~/components/MainArticle";
import SectionTitleAndNavigation from "~/components/SectionTitleAndNavigation";
import SideBar from "~/components/SideBar";

import { mapMutations } from "vuex";

export default {
  components: {
    ArticlesList,
    Footer,
    Header,
    MainArticle,
    SectionTitleAndNavigation,
    SideBar
  },

  computed: {
    happening_now_articles_column_1() {
      return this.$store.state.happening_now_articles_column_1;
    },
    happening_now_articles_column_2() {
      return this.$store.state.happening_now_articles_column_2;
    },
    more_news_articles() {
      return this.$store.state.more_news_articles;
    },
    trending_articles() {
      return this.$store.state.trending_articles;
    }
  },

  head: {
    title: "My first mobile-first web site :P"
  }
};
</script>