<template>
  <div class="game-card">
    <img :src="game.background_image" alt="Game Image" class="game-image" />
    <h3>{{ game.name }}</h3>
    <p><b>Rating:</b> {{ game.rating }} <i class="bi bi-star-fill star"></i></p>
    <p><b>Released:</b> {{ game.released }}</p>
    <p><b>Updated:</b> {{ game.updated }}</p>
    <div class="buttons">
      <button class="btn btn-primary" @click="Opinar">
        Share Your Opinion
      </button>

      <button @click="toggleFavorite" class="btn btn-outline-danger">
        <i :class="isFavorite ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
      </button>
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
  data() {
    return {
      isFavorite: false, // Estado del botón de favorito
    };
  },
  methods: {
    Opinar() {
      this.$router.push(`/opinions/${this.game.id}`);
    },
    FormatearFecha(fecha) {
      return new Date(fecha).toLocaleDateString();
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite; // Cambia entre favorito y no favorito
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
  cursor: pointer;
  background-color: #f5f5f5;
  transition: all 0.3s ease;
}

.game-image {
  max-width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 1rem;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
.star {
  color: gold;
  margin-left: 0.1rem;
  font-size: 1.2rem;
}
</style>
