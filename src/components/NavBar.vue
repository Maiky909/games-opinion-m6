<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">Games Opinions</li>
      <li class="navbar-item">
        <router-link to="/">Home</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.navbar {
  background-color: #333;
  color: white;
  padding: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 999;
}

.navbar-list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.navbar-item {
  text-decoration: none;
}

.navbar-item a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.navbar-item a:hover {
  text-decoration: underline;
}
</style>
