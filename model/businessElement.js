function BigButton(number, title, shownDescription, hiddenDescription){
    this.title = title;
    this.shownDescription = shownDescription;
    this.hiddenDescription = hiddenDescription;
    this.number = number;
}

BigButton.prototype.createInterfaceObject = function (){
    var divContainer = document.createElement("div");
    divContainer.classList.add("businessElementContainer");
    // container that will have title number and info
    var contentContainer = document.createElement("div");
    contentContainer.classList.add("businessContent");
    // number container
    var numberContainer = document.createElement("div");
    numberContainer.classList.add("businessNumber");
    numberContainer.innerHTML = this.number;
    //container with title and shown descripiton
    var titleAndDescriptionContainer = document.createElement("div");
    titleAndDescriptionContainer.classList.add("titleAndDescriptionContainer");
    //title container
    var titleContainer = document.createElement("p");
    titleContainer.innerHTML = this.title;
    titleContainer.classList.add("businessTitle");
    //shown descripiton container
    var shownDescriptionContainer = document.createElement("p");
    shownDescriptionContainer.classList.add("shownBusinessDescription");
    shownDescriptionContainer.innerHTML = this.shownDescription;
    //hidden description container
    var hiddenDescriptionContainer = document.createElement("p");
    hiddenDescriptionContainer.classList.add("hiddenBusinessDescription");
    hiddenDescriptionContainer.innerHTML = this.hiddenDescription;
    // plus container
    var plusContainer = document.createElement("p");
    plusContainer.classList.add("bigPlusClass");
    plusContainer.innerHTML = "+";
    plusContainer.addEventListener("click", showDescription);
    //showing hidden description
    function showDescription(){
        plusContainer.style.display = "none";
        minusContainer.style.display = "inline";
        hiddenDescriptionContainer.style.display = "block";
        numberContainer.style.boxShadow = "1.5px 2.598px 24px rgba(0,0,0,0.3)";
        numberContainer.style.backgroundColor = "#050e13";
        numberContainer.style.textShadow = "1px 1px 2px black, 0 0 25px lightblue, 0 0 5px darkblue";
        titleAndDescriptionContainer.style.boxShadow = "1.5px 2.598px 24px rgba(0,0,0,0.3)";
    
    }
    //hiding description
    function hideDescription(){
        plusContainer.style.display = "inline";
        hiddenDescriptionContainer.style.display = "none";
        minusContainer.style.display = "none";
        numberContainer.style.boxShadow = "none";
        numberContainer.style.backgroundColor = "#53b8c4";
        numberContainer.style.textShadow = "none";
        titleAndDescriptionContainer.style.boxShadow = "none";

    }
    //minus container
    var minusContainer = document.createElement("p");
    minusContainer.classList.add("bigMinusClass");
    minusContainer.innerHTML = "-";
    minusContainer.addEventListener("click", hideDescription);

    //appending all
    titleAndDescriptionContainer.append(titleContainer);
    titleAndDescriptionContainer.append(shownDescriptionContainer);
    titleAndDescriptionContainer.append(plusContainer);
    titleAndDescriptionContainer.append(minusContainer);
    contentContainer.append(titleAndDescriptionContainer);
    contentContainer.append(hiddenDescriptionContainer);
    // contentContainer.append(plusContainer);
    // contentContainer.append(minusContainer);

    divContainer.append(numberContainer);
    divContainer.append(contentContainer);

    return divContainer;
}

function SmallButton(title, description){
    this.title = title;
    this.description = description;
}

SmallButton.prototype.createInterfaceObject = function(){
    var divContainer = document.createElement("div");
    divContainer.classList.add("smallElementsContainer");

    var blueBar = document.createElement("div");
    blueBar.classList.add("blueBarClass")

    var titleContainer = document.createElement("p");
    titleContainer.classList.add("smallTitleClass");
    titleContainer.innerHTML = this.title;

    var smallDescriptionBackground = document.createElement("div");
    smallDescriptionBackground.classList.add("smallDescriptionBackground");

    var descriptionInformation = document.createElement("p");
    descriptionInformation.classList.add("smallDescriptionClass");
    descriptionInformation.innerHTML = this.description;

    var plusContainer = document.createElement("p");
    plusContainer.classList.add("smallPlusClass");
    plusContainer.innerHTML = "+";
    plusContainer.addEventListener("click", showDescription);

    var minusContainer = document.createElement("p");
    minusContainer.classList.add("smallMinusClass");
    minusContainer.innerHTML = "-";
    minusContainer.addEventListener("click", hideDescription);

    function showDescription(){
        plusContainer.style.display = "none";
        minusContainer.style.display = "inline";
        descriptionInformation.style.display = "inline-block";
        smallDescriptionBackground.style.display = "inline-block";
    }

    function hideDescription(){
        plusContainer.style.display = "block";
        descriptionInformation.style.display = "none";
        minusContainer.style.display = "none";
        smallDescriptionBackground.style.display = "none";
    }

    divContainer.append(titleContainer);
    divContainer.append(plusContainer);
    divContainer.append(minusContainer);
    divContainer.append(blueBar);

    smallDescriptionBackground.append(descriptionInformation);

    divContainer.append(smallDescriptionBackground);

    return divContainer;
}



