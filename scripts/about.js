//DINAMYC EXPERIENCES
//EVEN GOES LEFT, ODDS GO RIGHT
const experience = [
    {
        title: "Chief Technology Officer",
        company: "Oncrets",
        period: "Oct 2022 - Present",
        location: "Curitiba, Paraná, Brazil",
        description: "As a Software Engineer & CTO at Oncrets, I am responsible for leading a talented engineering team to deliver high-quality, scalable software solutions. I work closely with cross-functional teams, including product managers and designers, to define technical requirements and ensure successful project delivery.",
        mainSkills: "Software Development (Javascript, Node.js, React.js, Python, NPM, HTML, CSS, REST), IoT, Project Management (Agile, Waterfall), Team Leadership"
    },
        {
            title: "Senior Software Developer",
            company: "Pono Tecnologia",
            period: "Jun 2019 - Oct 2022",
            location: "Curitiba, Paraná, Brazil",
            description: "As the Owner of Pono Tecnologia, I led the implementation of ERP TOTVS Protheus, specializing in CRM (Sales), Finance, and BI (Business Intelligence) modules. I developed customized software solutions, focusing on enhancing operational efficiency for clients across various industries.",
            mainSkills: "Software Development (C, Javascript, Node.js, React.js, NPM, ADVPL, HTML, CSS, REST), Project Management (Agile, Waterfall), ERP implementation"
        },
    {
        title: "Product Manager",
        company: "Ideris",
        period: "Dec 2021 - Sep 2022",
        location: "Curitiba, Paraná, Brazil",
        description: "As a Product Manager at Ideris, a fast-growing marketplace HUB startup, I am responsible for defining, developing, and delivering innovative products that create value for both buyers and sellers. Working closely with cross-functional teams—design, engineering, marketing, and sales—I lead the entire product lifecycle, from ideation to launch and ongoing iteration.",
        mainSkills: "Product Management, Team Leadership, Business Process Automation, ERP integration, RESTful WebServices, Web Services API, Project Management (Agile), Product Design, Product Growth, Anti-Churn"
    },
        {
            title: "Senior Software Consultant",
            company: "TOTVS / GoLive",
            period: "Aug 2008 - May 2019",
            location: "Curitiba, Paraná, Brazil",
            description: "As a Senior Software Consultant at TOTVS, I successfully implemented ERP TOTVS Protheus across 15+ projects, focusing on CRM (Sales) and BI (Business Intelligence) modules. I played a key role in customizing solutions to meet the unique business needs of each client, ensuring smooth deployment and ongoing support.",
            mainSkills: "Software Development (C, PHP, Delphi 7, ADVPL, HTML, CSS, REST, SOAP), Project Management (Agile, Waterfall), ERP implementation, Team Leadership"
        },   
    
];

//FUNCTION TO POOPULATE DIV OF EXPERIENCES
function fillExperience() {
    //get the size of each side of the div experience and what point insert the divider
    let tam = experience.length + experience.length % 2;    
    
    //get the main conatiner of experiences to populate with experiences
    const resumeExperienceDetails = document.getElementById("resumeExperienceDetails");
    //set the height size of the div according with the half number of experiences which has a max-height of 45vh with paddings, margins and borders
    if (window.innerWidth > 1200) {
        resumeExperienceDetails.style.height = 70*tam/2 + "vmin";
        resumeExperienceDetails.style.marginTop = 50 + "px"; 
    } else {
        resumeExperienceDetails.style.height = 100 + "%";
    }
    
    //boolean controller to append just once the divider
    let dividerAppended = false;

    //loop in all experiences
    experience.map((item, count) => {
        
        //create new div for experiences and add the class
        let newExperience = document.createElement("div");
        newExperience.classList.add("resumeExperienceDetailsCard");

        if (window.innerWidth < 1200) {                
            newExperience.style.marginBottom = 0 + "px";   
            newExperience.style.marginTop = 15 + "px";               
            
        } else {
            newExperience.style.height = 52 + "vmin";
        }                      

        // if the experience is over than the half of the exxperiences then
        // insert the divider once and give margin to its cards to create a visual 
        // effect for a better UX
        if (count+1 > Math.ceil(experience.length/2)) {
            if (!dividerAppended ) {
                let divider = document.createElement("div");
                divider.classList.add("resumeExperienceDetailsDivider");
                resumeExperienceDetails.appendChild(divider);
                dividerAppended = true;
            }            
           
            if (window.innerWidth > 1200) {
                newExperience.style.marginTop = 50 + "px";   
            }         
            
        } else {
            if (window.innerWidth > 1200) {
                newExperience.style.marginBottom = 100 + "px";
            }
        }           
        
        //create elements which goes inside of the experience card
        let title = document.createElement("h2");
        let company = document.createElement("h3");
        let period = document.createElement("h3");
        let location = document.createElement("h3");
        let description = document.createElement("p");        
        let skills = document.createElement("p");
        skills.classList.add("resumeExperienceDetailsCardSkills");

        //give the elements theis values according the experiece data
        title.textContent =  item.title;
        company.textContent = item.company;
        period.textContent = item.period;
        location.textContent = item.location;
        description.textContent = item.description;
        skills.textContent = item.mainSkills;

        //appens childs in the experience card
        newExperience.appendChild(title);
        newExperience.appendChild(company);
        newExperience.appendChild(period);
        newExperience.appendChild(location);
        newExperience.appendChild(description);
        newExperience.appendChild(skills);

        //append experience card into the experiences container.
        resumeExperienceDetails.appendChild(newExperience);
    })
}

//FUNCTION TO CREATE HTML WITH A PROFESSIONAL RESUME
function printResume() {
    var pdf = "../documents/Resume_Pedro_Molina.pdf";
    window.open(pdf);

    //document.body.innerHTML = generateResume(personalInfo, education, experience, skills);
}