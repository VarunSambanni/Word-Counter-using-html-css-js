$(document).ready(function() {
	document.querySelector("#count")
    .addEventListener("click", function (event){
    	if(document.querySelector("#content").value != null){
    	var string = document.querySelector("#content").value ;
    	console.log(string);
    	var cnt = 0;
    	var words = 0;
    	var sen = 0 ;
    	console.log("Characters: " + string.length);
  
    	for(var i = 0; i < string.length - 1; i++){
    		if((string[i] == " " && string[i + 1] != " " && string[i + 1] != "\n") || (string[i] == "." && string[i + 1] != " " && string[i - 1] != ".") || (string[i] == "\n" && string[i - 1] != "." && string[i - 1] != " " && string[i - 1] != "\n"))
    			words ++ ;
    		if(string[i] == ".")
    			sen ++ ;
    		if(string[i] == "\n")
    			cnt ++ ;
    		
    	}
    	words ++ ;	
        if(string.length == 0)
            words = 0 ;
    	console.log("Words: " + words);
    	console.log("Sentences: " + sen);
    	document.querySelector("#display").innerHTML = "<b>" + "CHARACTERS: " + (string.length - cnt) + "<br/>" + "WORDS: " + words + "<br/>" + "SENTENCES: " + sen + "</b>" ;
    	}
    });
});