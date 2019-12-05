<template>
  <div id="app">
    <div class="div">
      <vs-navbar
        v-model="indexActive"
        :color="colorx"
        text-color="rgba(255,255,255,.6)"
        active-text-color="rgba(255,255,255,1)"
        class="myNavbar">
        <vs-navbar-item index="0" >
          <router-link to="/home"> Home </router-link>
        </vs-navbar-item>
        <vs-navbar-item index="1">
          <router-link to="/cardapio"> Cardapio </router-link>
        </vs-navbar-item>
        <vs-navbar-item index="2">
          <router-link to="/cliente"> Cliente </router-link> 
        </vs-navbar-item>
        <vs-navbar-item index="3">
          <router-link to="/componente"> Componente </router-link> 
        </vs-navbar-item>
        <vs-navbar-item index="4">
          <router-link to="/marmitas"> Marmitas </router-link> 
        </vs-navbar-item>
        <vs-navbar-item index="5">
          <router-link to="/pedidos"></router-link> 
        </vs-navbar-item>

        <vs-spacer></vs-spacer>

        <vs-button color-text="rgb(255, 255, 255)" color="rgba(255, 255, 255, 0.3)" type="flat" icon="more_horiz"></vs-button>
      </vs-navbar>
    </div>
    <div class="">
      <router-view/>
    </div>
  </div>
</template>
