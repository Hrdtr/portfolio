<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="postcss">
html,
body {
  @apply bg-white dark:bg-gray-900;
}

* {
  @apply text-gray-800 dark:text-gray-100 transition-all duration-200;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

/* Vue Cool LightBox button fix */
.cool-lightbox svg path,
.cool-lightbox svg rect {
  fill: #ffffff !important;
}

._section {
  @apply container mx-auto bg-white dark:bg-gray-900 my-32;
}
._btn {
  @apply px-4 py-2 rounded-md bg-gray-700 dark:bg-gray-200 hover:bg-gray-800 dark:hover:bg-gray-300 text-gray-100 dark:text-gray-800 focus:outline-none;
  &._btn-primary {
    @apply bg-indigo-600 dark:bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-700 text-gray-100 dark:text-gray-100;
  }
}

._tabs {
  @apply flex space-x-4;
}
._tab {
  @apply text-opacity-50 rounded-full cursor-pointer;
  &._tab-active {
    @apply text-opacity-100 bg-gray-100 dark:bg-gray-800 px-4;
  }
}
</style>
