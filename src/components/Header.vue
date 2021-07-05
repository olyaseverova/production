<template>
  <div class="header">
    <ul class="pages-list list">
      <li
        class="pages-list__item"
        v-for="page in menu"
        :key="page.id"
        :id="page.id"
        :class="{ activePage: page.subparagraphs }"
      >
        <router-link
          class="pages-list__link a"
          :to="page.to"
          :id="page.id"
          @click="activateSubparagraphs"
          >{{ page.link }}</router-link
        >
        <ul class="subparagraphs-list list none" :id="page.id">
          <li
            class="subparagraphs-list__item"
            v-for="subparagraph in page.subparagraphs"
            :key="subparagraph.id"
          >
            <router-link
              class="subparagraphs-list__link a"
              :to="subparagraph.to"
              >{{ subparagraph.link }}</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
    <div class="header-heading">
      <Diagonals id="firstDiagonals" />
      <router-link class="arrow-back" to="/vault" :class="routerClass"></router-link>
      <h1 class="heading" :class="classHeading">{{ heading }}</h1>
      <p class="description">{{ description }}</p>
      <Diagonals id="lastDiagonals" />
    </div>
  </div>
</template>

<script>
import store from "@/store/index.js";
import Diagonals from "@/components/Diagonals.vue";

export default {
  name: "Header",
  props: ["heading", "id", "description", "routerClass", "classHeading"],

  components: {
    Diagonals,
  },

  computed: {
    menu() {
      store.state.menu.forEach((p, i) => {
        p.id = i;
      });
      return store.state.menu;
    },
  },
  async mounted() {
    store.dispatch("fetchMenu");
  },

  methods: {
    activateSubparagraphs: function (event) {
      var pages = document.querySelectorAll(".pages-list__item");
      pages.forEach(function (page) {
        document
          .querySelectorAll(".subparagraphs-list")
          .forEach(function (subparagraph) {
            if (
              event.target.id === subparagraph.id &&
              event.target.id === page.id
            ) {
              subparagraph.classList.toggle("none");
              page.classList.toggle("rotatePseudo");
            }
          });
      });
    },
  },
};
</script>
