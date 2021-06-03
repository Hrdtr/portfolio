<template>
  <div class="_section works">
    <div class="px-5 _tabs">
      <span
        v-for="(tab, i) in tabs"
        :key="i"
        class="_tab"
        :class="activeTab === i ? '_tab-active' : ''"
        @click="activeTab = i"
        >{{ tab }}</span
      >
    </div>
    <transition-group
      name="page"
      tag="div"
      class="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div
        v-for="work in works"
        :key="work.slug"
        class="
          relative
          aspect-w-1 aspect-h-1
          group
          border border-gray-100
          dark:border-gray-800
        "
      >
        <div
          class="absolute inset-0 bg-cover bg-no-repeat bg-center"
          :style="{
            backgroundImage:
              'url(' + $router.options.base + work.media[0].src + ')',
          }"
        ></div>
        <div
          class="
            absolute
            inset-0
            bg-black
            opacity-0
            group-hover:opacity-100
            bg-opacity-75
          "
        >
          <div
            class="
              flex flex-col
              items-center
              justify-center
              w-full
              h-full
              mt-4
              text-center
            "
          >
            <p class="text-white text-lg px-4">{{ work.name }}</p>
            <div class="mt-4">
              <button
                class="_btn _btn-primary"
                @click="$router.push(`/works/${work.slug}`)"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      activeTab: 0,
    }
  },
  computed: {
    tabs() {
      return [
        'All',
        ...new Set(
          this.data.map((d) => {
            return d.category
          })
        ),
      ]
    },
    works() {
      if (this.activeTab !== 0) {
        return this.data.filter((d) => d.category === this.tabs[this.activeTab])
      } else {
        return this.data
      }
    },
  },
}
</script>
