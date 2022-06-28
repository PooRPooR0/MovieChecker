<template>
    <button>
        <icon v-if="size === 'small'" name="small_menu" color="white" />
        <icon v-else name="menu" color="white" />
    </button>
</template>

<script>
export default {
    name: "gamburger-button",
    props: ["size"],
}
</script>

<style scoped>

button {
    background: none;
    border: none;
}

</style>