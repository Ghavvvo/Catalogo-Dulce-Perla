<script setup>
import Data from '../data.json';
import {ref} from "vue";
const categorias = ref(Data);
import {useRouter} from "vue-router";
const router = useRouter()
</script>



<template>
  <h2>CATEGORÍAS</h2>

  <div class="Catalogo">

    <div @click="router.push(`/categorias/${cat.id}`)" v-for="cat in categorias" :key="cat.id" class="card">
      <h3>{{ cat.nombre }}</h3>


    </div>
  </div>

</template>

<style scoped>

.card {
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
  padding: 10px;
  cursor: pointer;
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

.Catalogo{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;


}

h2
{
  margin-bottom: 40px;
  text-align: center;

}

</style>