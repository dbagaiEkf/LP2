<template>
<input  v-model="searchStr"
        placeholder="Search" 
        autofocus
        @keyup.enter="$emit('search-item', searchStr)">
<h1>{{ searchStr }}</h1>
</template>

<script setup>
import {ref} from "vue"

const searchStr = ref ('')
// const props = defineProps(['searchStr'])

// const emits = defineEmits()

// function searchItem(){
//     emits('search-item',searchStr.value)
// }


</script>