const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
           books: [
            {title: 'name of the wind', author: 'patrick rothfuss'},
            {title: '2', author: '2'},
            {title: '3', author: '3'}
           ],
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        
    }
})

app.mount('#app')