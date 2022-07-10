<template>
    <label for="file-upload">
        Выберите изображение<br/>
        <input @change="setFileName" id="file-upload" type="file" class="file_input"/>
        <span id="imageName">{{ imageName === "" ? "Пусто" : imageName}}</span>
    </label>
</template>

<script>
export default {
    name: "file-input",
    data() {
        return {
            imageName: ""
        }
    },
    methods: {
        setFileName(e){
            if (e.target.files.length > 0) this.imageName = e.target.files[0].name
            else this.imageName = ""
        }
    }
}
</script>

<style scoped>
.file_input {
    display: none;
}

label {
    cursor:pointer;
    width: 100%;
    padding: 0 10px;
    border-radius: 10px;
    background: #363639;
    border: 1px solid #292929;
    color: #c7c7c7;
    text-align: center;
}

label span {
    color: #949494;
}
</style>