<template>
  <div class="_section">
    <div class="px-5 w-full lg:w-1/2">
      <h1 class="mb-5 text-lg">Hi there!</h1>
      <p class="mb-8 text-5xl">
        I'm <strong>Herdi Tr.</strong> <br />Freelance Creative & Full-Stack
        Developer
      </p>
      <div class="flex flex-row space-x-4">
        <button class="_btn _btn-primary" @click="$emit('onWorksButtonClick')">
          <span class="mr-2">📚</span> See Works
        </button>
        <button class="_btn" @click="$emit('onWorksButtonClick')">
          <span class="mr-2">📝</span> Resume
        </button>
      </div>
    </div>
  </div>
</template>
