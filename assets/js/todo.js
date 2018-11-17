var list = [];

$.getJSON("assets/js/data.json", function(data){
    
    $.each(data, function(key, val){
        console.log(val[key]);  //Each item in array obj has index key starting from 0
        list.push("<li><span class='fas fa-window-close'></span> " + val[key] + "</li>");
        $("#container ul").append("<li><span class='fas fa-window-close'></span> " + val[key] + "</li>");
    });
    
});


$("ul").on("click","span",function (event) {
    console.log("click span");

    $(this).parent().fadeOut(1000, function () {
        $(this).remove();
    }).promise().done(function(){
        swal({
            title: "Are you sure?",
            text: "Your will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!"
        },
            function () {
                alert("Deleted!");
            });
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //Grab new Todo text after enter
        var toDoText =$(this).val();
        //Add a new li element
        $("ul").append("<li><span class='fas fa-window-close'></span> "+toDoText+"</li>");
        //set empty value
        $(this).val(" ");
    }

});
$("a").on("click", function(){
    
    var liChildren = [];
    var ul = $("#container ul");
    liChildren = ul[0].children;
    var j = 0;
    var toFile = [];
    $.each(liChildren, function (){
        toFile.push({[j]:$(this)[0].innerText});
        j++;

    });
    
    var newData = toFile;
    
   newData = JSON.stringify(newData);
    $.ajax({
      url: "assets/savetofile.php",
      type: "POST",
      data: {dat : newData},
      //contentType: "application/json",
      success: function(result) {
        alert(result);
      }
    });
});