<template>
<div class="container" id="container">
  <div class="side-bar" v-show="isSideBarVisible">
    <div class="side-bar__body">
      <div class="logo logo--red">Logo</div>

      <nav class="side-nav">
        <div class="side-nav__item">
          <div class="side-nav__home"></div>
          <a href="#" class="nav__link nav__link--active side-nav__link">Home</a>
        </div>

        <div class="side-nav__item">
          <div class="side-nav__discovery"></div>
          <a href="#" class="nav__link side-nav__link">Discovery</a>
        </div>

        <div class="side-nav__item">
          <div class="side-nav__photos"></div>
          <a href="#" class="nav__link side-nav__link">Photos</a>
        </div>

        <div class="side-nav__item">
          <div class="side-nav__contact"></div>
          <a href="#" class="nav__link side-nav__link">Contact</a>
        </div>

        <div class="side-nav__item">
          <div class="side-nav__user logged-in-user">
            <img src="../assets/img/blonde_girl.jpg" alt="User photo" class="logged-in-user__photo" />
          </div>
          <a href="#" class="nav__link side-nav__link">Profile</a>
        </div>

        <!-- <div class="side-nav__icon-box">
                      <svg class="side-nav__icon">
                          <use xlink:href="img/sprite.svg#icon-home"></use>
                      </svg>
        </div>-->
      </nav>
    </div>

    <div class="side-bar__footer">
      <div class="side-bar__footer-links">
        <ul class="nav nav--side-bar">
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">About</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">Help</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">Terms</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar nmb">Guidlines</a>
          </li>
        </ul>

        <ul class="nav nav--side-bar">
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">Testimonials</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">Advertise</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">Integrations</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar nmb">Careers</a>
          </li>
        </ul>
      </div>
      <div class="side-bar__footer-social">
        <SocialNetworks />
      </div>
    </div>
  </div>

  <Header />

  <section class="main-article-and-news">
    <div class="main-article">
      <div class="main-article__category" v-on:click="isSideBarVisible = !isSideBarVisible">World News</div>
      <div class="main-article__title">Amazing places in America to visit.</div>
      <div class="main-article__text">
        For some reason — this country, this city, this neighborhood, this
        particular street — is the place you are living a majority of your life in.
      </div>
      <button class="btn main-article__btn">Learn more</button>
    </div>

    <div class="news">
      <SectionTitleAndNavigation title="More news" />

      <div class="divide-line"></div>

      <div class="news__content">
        <div class="article">
          <div class="article__category">Travel</div>
          <div class="article__title">Article Title</div>
          <div class="article__text">
            It's that time of the day again. Blog time. Time to catch up on
            another 24 hours of similar news.
          </div>
          <div class="date-time">
            <div class="date-time__icon"></div>
            <div class="date-time__time">2m ago</div>
          </div>
        </div>

        <div class="article">
          <div class="article__category">Technology</div>
          <div class="article__title">Article Title</div>
          <div class="article__text">
            In the same place, sitting in the same chair perhaps we think we
            ought to sleep in Gabby tonight. I have lost a sock in the washing.
          </div>
          <div class="date-time">
            <div class="date-time__icon"></div>
            <!-- It is always empty.. Do we need it? :P ::before? -->
            <div class="date-time__time">1h ago</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <body class="middle-content">
    
    <section class="trending">
      <SectionTitleAndNavigation title="Trending" />
      <ArticlesList :articles="trending_articles" modifier="trending" />
    </section>

    <section class="happening-now">
      <SectionTitleAndNavigation title="Happening Now" />

      <div class="happening-now__content-wrapper">
        <div class="happening-now__column-1">
         
          <div class="article article--happening-now">
            <div class="article__image">
              <img
                src="../assets/img/bridge.jpg"
                alt="golden gate bridge"
                class="article__image article__image--happening-now"
              />
            </div>
            <div class="article__wrap article__wrap--happening-now">
              <div class="article__category article__category--happening-now">City</div>
              <div class="article__info article__info--happening-now">
                <div class="article__title article__title--happening-now">Golden Gate Bridge Facts</div>
                <div
                  class="article__text article__text--happening-now"
                >When the Golden Gate Bridge Flattened by 7 Feet—and Other Facts About the San Francisco Icon.</div>
                <div class="date-time date-time--happening-now">
                  <div class="date-time__icon"></div>
                  <div class="date-time__time">2m ago</div>
                </div>
              </div>
            </div>
          </div>

          <div class="article article--happening-now">
            <div class="article__image">
              <img
                src="../assets/img/forest.jpg"
                alt="Bridge"
                class="article__image article__image--happening-now"
              />
            </div>
            <div class="article__wrap article__wrap--happening-now">
              <div class="article__category article__category--happening-now">Travel</div>
              <div class="article__info article__info--happening-now">
                <div
                  class="article__title article__title--happening-now"
                >We need to safeguard our forests</div>
                <div
                  class="article__text article__text--happening-now"
                >The importance of forests cannot be underestimated. We depend on forests for our survival, from the air we breathe to the wood we use.</div>
                <div class="date-time date-time--happening-now">
                  <div class="date-time__icon"></div>
                  <div class="date-time__time">2m ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="happening-now__column-2">
          <div class="article article--trending">
            <div class="article__image">
              <img
                src="../assets/img/elephant.jpg"
                alt="Elephants"
                class="article__image article__image--trending"
              />
            </div>
            <div class="article__wrap article__wrap--trending">
              <div class="article__category article__category--trending">Travel</div>
              <div class="article__title article__title--trending">Desert Elephants</div>
              <div
                class="article__text article__text--trending"
              >Desert-adapted elephants are not a distinct species of elephant but are African bush elephants</div>
              <div class="date-time">
                <div class="date-time__icon"></div>
                <div class="date-time__time">
                  1h ago by
                  <span class="article__author">Worldnews</span>
                </div>
              </div>
            </div>
          </div>

          <div class="article article--trending">
            <div class="article__image">
              <img
                src="../assets/img/parrot_small.jpg"
                alt="Green lake"
                class="article__image article__image--trending"
              />
            </div>
            <div class="article__wrap--trending">
              <div class="article__category article__category--trending">Travel</div>
              <div class="article__title article__title--trending">Jungle Parrots</div>
              <div
                class="article__text article__text--trending"
              >So where is the circling jungle parrot? Well, it turns out the bird is flying in a small circle east of the Sky Platform</div>
              <div class="date-time">
                <div class="date-time__icon"></div>
                <div class="date-time__time">
                  1h ago by
                  <span class="article__author">Days</span>
                </div>
              </div>
            </div>
          </div>

          <div class="article article--trending">
            <div class="article__image">
              <img
                src="../assets/img/mountain_road.jpg"
                alt="Mountain Road"
                class="article__image article__image--trending"
              />
            </div>

            <div class="article__wrap--trending">
              <div class="article__category article__category--trending">Travel</div>
              <div class="article__title article__title--trending">Highest roads of Kyrgyzstan</div>
              <div
                class="article__text article__text--trending"
              >Kyrgyzstan is a high mountain country located in Central Asia. Over ninety percent of the country is mountainous territory</div>
              <div class="date-time">
                <div class="date-time__icon"></div>
                <div class="date-time__time">
                  1h ago by
                  <span class="article__author">Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>

  <footer class="footer">
    <div class="footer__column-1">
      <div class="logo logo--white">Logo</div>
      <div class="footer__nav">
        <ul class="nav nav--footer">
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Home</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Discovery</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Photos</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Contact</a>
          </li>
        </ul>

        <ul class="nav nav--footer">
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">About</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Help</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Terms</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Guidlines</a>
          </li>
        </ul>

        <ul class="nav nav--footer">
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Testimonials</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Advertise</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Integrations</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--footer">Careers</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer__column-2">
      <div class="email-box">
        <div class="form-group">
          <input class="form-field" type="email" placeholder="Email" />
          <!-- <div class="email-box__icon"></div> -->
          <!-- <span>ICON</span> -->
          <!-- <span class="email-box__icon"></span> -->
        </div>
        <p class="email-box__text">Stay in touch with us for the freshest products!</p>
      </div>

      <SocialNetworks />
    </div>
  </footer>
</div>
</template>


<script>
import Header from "~/components/Header";
import SectionTitleAndNavigation from "~/components/SectionTitleAndNavigation";
import Article from "~/components/Article";
import ArticlesList from "~/components/ArticlesList";
import SocialNetworks from "~/components/SocialNetworks";

import { mapMutations } from 'vuex' 

export default {
  components: {
    Header,
    SectionTitleAndNavigation,
    Article,
    ArticlesList,
    SocialNetworks
  },
  head: {
    title: 'My first mobile-first web site :P'
  },

  computed: {
      trending_articles () {
          console.log(this.$store.state.trending_articles);
          return this.$store.state.trending_articles;
      }
  },

  data: () => ({
    isSideBarVisible: false
  }),
};

</script>