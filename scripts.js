$(document).ready(function () {

    generateQuote();
    
    function generateQuote(){
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/quotes?limit=1',
            headers: { 'X-Api-Key': 'JSs8KwGOqrBHjCkA+Jn1YQ==2reh3TkfBRehJsjI'},
            contentType: 'application/json',
            beforeSend: function() {
                $(".loader").show();
                $("#generated-quote").hide();
            },
            success: function(result) {
                $(".loader").hide();
                $("#generated-quote").show();
                renderHTML(result);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }

    $('.container').on('click','#btn', function(){
        generateQuote();
    });

    function renderHTML(data) {
         var htmlString = "";
        for (i = 0; i < data.length; i++) {
            htmlString += "<p>" + data[i].quote + ".</p>";
            htmlString += "<span>— " + data[i].author + ".</span>";
        }
        $('#generated-quote').html(htmlString);
    }
 
});