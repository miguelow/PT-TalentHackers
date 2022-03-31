<template>
  <div class="counter">
      <img @click="increment"

      :src="require(`@/assets/img/${imgURL}`)" 
      alt="cat image">

      <!-- 
      :src="require(`@/assets/${imgURL}`)" 
    
      Buscaba utilizar el prop, como parte del soce de la imagen
       -->

      <p class="text">You have clicked <strong>{{catName}} </strong> {{counter}} times</p>
      
  </div>
</template>
<script>
import {computed, reactive, toRefs} from "vue"
export default {
    name: "CatCounter",
    props: {
        catName: {
            type: String,
            default: "kitty",
            required: false
        },
        imgURL: {
            type: String,
            // default: "https://i.pinimg.com/originals/4e/d5/0e/4ed50e7aa64e175a14176dd415905dac.jpg",
        }
    },
    setup () {
        const data = reactive({
            counter: 0,
        })

        const increment = () => data.counter++
        return {...toRefs(data), increment}
    },
}
</script>

<style>
.text {
    border: 1px solid black;
    display: inline;
    
}
</style>