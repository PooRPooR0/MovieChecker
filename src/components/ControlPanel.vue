<template>
    <div class="controlPanel">
        <div class="controlPanel__search">
            <input
                :value="searchQuery"
                @input="changeQuery"
                class="search"
                type="text"
                placeholder="Поиск..."
            />
            <select v-model="selectedSort" @change="changeSort" class="sortSelect">
                <option disabled value="">Сортировка</option>
                <option
                    v-for="option of sortOption"
                    :key="option.value"
                    :value="option.value"
                >
                    {{ option.name }}
                </option>
            </select>
        </div>
        <rounded-button @click="changeShowFilmForm"><icon name="plus" /></rounded-button>
    </div>
</template>

<script>
export default {
    props: {
        selectedSort: {
            type: String
        },
        searchQuery: {
            type: String
        },
        sortOption: {
            type: Array
        }
    },
    methods: {
        changeSort(e) {
            this.$emit("update:selectedSort", e.target.value)
        },
        changeQuery(e) {
            this.$emit("update:searchQuery", e.target.value)
        },
        changeShowFilmForm() {
            this.$emit("showCreateFilmForm")
        }
    }
}
</script>

<style>
.controlPanel {
    display: flex;
    height: 30px;
    gap: 20px;
}

.controlPanel__search {
    flex: 1 0;
    display: flex
}

.search {
    flex: 1 0;
    background: #363639;
    border: 1px solid #292929;
    padding: 0 10px;
    border-radius: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    color: #c7c7c7;
}

.search::placeholder {
    color: #1D1D1D;
}

.search:focus-visible {
    background: #363639;
    outline: none;
}

.sortSelect {
    background: #E7BA1D;
    border: 1px solid #292929;
    border-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-left: 10px;
    padding-right: 5px;
    font-weight: 400;
    font-size: 14px;
    box-shadow: none;
    outline: none;
    position: relative;
}

.sortSelect option {
    background: #fff;
}
</style>