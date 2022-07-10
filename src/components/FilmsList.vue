<template>
    <div class="films_list">
        <div v-if="films.length > 0">
            <film-card
                v-for="film of films"
                :film="film"
                :key="film.id"
                @remove="$emit('remove', film)"
                @changeState="$emit('changeState', film)"
            />
        </div>
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
            required: true,
            default: () => []
        }
    }
}
</script>

<style scoped>
.films_list > div {
    max-width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: nowrap;
    flex-direction: column;
}

@media (min-width: 992px) {
    .films_list > div {
        gap: 25px;
        flex-wrap: wrap;
        flex-direction: row;
    }
}

@media (min-width: 1200px) {
    .films_list > div {
        gap: 30px;
    }
}
</style>