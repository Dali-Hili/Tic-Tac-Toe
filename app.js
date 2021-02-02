var counter = 0;
$('td').click(function(){
    var text = "X"
    var text2 = "O"
    if($('td').click) {
        counter++;
        console.log(counter)
    }if(counter%2!==0){
        $(this).append(text)
    }else{
        $(this).append(text2)
    }
});
