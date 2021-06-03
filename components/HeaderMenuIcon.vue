<template>
  <label for="check">
    <input
      id="check"
      type="checkbox"
      :checked="value"
      @change="$emit('input', $event.target.checked)"
    />
    <span class="bg-gray-800 dark:bg-gray-100"></span>
    <span class="bg-gray-800 dark:bg-gray-100"></span>
    <span class="bg-gray-800 dark:bg-gray-100"></span>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  width: 25px;
  cursor: pointer;
}

label span {
  /* background: rgb(59, 59, 59); */
  border-radius: 10px;
  height: 2.5px;
  margin: 2.5px 0;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

span:nth-of-type(1) {
  width: 50%;
}

span:nth-of-type(2) {
  width: 100%;
}

span:nth-of-type(3) {
  width: 75%;
}

input[type='checkbox'] {
  display: none;
}

input[type='checkbox']:checked ~ span:nth-of-type(1) {
  transform-origin: bottom;
  transform: rotateZ(45deg) translate(3.6px, 0.1px);
}

input[type='checkbox']:checked ~ span:nth-of-type(2) {
  transform-origin: top;
  transform: rotateZ(-45deg);
}

input[type='checkbox']:checked ~ span:nth-of-type(3) {
  transform-origin: bottom;
  width: 50%;
  transform: translate(11px, -3.6px) rotateZ(45deg);
}
</style>
