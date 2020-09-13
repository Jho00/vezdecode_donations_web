import Vue from 'vue'

const eventBus = new Vue({
    data: {
        events: {
            setPageTitle: 'setPageTitle'
        }
    },
    methods: {
        setPageTitle(title) {
            this.$emit(this.events.setPageTitle, title)
        }
    }
})

export default eventBus;