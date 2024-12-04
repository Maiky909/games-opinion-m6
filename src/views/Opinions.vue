<template>
  <div class="opinions-container">
    <h1 class="title">Check out opinions and share yours about this game</h1>
    <!-- Spinner mientras se cargan los datos -->
    <Spinner v-if="loading" />

    <!-- Contenido principal -->
    <div v-else>
      <!-- Detalles del juego -->
      <div class="game-details mb-5">
        <img :src="game.background_image" alt="Imagen del juego" />
        <div class="game-info">
          <h2>{{ game.name }}</h2>
          <div class="game-rating">
            <p>
              <b>Rating:</b> {{ game.rating }}
              <i class="bi bi-star-fill star"></i>
            </p>
            <div class="game-tags">
              <p v-for="tag in game.tags" :key="tag.id" class="tag">
                # {{ tag.name }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulario de opiniones -->
      <OpinionForm
        :initialOpinion="editingOpinion"
        :isEditing="isEditing"
        @submit-opinion="handleOpinionSubmit" />

      <!-- Listado de opiniones -->
      <OpinionList
        :opinions="opinions"
        @delete-opinion="deleteOpinion"
        @edit-opinion="startEditingOpinion" />
    </div>
  </div>
</template>

<script>
import OpinionForm from "../components/OpinionForm.vue";
import OpinionList from "../components/OpinionList.vue";
import Spinner from "../components/Spinner.vue"; // Importar el spinner

export default {
  name: "Opinions",
  components: { OpinionForm, OpinionList, Spinner },
  data() {
    return {
      game: {}, // Datos del juego obtenidos de la API
      opinions: [], // Lista de opiniones
      loading: true, // Indicador de carga
      editingOpinion: { text: "", author: "" }, // Opinión en edición
      isEditing: false, // Estado de edición
    };
  },
  methods: {
    async fetchGame() {
      try {
        const gameId = this.$route.params.id;
        const response = await fetch(
          `https://api.rawg.io/api/games/${gameId}?key=${
            import.meta.env.VITE_API_KEY_RAWG_IO
          }`
        );
        this.game = await response.json();
      } catch (error) {
        console.error("Error al obtener los datos del juego:", error);
      } finally {
        this.loading = false; // Cambia a false cuando se cargan los datos
      }
    },
    handleOpinionSubmit(opinion) {
      if (this.isEditing) {
        const index = this.opinions.findIndex((o) => o.id === opinion.id);
        if (index !== -1) {
          this.opinions[index] = opinion;
        }
        this.isEditing = false;
        this.editingOpinion = { text: "", author: "" };
      } else {
        const newOpinion = { ...opinion, id: Date.now() };
        this.opinions.push(newOpinion);
      }
    },
    deleteOpinion(id) {
      this.opinions = this.opinions.filter((opinion) => opinion.id !== id);
    },
    startEditingOpinion(opinion) {
      this.editingOpinion = { ...opinion };
      this.isEditing = true;
    },
  },
  mounted() {
    this.fetchGame(); // Llamada inicial para cargar los datos
  },
};
</script>

<style>
/* Estilos */
.opinions-container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
}
.title {
  text-align: left;
  margin-bottom: 5rem;
}

.game-details {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-bottom: 5rem;
  max-height: 300px;
}

.game-details img:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.game-details img {
  width: 200px;
  height: auto;
  margin-right: 2rem;
  border-radius: 8px 0 8px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  object-fit: cover;
}

.spinner-container {
  text-align: center;
}

.tag {
  display: inline-block;
  background-color: #0077b6;
  color: #fff;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  font-size: 14px;
}

.tag:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
