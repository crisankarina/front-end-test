function BigButton(number, title, description){
    this.title = title;
    this.description = description;
    this.number = number;
}

BigButton.prototype.createInterfaceObject = function (){
    var divContainer = document.createElement("div");
    divContainer.classList.add("businessElementContainer");

    var numberContainer = document.createElement("div");
    numberContainer.classList.add("businessNumber");
    numberContainer.innerHTML = this.number;

    var contentContainer = document.createElement("div");
    contentContainer.classList.add("businessContent");

    var titleContainer = document.createElement("p");
    titleContainer.innerHTML = this.title;
    titleContainer.classList.add("businessTitle");

    var descriptionContainer = document.createElement("p");
    descriptionContainer.classList.add("businessDescription");
    descriptionContainer.innerHTML = this.description;

    var plusContainer = document.createElement("p");
    plusContainer.classList.add("businessPlus");
    plusContainer.innerHTML = "+";

    var minusContainer = document.createElement("p");
    minusContainer.classList.add("businessMinus");
    minusContainer.innerHTML = "-";

    contentContainer.append(titleContainer);
    contentContainer.append(descriptionContainer);
    contentContainer.append(plusContainer);
    contentContainer.append(minusContainer);

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

    var titleContainer = document.createElement("p");
    titleContainer.classList.add("smallTitleClass");
    titleContainer.innerHTML = this.title;

    var descriptionContainer = document.createElement("p");
    descriptionContainer.classList.add("smallDescriptionClass");
    descriptionContainer.innerHTML = this.description;

    var plusContainer = document.createElement("p");
    plusContainer.classList.add("smallPlusClass");
    plusContainer.innerHTML = "+";

    var minusContainer = document.createElement("p");
    minusContainer.classList.add("smallMinusClass");
    minusContainer.innerHTML = "-";

    divContainer.append(titleContainer);
    divContainer.append(descriptionContainer);
    divContainer.append(plusContainer);
    divContainer.append(minusContainer);

    return divContainer;
}


