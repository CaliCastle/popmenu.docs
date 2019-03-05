<template>
    <ParentLayout></ParentLayout>
</template>

<script>
  import ParentLayout from '@parent-theme/layouts/Layout.vue';

  export default {
    components: {ParentLayout}
  }
</script>

<style>
    html {
        line-height: 1.15;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
        font-family: Saira, Noto Sans SC, -apple-system, sans-serif;
        background: #fff;
    }

    .home .hero .action-button {
        border-radius: 14px;
    }
</style>