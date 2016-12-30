
$("#ajouterTache").click(function(){
        var nouvelleTache = $("#nouvelleTache").val();
        console.log(nouvelleTache);
        $("#listeTache").append('<li> <input type="checkbox" name="statutTache">'+nouvelleTache+"</li>");
    });

$("#filtreTache").click(function(){
        //var filtreTache = $("#nouvelleTache").val();
        console.log("merci de filtrer");
        //$("#listeTache").append('<li> <input type="checkbox" name="statutTache">'+nouvelleTache+"</li>");
    //$("input[type='checkbox']").hide();
    $("input:checked").parent().hide();

    });

