const app = new Vue({
    el: '#app',
    data: {
        message: '',
        arr: []
    },
    methods: {
        // add list
        add: function() {
            if (this.message !== '') {
                this.arr.push(this.message);
                this.message = '';
            }
        },
        // remove list by a tag
        remove: function(index) {
            this.arr.splice(index, 1);
        },
        //clear all items
        clearAll: function() {
            this.arr = [];
        }
    }
})