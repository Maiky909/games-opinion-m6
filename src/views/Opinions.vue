<template>
  <div>
    <Navbar />
    <h1>Opiniones sobre {{ game }}</h1>
    <p v-if="opiniones.length === 0">No hay opiniones para mostrar</p>
    <div v-else>
      <div v-for="opinion in opiniones" :key="opinion.id">
        <p>{{ opinion.author }}: {{ opinion.text }}</p>
        <button @click="editOpinion(opinion)">Editar</button>
        <button @click="deleteOpinion(opinion.id)">Eliminar</button>
      </div>
    </div>
    <OpinionForm @addOpinion="addOpinion" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import OpinionForm from "../components/OpinionForm.vue";

export default {
  name: "Opiniones",
  components: { Navbar, OpinionForm },
  data() {
    return {
      game: this.$route.params.game,
      opiniones: [],
    };
  },
  methods: {
    addOpinion(newOpinion) {
      this.opiniones.push(newOpinion);
    },
    editOpinion(opinion) {
      // Implementar lógica para edición
    },
    deleteOpinion(id) {
      this.opiniones = this.opiniones.filter((o) => o.id !== id);
    },
  },
};
</script>
