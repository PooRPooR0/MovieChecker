<template>
    <div class="content">
        <login-form @enter="login"/>
        <span class="content_redir">
            У тебя все еще нет аккаунта?<br/><router-link to="/signup">Зарегестрироваться</router-link>
        </span>
    </div>
</template>

<script>
import LoginForm from "@/components/LoginForm"
import {checkUser} from "@/firebase"

export default {
    components: {
        LoginForm,
    },
    methods: {
        async login(user) {
            const res = await checkUser(user)
            if (res) {
                this.$store.commit("setAuthLogin", user.login)
                this.$router.push('/all-films')
            }
        }
    }
}
</script>

<style scoped>
.content {
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content_redir {
    text-align: center;
    color: rgb(187, 187, 187);
}

.content_redir a {
    color: white;
}
</style>