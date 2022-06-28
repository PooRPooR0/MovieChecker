<template>
    <div v-if="show" @click="closeMenu">
        <burger-menu-nav />
    </div>
</template>

<script>
import BurgerMenuNav from './BurgerMenuNav.vue'
export default {
    components: { BurgerMenuNav },
    props: {
        show: {
            type: Boolean,
            default: false,
            require: true,
        }
    },
    methods: {
        closeMenu(){
            this.$emit("update:show", false)
        }
    }
}
</script>

<style scoped>
div {
    position: fixed;
    right: 0;
    left: 0;
    top: 50px;
    bottom: 0;
    z-index: 2;
    background: #1818189d;
}
</style>