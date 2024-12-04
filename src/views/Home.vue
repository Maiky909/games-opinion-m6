<template>
  <div>
    <h1>List of Available Games</h1>

    <!-- Mostrar el Spinner mientras loading es true -->
    <Spinner v-if="loading" />

    <!-- Mostrar la lista de juegos una vez cargados -->
    <div v-else class="games-list">
      <GameCard v-for="game in games" :key="game.id" :game="game" />
    </div>
  </div>
</template>

<script>
import GameCard from "../components/GameCard.vue";
import Spinner from "../components/Spinner.vue"; // Importar el spinner

export default {
  name: "Home",
  components: {
    GameCard,
    Spinner,
  },
  data() {
    return {
      games: [], // Lista de juegos
      loading: true, // Estado de carga
    };
  },
  async mounted() {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${
          import.meta.env.VITE_API_KEY_RAWG_IO
        }`
      );
      const data = await response.json();
      this.games = data.results; // Asignamos los juegos obtenidos al estado
    } catch (error) {
      console.error("Error al obtener los juegos:", error);
    } finally {
      this.loading = false; // Desactivar el spinner después de cargar los datos
    }
  },
};
</script>

<style>
.games-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
