<!-- <template>
    <h1 v-on:click="changeText">{{ myText }}</h1>
    <h3 @click="myNumber++"> {{myNumber + 1 }}</h3>
</template>

<script setup>
import {computed, ref} from "vue";
// import { computed } from "vue/dist/vue";
// import  { onBeforeMount } from "vue";
// onBeforeMount(()=>{
//     console.log("onBeforeMount")
// })
//     const text = 'Hellowworldd asda111sd123a'    \
const props = defineProps({
    'text': String,
    'number': {
        type: Number,
        default: 1
    }
}) 

defineOptions({
    inheritAttrs: false
})

const myNumber = ref(props.number)
const myText = computed(() => props.text + '!!!')


const emits = defineEmits()
function changeText(){
    emits('set-text', 'new text from child Hello world')
    }
</script> -->