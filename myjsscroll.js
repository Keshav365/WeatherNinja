$('document').ready(function(){
    $('#Mcity').hide();
    $('#Mcity').show(1000);
    $('.table-responsive').hide();
    $('#dropdd').click(function(){
        $('#Mcity').toggle(500);
        $('.card').toggle(500);
        console.log("We click");
        $('.table-responsive').fadeToggle(1000);
    })
})
