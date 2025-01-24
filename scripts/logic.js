$('#zero').animate({
    opacity: 0
}, 0);
$('#one').animate({
    opacity: 0
}, 0);
$('#two').animate({
    opacity: 0
}, 0);
$('#three').animate({
    opacity: 0
}, 0);
$('#four').animate({
    opacity: 0
}, 0);
$('#download').animate({
    opacity: 0
}, 0);


$('#page-start-title').animate({
    marginTop: 0,
    opacity: 1
}, 1000);


$('#page-start-description').animate({
    marginTop: 0,
    opacity: 1
}, 1000);

$('#page-start-video').animate({
    opacity: 1
}, 1000);

$('#page-start-button-download').delay(1200).animate({
    marginTop: 20,
    opacity: 1
}, 1000);

$('#page-start-social').delay(2000).animate({
    marginTop: 10,
    opacity: 1
}, 1000);

$('#zero').delay(2500).animate({
    marginTop: 40,
    opacity: 1
}, 1000);

$('#one').delay(3000).animate({
    marginTop: 10,
    opacity: 1
}, 1000);

$('#button-download').animate({
    opacity: 0,
    width: "0%"
}, 0);

$('#button-download span').animate({
    opacity: 0
}, 0);

$('#button-download-share').animate({
    opacity: 0
}, 0);


var isEnd = false;


$(window).scroll(function () {
    if ($(this).scrollTop() + window.innerHeight > 1500 /*&& $(this).scrollTop() <= 800*/) {
        $('#two').animate({
            opacity: 1
        }, 1000);
    }

    if ($(this).scrollTop() + window.innerHeight > 2100 /*&& $(this).scrollTop() <= 1250*/) {
        $('#three').animate({
            opacity: 1
        }, 1000);
    }
    if ($(this).scrollTop() + window.innerHeight > 2700 /*&& $(this).scrollTop() <= 1800*/) {
        $('#four').animate({
            opacity: 1
        }, 1000);
    }
    if ($(this).scrollTop() + window.innerHeight > 3300 /*&& $(this).scrollTop() <= 2350*/) {
        if (isEnd) return;

        $('#download').animate({
            opacity: 1
        }, 1000);
        $('#button-download').delay(1000).animate({
            opacity: 1,
            width: "100%"
        }, 600, "swing");
        $('#button-download span').delay(2000).animate({
            opacity: 1
        }, 1000);
        $('#button-download-share').delay(1600).animate({
            opacity: 1
        }, 1000);
        $('#button-download-share i').delay(1600).animate({
            opacity: 1
        }, 1000);
        isEnd = true;
    }
});

$(window).on("load", function (e) {
    $("#background").width(window.innerWidth).height(window.innerHeight);

    if ($(this).scrollTop() + window.innerHeight > 1500 /*&& $(this).scrollTop() <= 800*/) {
        $('#two').animate({
            opacity: 1
        }, 1000);
    }

    if ($(this).scrollTop() + window.innerHeight > 2100 /*&& $(this).scrollTop() <= 1250*/) {
        $('#three').animate({
            opacity: 1
        }, 1000);
    }
    if ($(this).scrollTop() + window.innerHeight > 2700 /*&& $(this).scrollTop() <= 1800*/) {
        $('#four').animate({
            opacity: 1
        }, 1000);
    }
    if ($(this).scrollTop() + window.innerHeight > 3300 /*&& $(this).scrollTop() <= 2350*/) {
        if (isEnd) return;

        $('#download').animate({
            opacity: 1
        }, 1000);
        $('#button-download').delay(1000).animate({
            opacity: 1,
            width: "100%"
        }, 600, "swing");
        $('#button-download span').delay(2000).animate({
            opacity: 1
        }, 1000);
        $('#button-download-share').delay(1000).animate({
            opacity: 1
        }, 1000);
        isEnd = true;
    }

    var url = document.URL;
    var anchorIndex = url.indexOf('#');

    if (anchorIndex != -1) {
        scrollToAnchor(url.substring(anchorIndex, url.length));
    }
    else if (anchorIndex == -1) {
        document.getElementById(url.substring(anchorIndex, url.length)).scrollIntoView();
    }
});

$("#footer").html("FOX LAUNCHER - " + new Date().getFullYear());

$(window).on("resize", function (e) {
    $("#background").width(window.innerWidth).height(window.innerHeight);
});

function scrollToAnchor(name) {
    location.hash = "";
    location.hash = name;
}

function shareDownload() {
    var clearedLink = document.URL.split("#")[0];
    navigator.clipboard.writeText(clearedLink + "#download");

    showToast("linkCopied"); // using translations dictionary value from translations.js
}