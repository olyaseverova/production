<template>
  <div class="diagonals">
    <ul class="diagonals-list list" :id="id">
      <li
        class="diagonals-list__item"
        v-for="diagonal in diagonals"
        :key="diagonal.id"
      >
        <div class="diagonals-list__line" :id="diagonal"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Diagonals",
  props: ["id"],

  data() {
    return {
      diagonals: ["0", "1", "2", "3"],
    };
  },
};
</script>
