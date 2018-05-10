$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '977617522',
        target: 'instafeed',
        clientId: '8197ce5e132f4ad6aa1ad85ad821f6ea',
        accessToken: '977617522.8197ce5.f3f18d80860b48a5a523f82de0921a05',
        limit: 15,
        resolution: 'standard_resolution',
        sortBy: 'most-recent',
        template: '<article class="6u 12u$(xsmall) work-item"><a href="{{image}}" class="image fit thumb"><img src="{{image}}" alt="{{image}}" /></a><h3><a href={{link}} target="_blank"> Posted on {{model.created_time}}</a> </h3><p>{{caption}} @ {{location}}</p></article>',
        filter: function(image) {

        var date = new Date(image.created_time*1000);

        m = date.getMonth();
        d = date.getDate();
        y = date.getFullYear();

        var month_names = new Array ( );
        month_names[month_names.length] = "Jan";
        month_names[month_names.length] = "Feb";
        month_names[month_names.length] = "Mar";
        month_names[month_names.length] = "Apr";
        month_names[month_names.length] = "May";
        month_names[month_names.length] = "Jun";
        month_names[month_names.length] = "Jul";
        month_names[month_names.length] = "Aug";
        month_names[month_names.length] = "Sep";
        month_names[month_names.length] = "Oct";
        month_names[month_names.length] = "Nov";
        month_names[month_names.length] = "Dec";

        var thetime = month_names[m] + ' ' + d + ' ' + y;

        image.created_time = thetime;

        return true;
    }
    });


    userFeed.run();
});
