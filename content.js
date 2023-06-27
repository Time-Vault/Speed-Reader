var paragraphs = document.querySelectorAll("p, li, h1, h2, h3");
//<.*>|\s+ for later use
for (let i = 0; i < paragraphs.length; i++){
    var words = paragraphs[i].innerHTML.split(" ");
    let tempPhrase = "";
    let tagcheck = false

    for (let j = 0; j < words.length; j++){     
        
        //ignore tags
        if (/<*>/.test(words[j])){
            //do nothing
        }
        else if (/</.test(words[j])){
            tagcheck = true;
        }
        else if (/>/.test(words[j])){
            tagcheck = false;
        }

        else if (!tagcheck){
            let subString = "";
            
            tagremover = words[j].split(">");
            actualString = tagremover[tagremover.length-1].split("");
            //actualString = words[j].split("");
            let half = Math.floor(actualString.length/2);
            //console.log(half);

            for (let k = 0; k<=half; k++){
                subString += actualString[k];
            }
            //console.log(subString);
            words[j] = words[j].replace(subString, "<b>" + subString + "</b>");
        
            words[j];
            //console.log(words[j] + " LOOK HERE");
        }
        tempPhrase += words[j] + " ";
        
    }
    console.log(tempPhrase);
    console.log(paragraphs[i].innerHTML);
    paragraphs[i].innerHTML = tempPhrase;
}