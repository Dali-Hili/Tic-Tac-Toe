var counter = 0;
$('td').click(function(){
    var text = "X"
    var text2 = "O"
    if($(this).text() !== "X" && $(this).text() !== "O") {
        counter++;
    if(counter%2!==0){
        $(this).text(text)
        game()
    }else{
        $(this).text(text2)
        game()
    }
}

});
    var game = function (){
        //For the X
        if($('#1').text() === "X" && $('#2').text() === "X" && $('#3').text() === "X"){
            alert("Player one won!")
        }
        if($('#4').text() === "X" && $('#5').text() === "X" && $('#6').text() === "X"){
            alert("Player one won!")
        }
        if($('#7').text() === "X" && $('#8').text() === "X" && $('#9').text() === "X"){
            alert("Player one won!")
        }
        if($('#1').text() === "X" && $('#4').text() === "X" && $('#7').text() === "X"){
            alert("Player one won!")
        }
        if($('#2').text() === "X" && $('#5').text() === "X" && $('#8').text() === "X"){
            alert("Player one won!")
        }
        if($('#3').text() === "X" && $('#6').text() === "X" && $('#9').text() === "X"){
            alert("Player one won!")
        }
        if($('#1').text() === "X" && $('#5').text() === "X" && $('#9').text() === "X"){
            alert("Player one won!")
        }
        if($('#3').text() === "X" && $('#5').text() === "X" && $('#7').text() === "X"){
            alert("Player one won!")
        }
        //For the O

        if($('#1').text() === "O" && $('#2').text() === "O" && $('#3').text() === "O"){
            alert("Player two won!")
        }
        if($('#4').text() === "O" && $('#5').text() === "O" && $('#6').text() === "O"){
            alert("Player two won!")
        }
        if($('#7').text() === "O" && $('#8').text() === "O" && $('#9').text() === "O"){
            alert("Player two won!")
        }
        if($('#1').text() === "O" && $('#4').text() === "O" && $('#7').text() === "O"){
            alert("Player two won!")
        }
        if($('#2').text() === "O" && $('#5').text() === "O" && $('#8').text() === "O"){
            alert("Player two won!")
        }
        if($('#3').text() === "O" && $('#6').text() === "O" && $('#9').text() === "O"){
            alert("Player two won!")
        }
        if($('#1').text() === "O" && $('#5').text() === "O" && $('#9').text() === "O"){
            alert("Player two won!")
        }
        if($('#3').text() === "O" && $('#5').text() === "O" && $('#7').text() === "O"){
            alert("Player two won!")
        }
       
    }

