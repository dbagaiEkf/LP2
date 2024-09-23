<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div>
    <ShopItem v-for="item in shopItems"
        :key="item.id"
        :item="item"
        ></ShopItem>
        <!-- <div v-if="isLoading === true">Loading</div> -->
</div>
</template>
<script >
import ShopItem from "../ShopItem.vue"
// import productListItem from "@/assets/products.json"

import axios from "axios";

export default{
    components:{ShopItem},
    data(){
        return {
            shopItems: []
        }
    },
    mounted(){
        axios
        .get('https://fakestoreapi.com/products')
        .then((response)=>{
            this.shopItems=response.data
        })
    }
}
</script>

<!-- // import {ref} from "vue"
// // import ShopItem from "../ShopItem.vue"
// const shopItems = ref ([])
// const isLoading = ref (true)

// setTimeout(()=> {
//     shopItems.value = productListItem
//     isLoading.value = false},
    // 300) -->

