$(".CTE").click(function() {
     $(".delete").hide();
     $(".second").show();
      $(".third").hide();
            $(".forth").hide();
     $(".fifth").hide();
    
     $(".Academics").show();
      $(".CTE").hide();
        $(".Students").show();
  $(".Family").show();
      $(".Home").show();
    
});
   $(".Academics").click(function() {
     $(".delete").hide();
     $(".second").hide();
         $(".forth").hide();
        $(".third").show();
        $(".fifth").hide();
           $(".Academics").hide();
        $(".Students").show();
      $(".CTE").show();
  $(".Family").show();
      $(".Home").show();
    
       
    
});
   $(".Students").click(function() {
    
     $(".delete").hide();
     $(".second").hide();
        $(".third").hide();
        $(".forth").show();
        $(".fifth").hide();
         $(".Students").hide();
         $(".Academics").show();
           $(".CTE").show();
        $(".Family").show();
         $(".Home").show();
    
});
    $(".Family").click(function() {
       
     $(".delete").hide();
        $(".third").hide();
        $(".forth").hide();
        $(".fifth").show();
        
         $(".Second").show();
          $(".Academics").show();
      $(".CTE").show();
        $(".Students").show();
  $(".Family").hide();
      $(".Home").show();
    });



  $(".Home").click(function() {
       
     $(".delete").show();
        $(".third").hide();
        $(".forth").hide();
        $(".fifth").hide();
         $(".Second").hide();
          $(".Academics").show();
      $(".CTE").show();
        $(".Students").show();
  $(".Family").show();
      $(".Home").hide();
    });



