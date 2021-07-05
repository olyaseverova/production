<template>
  <div class="characters">
    <ul class="characters-list list">
      <li
        class="characters-list__item"
        v-for="character in characters"
        :key="character.id"
        :id="character.id"
        :class="{ character_active: character.status }"
      >
        <button
          class="characters-list__button"
          type="button"
          @click="activateClose"
          :id="character.id"
        >
          {{ character.button }}
        </button>
        <button
          class="characters-list__close none"
          :id="character.id"
          @click="activateClose"
        ></button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Characters",
  props: ["characters", "charactersClass"],

  methods: {
    activateClose: function (event) {
      var characters = document.querySelectorAll(".characters-list__item");
      characters.forEach(function (character) {
        if (event.target.id === character.id) {
          if (event.target.classList.contains("characters-list__button")) {
            character.classList.add("character_active");
          } else {
            character.classList.remove("character_active");
          }
        }
      });
    },
  },
};
</script>
