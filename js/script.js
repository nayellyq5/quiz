/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        
        var question1answer = question1(q1result)
        var totalScore;
    });

});
function question1(answer){
    if (answer === "hitting the books"){
        return 1;
    }else if(answer === "partying"){
        return 3;
    }else if(answer === "cleaning"){
        return 5;
    }else if(answer === "sleeping"){
        return 7;
    }else{answer === "going to a festival"
        return 9;
    }
}
