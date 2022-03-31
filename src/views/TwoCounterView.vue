<template>

  <div>
    <h1>2 Componentes con imágenes, contador y nombre</h1>
    <CatClicker 
      imgURL="funny-cat.jpeg"
      cat-name="Bobby"
      />
      
    <CatClicker 
    imgURL="catIMG2.jpeg"
    cat-name="Larry"/>
  </div>
  
</template>


<script>

import CatClicker from '@/components/CatClicker.vue'

export default {
  name: 'TwoCounterView',
  components: {
    CatClicker,
  }
}
</script>