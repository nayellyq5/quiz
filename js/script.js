/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var q5Result = $("#question5").val();
        var q6Result = $("#question6").val();
        
        var question1answer = question1(q1Result);
        var question2answer = question2(q2Result);
        var question3answer = question3(q3Result);
        var question4answer = question4(q4Result);
        var totalScore = question1answer + question2answer + question3answer + question4answer;
    
        $(".result").html(totalScore);
        
    });

});
function question1(answer){
    if (answer === "hitting the books"){
        return 1;
    }else if(answer === "partying"){
        return 4;
    }else{answer === "sleeping"
        return 8;
    }
}

function question2(answer){
    if (answer === "Duck"){
        return 4;
    }else if(answer === "Dog"){
        return 1;
    }else{answer === "Cat"
        return 8;
    }
}  

function question3(answer){
    if (answer === "New Years"){
        return 8;
    }else if(answer === "Thanksgiving"){
        return 4;
    }else{answer === "Christmas"
        return 1;
    }
}

function question4(answer){
    if (answer === "bed"){
        return 4;
  }else if(answer === "sunblock"){
        return 8;
  }else{answer === "phone"
        return 1;
    }
}
