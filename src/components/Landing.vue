
<template>
      <div class="description">
        <div>
          <h3>Tienda de repostería</h3>
          <h4>Una dulce experiencia está <strong>garantizada!</strong></h4>
          <img src="./icons/description.png" alt="">
        </div>
        <div>
          <h3>Diseños personalidados</h3>
          <h4>A la<strong> medida</strong> del cliente</h4>
          <img src="./icons/personalizado.jpg" alt="">
        </div>
      </div>

      <div class="hook"><router-link class="router-link" to="/catalogo">VER OFERTAS</router-link></div>

</template>


<style scoped>

img
{
  margin: 10px;

}





.description
{
  text-align: center;
  font-weight: bolder;
  font-size: 20px
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

</style>

<script setup lang="ts">
</script>