let index = 0;

function changeColor(){
    let color = ["red","green","blue","yellow","orange","purple"]

    // document.getElementsByTagName("body")[0].style.background = color[index++];
    document.body.style.backgroundColor = color[index++]
    
    if(index > color.length -1){
        index = 0;
    }
}