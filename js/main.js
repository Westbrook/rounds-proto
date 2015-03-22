(function(window, document, $, undefined){
    var sentStamp = 0,
        settings = false,
        location = false;
    navigator.geolocation.getCurrentPosition(function(position) {
        location = true;
        if (!settings)
            $('.current').removeClass('current').next().addClass('current');
    });
    $('body')
        .on('click','.current .yes',function() {
            unlist();
            if ($('.current').removeClass('current').next().addClass('current').data('step')==='done') {
                window.requestAnimationFrame(roundCheck);
            }
        })
        .on('click','.settings',function() {
            unlist();
            settings = true;
            $('.current').removeClass('current');
            $('nav').addClass('current');
        })
        .on('click','.send',function() {
            unlist();
            $('.current').removeClass('current');
            $('[data-step="done"]').addClass('current');
        })
        .on('click','.resume',function() {
            unlist();
            if (location)
                $('.current').removeClass('current').next().next().addClass('current');
            else
                $('.current').removeClass('current').next().addClass('current');
        })
        .on('click','.round',function() {
            unlist();
            $('.current').removeClass('current').prev().addClass('current');
        })
        .on('click','.list-show-recent',function() {
            unlist();
            $('.page').addClass('show-list');
            $('.list .recent').addClass('showing');
        })
        .on('click','.list-show-drinks',function() {
            unlist();
            $('.page').addClass('show-list');
            $('.list .drinks').addClass('showing');
        })
        .on('click','.list-show-locations',function() {
            unlist();
            $('.page').addClass('show-list');
            $('.list .locations').addClass('showing');
        })
        .on('click','.list-show-order',function() {
            unlist();
            $('.page').addClass('show-list');
            $('.list .order').addClass('showing');
        })
        .on('click','.drinks li:not(.fill)',function() {
            $('.drinks .fill').show();
        })
        .on('click','.locations li',function() {
            unlist();
            $('.current').removeClass('current').next().addClass('current');
        });
    function unlist() {
        $('.show-list').removeClass('show-list');
        $('.showing').removeClass('showing');
        settings = false;
    }
    function roundCheck(stamp) {
        if (!sentStamp) {
            sentStamp = stamp;
        }
        if (stamp - sentStamp > 600000) {
            $('.current').removeClass('current').prev().addClass('current');
        } else {
            window.requestAnimationFrame(roundCheck);
        }
    }
})(window, document, Zepto);
