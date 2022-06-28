<template>
    <div class="sideBar__item">
        <router-link class="sideBar__item_a" :to='to'>
            <span class="sideBar__item_content">
                <slot></slot>
            </span>    
        </router-link>
    </div>
</template>

<script>
export default {
    name: "side-bar-item",
    props: ["to"]
}
</script>

<style scoped>
.sideBar__item {
    width: 100%;
    border-bottom: solid 2px #1A1A1A;
}

.sideBar__item:hover {
    background-color: #1F1F1F;
    border: none;
    border-radius: 4px;
    padding-bottom: 2px;
}

.sideBar__item_a {
    height: 100%;
    width: 100%;
    text-decoration: none;
}

.sideBar__item_content {
    padding: 3px 10px;
    display: flex;
    align-items: center;
    gap: 13px;
    color: #1A1A1A;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    fill: #1A1A1A;
}

.sideBar__item_content:hover {
    gap: 13px;
    color: white;
    fill: white;
}
</style>