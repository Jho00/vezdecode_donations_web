<template>
    <div class="snippet-body" :style="{background: `url(${imgPath}) center`}">
        <div class="snippet-info">
            <snippet-title :title="donationModel.title" :sub-title="donationModel.subTitle"/>
            <hr>
            <snippet-progress :donation-model="donationModel"/>
        </div>
    </div>
</template>

<script>
    import SnippetTitle from "./SnippetTitle";
    import SnippetProgress from "./SnippetProgress";

    export default {
        name: "SnippetBody",
        props: {
            imgPath: {
                type: String,
                default: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708'
            },
            donationModel: {
                type: Object,
                default: () => ({
                    title: "Добряши помогают котикам",
                    subTitle: "Михаил Павлович - Помощь нужна каждый день",
                    donationAll: 10000,
                    donationReal: 8750,
                    progressTitle: 'В сентябре собрано: '
                })
            }
        },
        components: {
            SnippetTitle, SnippetProgress
        },
    }
</script>

<style scoped>
.snippet-body {
    min-height: 300px;
    background: #FFFFFF;
    display: flex;

    /* Light / Image Border */

    border: 0.5px solid rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    /* Elevation · Snippet */

    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.01);
    border-radius: 10px;
}

.snippet-body .snippet-info {
    align-self: flex-end;
    height: 50%;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    background: white;
}
</style>