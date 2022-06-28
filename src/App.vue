<template>
    <div class="app">
        <header-panel @changeShow="changeShowBurger" />
        <div class="container cont__main">
            <div class="row">
                <div class="d-none d-md-block col-md-4 col-lg-5 col-xl-4 h-100">
                    <side-bar />
                </div>
                <burger-menu v-model:show="burgerShow" />
                <div class="col content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderPanel from "@/components/HeaderPanel"
import SideBar from "@/components/SideBar"
import BurgerMenu from '@/components/BurgerMenu'

export default {
    components: {
        HeaderPanel,
        SideBar,
        BurgerMenu,
    },
    data() {
        return {
            burgerShow: false,
        }
    },
    methods: {
        changeShowBurger() {
            this.burgerShow = !this.burgerShow 
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

html {
    height: 100%
}

body {
    height: 100%;
    background-color: #3F3F46;
}

#app, .app {
    min-height: 100%;
}

.cont__main {
    min-height: calc(100% - 50px);
    padding-top: 50px;
}

.content {
    z-index: 1;
}

@font-face {
    font-family: "ProximaNova";
    font-weight: 400;
    font-style: normal;
    font-display: auto;
    src: url("@/../public/fonts/ProximaNova-Regular.woff");
}

@font-face {
    font-family: "ProximaNova";
    font-weight: 600;
    font-style: normal;
    font-display: auto;
    src: url("@/../public/fonts/ProximaNova-Semibold.woff");
}

@font-face {
    font-family: "ProximaNova";
    font-weight: 700;
    font-style: normal;
    font-display: auto;
    src: url("@/../public/fonts/ProximaNova-Bold.woff");
}

@font-face {
    font-family: "ProximaNova";
    font-weight: 900;
    font-style: normal;
    font-display: auto;
    src: url("@/../public/fonts/ProximaNova-Black.woff");
}
</style>