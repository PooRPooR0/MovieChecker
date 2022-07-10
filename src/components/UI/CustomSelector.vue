<template>
    <select class="custom-select">
        <option value="" disabled>{{ title }}</option>
        <option
            v-for="opt of options"
            :key="opt.value"
            :value="opt.value"
        >
            {{ opt.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: "custom-selector",
    props: {
        title: {
            type: String,
            default: "Выберете"
        },
        options: {
            type: Array,
            defaul: () => []
        }
    }
}
</script>

<style scoped>
.custom-select {
    background: #E7BA1D;
    border: 1px solid #292929;
    border-radius: 10px;
    width: 100%;

    padding-left: 10px;
    padding-right: 5px;
    font-weight: 400;
    font-size: 16px;
    box-shadow: none;
    outline: none;
    position: relative;
}

.custom-select option {
    background: #fff;
}
</style>