<template>
    <header>
        <div class="container h-100 d-flex flex-row-reverse flex-md-row justify-content-between">
            <router-link class="header__logo" to='/'>
                <icon name="logo"/>
            </router-link>
            <div class="d-none d-md-flex mt-auto mb-auto gap-3">
                <brackets-button>Войти</brackets-button>
                <main-button>Создать аккаунт</main-button>
            </div>
            <div class="d-block d-md-none mt-auto mb-auto header__gamburger">
                <gamburger-button size="normal" @click="changeShow" />
            </div>
        </div>
    </header>
</template>

<script>

export default {
    methods: {
        changeShow() {
            this.$emit('changeShow')
        }
    }
}
</script>

<style scoped>
header {
    width: 100%;
    height: 50px;
    background-color: #363639;
    position: fixed;
    z-index: 2;
}

.header__logo {
    margin: auto 0;
    display: flex;
    align-items: center;
    fill: white;
}

.header__gamburger {
    fill: white;
}
</style>