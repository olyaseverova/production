<template>
  <div class="performancesExecutors">
    <Header
      heading="Постановки по ответственным исполнителям"
      classHeading="arrowHeading"
    />
    <div class="responsible">
      <img
        class="responsible__img"
        src="@/img/responsible.png"
        width="247"
        height="319"
        alt="Ответственный"
      />
      <article class="responsible-description">
        <p class="responsible-description__task">Ответственный</p>
        <p class="responsible-description__initials">Фамилия Имя Отчество</p>
      </article>
    </div>
    <Dramatisations :dramatisations="dramatisations" />
  </div>
</template>

<script>
import store from "@/store/index.js";
import Header from "@/components/Header.vue";
import Dramatisations from "@/components/Dramatisations.vue";

export default {
  name: "PerformancesExecutors",
  components: {
    Header,
    Dramatisations,
  },

  computed: {
    dramatisations() {
      return store.state.dramatisations;
    },
  },
  async mounted() {
    store.dispatch("fetchDramatisations");
  },
};
</script>
