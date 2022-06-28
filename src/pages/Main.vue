<template>
  <div class="row justify-content-center main">
        <div class="col-xl-9 d-flex flex-column align-items-center align-items-md-start">
            <h1>Привет!</h1>
            <div class="main_page__text">
                <p>Это <b>Movie Tracker</b> - место, где можно составить свой список просмотренных и пока что не просмотренных фильмов или сериалов. Больше не надо все держать в голове! Просто запиши и поставь оценку!</p>
                <p>Также посети раздел статистики и узнай свои вкусы!</p>
                <p>Войди в свой аккаунт, если он у тебя есть, а если у тебя все еще нет своего аккаунта, то пожалуйста зарегестрируйся!</p>
            </div>
            <div class="main_page__buttons">
                <main-button>Создать аккаунт</main-button>
                <brackets-button>Войти</brackets-button>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {

  font-weight: 900;
  color: white;
  margin-bottom: 30px;
  letter-spacing: 0.05em;
  
}

.main_page__text {
    margin-bottom: 30px;
    color: white;
    font-weight: 400;
    font-size: 14px;
}

.main_page__buttons {
    display: flex;
    gap: 30px;
}

@media (min-width: 0) {
    .main {
        margin-top: 10px;
    }

    h1 {
        font-size: 48px;
        line-height: 58px;
    }

    .main_page__text {
        text-align: justify;
    }
}

@media (min-width: 576px) {
    .main {
        margin-top: 30px;
    }

    h1 {
        font-size: 64px;
        line-height: 78px;
    }

    .main_page__text {
        text-align: start;
    }
}

@media (min-width: 768px) {
    .main {
        margin-top: 10px;
    }
}

@media (min-width: 992px) {
    .main {
        margin-top: 60px;
    }
}
</style>