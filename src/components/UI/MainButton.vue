<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "main-button",
}
</script>

<style scoped>
button {
    padding: 7px 20px;
    background-color: #E7BA1D;
    border: none;
    border-radius: 5px;
    color: #1F1F1F;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
}

button:hover {
    color: #fff;
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