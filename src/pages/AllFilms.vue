<template>
    <div>
        <h-page>Все твои фильмы</h-page>
        <div class="content-wrapper">
            <control-panel
                :sortOption="sortOption"
                v-model:selectedSort="selectedSort"
                v-model:searchQuery="searchQuery"
                @showCreateFilmForm="showCreateFilmForm"
            >
            </control-panel>
            <custom-dialog v-model:show="showFilmCreate">
                zxc
            </custom-dialog>
            <films-list :films="sortedAndFilteredFilms">
            </films-list>
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
                {
                    id: 1,
                    title: "Дюна",
                    typr: "Фильм",
                    year: 2020,
                    state: "Просмотренно"
                },
            ],
            searchQuery: '',
            sortOption: [
                {name: "По возрастанию", value: "up"},
                {name: "По убыванию", value: "down"},
            ],
            selectedSort: "",
            showFilmCreate: false
        }
    },
    methods: {
        showCreateFilmForm() {
            this.showFilmCreate = true
        }
    },
    computed: {
        filteredFilms() {
            return this.films.filter((film) => {
                if (film.state !== "Просмотренно") return false
                if (!film.title.toLowerCase().includes(this.searchQuery.toLowerCase())) return false
                return true
            })
        },
        sortedAndFilteredFilms() {
            return [...this.filteredFilms].sort((l, r) => {
                if (this.selectedSort === "down") return r.year - l.year
                else if(this.selectedSort === "up") return l.year - r.year
            })
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