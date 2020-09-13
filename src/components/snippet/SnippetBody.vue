<template>
    <div class="snippet-body" :style="{background: `url(${imgPath}) center`}">

    </div>
</template>

<script>
    export default {
        name: "SnippetBody",
        props: {
            imgPath: {
                type: String,
                default: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708'
            }
        }
    }
</script>

<style scoped>
.snippet-body {
    min-height: 300px;
    background: #FFFFFF;

    /* Light / Image Border */

    border: 0.5px solid rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    /* Elevation · Snippet */

    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.01);
    border-radius: 10px;
}
</style>