<template>
    <div class="shopItem" >
        <div>
            <h1>{{ item.title }}</h1>
            <img v-bind:src="item.image" width=25% height=auto>
            <p>{{ item.price }}</p>
            <p></p>
            <h5>{{ item.description }}</h5>
            <h4>{{ item.category }}</h4>
            <h5>Rate: {{ item.rating.rate }}</h5>
        </div>
    </div>
</template>

<script setup>
defineProps(['item'])
</script>
