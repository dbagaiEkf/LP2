

<template>
  <header >
    <searchItem @search-item="saveStr"></searchItem>
    <div>{{searchStrValue}}</div>
  </header>

    <shopItem v-for="item in shopItems"
        :key="item.id"
        :item="item"
        ></shopItem>
    <p></p>
        <div v-if="isLoading === true">Loading</div>
    
    <!-- <footer class="bottom">Maket</footer> -->
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

import shopItem from "@/components/ShopItem.vue"
import searchItem from "@/components/searchItem.vue"
import productListItem from "@/assets/products.json"
import { ref } from "vue"

const isLoading = ref (true)
const shopItems = ref ([])
const searchStrValue = ref ('')

setTimeout(()=> {
    shopItems.value = productListItem
    isLoading.value = false},
    3000)

function saveStr(strVal){
    searchStrValue.value = strVal.value
}
console.log(searchStrValue)
function searchItem_f(itemId){
    const one_item = shopItems.value.find((shopItems)=> shopItems[itemId].title != searchStrValue.value)
    one_item.isFound = false
    }






// const props = defineProps({
//     'text_button':{
//         type : String,
//         default: "Show Next Items"
//     }
// })  
// const itemId = productListItem[0]
// const change_text = ref(props.text_button)
// function addItem(){
      
//     })
// }
// import { reactive } from "vue"
//   <!-- <button class="button" @click="addItem" :class="{'loader': true}">{{ change_text }}</button> -->



</script>