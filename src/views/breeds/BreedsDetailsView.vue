<template>
  <h1>Vista detallada con Imagen y Contador</h1>

  <h2>Detalles de raza de gato {{ title }}</h2>

  <CatClicker imgURL="breed2.jpeg" />

  <h3>Descripcion</h3>
  <hr />
  <p>{{ details }}</p>
</template>

<script>
import CatClicker from "@/components/CatClicker.vue";

export default {
  components: {
    CatClicker,
  },
  props: ["title", "id", "details"],
};
</script>
