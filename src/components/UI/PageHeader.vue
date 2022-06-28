<template>
    <h3><slot></slot></h3>
</template>

<script>
export default {
    name: "h-page",
}
</script>

<style scoped>
    h3 {
        font-weight: 700;
        font-size: 24px;
        margin: 10px 0;
        color: white;
        letter-spacing: 0.05em;
        line-height: 29px;
        min-height: 30px;
        text-align: center;
    }

    @media (min-width: 576px) {
        h3 {
            text-align: left;
            margin-top: 30px;
        }
    }

    @media (min-width: 768px) {
        h3 {
            margin-top: 10px;
        }
    }
</style>