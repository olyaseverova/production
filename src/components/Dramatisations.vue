<template>
  <div class="dramatisations">
    <ul class="dramatisations-list list">
      <li
        class="dramatisations-list__item"
        v-for="dramatisation in dramatisations"
        :key="dramatisation.id"
      >
        <p class="dramatisation-list__number">{{ dramatisation.number }}</p>
        <div class="dramatisation-list__container">
          <p class="dramatisation-list__text">{{ dramatisation.text }}</p>
          <Characters :characters="dramatisation.characters" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Characters from "@/components/Characters.vue";

export default {
  name: "Dramatisations",
  props: ["dramatisations"],

  components: {
    Characters,
  },
};
</script>
