<template>
    <div class="block-head">

        <div class="block-head__title">{{ title }}</div>

        <div class="block-head__navigation">
            <div class="items-navigation">
            <div class="items-navigation__left-arrow"></div>
            <div class="items-navigation__right-arrow"></div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'SectionTitleAndNavigation',
  props: {
    // parentData: Object,
    // stringProp: String,
    title: String,
  }
}
</script>