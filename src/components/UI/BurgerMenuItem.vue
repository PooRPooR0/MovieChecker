<template>
    <div class="item">
        <router-link class="item__a" :to='to'>
            <span class="item__content">
                <slot></slot>
            </span>    
        </router-link>
    </div>
</template>

<script>
export default {
    name: "burger-menu-item",
    props: ["to"],
}
</script>

<style scoped>
.item {
    width: 100%;
    border-bottom: solid 2px #E7BA1D;
    background: #1818189d;
}

.item:hover {
    background-color: #E7BA1D;
}

.item__a {
    height: 100%;
    width: 100%;
    text-decoration: none;
}

.item__content {
    padding: 10px 10px 10px 40px;
    display: flex;
    align-items: center;
    gap: 20px;
    color: white;
    fill: white;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
}

.item__content:hover {
    color: white;
}
</style>