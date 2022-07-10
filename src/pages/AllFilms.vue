<template>
    <div>
        <h-page>Все твои фильмы</h-page>
        <div class="content-wrapper">
            <control-panel
                :sortOption="sortOption"
                :typeOptions="typeOptions"
                v-model:selectedSort="selectedSort"
                v-model:searchQuery="searchQuery"
                v-model:typeChoosen="typeChoose"
                @showCreateFilmForm="showCreateFilmForm"
            />
            <custom-dialog v-model:show="showFilmCreate">
                <film-create-form @create="createNewFilm"/>
            </custom-dialog>

            <h4 v-if="isFilmsLoading">Идет загрузка...</h4>
            <films-list
                v-else
                :films="sortedAndFilteredFilms"
                @remove="removeFilm"
                @changeState="changeState"
            />
        </div>
    </div>
</template>

<script>
import ControlPanel from "@/components/ControlPanel"
import FilmsList from "@/components/FilmsList"
import FilmCreateForm from "@/components/FilmCreateForm"
import { getFilms, createFilm, deleteFilm, uploadPhoto, changeStateFilm } from "@/firebase"

export default {
    components: {
        ControlPanel,
        FilmsList,
        FilmCreateForm,
    },
    data() {
        return {
            films: [],
            searchQuery: '',
            sortOption: [
                {name: "По возрастанию", value: "up"},
                {name: "По убыванию", value: "down"},
            ],
            selectedSort: "down",
            showFilmCreate: false,
            typeOptions: [
                {name: "Любые", value: "all"},
                {name: "В желаниях", value: "В желаниях"},
                {name: "Просмотренно", value: "Просмотренно"},
            ],
            typeChoose: "all",
            isFilmsLoading: true,
        }
    },
    methods: {
        showCreateFilmForm() {
            this.showFilmCreate = true
        },
        async createNewFilm(film) {
            film.user = this.$store.state.authUserLogin
            film.image = await uploadPhoto(film.image, film.user + "/" + film.image.name)
            const ans = await createFilm(film)
            if (ans) {
                this.showFilmCreate = false
                await this.fetchFilms()
            }
        },
        async removeFilm(film) {
            const ans = await deleteFilm(film)
            if (ans) {
                await this.fetchFilms()
            }
        },
        async fetchFilms() {
            this.isFilmsLoading = true
            this.films = await getFilms()
            this.isFilmsLoading = false
        },
        async changeState(film) {
            await changeStateFilm(film, "Просмотренно")
            film.state = "Просмотренно"
        }
    },
    computed: {
        filteredFilms() {
            return this.films.filter((film) => {
                if (film.user !== this.$store.state.authUserLogin) return false
                if (film.state !== this.typeChoose && this.typeChoose !== "all") return false
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
    },
    mounted() {
        this.fetchFilms()
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