var paragraphs = document.querySelectorAll("p, h1, h2, h3");
//<.*>|\s+ for later use
for (let i = 0; i < paragraphs.length; i++){
    var words = paragraphs[i].innerHTML.split(" ");
    let tempPhrase = "";
    var tagcheck = false

    for (let j = 0; j < words.length; j++){     
        
        //ignore tags
        if (/<\/.*>/.test(words[j]) || />/.test(words[j])){
            tagcheck = false;
        }
        else if (/</.test(words[j])){
            tagcheck = true;
        }

        else if (!tagcheck){
            let subString = "";
            
            tagremover = words[j].split(">");
            actualString = tagremover[tagremover.length-1].split("");
            let half = Math.ceil(actualString.length/2);

            for (let k = 0; k<half; k++){
                subString += actualString[k];
            }
            words[j] = words[j].replace(subString, "<b>" + subString + "</b>");
        
            words[j];

        }
        tempPhrase += words[j] + " ";
        
    }
    console.log(tempPhrase);
    console.log(paragraphs[i].innerHTML);
    paragraphs[i].innerHTML = tempPhrase;
}