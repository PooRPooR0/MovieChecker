<template>
    <form @submit.prevent class="signup_form">
        <h4 class="signup_form__header">Регистрация</h4>
        <custom-input
            placeholder="Логин"
            v-model="user.login"
        />
        <custom-input
            placeholder="Пароль"
            v-model="user.password"
            type="password"
        />
        <main-button @click="createUser">Создать аккаунт</main-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            user: {
                login: '',
                password: '',
            }
        }
    },
    methods: {
        createUser() {
            this.$emit("create", this.user)
        }
    }
}
</script>

<style scoped>
.signup_form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #363639;
    border-radius: 5px;
    padding: 10px;
}

.signup_form__header {
    color: white;
    text-align: center;
    background: #1D1D1D;
    border-radius: 5px;
    margin-bottom: 0px;
}
</style>