<template>
    <shopItem v-for="item in shopItems"
        :key="item.id"
        :item="item"
        ></shopItem>
        <div v-if="isLoading === true">Loading</div>
</template>
<script>
import shopItem from "@/components/ShopItem.vue"
import productListItem from "@/assets/products.json"

import {ref} from "vue"
const shopItems = ref ([])
const isLoading = ref (true)

setTimeout(()=> {
    shopItems.value = productListItem
    isLoading.value = false},
    3000)

</script>