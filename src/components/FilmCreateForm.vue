<template>
    <form class="formCreateFilm" @submit.prevent>
        <h4 class="form__title">Добавить фильм</h4>
        <custom-input
            placeholder="Название"
            v-model="film.title"
        />
        <custom-selector
            title="Тип"
            :options="typeOptions"
            v-model="film.type"
            @change="changeType"
        />
        <custom-selector
            title="Год"
            :options="optionsYears"
            v-model="film.year"
            @change="changeYear"
        />
        <custom-selector
            title="Состояние"
            :options="stateOptions"
            v-model="film.state"
            @change="changeState"
        />
        <file-input @change="fileChange"/>
        <main-button @click="createFilm">Создать</main-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            film: {
                title: '',
                type: 'Фильм',
                year: new Date().getFullYear(),
                state: 'В желаниях',
                image: '',
            },
            typeOptions: [
                {name: "Фильм", value: "Фильм"},
                {name: "Сериал", value: "Сериал"},
            ],
            stateOptions: [
                {name: "В желаниях", value: "В желяниях"},
                {name: "Просмотренно", value: "Просмотренно"},
            ],
        }
    },
    methods: {
        changeYear(e) {
            this.film.year = +e.target.value
        },
        changeType(e) {
            this.film.type = e.target.value
        },
        changeState(e) {
            this.film.state = e.target.value
        },
        createFilm() {
            this.$emit("create", this.film)
        },
        fileChange(e) {
            this.film.image = e.target.files[0]
        }
    },
    computed: {
        optionsYears() {
            const year = new Date().getFullYear()
            let result = []
            for (let i = 1895; i <= year; i++) {
                result.push({name: i, value: i})
            }
            return result.reverse()
        }
    }
}
</script>

<style scoped>
.form__title {
    color: white;
}

.formCreateFilm {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
</style>