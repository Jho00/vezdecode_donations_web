<template>
    <div>
        <input type="file" ref="file" class="d-none" @change="onFileChange" />

        <span
            class="cross-wrap position-absolute"
            v-if="imagePath"
            @click="imagePath = ''; $refs.file.value=''"
        >
            <img
                src="../../assets/images/cross.png"
                alt=""
                class="cross-icon float-right w-100 h-100"
            />
        </span>

        <div
            class="cover"
            @click="imagePath ? () => {} : $refs.file.click()"
            :class="{ bordered: !imagePath }"
        >
            <img
                v-if="imagePath"
                :src="imagePath"
                alt=""
                class="w-100 h-100 cover-img"
            />
            <div class="container h-100 text-center">
                <div
                    class="row h-100 justify-content-center align-items-center"
                >
                    <img
                        src="../../assets/images/image_icon.png"
                        alt=""
                        class="img-icon mr-2"
                    />
                    <span class="cover-name">Upload cover</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imagePath: ""
            }
        },
        methods: {
            onFileChange(e) {
                const file = e.target.files[0];
                this.imagePath = URL.createObjectURL(file);
                this.$emit("imageChanged", file)
            }
        }
    }
</script>

<style scoped>
    .cover {
        height: 140px;
        color: #4986cc;
        border-radius: 10px;
    }

    .bordered {
        border: 1.5px dashed #4986cc;
    }

    .cover-img {
        z-index: 100;
        object-fit: cover;
        border-radius: 10px;
    }

    .cross-wrap {
        width: 24px;
        height: 24px;
        z-index: 200;
        background: #99a2ad;
        border: 2px solid white;
        border-radius: 12px;
        right: 24px;
        top: 60px;
    }

    .cross-icon {
        transform: scale(0.55);
    }

    .cover-name {
        font-family: "SFProText-Medium";
        font-size: 16px;
    }

    .img-icon {
        width: 22px;
        height: 22px;
    }
</style>