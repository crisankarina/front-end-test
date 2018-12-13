$(onHtmlLoaded);

function onHtmlLoaded(){
    // big buttons
    var bigButtonsContainer = document.getElementById("bigButtonsContentId");

    var defaultDesciption = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dui sapien. Nulla ipsum magna, ornare nec diam ut, ullamcorper rhoncus dolor. Curabitur tincidunt sapien ac dignissim semper. Quisque sit amet lacinia ante, nec laoreet lectus. Nullam pharetra sagittis enim, vitae commodo turpis scelerisque et. Integer tempus commodo felis, et porttitor erat pretium eget. Aenean lorem mauris, aliquam in dui vel, sagittis pharetra urna. Quisque eget lorem sit amet est accumsan feugiat nec sed neque. Cras laoreet ipsum diam, sed laoreet purus viverra et. Donec eu nunc vulputate, tincidunt ex sit amet, posuere odio. Duis ac ex bibendum, hendrerit elit in, dignissim velit.";

    var firstBigButton = new BigButton( "01", "Our Services", defaultDesciption, defaultDesciption);

    var secondBigButton = new BigButton( "02", "Our Rates",defaultDesciption, defaultDesciption);

    var thirdBigButton = new BigButton( "03", "Case Studies", defaultDesciption, defaultDesciption);

    var fourthBigButton = new BigButton( "04", "Get a quote", defaultDesciption, defaultDesciption);

    bigButtonsContainer.append(firstBigButton.createInterfaceObject());
    bigButtonsContainer.append(secondBigButton.createInterfaceObject());
    bigButtonsContainer.append(thirdBigButton.createInterfaceObject());
    bigButtonsContainer.append(fourthBigButton.createInterfaceObject());

    //small buttons
    var smallButtonsContainer = document.getElementById("smallButtonsContentId");

    var firstSmallButton = new SmallButton("Work about", defaultDesciption);

    var secondSmallButton = new SmallButton("Test text subject", defaultDesciption);
    
    var thirdSmallButton = new SmallButton("Just a simple", defaultDesciption);
    
    var fourthSmallButton = new SmallButton("Nothing happened", defaultDesciption);

    smallButtonsContainer.append(firstSmallButton.createInterfaceObject());
    smallButtonsContainer.append(secondSmallButton.createInterfaceObject());
    smallButtonsContainer.append(thirdSmallButton.createInterfaceObject());
    smallButtonsContainer.append(fourthSmallButton.createInterfaceObject());

    // view more button
    var viewMoreButton = document.getElementById("viewMoreId");
    var viewMore = function(){
        smallButtonsContainer.append(firstSmallButton.createInterfaceObject());
        smallButtonsContainer.append(secondSmallButton.createInterfaceObject());
        smallButtonsContainer.append(thirdSmallButton.createInterfaceObject());
        smallButtonsContainer.append(fourthSmallButton.createInterfaceObject());
    } 
    viewMoreButton.addEventListener("click", viewMore);

    var articleInfo = document.getElementById("articleInfo");
    articleInfo.innerHTML = defaultDesciption;

    // click on read more on the article
    $(".readArticleContainer").on("click", function(){
        window.location = "../template/index.html";
    })

    //open and close form
    var submitButton = $("#logInButton");
    var form = $("form")
    submitButton.click(function(){
        form.slideToggle(400);
    },
    function(){
        form.slideToggle(400);
    })
}







