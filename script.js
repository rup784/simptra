'use strict';

var simpatra = new Vue({
    el: '.simpatra',
    data: function data() {
        return {
            magicCards: []
        };
    },
    created: function created() {
        this.loadCards();
    },
    updated: function updated() {
        this.slickInitiate();
    },
    methods: {
        loadCards: function loadCards() {
            var _this = this;

            axios.get('https://my-json-server.typicode.com/simpatra/mockapi/products').then(function(response) {
                var cardData = response.data;
                var cardDataLength = cardData.length;
                for (var index = 0; index < cardDataLength; index++) {
                    _this.magicCards.push(cardData[index]);
                }
            });
        },

        cartClick: function cartClick(event) {
            event.preventDefault();
            $(".shopping-cart").fadeToggle("fast");
        },
        slickInitiate: function slickInitiate() {
            $(document).ready(function() {
                $('.your-class').slick({
                    dots: true,
                    arrows: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    autoplaySpeed: 2000
                });
            });
        }
    },
    computed: {
        hasCards: function hasCards() {
            return this.magicCards.length <= 0;
        }
    }
});