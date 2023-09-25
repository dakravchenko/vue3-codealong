const app = Vue.createApp({
    data() {
        return {
            url: 'http://www/thenetninja.co.uk',
            showBooks: true,
           books: [
            {title: 'name of the wind', author: 'patrick rothfuss', isFav: true},
            {title: '2', author: '2', isFav: false},
            {title: '3', author: '3', isFav: true}
           ],
           age: 45,
           x: 0,
           y: 0
        }
    },
    methods: {
        changeTitle (title) {
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e)
            if (data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')