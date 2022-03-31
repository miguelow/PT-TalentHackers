<template>

  <div>
    <h1>Componente con imagen y contador</h1>
    <CatClicker
    imgURL="breed1.jpeg"
    />
    <!-- imgURL="breed1.jpeg" 
    
    Mi intención en el caso de las 2 primeras vistas era pasar el fichero de la imágen como prop 
    
    -->

  </div>
  
</template>


<script>

import CatClicker from '@/components/CatClicker.vue'

export default {
  name: 'OneCounterView',
  components: {
    CatClicker,
  }
}
</script>