var toastTrigger;
var toastLiveExample;
var toastBootstrap;


$(window).on("load", function (e) {
    toastTrigger = document.getElementById('button-download-share')
    toastLiveExample = document.getElementById('live-toast')

    toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
});

function showToast(text) {

    var lang = document.getElementById('html').getAttribute('lang');


    document.querySelector('#live-toast').querySelector("#toast-message").innerHTML = translations[lang][text];
    toastBootstrap.show()
}