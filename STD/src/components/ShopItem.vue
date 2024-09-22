<template>
    <li class="shopItem">
        <div>
            <h1 @click="openProduct">{{ productItem.item.title }}</h1>
            <img v-bind:src="productItem.item.image" width=35% height=auto>
            <p>{{ productItem.item.price }}</p>
            <p></p>
            <h5>{{ productItem.item.description }}</h5>
            <h4>{{ productItem.item.category }}</h4>
            <h5>Rate: {{ productItem.item.rating.rate }}</h5>
        </div>
    </li>
</template>

<script setup>
import {  useRouter } from 'vue-router';

const productItem = defineProps(['item'])
const router = useRouter()
function openProduct(){
    router.push({name:'product', params:{id:productItem.item.id}})

}

</script>
