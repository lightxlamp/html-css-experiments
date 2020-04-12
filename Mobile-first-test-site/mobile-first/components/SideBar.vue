<template>
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
</template>

<script>
import SocialNetworks from "~/components/SocialNetworks";
export default {
    data: () => ({
        isSideBarVisible: false
    }),
    components: {
      SocialNetworks
    }
}
</script>
