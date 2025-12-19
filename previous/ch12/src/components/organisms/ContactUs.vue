<template>
    <Form @submit="handleSubmit">
        <label for="email">Email:</label>
        <Field id="email" type="email" name="email" rules="required|email"></Field>
        <ErrorMessage as="span" name="email" class="error" />

        <label for="message">Message:</label>
        <Field id="message" as="textarea" name="message" rules="required|min:10"></Field>
        <ErrorMessage as="span" name="message" class="error">
            Please enter a message with at least 10 characters
        </ErrorMessage>

        <TheButton>Send</TheButton>
    </Form>
</template>
<script setup>
import { ErrorMessage, Field, Form, defineRule } from 'vee-validate';
import TheButton from '../atoms/TheButton.vue';
import { required, email, min } from '@vee-validate/rules';
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

const handleSubmit = ({ email, message }) => {
    console.log("email:", email)
    console.log("message:", message);
};
</script>
<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    width: 60%;
}

.error {
    color: red;
}
</style>