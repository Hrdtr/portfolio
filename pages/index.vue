<template>
  <div>
    <Hero @onWorksButtonClick="scrollToWorks" />
    <Works :data="works" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    try {
      const works = await $content('works').fetch()
      return {
        works,
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
  data() {
    return {
      isMenuOpened: false,
    }
  },
  methods: {
    scrollToWorks() {
      const el = this.$el.getElementsByClassName('works')[0]

      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
}
</script>
