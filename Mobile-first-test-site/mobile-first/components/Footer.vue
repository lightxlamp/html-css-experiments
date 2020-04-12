<template>
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

      <div class="user-email-box">
        <div class="user-email-box__text-box">
          <input class="email-field" type="email" placeholder="Email" />
          <div class="user-email-box__icon-box"></div>
        </div>
        <p class="user-email-box__text">Stay in touch with us for the freshest products!</p>
      </div>

      <SocialNetworks />
    </div>
  </footer>
</template>

<script>
import SocialNetworks from "~/components/SocialNetworks";

import { mapMutations } from "vuex";

export default {
  components: {
    SocialNetworks
  }
};
</script>