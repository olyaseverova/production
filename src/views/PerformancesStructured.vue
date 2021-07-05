<template>
  <div class="performancesStructured">
    <Header
      heading="Постановки структурированные"
      classHeading="arrowHeading"
    />
    <Characters :characters="characters" charactersClass="performancesCharacters" />
    <Dramatisations :dramatisations="dramatisationsStructured" />
  </div>
</template>

<script>
import store from "@/store/index.js";
import Header from "@/components/Header.vue";
import Characters from "@/components/Characters.vue";
import Dramatisations from "@/components/Dramatisations.vue";

export default {
  name: "performancesStructured",
  components: {
    Header,
    Dramatisations,
    Characters,
  },

  computed: {
    dramatisationsStructured() {
      return store.state.dramatisationsStructured;
    },
    characters() {
      store.state.characters.forEach((p, i) => {
        p.id = i;
      });
      return store.state.characters;
    },
  },
  async mounted() {
    store.dispatch("fetchDramatisationsStructured");
    store.dispatch("fetchCharacters");
  },
};
</script>
