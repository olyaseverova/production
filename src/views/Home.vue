<template>
  <div class="home">
    <img class="home__img" src="@/img/home-back.png" alt="Меню" />
    <main class="home-main">
      <h1 class="heading">Постановки Первого Руководителя</h1>
      <router-link class="home-main__button up a" to="/meetings">
        К выполнению
      </router-link>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
