<template>
    <button><slot></slot></button>
</template>

<script>
export default {
    name: "rounded-button",
}
</script>

<style scoped>
button {
    height: 30px;
    min-width: 30px;
    border: 1px solid #292929;
    border-radius: 15px;
    padding: 0;
    line-height: 30px;
    background-color: #E7BA1D;
    display: flex;
    justify-content: center;
    align-items: center;
    fill: #1F1F1F;
    color: #1F1F1F;
}

button:hover {
    color: #fff;
    fill: #fff;
    transition: 100ms ease-out;
}

button:not(:hover) {
    transition: 100ms ease-out;
}

button:active {
    background-color: #CCA92D;
    transition: 100ms ease-out;
}

button:not(:active) {
    transition: 100ms ease-out;
}
</style>