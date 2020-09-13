<template>
    <div>
        <p>{{title}}</p>
        <div class="progress" :class="`${isGreen ? 'color-green' : 'color-blue'}  ${isBig ? 'big' : 'small'}`">
            <div class="progress-real"
                 style="display: flex; padding-right: 10px;"
                 :style="{width: `${percentage}%`}"
                 :class="`${isGreen ? 'color-green-real' : 'color-blue-real'}  ${isBig ? 'big' : 'small'}`">
                <span v-if="isBig" class="real">{{real}} / {{all}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VkProgress",
        props: {
            percentage: {
                type: Number, required: true
            },
            title: {
                type: String, default: ''
            },
            isGreen: {
                type: Boolean, default: false
            },
            isBig: {
                type: Boolean, default: false
            },
            all: {
                type: Number, default: 0
            },
            real: {
                type: Number, default: 0
            }
        }
    }
</script>

<style scoped>
.progress {
    width: 100%;
    border-radius: 2px;
}
.progress-real {
    height: 100%;
    border-radius: 2px;

    transition: .3s all;
}

.color-blue {
    background: #9cc4ec;
}
.color-blue-real {
    background: #3F8AE0;
}

.color-green {
    background: #EBEDF0;
}
.color-green-real {
    background: #4BB34B;;
}

.small {
    height: 4px;
}
.big {
    height: 25px;
}

.real {
    display: flex;
    margin-left: auto;
    color: white;
    margin-top: 13px;
    width: max-content;
}
</style>