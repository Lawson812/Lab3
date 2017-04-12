

$(img ).onhover(function() {
    if ( $(this).height() != 50)
          $( this ).animate({ height: 100 }, 1000 );
    else
          $( this ).animate({ height: 1020 }, 1000 );
});