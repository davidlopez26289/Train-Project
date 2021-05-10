let position = "0"
//1
for(let i = 0; i <input.length; i++){
    if(input[i] = "("){
        position--;
    }else{
        position++
    }
}
//2
for(let i = 0; i <input.length; i++){
    if(input[i] = "(" && input > 0){
        position--;
    }else{
        position++
    }
}
//3
for(let i = 0; i < input.length; i++)
    if(input[i] == "(") {
        if(input[i + 1] == "("){
        i++;
        position--;

    }else{
        position--;
    }
}else {
    if(input[i + 1] == ")"){
        i++;
        position++;
    }else{
        position++;
    }
}
