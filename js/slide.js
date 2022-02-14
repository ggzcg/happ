// $(function() {
    var m = 1;
    $('#music-change').on('click',function(e) {
        m++;
        if(m>2) {
            m = 1;
        }
        $('#audio').attr({src:'../mp3/' + m + '.mp3'});
        
    })
    $(window).on('selectstart', function() {return false});
// })