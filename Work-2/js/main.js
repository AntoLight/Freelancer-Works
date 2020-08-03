$(document).ready(function () {
    // Cards Animation Destop
    var map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map).bindPopup("Our Company").openPopup();
    (function ($) {
        function mediaSize() {}

        mediaSize();

        window.addEventListener("resize", mediaSize, false);
    })(jQuery);

    // Cards
    let cards = $("#cards");

    var waypoint = new Waypoint({
        element: $(cards),
        handler: function (direction) {
            cards.css({
                visibility: "visible",
            });
            cards.addClass("fadeInBottom");

            this.destroy();
        },
        offset: 800,
    });

    // Sight
    let sight = $("#sight");
    var waypoint = new Waypoint({
        element: $(sight),
        handler: function (direction) {
            sight.addClass("fadeInLeft");

            this.destroy();
        },
        offset: 1000,
    });

    // Discovery
    let discovery = $("#discovery");
    var waypoint = new Waypoint({
        element: $(discovery),
        handler: function (direction) {
            discovery.addClass("fadeInLeft");

            this.destroy();
        },
        offset: 1000,
    });
});
