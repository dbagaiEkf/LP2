<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="#">Start Bootstrap</a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button> 
        <div class="collapse navbar-collapse" id="navbarResponsive"> 
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'home' }">
                Home
              </router-link>
            </li>
            <li class="nav-item" >
              <router-link class="nav-link" :to="{ name: 'catalog' }">
                Catalog
              </router-link>
            </li>
            <li class="nav-item" >
               <router-link class="nav-link" :to="{ name: 'product',params:{id:1}}"> <!--,params:{id:ShopItem.id} -->
                Product
              </router-link>
            </li>
            <li class="nav-item" >
               <router-link class="nav-link" :to="{ name: 'order'}"> <!--,params:{id:ShopItem.id} -->
                Order
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <style lang="scss" scoped></style>
  
  <script>
  export default {};
  </script>