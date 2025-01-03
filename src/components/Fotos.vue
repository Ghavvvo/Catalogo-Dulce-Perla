<script setup>
import{useRoute} from 'vue-router'
import Data from '../data.json';
import {ref,onBeforeMount} from "vue";
const categoria = ref(null);
const route = useRoute()

const showModal = ref(false);
const selectedImage = ref(null);


const {id} = route.params

const openModal = (image) => {
  selectedImage.value = image;
  showModal.value = true;

}

const closeModal = () => {
  showModal.value = false;
}


onBeforeMount(async()=>{

categoria.value = Data.find(categoria=>categoria.id === parseInt(id))

})

</script>
<template>
  <h2>{{categoria.nombre}}</h2>
  <div class="container">
    <div v-for="(foto, index) in Array(categoria.fotos).fill()" :key="index" class="card">
      <img :src="`/${id}/${index + 1}.jpg`" @click="openModal(`/${id}/${index + 1}.jpg`)">
    </div>
  </div>
  <div class="hook"><router-link class="router-link" to="/catalogo">ATRAS</router-link></div>

  <!-- Modal -->
  <div v-if="showModal" class="modal" @click="closeModal">
    <img class="modal-content" :src="selectedImage">
  </div>
</template>

<style scoped>

h2
{
  margin-bottom: 40px;
  text-align: center;

}
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}


  .card {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
    padding: 10px;
    cursor: pointer;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 200px;
    margin: 10px;

  }


  .card img{
    width: 180px;
    height: 180px;
  }

 .router-link{
   text-decoration: none;
 }

  .modal {
    display:flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgba(0,0,0,0.7);
  }

  .modal-content {
    margin: auto;
    display: block;
    max-width: 80%;
     max-height: 80%;
  }







</style>