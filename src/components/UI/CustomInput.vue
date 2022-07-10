<template>
    <input
        :value="modelValue"
        @input="updateInput"
        class="my-input"
        :type="type"
    >
</template>

<script>
export default {
    name: "custom-input",
    props: {
        modelValue: {
            type: String,
        },
        type: {
            type: String,
            default: "text"
        }
    },
    methods: {
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style>
.my-input {
    width: 100%;
    background: #363639;
    border: 1px solid #292929;
    padding: 0 10px;
    border-radius: 10px;
    color: #c7c7c7;
}

.my-input::placeholder {
    color: #1D1D1D;
}

.my-input:focus-visible {
    background: #363639;
    outline: none;
}
</style>