<template>
    <form @submit="onSubmit">
      <label>First Name </label><enterText name="firstName" />
      <p></p>
      <label>Last Name </label><enterText placeholder="Last Name" name="lastName" />
      <p></p>
      <label>Email </label><enterText name="email" type="email" />
      <p></p>
      <label>Adress </label><enterText name="adress" type="adress" />
      <p></p>
  
      <button>Submit</button>
    </form>
  </template>
  
  <script setup>
  import { useForm } from 'vee-validate';
  import * as yup from 'yup';
  import enterText from './enterText.vue';

  
  const { handleSubmit } = useForm({
    validationSchema: yup.object({
      firstName: yup.string().required().min(1),
      lastName: yup.string().required().min(3),
      email: yup.string().required().email(),
      adress: yup.string().required().min(10)
    }),  
});
  
  const onSubmit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2));
  });
  </script>