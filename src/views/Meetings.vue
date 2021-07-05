<template>
  <div class="meetings">
    <Header heading="Совещания" routerClass="none" />
    <div class="audio">
      <div class="recording">
        <img
          class="recording__img"
          src="@/img/sound-bars.png"
          width="48"
          height="48"
          alt="Аудио"
        />
        <p class="recording__text">Аудио запись совещания</p>
        <!-- <audio class="recording__audio" controls src=""></audio> -->
        <div class="audio-player-container">
          <input type="range" id="seek-slider" max="100" value="0" />
          <div class="play-buttons">
            <button class="scrolling-button previous-icon" type="button" @click="playAudio"></button>
            <button class="play-icon" type="button" @click="playAudio"></button>
            <button class="scrolling-button next-icon" type="button" @click="playAudio"></button>
          </div>
        </div>
      </div>
      <div class="decryption">
        <p class="decryption__text bold ocher">Автоматическая расшифровка совещания</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Meetings",
  components: {
    Header,
  },

  methods: {
    playAudio: function (event) {
      event.target.classList.toggle("stop-icon");
    },
  },
};
</script>

