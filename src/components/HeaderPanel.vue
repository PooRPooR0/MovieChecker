<template>
    <header>
        <div class="container h-100 d-flex flex-row-reverse flex-md-row justify-content-between">
            <router-link class="header__logo" to='/'>
                <icon name="logo"/>
            </router-link>
            <div v-if="!$store.getters.isAuth" class="d-none d-md-flex mt-auto mb-auto gap-3">
                <brackets-button @click="$router.push('/login')">
                    Войти
                </brackets-button>
                <main-button @click="$router.push('/signup')">Создать аккаунт</main-button>
            </div>
            <span class="name_wrapper d-none d-md-flex" v-else>
                Вы зашли как:<span class="name">{{ $store.state.authUserLogin }}</span>
            </span>
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

.name_wrapper {
    align-items: center;
    gap: 8px;
    color: rgb(184, 184, 184)
}

.name {
    color: white
}
</style>