$(document).ready(function () {
    buildMap();
});

var sw = document.body.clientWidth,
    bp = 550,
    $map = $(".map");
var static =
    "https://maps.google.com/maps/api/staticmap?center=40.440625,-79.995886&zoom=13&markers=40.440625,-79.995886&size=640x320&sensor=true";
var embed =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2863.607611475735!2d4.0896303!3d44.1327151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b44260c41abfef%3A0x6c9873604279ccbd!2sIMT%20Mines%20Al%C3%A8s!5e0!3m2!1sfr!2sfr!4v1655368815434!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>';

function buildMap() {
    if (sw > bp) {
        //If Large Screen
        if ($(".map-container").length < 1) {
            //If map doesn't already exist
            buildEmbed();
        }
    } else {
        if ($(".static-img").length < 1) {
            //If static image doesn't exist
            buildStatic();
        }
    }
}

function buildEmbed() {
    //Build iframe view
    $('<div class="map-container"/>').html(embed).prependTo($map);
}

function buildStatic() {
    //Build static map
    var mapLink = $(".map-link").attr("href"),
        $img = $('<img class="static-img" />').attr("src", static);
    $("<a/>").attr("href", mapLink).html($img).prependTo($map);
}

$(window).resize(function () {
    sw = document.body.clientWidth;
    buildMap();
    google.maps.event.trigger(map, "resize");
});

$('#bannertextContact').hide();
window.onload = function (){
    $('#bannertextContact').show();
    $('#bannertextContact').addClass('move');
};
