<template>
    <div>
        <burger-menu-item to="/all-films"><icon name="video" />Все фильмы</burger-menu-item>
        <burger-menu-item to="/watched"><icon name="like" />Просмотренное</burger-menu-item>
        <burger-menu-item to="/wishes"><icon name="bookmarks" />Планируемое</burger-menu-item>
        <burger-menu-item to="/statistic"><icon name="stand" />Статистика</burger-menu-item>
    </div> 
</template>

<script>
export default {
    
}
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
</style>