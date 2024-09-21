<template>
    <div>
        <input placeholder="FIO" v-model="orderInfo.name_value.value" value="FIO">
        <p></p>
        <div>{{ name_value }}</div>
        <input placeholder="E-mail" v-model = "orderInfo.email_value.value" value="E-mail">
        <p></p>
        <div>
            <label>Country
                <select v-model="orderInfo.to_location.value" value="">
                    <option disabled value="">Select</option>
                    <option tion value="RF">RF</option>
                    <option value="RB">BR</option>
                </select>
            </label>
        </div>
        <p></p>
        <label>Deliver personaly? 
            <input type="checkbox" v-model="orderInfo.deliver_personaly.value" value="false">
        </label>
        <p></p>
        <input v-if="orderInfo.deliver_personaly.value === true" placeholder="Address" v-model="orderInfo.address_value.value" value="Address">
        <textarea v-if="orderInfo.deliver_personaly.value === false" disabled>Краснопрудный пер., 7, Москва, 107140</textarea>
        <div>{{orderInfo.deliver_personaly.value}}</div>
    </div>
</template>

<script setup>
import {ref} from "vue"

// const name_value = ref('')
// const email_value = ref('')
// const to_location = ref('')
// const deliver_personaly = ref(false)
// const address_value = ref('')
const orderInfo = ref({
    'name_value':'',
    'email_value':'',
    'to_location':'',
    'deliver_personaly':'',
    'address_value':''
})


</script>
