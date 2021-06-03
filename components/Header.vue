<template>
  <div>
    <div
      class="overflow-hidden duration-500"
      :class="isMenuOpened ? 'max-h-screen' : 'max-h-0'"
    >
      <div
        class="
          container
          mx-auto
          flex flex-col-reverse
          md:flex-row
          justify-start
          md:justify-between
          px-5
          py-8
        "
      >
        <div class="w-full md:w-2/6">
          <p class="mt-2">
            {{ $store.state.data.header.note }}
          </p>
          <a
            class="font-medium"
            :href="`mailto:${$store.state.data.header.email}`"
            >{{ $store.state.data.header.email }}</a
          >
        </div>
        <div class="w-full md:w-1/6 mb-8 md:mb-0 md:text-right">
          <ul class="mt-2">
            <li
              v-for="(item, i) in $store.state.data.header.navigation"
              :key="i"
            >
              <a
                v-if="item.path === 'mailto:hrdtr@cognitive.id'"
                :href="item.path"
                >{{ item.name }}</a
              >
              <NuxtLink v-else :to="item.path">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-white dark:bg-gray-900">
      <div
        class="
          container
          mx-auto
          flex flex-row
          items-center
          justify-between
          px-5
          py-8
        "
      >
        <NuxtLink
          to="/"
          class="
            bg-gray-900
            dark:bg-white
            text-gray-100
            dark:text-gray-800
            text-2xl
            font-semibold
            px-3
            py-1
          "
        >
          H
        </NuxtLink>
        <HeaderMenuIcon v-model="isMenuOpened" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpened: false,
    }
  },
}
</script>
