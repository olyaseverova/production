<template>
  <div class="vault">
    <Header
      heading="Свод  постановок"
      classHeading="centerHeading"
      description="Первого  Руководителя"
      routerClass="none"
    />
    <div class="stagings">
      <ul class="stagings-list list">
        <li
          class="stagings-list__item"
          v-for="staging in stagings"
          :key="staging.id"
        >
          <router-link
            class="stagings-list__link bold ocher a"
            :to="staging.to"
          >
            {{ staging.link }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Vault",
  components: {
    Header,
  },

  data() {
    return {
      stagings: [
        {
          to: "/performancesChronology",
          link: "Постановки в хронологии совещания",
        },
        {
          to: "/performancesStructured",
          link: "Постановки  структурированные",
        },
        {
          to: "/performancesExecutors",
          link: "Постановки по ответственным исполнителям",
        },
      ],
    };
  },
};
</script>

