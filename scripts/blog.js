//DINAMYC EXPERIENCES
//EVEN GOES LEFT, ODDS GO RIGHT
const blogItems = [
    {
        coverImage: "../images/Heavy-Metal-Cover.jpg",
        tag: { color: "#096379", gradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,99,121,1) 35%, rgba(0,212,255,1) 100%)", text: "Music" },
        title: "Heavy Metal",
        description: "<p>Heavy metal is a genre of rock music known for its loud, powerful sound, distorted guitars, and often dark or fantastical themes.</p>" +
            "<p>Black Sabbath pioneered the genre in the late 1960s and early 1970s with songs like 'Paranoid' and 'War Pigs,' featuring doomy riffs and ominous lyrics.</p>" +
            "<p>Iron Maiden brought a melodic and fast-paced style to metal with songs like 'The Trooper' and 'Hallowed Be Thy Name', emphasizing intricate guitar work and storytelling.</p>" +
            "<p> Judas Priest, known for their twin-guitar attack and high-energy performances, helped define classic heavy metal with anthems like 'Breaking the Law' and 'Painkiller'.</p>",
        logos: ["../images/blacksabbath.jpg", "../images/ironmaiden.jpg", "../images/Judas-Priest-Emblem.jpg"]
    },
    {
        coverImage: "../images/American-Football.jpg",
        tag: { color: "#fdbb2d", gradient: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(124,253,45,1) 100%)", text: "Sports" },
        title: "Football",
        description: "<p>American football is an intense and strategic sport that blends power, speed, and intelligence. It’s often compared to chess, where every play is a battle of wits between teams." +
                     "The physicality makes it thrilling, with hard hits, incredible runs, and jaw-dropping catches. One moment can change everything—a last-second touchdown, a game-winning field goal, or a crucial interception.</p>" +
                     "<p>The teamwork involved is unmatched, as every player has a key role in executing plays.</p>" +
                    "<p>Beyond the field, football creates a deep sense of community, bonding fans and players alike. Whether it’s the excitement, the strategy, or the history, football is more than a game—it’s a cultural phenomenon. 🏈🔥</p>",
        logos: ["../images/nfl-logo.png", "../images/New-York-Giants-Logo.svg", "../images/CFL.png", "../images/CBFA.png"]
    },
    {
        coverImage: "../images/Barbecue.jpg",
        tag: { color: "#fd1d1d", gradient:"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,0.4889415238751751) 0%, rgba(252,176,69,1) 100%)", text: "Food" },
        title: "Barbecue",
        description: "<p>Barbecue is more than just food—it’s a tradition, a craft, and a feast for the senses. " +
                     "The smoky aroma of slow-cooked meat fills the air, teasing the taste buds before the first bite. " +
                     "Each region has its own style, from Texas brisket to Carolina pulled pork, all rich in history. " +
                     "The magic lies in the slow, low heat, allowing flavors to develop over hours of careful cooking. " +                     
                     "The combination of wood smoke, spice rubs, and tangy sauces makes every bite unforgettable.</p>" +
                     "<p>Barbecue isn’t just about meat—it’s about community, bringing people together around the fire. " +                                          
                     "Biting into a perfectly smoked rib, with meat falling off the bone, is pure satisfaction. " +
                     "Whether grilled, smoked, or roasted, barbecue represents patience and passion in cooking.<p>",
        logos: ["../images/picanha.jpg", "../images/ribs.jpg", "../images/ancho.jpg"]
    },    
    {
        coverImage: "../images/breakingbad.webp",
        tag: { color: "#94bbe9", gradient:"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)", text: "Art" },
        title: "Breaking Bad",
        description: "<p>Breaking Bad is a masterfully crafted crime drama that follows a high school chemistry teacher’s transformation into a criminal mastermind.</p>" +
                     "<p>Created by Vince Gilligan, the show is praised for its gripping storytelling, complex characters, and intense suspense. Bryan Cranston delivers an " + 
                     "iconic performance, bringing one of TV’s greatest character arcs to life.</p>" +
                     "<p>With stunning cinematography, sharp writing, and unpredictable twists, the series keeps viewers on edge while exploring themes of power, morality, and " + 
                     "consequences. Maintaining top-tier quality from start to finish, Breaking Bad isn’t just a show—it’s an unforgettable experience and one of the greatest TV " +
                     " series of all time.</p>",
        logos: ["../images/walter-white.png", "../images/jessie.jpg", "../images/Fring.jpg"]
    },
    {
        coverImage: "../images/protocolo-genesis.png",
        tag: { color: "#94bbe9", gradient:"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)", text: "Art" },
        title: "Protocolo Genesis",
        description: "<p>The comic book depicts a dystopian society where humanity is forced to coexist with exiled alien invaders."+
                    " The social reality revolves around a strong sense of racial segregation against the exiled aliens on our planet and their hybrid descendants.</p>" +
                     "<p>The storyline explores issues such as prejudice against a race unable to live on its home planet due to the scarcity of natural resources—but barred from Earth simply because they are not as 'human' as we are—the impacts of the inevitable racial mixing between humans and aliens, and who might have a vested interest in ensuring that this new form of racial segregation persists.</p>",
        logos: ["../images/CAPA-HQ-PROTOCOLO-GENESIS-N°-1.png", "../images/CAPA-HQ-PROTOCOLO-GENESIS-N°-2.png", "../images/CAPA-HQ-PROTOCOLO-GENESIS-N°-3.jpg"]
    },
    {
        coverImage: "../images/soccer.jpg",
        tag: { color: "#fdbb2d", gradient: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(124,253,45,1) 100%)", text: "Sports" },
        title: "Soccer",
        description: "<p>Soccer, the world's most popular sport, has seen some legendary players who have left an indelible mark on the game. " +
                     "<p>Among the greatest of all time, <strong>Pelé</strong> stands out for his incredible skill and three World Cup victories with Brazil. "+
                     "<strong>Diego Maradona</strong>, known for his dribbling genius and the iconic 'Hand of God' goal, led Argentina to World Cup glory in 1986. "+
                     "<strong>Lionel Messi</strong>, a seven-time Ballon d'Or winner, has dazzled fans with his extraordinary dribbling, playmaking, and goal-scoring ability. "+
                     "<strong>Johan Cruyff</strong>, the mastermind behind 'Total Football' revolutionized the game with his intelligence and technical brilliance.</p>",
        logos: ["../images/pele.jpg", "../images/maradona.jpg", "../images/messi.jpg", "../images/cruyff.jpg"]
    },

];

