// Session 1 HW: 

// Hiding the services and only displaying main image when page is loaded
$(window).ready(function(){
    
    $('#haircut').hide()
    $('#shower').hide();
    $('#fullService').hide();
});

// On click functions for displaying services
$(function(){
    $('.sectionMenu').on('click', function(){
        $('.mainImg').hide();
    })

    $('#option1').on('click', function(){
        $('#shower').show();
        $('#haircut').hide();
        $('#fullService').hide();
        
    });
        
    $('#option2').on('click', function(){
        $('#haircut').show()
        $('#shower').hide();
        $('#fullService').hide();
        
        
    });
    $('#option3').on('click', function(){
        $('#haircut').hide()
        $('#shower').hide();
        $('#fullService').show(); 
    });

})