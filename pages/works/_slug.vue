<template>
  <section class="text-gray-800 dark:text-gray-100 body-font overflow-hidden">
    <ClientOnly>
      <CoolLightBox
        :items="data.media.filter((m) => !m.src.includes('cover'))"
        :index="index"
        @close="index = null"
      >
      </CoolLightBox>
    </ClientOnly>
    <div class="container px-5 py-20 mx-auto">
      <div
        class="
          grid grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-6
          w-full
        "
      >
        <div
          v-for="(image, imageIndex) in data.media.filter(
            (m) => !m.src.includes('cover')
          )"
          :key="imageIndex"
          class="
            aspect-w-1 aspect-h-1
            bg-cover bg-no-repeat bg-center
            cursor-pointer
            border border-gray-100
            dark:border-gray-800
          "
          :style="{
            backgroundImage:
              'url(' +
              (data.media_type === 'video' ? image.thumb : image.src) +
              ')',
          }"
          @click="index = imageIndex"
        ></div>
      </div>
      <div class="my-8">
        <h3
          class="
            text-sm
            title-font
            text-gray-500
            dark:text-gray-400
            tracking-widest
            mb-1
          "
        >
          {{ data.category.toUpperCase() }}
        </h3>
        <h1
          class="
            text-gray-800
            dark:text-gray-100
            text-3xl
            title-font
            font-medium
          "
        >
          {{ data.name }}
        </h1>
      </div>
      <div class="w-full flex flex-col lg:flex-row lg:space-x-6">
        <div
          class="
            w-full
            lg:w-3/4
            lg:border-r
            border-gray-100
            dark:border-gray-800
          "
        >
          <div class="prose prose-lg">
            <p v-for="(p, i) in data.description.split('\n')" :key="i">
              {{ p }}
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/4 lg:mr-5">
          <h2
            class="
              mt-5
              lg:mt-0
              text-sm
              title-font
              text-gray-500
              dark:text-gray-400
              tracking-widest
            "
          >
            WHAT I DID?
          </h2>
          <div class="mt-5 prose">
            <ul>
              <li
                v-for="(did, i) in data.did"
                :key="i"
                style="
                  margin-top: 0.2rem !important;
                  margin-bottom: 0.2rem !important;
                "
              >
                {{ did }}
              </li>
            </ul>
          </div>
          <h2
            v-if="data.links"
            class="
              mt-8
              text-sm
              title-font
              text-gray-500
              dark:text-gray-400
              tracking-widest
            "
          >
            LINKS
          </h2>
          <div v-if="data.links" class="mt-5 prose prose-indigo">
            <ul>
              <li
                v-for="(link, i) in data.links"
                :key="i"
                style="
                  margin-top: 0.2rem !important;
                  margin-bottom: 0.2rem !important;
                "
              >
                <a :href="link" target="_blank">{{ link }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ params, $content }) {
    try {
      const data = await $content('works', params.slug).fetch()
      return {
        data,
        index: null,
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
</script>
