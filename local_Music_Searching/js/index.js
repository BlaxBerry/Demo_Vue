var app = new Vue({
    el: '#app',
    data: {
        song: '',
        list: []
    },
    methods: {
        // keyup to search
        searchMusic: function() {
            let that = this;

            axios.get('./source/music_list.json?name=' + this.song).then(function(res) {
                that.list = res.data;

            }).catch(function(err) {
                console.log(err);
            })
        },
        // click to change name want to change
        clicktoChange: function(name) {
            this.song = name;
        }
    }
})