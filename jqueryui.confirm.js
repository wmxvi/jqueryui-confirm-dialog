'use strict';

(function($){
    $.confirm = function(params){
        if($('#confirm-dialog').length){
            $('#confirm-dialog').remove();
        }

        var markup = [
            '<div id="confirm-dialog" title="'+params.title+'">' + params.msg,
            '<span class="ui-icon ui-icon-alert" style="float: left; margin: 0 2px 2px 0;">',
            '</div>'
        ].join('');

        $(markup).hide().appendTo('body').fadeToggle(99);
        $("#confirm-dialog").dialog({
          resizable: false,
          height:120,
          width:350,
          modal: true,
          buttons: {
            "Confirm": function() {
                if(typeof params.url == 'function') {
                  params.url();
                  return;
                }
                document.location.href = params.url;
            },
            Cancel: function() {
              $(this).dialog("close");
            }
          }
        });
    }

})(jQuery);
