<template>
    <i :class="[ 'fa' + type.split('')[0], 'fa-' + name ]"></i>
</template>

<script>
    export default {
      props: {
        name: String,
        type: {
          type: String,
          default: 'solid'
        }
      }
    }
</script>