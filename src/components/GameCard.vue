<template>
  <div class="game-card">
    <img :src="game.background_image" alt="Game Image" class="game-image" />
    <h3>{{ game.name }}</h3>
    <p><b>Rating:</b> {{ game.rating }}</p>
    <p><b>Released:</b> {{ game.released }}</p>
    <p><b>Updated</b> {{ game.updated }}</p>
    <div class="buttons">
      <button @click="Opinar">Opinar</button>
      <button>Like</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  methods: {
    Opinar() {
      this.$router.push(`/opiniones/${this.game.slug}`);
    },
    FormatearFecha(fecha) {
      return new Date(fecha).toLocaleDateString();
    },
  },
};
</script>

<style>
.game-card {
  border: 1px solid #ddd;
  border-radius: 10px 0 10px 0;
  padding: 1rem;
  max-width: 300px;
  background-color: #ffffff;
  color: #000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.game-card h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.game-card p {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.game-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.game-image {
  max-width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

button {
  margin-top: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #0056b3;
}
</style>
