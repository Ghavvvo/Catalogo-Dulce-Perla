
<template>
  <div class="wrapper">
    <div class="navbar">
      <div class="marca">
        <a href="/"><img src="./components/icons/logo.png" class="logo"alt="logo"> </a>

        <h3>Dulce Perla</h3>
      </div>

      <div class="large-menu" ><!--v-if="isLargeScreen"-->
        <router-link class="menu-button" to="/"><img src="./components/icons/casar.png" alt=""></router-link>
        <router-link class="menu-button" to="/catalogo"><img src="./components/icons/pastelr.png" alt=""></router-link>
        <router-link class="menu-button" to="/contactos"><img src="./components/icons/llamarr.png" alt=""></router-link>
      </div>
      <!-- <div class="short-menu" v-else>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
          </template>

          <v-list>
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
            >
              <v-list-item-title class="custom-color">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>-->
    </div>
    <div class="content">

    <router-view></router-view>
    </div>
  </div>

</template>

<script setup lang="ts">
/*import { ref, onMounted, onUnmounted } from 'vue';

import '@mdi/font/css/materialdesignicons.css' // Importa los iconos de Material Design
const isLargeScreen = ref(window.innerWidth > 600);
const items = ref([
  { title: 'Inicio', path: '/' },
  { title: 'Ofertas', path: '/catalogo' },
  { title: 'Contacto', path: '/contacto' },
]);

const updateScreenSize = () => {
  isLargeScreen.value = window.innerWidth > 600;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});
*/

</script>

<style >


.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  color:#fd3dac;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

}
.content
{
  max-width: 90%;
  margin : 0 auto;

}
.navbar {
  position: sticky;
  top: 0;
  display: flex;

  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  width: 100%;
  margin-bottom: 80px;

}

.logo
{
  width: 50px;
  height: 50px;
}

.marca img
{
  margin-right: 10px;
}
.marca{
  display: flex;
  align-items: center;
  max-width: 100px;

}


.menu-button{
  box-sizing: border-box;
  text-decoration: none;
  color:#fd3dac ;


}

.large-menu
{
  display: flex;
  justify-content: end;
  padding: 5px;
  width: 60%;
  max-width: 300px;

  font-weight: bold;



}





.description h3
{
  color: #2faafd;
}


.description img
{
  width: 200px;
  height: 200px;
}

strong{
  color: #fd0794;

}

.hook {
   ;
  text-align: center;
  border-radius: 10px;
  background-color: #fd0794;
  max-width: 200px;
  margin: 40px auto;


}

.router-link{
  color: white;
  text-decoration: none;
}
img
{
  width: 30px;
  margin-left: 30px;

}


</style>



