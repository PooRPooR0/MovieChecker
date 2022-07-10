<template>
    <form @submit.prevent class="login_form">
        <h4 class="login_form__header">Вход</h4>
        <custom-input
            placeholder="Логин"
            v-model="user.login"
        />
        <custom-input
            placeholder="Пароль"
            v-model="user.password"
            type="password"
        />
        <main-button @click="login">Войти</main-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            user: {
                login: "",
                password: "",
            }
        }
    },
    methods: {
        login(){
            this.$emit("enter", this.user)
        }
    }
}
</script>

<style scoped>
.login_form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #363639;
    border-radius: 5px;
    padding: 10px;
}

.login_form__header {
    color: white;
    text-align: center;
    background: #1D1D1D;
    border-radius: 5px;
    margin-bottom: 0px;
}
</style>