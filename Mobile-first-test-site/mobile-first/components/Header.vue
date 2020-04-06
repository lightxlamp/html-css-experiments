<template>

    <header class="header">
        
        <div class="button-or-menu">
        
            <!-- <button class="nav-btn"></button> -->
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <ul class="nav">
                <li class="nav__item">
                    <a href="#" class="nav__link nav__link--active">Home</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">Discovery</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">Photos</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">Contact</a>
                </li>
            </ul>

        </div>

        <div class="logo logo--header">Logo</div>

        <div class="logged-in-user">
            <img src="../assets/img/blonde_girl.jpg" alt="User photo" class="logged-in-user__photo" />
        </div>
    </header>
</template>

<style lang="scss">
.navigation  {
    &__checkbox {
        display: none;
    }

    &__button {
        background-color: $color-secondary;
        height: 2rem;
        width: 1.7rem;
        //text-align: center; // to center hamburger menu icons
        cursor: pointer;
        display: block;

        @media only screen and (min-width: $bp-tablet) {
            display: none;
        }
    }

    // Functionality
    &__checkbox:checked ~ &__background {
        transform: scale(80);
    }
    
    &__checkbox:checked ~ &__nav {
        opacity: 100; // I've made mistake. But it still works.. 100 instead of 1
        width: 100%;
    }

    // Icon
    &__icon {
        position: relative;
        margin-top: 1rem;

        & {
            width: 1rem;
        }

        &,  
        &::before,
        &::after {
            height: 2px; // width of hamburger menu single line
            background-color: $color-black;
            display: inline-block;
        }

        &::before,
        &::after { // in order to appear on the page ::before and ::after need their "content" property be defined
            width: 1.6rem;
            content: "";
            position: absolute;
            left: 0;
            transition: all .2s;
        }

        &::before {
            top: -.6rem;
            //The ::before pseudo-element can be used to insert some content before the content of an element.
            //EG: inserting an image before the content of each <h1> element:
        }  
        
        &::after {
            top: .6rem;
        }
    }

    &__checkbox:checked + &__button &__icon {
        background-color: transparent;
    }  
    
    &__checkbox:checked + &__button &__icon::before {
        top: 0;
        //transform: rotate(45deg); 
        transform: rotate(135deg); 
    }   
    // Don't think that u have to able to code this really quickly like I am doing here, because that not a reality
    &__checkbox:checked + &__button &__icon::after {
        top: 0;
        //transform: rotate(-45deg);
        transform: rotate(-135deg);
    }
}

    
</style>
