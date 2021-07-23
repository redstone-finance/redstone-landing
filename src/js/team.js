if (document.getElementById("members")) {
    const members = [
        {
            name: "Jakub",
            role: "Founder",
            img: "assets/img/team/jakub.png",
            email: "jakub@redstone.finance",
            linkedin: "",
            bio: "Krótki opis Jakub.I'm developing a web app that makes web service requests via Axios to an endpoint on one of our development servers. The requests are going from my local computer to an internal URL."
        },
        {
            name: "Marcin",
            role: "Head of Growth",
            img: "assets/img/team/marcin.jpg",
            email: "marcin@redstone.finance",
            linkedin: "https://www.linkedin.com/in/marcin-kazmierczak1/",
            bio: "Marcin handles strategic cooperation with DeFi protocols as well as Traditional businesses. Present in the blockchain ecosystem since 2018, his domains are Co-Opetition, Building long-term relationships, Education and \"Growing the Pie\" approach. Any doubt about cooperation options with Redstone? Write to me on Discord! Privately Travelling, Sports and understanding new cultures."
        },
        {
            name: "Alex",
            role: "Backend",
            img: "assets/img/team/alex.png",
            email: "alex@redstone.finance",
            linkedin: "https://www.linkedin.com/in/alex-suvorov/",
            bio: 'Alex has over four years of experience as a full-stack developer in both startup and corporate environments. He enjoys solving problems and bring new ideas to life. He has developed a game-based <a href="https://codenplay.io/">educational coding platform</a> and many other projects with a variety of technologies and languages.'
        },
        {
            name: "Piotr",
            role: "Blockchain",
            img: "assets/img/team/ppe.jpeg",
            email: "peter@redstone.finance",
            linkedin: "https://www.linkedin.com/in/piotr-p%C4%99dziwiatr-2ab105215/",
            bio: "Piotr considers himself an old guy (we would agree only judging his competency!), with over 15 years of experience in financial and insurance industry (and few startups), working as Software Developer and Technical Team Leader. Now he decided to take active part in the DeFi revolution. Privately father of three, fan of retro video games and drumming."
        },
        {
            name: "Piotr",
            role: "Frontend",
            img: "assets/img/team/piotr.jpeg",
            email: "pduda@redstone.finance",
            linkedin: "www.linkedin.com/in/piotr-duda-62b66b63",
            bio: 'New challenge? Sounds like a task for Piotr! In his not so long story he built a <a href="https://wutracing.pl/">racing car</a>, designed machinery for production of Tesla cars, developed numerous web apps and created furniture related company. Passionate full-stack developer with 4 years of experience, now exploring the world of blockchain!'
        }
    ]
    
    const element = document.getElementById("members");
    const bio = document.getElementById("member-bio");
    
    members.forEach((member, index) => {
        const card = document.createElement("div");
        card.classList.add("member-card","col-12","col-md-3","col-lg-2", "mb-4");
    
        const memberBio = document.createElement("div");
        memberBio.innerHTML = member.bio;
        memberBio.style.display = 'none';
    
        bio.appendChild(memberBio);
    
        card.addEventListener("mouseenter", () => {
            bio.childNodes.forEach(
                (node, i) => {
                    if (i > 0) {
                        node.style.display = ((i === (index + 1)) ? 'block' : 'none');
                    }
                }
            )
        });
    
        card.innerHTML += `
            <img class="member-picture" src="` + member.img + `"/>
            <div class="member-info fw-medium">
                <div class="member-name">` + member.name + `</div>
                <div class="member-role">` +  member.role + `</div>
                <div class="member-social">
                    <a href="mailto:` + member.email + `">
                        <img src="assets/img/icons/mail.svg">
                    </a>
                    <a href="` + member.linkedin + `" target="_blank">
                        <img src="assets/img/icons/linkedin.svg">
                    </a>
                </div>
            </div>`;
    
        element.appendChild(card);
    });
    
}
