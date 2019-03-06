<template>
    <div class="content page-footer">
        <p>Copyright © {{ new Date().getFullYear() }} <a href="https://calicastle.com" target="_blank">Cali Castle</a> | MIT Licensed</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.page-footer
    padding-top 0.5rem !important
    color hsl(5%, 5%, 5%)
    text-align center
    opacity 0.6

    a
        color inherit
</style>