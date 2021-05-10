const imageId=["a","b","c","d","e","f","g","h","i","j","k","l"];
const cImages=[1,1,2,2,3,3,4,4,5,5,6,6];
let started = false;
let bestMoves = Number.MAX_SAFE_INTEGER;
let currentMoves = 0;
let oddEven = 0;
var ii1,ii2;
var totalOpened=0;
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

$(".pick-me").click(function(){
    if(!started){
        started=true;
        shuffleArray(cImages);
        console.log(cImages);
    }
    if(oddEven===0){
        let id=$(this).attr('id');
        ii1=imageId.indexOf(id);
        $(this).attr("src", "images/" +cImages[ii1]+ ".png");
        oddEven=1;
    }
    else{
        oddEven=0;
        var id=$(this).attr('id');
        ii2 = imageId.indexOf(id);
        if(cImages[ii1]===cImages[ii2]){
            $(this).attr("src", "images/" +cImages[ii2]+ ".png");
            totalOpened+=2;
        }
        else{
            $("#"+imageId[ii1]).attr("src", "images/pick-me.jpg");
        }
        currentMoves++;
        $(".cm").text("Current Moves: "+currentMoves);
        if(totalOpened===12){
            bestMoves=Math.min(bestMoves,currentMoves);
            $(".bm").text("Best Moves: "+currentMoves);
        }        
    }
});
$(".reset-btn").click(function(){
    started = false;
    currentMoves = 0;
    totalOpened=0;
    shuffleArray(cImages);
    $(".cm").text("Current Moves: 0");
    $('.pick-me').each(function(){
        $(this).attr('src', 'images/pick-me.jpg');
  });
});