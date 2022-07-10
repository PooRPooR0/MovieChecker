<template>
    <div class="content">
        <signup-form @create="createUser"/>
        <span class="content_redir">
            Уже есть аккаунт?<br/><router-link to="/login">Войти</router-link>
        </span>
    </div>
</template>

<script>
import SignupForm from "@/components/SignupForm"
import { addNewUser } from "@/firebase"

export default {
    components: {
        SignupForm,
    },
    methods: {
        async createUser(user) {
            const ans = await addNewUser(user)
            if (ans) this.$router.push("/login")
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