//FUNCTION TO POOPULATE DIV OF EXPERIENCES
function fillBlog() {
    //get blog main container element
    const blog = document.getElementsByClassName("blog")[0];

    //create blog items in a loop reading the data
    blogItems.map(item => {
        let blogItem = document.createElement("div");
        blogItem.classList.add("blogItem");
        let blogItemImage = document.createElement("div");
        blogItemImage.classList.add("blogItemImage");
        let blogItemText = document.createElement("div");
        blogItemText.classList.add("blogItemText");
        let blogItemTag = document.createElement("div");
        blogItemTag.classList.add("blogItemTag");
        let blogItemTitle = document.createElement("div");
        blogItemTitle.classList.add("blogItemTitle");
        let blogItemContent = document.createElement("div");
        blogItemContent.classList.add("blogItemContent");
        let blogItemLogos = document.createElement("div");
        blogItemLogos.classList.add("blogItemsLogos");

        //image      
        //let blogItemImageImage = document.createElement("img");  
        //blogItemImageImage.src = item.coverImage;   
        blogItemImage.style.backgroundImage = "url(" + item.coverImage + ")";
        //blogItemImage.appendChild(blogItemImageImage);      
        blogItem.appendChild(blogItemImage);
        //tag
        let blogItemTagSpan = document.createElement("span");
        blogItemTagSpan.textContent = item.tag.text;
        blogItemTag.style.background = item.tag.gradient;
        blogItemTag.appendChild(blogItemTagSpan);
        blogItemText.appendChild(blogItemTag);
        //title
        let blogItemTitleH2 = document.createElement("h2");
        blogItemTitleH2.textContent = item.title;
        blogItemTitle.appendChild(blogItemTitleH2);
        blogItemText.appendChild(blogItemTitle);

        //Content
        blogItemContent.innerHTML = item.description;
        blogItemText.appendChild(blogItemContent);

        blogItem.appendChild(blogItemText);
        //Logos
        item.logos.map(logo => {
            let blogItemLogosLogo = document.createElement("div");
            blogItemLogosLogo.classList.add("blogItemsLogosImage");
            let blogItemLogosLogoImage = document.createElement("img");
            blogItemLogosLogoImage.src = logo;
            blogItemLogosLogo.appendChild(blogItemLogosLogoImage);
            blogItemLogos.appendChild(blogItemLogosLogo);
        })
        blogItem.appendChild(blogItemLogos);

        //appens blog item in the main container
        blog.appendChild(blogItem);

    })
}

/*
<div class="blogItem">
    <div class="blogItemImage"></div>
    <div class="blogText">
        <div class="blogItemTag">
            <span>Music</span>
        </div>    
        <div class="blogItemTitle">
            <h2>Heavy Metal</h2>
        </div>
        <div class="blogItemContent">
            <p>
                Heavy metal is a genre of rock music known for its loud, powerful sound, distorted guitars, and
                often dark or fantastical themes. Black Sabbath pioneered the genre in the late 1960s and early
                1970s with songs like "Paranoid" and "War Pigs," featuring doomy riffs and ominous lyrics. Iron
                Maiden brought a melodic and fast-paced style to metal with songs like "The Trooper" and
                "Hallowed Be Thy Name," emphasizing intricate guitar work and storytelling. Judas Priest, known
                for their twin-guitar attack and high-energy performances, helped define classic heavy metal
                with anthems like "Breaking the Law" and "Painkiller."
                Would you like more details on any of these bands or their songs?
            </p>
        </div>
    </div>
    <div class="blogItemsLogos">
        <div class="blogItemsLogosImage"></div>
        <div class="blogItemsLogosImage"></div>
        <div class="blogItemsLogosImage"></div>
    </div>
</div>
*/