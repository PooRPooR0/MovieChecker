<template>
    <nav class="sidebar__nav">
        <side-bar-item to="/all-films"><icon name="video" />Все фильмы</side-bar-item>
        <side-bar-item to="/watched"><icon name="like" />Просмотренное</side-bar-item>
        <side-bar-item to="/wishes"><icon name="bookmarks" />Планируемое</side-bar-item>
        <side-bar-item to="/statistic"><icon name="stand" />Статистика</side-bar-item>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style>
.sidebar__nav {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>