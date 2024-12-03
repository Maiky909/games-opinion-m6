<template>
  <div>
    <h1>Lista de Juegos Disponibles</h1>
    <div class="games-list">
      <GameCard v-for="game in games" :key="game.id" :game="game" />
    </div>
  </div>
</template>

<script>
// import NavBar from "../components/NavBar.vue";
import GameCard from "../components/GameCard.vue";

export default {
  name: "Home",
  components: {
    // NavBar,
    GameCard,
  },
  data() {
    return {
      games: [], // Lista de juegos
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
