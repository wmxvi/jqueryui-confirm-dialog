# jqueryui-confirm-dialog
Quick and dirty jquery ui confirmation dialog

Usage: 

    $('.my-special-link').click(function(e) {
        e.preventDefault();
        var url  = $(this).attr('href');
        var msg  = $(this).attr('rel');
        $.confirm({
            'title': 'Confirmation',
            'msg': msg,
            'url': url
        });
    });
