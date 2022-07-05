<template>
    <div class="dialog" v-if="show" @click="closeDialog">
        <div @click.stop class="dialog-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "custom-dialog",
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        closeDialog() {
            this.$emit("update:show", false)
        }
    }
}
</script>

<style>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.445);
    position: fixed;
    display: flex;
    z-index: 999;
}

.dialog-content {
    margin: auto;
    background: white;
    padding: 15px;
    border: rgb(221, 221, 221) 2px solid;
    border-radius: 10px;
    min-width: 300px;
    min-height: 200px;
}
</style>