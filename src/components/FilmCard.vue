<template>
    <div class="d-none d-lg-flex card">
        <div class="card-img-rect">
            <img class="card-image" src="@/../public/images/duna.png" alt="Movie image">
        </div>
            
        <div class="card-body">
            <h5 class="card-title">{{ film.title }}</h5>
            <p class="card-text">{{ film.type }} {{ film.year }}</p>
            <svg width="160" height="89" viewBox="0 0 160 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 28.1333L3.82222 28.8C7.64444 29.4667 15.2889 30.8 22.8978 33.2C30.5244 35.6 38.0978 39.0667 45.7244 39.0667C53.3333 39.0667 60.9778 35.6 68.5867 34.9333C76.2133 34.2667 83.7867 36.4 91.4133 38.2667C99.0222 40.1333 106.667 41.7333 114.276 40.9333C121.902 40.1333 129.476 36.9333 137.102 35.0667C144.711 33.2 152.356 32.6667 156.178 32.4L160 32.1333V23.8667L156.178 23.0667C152.356 22.2667 144.711 20.6667 137.102 21.4667C129.476 22.2667 121.902 25.4667 114.276 26.2667C106.667 27.0667 99.0222 25.4667 91.4133 24.1333C83.7867 22.8 76.2133 21.7333 68.5867 22.4C60.9778 23.0667 53.3333 25.4667 45.7244 25.0667C38.0978 24.6667 30.5244 21.4667 22.8978 20.1333C15.2889 18.8 7.64444 19.3333 3.82222 19.6L0 19.8667V28.1333Z" fill="#8D5676"/>
                <path d="M0 60.1334L3.82222 61.0667C7.64444 62 15.2889 63.8667 22.8978 65.7334C30.5244 67.6 38.0978 69.4667 45.7244 66.8C53.3333 64.1334 60.9778 56.9334 68.5867 54.1334C76.2133 51.3334 83.7867 52.9334 91.4133 54.1334C99.0222 55.3334 106.667 56.1334 114.276 55.4667C121.902 54.8 129.476 52.6667 137.102 54.6667C144.711 56.6667 152.356 62.8 156.178 65.8667L160 68.9334V31.8667L156.178 32.1334C152.356 32.4 144.711 32.9334 137.102 34.8C129.476 36.6667 121.902 39.8667 114.276 40.6667C106.667 41.4667 99.0222 39.8667 91.4133 38C83.7867 36.1334 76.2133 34 68.5867 34.6667C60.9778 35.3334 53.3333 38.8 45.7244 38.8C38.0978 38.8 30.5244 35.3334 22.8978 32.9334C15.2889 30.5334 7.64444 29.2 3.82222 28.5334L0 27.8667V60.1334Z" fill="#E2715F"/>
                <path d="M0 88.1334H3.82222C7.64444 88.1334 15.2889 88.1334 22.8978 88.1334C30.5244 88.1334 38.0978 88.1334 45.7244 88.1334C53.3333 88.1334 60.9778 88.1334 68.5867 88.1334C76.2133 88.1334 83.7867 88.1334 91.4133 88.1334C99.0222 88.1334 106.667 88.1334 114.276 88.1334C121.902 88.1334 129.476 88.1334 137.102 88.1334C144.711 88.1334 152.356 88.1334 156.178 88.1334H160V68.6667L156.178 65.6C152.356 62.5334 144.711 56.4 137.102 54.4C129.476 52.4 121.902 54.5334 114.276 55.2C106.667 55.8667 99.0222 55.0667 91.4133 53.8667C83.7867 52.6667 76.2133 51.0667 68.5867 53.8667C60.9778 56.6667 53.3333 63.8667 45.7244 66.5334C38.0978 69.2 30.5244 67.3334 22.8978 65.4667C15.2889 63.6 7.64444 61.7334 3.82222 60.8L0 59.8667V88.1334Z" fill="#E7BA1D"/>
            </svg>
        </div>

        <div class="card-footer">
            <span class="card-state">{{ film.state }}</span>
            <gamburger-button size="small"></gamburger-button>
        </div>
    </div>

    <div class="d-flex d-lg-none small-card">
        <span class="small-card__title">{{ film.title }}</span>
        <span class="small-card__text">{{ film.type }} {{ film.year }}</span>
        <span class="small-card__state">{{ film.state }}</span>
        <gamburger-button size="small"></gamburger-button>
    </div>
</template>

<script>
export default {
    props: {
        film: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.card {
    width: 160px;
    border: 1px solid #1F1F1F;
    background: none;
    border-radius: 10px;
    overflow: hidden;
    color: #000;
}

.card-img-rect {
    height: 192px;
    overflow: hidden;
}

.card-image {
    position: relative;
    width: 100%;
}

.card-body {
    position: relative;
    background: #E7BA1D;
    padding: 0 10px;
}

.card-body svg {
    position: absolute;
    bottom: calc(100% - 1px);
    left: 0;
    right: 0;
}

.card-title {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    margin-bottom: 5px;
}

.card-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 5px;
}

.card-footer {
    background: #1F1F1F;
    padding: 3px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    fill: white;
}

.card-state {
    color: #fff;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
}

.small-card {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: #363639;
    border-radius: 4px;
    color: white;
    fill: white;
    padding: 3px 10px;
    font-size: 13px;
    font-weight: 600;
}

.small-card__title {
    flex: 2 0;
}

.small-card__text {
    flex: 1 0;
}

.small-card__state {
    flex: 1 0;
}
</style>