$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '977617522',
        target: 'instafeed',
        clientId: '8197ce5e132f4ad6aa1ad85ad821f6ea',
        accessToken: '977617522.8197ce5.f3f18d80860b48a5a523f82de0921a05',
        limit: 1,
        resolution: 'low_resolution',
        sortBy: 'most-liked',
        template: '<div class="gallery-item"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });




});