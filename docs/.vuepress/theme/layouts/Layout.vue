<template>
    <ParentLayout>
        <Footer slot="page-bottom"/>
    </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import Footer from '@theme/components/Footer.vue'

export default {
    components: { ParentLayout, Footer }
}
</script>

<style lang="stylus">
html
    line-height 1.15
    -ms-text-size-adjust 100%
    -webkit-text-size-adjust 100%

body
    margin 0
    font-family Saira, Noto Sans SC, -apple-system, sans-serif
    background: #fff

.home .hero .action-button
    border-radius 1rem
</style>