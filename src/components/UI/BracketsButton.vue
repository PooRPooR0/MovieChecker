<template>
    <button class="button__brackets">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "brackets-button"
}
</script>

<style>
.button__brackets {
    border: none;
    cursor: pointer;
    padding: 7px 20px;
    font-family: 'ProximaNova', 'sans-serif';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.06rem;
    background: none;
    color: white;
    position: relative;
}

.button__brackets::before, .button__brackets::after {
    content: "";
    height: 30px;
    width: 12px;
    position: absolute;
    top: calc(50% - 15px);
    border-top: #E7BA1D 2px solid;
    border-bottom: #E7BA1D 2px solid;
}

.button__brackets::before {
    left: 0;
    border-left: #E7BA1D 2px solid;
}

.button__brackets::after {
    left: calc(100% - 12px);
    border-right: #E7BA1D 2px solid;
}

.button__brackets:hover::after, .button__brackets:hover::before {
    width: 50%;
    transition: ease-in-out 0.1s;
}

.button__brackets:hover::after {
    width: 50%;
    left: 50%;
    transition: ease-in-out 0.1s;
}

.button__brackets:not(:hover)::after, .button__brackets:not(:hover)::before {
    transition: ease-in-out 0.1s;
}

.button__brackets:active {
    background-color: #E7BA1D;
    transition: ease-out 0.2s;
    transition-property:  background-color;
}

.button__brackets:active::after, .button__brackets:active::before {
    display: none;
}

.button__brackets:focus-visible {
    outline: none;
}
</style>