var simpatra = new Vue({
    el: '.simpatra',
    data() {
        return {
            magicCards: []
        }
    },
    created() {
        this.loadCards()
    },
    updated() {
        this.slickInitiate()
    },
    methods: {
        loadCards: function() {
            axios.get('https://my-json-server.typicode.com/simpatra/mockapi/products')
                .then(response => {
                    const cardData = response.data;
                    const cardDataLength = cardData.length;
                    for (let index = 0; index < cardDataLength; index++) {
                        this.magicCards.push(cardData[index])
                    }
                })
        },

        cartClick: function(event) {
            event.preventDefault();
            $(".shopping-cart").fadeToggle("fast");
        },
        slickInitiate: function() {
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
        hasCards: function() {
            return (this.magicCards.length <= 0)
        }
    }
})