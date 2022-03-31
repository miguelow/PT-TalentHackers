<template>
  <h1>Listado de razas</h1>

  <div v-for="breed in breeds" :key="breed.id">

    <router-link :to="{ name: 'BreedsDetails', 
    params: {id: breed.title, title: breed.title, details: breed.details}}">

      <h2>{{ breed.title }}</h2>
    </router-link>

    <hr />

  </div>
</template>

<script>
export default {
  data() {
    return {
      breeds: [
        { title: "Abyssinian", id: 1, details: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer" },
        { title: "American Bobtail", id: 2, details: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer" },
        { title: "Aphrodite Giant", id: 3, details: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer" },
        { title: "Arabian Mau", id: 4, details: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer" },
        { title: "Australian Mist", id: 5, details: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer" },
      ],
    };
  },
};
</script>
<style>
</style>