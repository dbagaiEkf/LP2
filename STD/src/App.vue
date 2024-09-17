

<template>
  <header >
    <searchItem @search-item="saveStr"></searchItem>
    <div>{{productListItem[0].title}}</div>
    <!-- <div>{{ saveStr }}</div>
    <div>{{search-itme }}</div> --> 
  </header>
  <orderForm></orderForm>
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
import orderForm from "@/components/orderForm.vue"
import { ref } from "vue"

const isLoading = ref (true)
const shopItems = ref ([])
const searchStrValue = ref ('')

setTimeout(()=> {
    shopItems.value = productListItem
    isLoading.value = false},
    3000)

function saveStr(strVal){
    shopItem.value = []
    const temp_shop_items = ref ([])
    temp_shop_items.value = productListItem
    console.log(productListItem)

    for(let listItem in temp_shop_items.value){
        console.log(listItem)
        if(compare(strVal,listItem.id)){

                searchItem.push(listItem)
            }
    }
}
function compare (searchValue, elementId){
    const id = elementId -1
    console.log("hello")
    console.log(elementId)
    console.log(searchValue)
    if (isNaN(Number(elementId))){
        const myNumber = atoi(searchValue)
        if(productListItem[id].price === myNumber){
            return true
            // searchItem.push(productListItem[id])
        }
        else return false
    }
    else{
        productListItem[id].title.includes(searchValue)
        console.log(productListItem[id])
        // let searchValue_index = 0
        // for(let productListItem_title_index = 0; productListItem_title_index < productListItem[id].title.length; productListItem_title_index++){
        //     if(productListItem[id].title[productListItem_title_index] === searchValue[searchValue_index]){
        //         searchValue_index++
        //         productListItem_title_index++
        //     }
        //     else searchValue_index = 0
        //     if((searchValue_index+1)===searchStrValue.value.length){
        //         return true
        //     }
        //     else return false
        }
    }

console.log(searchStrValue)
// function searchItem_f(itemId){
//     const one_item = shopItems.value.find((shopItems)=> shopItems[itemId].title != searchStrValue.value)
//     one_item.isFound = false
//     }






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