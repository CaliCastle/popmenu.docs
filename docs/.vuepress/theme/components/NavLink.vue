<template>
    <router-link
            class="nav-link"
            :class="{ 'has-icon': item.icon }"
            :to="link"
            v-if="!isExternal(link)"
            :exact="exact"
    >
        <Icon v-if="item.icon" :name="item.icon.name" :type="item.icon.type"></Icon>
        {{ item.text }}
    </router-link>
    <a
            v-else
            :href="link"
            class="nav-link external"
            :target="isMailto(link) || isTel(link) ? null : '_blank'"
            :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
    >
        <Icon v-if="item.icon" :name="item.icon.name" :type="item.icon.type"></Icon>
        {{ item.text }}
        <OutboundLink/>
    </a>
</template>

<script>
  import { isExternal, isMailto, isTel, ensureExt } from '@parent-theme/util'

  export default {
    props: {
      item: {
        required: true
      }
    },

    computed: {
      link () {
        return ensureExt(this.item.link)
      },

      exact () {
        if (this.$site.locales) {
          return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
        }
        return this.link === '/'
      }
    },

    methods: {
      isExternal,
      isMailto,
      isTel
    }
  }
</script>

<style lang="stylus">
.nav-link
    i
        margin-right 0.15rem
</style>