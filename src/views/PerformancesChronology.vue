<template>
  <div class="performancesChronology">
    <Header
      heading="Постановки в хронологии совещания"
      classHeading="arrowHeading"
    />
    <Dramatisations :dramatisations="dramatisations" />
  </div>
</template>

<script>
import store from "@/store/index.js";
import Header from "@/components/Header.vue";
import Dramatisations from "@/components/Dramatisations.vue";

export default {
  name: "performancesChronology",
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
