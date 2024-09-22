

<template>
  <header >
    <!-- <searchItem @search-item="saveStr"></searchItem> -->
    <!-- <div>{{productListItem[0].title}}</div> -->
    <!-- <div>{{ saveStr }}</div>
    <div>{{search-itme }}</div> --> 
  </header>

    <!-- <shopItem v-for="item in shopItems"
        :key="item.id"
        :item="item"
        ></shopItem>
        <div v-if="isLoading === true">Loading</div> -->
        
    <p></p>


    <!-- <footer class="bottom">Maket</footer> -->

<!-- <Catalog></Catalog> -->
  
    <Navigation @set-page="setPage"></Navigation>
    <router-view></router-view>
</template>

<style scoped>
.bottom{
    height: 30px;
    align-self: center;
}
.button{
    margin: 0 auto;
    margin-bottom: 50px;
    align-self: center;
    display: block;
    width: 100%;
}
.shopItem{
    margin: 0 auto;
    display: block;
    width: 70%;
}

</style>


<script setup>

// import shopItem from "@/components/ShopItem.vue"
import searchItem from "@/components/searchItem.vue"
// import productListItem from "@/assets/products.json"
import orderForm from "@/components/orderForm.vue"
import { ref } from "vue"
import Catalog from "@/components/pages/Catalog.vue"
import Home  from "@/components/pages/Home.vue"
import Navigation from "./components/pages/general/Navigation.vue"
import shopItem from "@/components/ShopItem.vue"
import productListItem from "@/assets/products.json"

const pageToComponent = {
    'home': Home,
    'Catalog':Catalog
}
const page = ref(pageToComponent[window.location.pathname.substring(1)])

function setPage(newPage){
    page.value = pageToComponent[newPage]
    history.pushState({current:newPage},null,newPage)
}
window.addEventListener("popstate", function(event){
    console.log('event'. event)
    page.value = pageToComponent[event.state.current.substring(1)]
})











// const isLoading = ref (true)
// const shopItems = ref ([])
// // const searchStrValue = ref ('')

// setTimeout(()=> {
//     shopItems.value = productListItem
//     isLoading.value = false},
//     3000)

// function saveStr(strVal){
//     if(!strVal.trim()){
//         shopItems.value = productListItem
//         return
//     }
//     shopItems.value = []
//     const temp_shop_items = ref ([])
//     temp_shop_items.value = productListItem
//     for( let i=0; i < temp_shop_items.value.length; i++){
//         if(compare(strVal,temp_shop_items.value[i].id)){

//                 shopItems.value.push(productListItem[i])
//             }
//     }
// }
// function compare (searchValue, elementId){
//     const id = elementId -1

//     if (!isNaN(searchValue)){
//         if(productListItem[id].price == searchValue){
//             return true
//         }
//     }
//     else{
//         return productListItem[id].title.includes(searchValue)
        

//         }
//     }




</script>