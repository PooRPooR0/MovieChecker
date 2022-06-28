<template>
    <div class="films_list">
        <film-card v-for="film of films" :film="film" :key="film.id"></film-card>
    </div>
</template>

<script>
import FilmCard from "@/components/FilmCard"

export default {
    components: {
        FilmCard,
    },
    props: {
        films: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.films_list {
    max-width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: nowrap;
    flex-direction: column;
}

@media (min-width: 992px) {
    .films_list {
        gap: 25px;
        flex-wrap: wrap;
        flex-direction: row;
    }
}

@media (min-width: 1200px) {
    .films_list {
        gap: 30px;
    }
}
</style>