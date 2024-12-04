<template>
  <div class="not-found-container">
    <h1><i class="bi bi-bug-fill"></i></h1>
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <router-link to="/" class="btn btn-primary">Go Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  text-align: center;
  background-color: #f8f9fa;
}

h1 {
  font-size: 3rem;
  color: #343a40;
  margin-bottom: 1rem;
}

p {
  font-size: 1.25rem;
  color: #6c757d;
  margin-bottom: 2rem;
}

.btn {
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
}
</style>
