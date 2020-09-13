<template>
   <div>
       <h6>{{title}}</h6>
       <p>{{subTitle}}</p>
   </div>
</template>

<script>
    export default {
        name: "SnippetTitle",
        props: {
            title: {
                type: String, default: ''
            },
            subTitle: {
                type: String, default: ''
            }
        }
    }
</script>

<style scoped>

</style>