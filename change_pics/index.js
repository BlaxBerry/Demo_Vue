window.addEventListener('load', function() {
    console.log(111);
    var app = new Vue({
        el: "#app",
        data: {
            srcArry: [
                './images/01.jpeg',
                './images/02.jpeg',
                './images/03.jpeg',
                './images/04.jpeg',
                './images/05.jpeg',
                './images/06.jpeg'
            ],
            index: 0,
        },
        methods: {
            prev: function() {
                if (this.index == 0) {
                    this.index = this.srcArry.length;
                };
                this.index--;
            },
            next: function() {
                this.index++;
                if (this.index == this.srcArry.length) {
                    this.index = 0;
                };
            }
        }
    })


})