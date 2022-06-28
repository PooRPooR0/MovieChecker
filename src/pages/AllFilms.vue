<template>
    <div>
        <h-page>Все твои фильмы</h-page>
        <div class="content-wrapper">
            <control-panel></control-panel>
            <films-list :films="films"></films-list>
        </div>
    </div>
</template>

<script>
import ControlPanel from "@/components/ControlPanel"
import FilmsList from "@/components/FilmsList"

export default {
    components: {
        ControlPanel,
        FilmsList,
    },
    data() {
        return {
            films: [
                {
                    id: 0,
                    title: "Дюна",
                    typr: "Фильм",
                    year: 2021,
                    state: "Просмотренно"
                },
            ]
        }
    }
}
</script>

<style scoped>
.content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
}
</style>