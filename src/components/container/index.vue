<template>
  <div class="container_root">
    <section class="header">
      <slot name="title">
        <span>
          {{ title }}
        </span>
      </slot>
      <span>更多></span>
    </section>

    <section class="body">
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Container',

  props: {
    title: {
      type: String,
      default: '标题'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
