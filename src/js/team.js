if (document.getElementById("members")) {
  const members = [
    {
      name: "Jakub",
      role: "Founder",
      img: "/assets/img/team/jakub.png",
      twitter: "https://twitter.com/kuba_eth",
      linkedin: "https://www.linkedin.com/in/jakub-wojciechowski-5901b68/",
    },
    {
      name: "Marcin",
      role: "COO",
      img: "/assets/img/team/marcin.jpg",
      twitter: "https://twitter.com/Marcin_Kaz13",
      linkedin: "https://www.linkedin.com/in/marcin-kazmierczak1/",
    },
    {
      name: "Alex",
      role: "Oracle Lead Dev",
      img: "/assets/img/team/alex.png",
      twitter: "https://twitter.com/hatskier_me",
      linkedin: "https://www.linkedin.com/in/alex-suvorov/",
    },
    {
      name: "Piotr",
      role: "Warp Lead Dev",
      img: "/assets/img/team/ppe.jpeg",
      twitter: "https://twitter.com/ppe_warp",
      linkedin: "https://www.linkedin.com/in/piotr-p%C4%99dziwiatr-2ab105215/",
    },
    {
      name: "Asia",
      role: "Fullstack Developer",
      img: "/assets/img/team/asia.png",
      twitter: "https://twitter.com/jzi_on_fire",
      linkedin: "https://www.linkedin.com/in/asia-zio%C5%82a-600462136/",
    },
    {
      name: "Cezary",
      role: "Fullstack Developer",
      img: "/assets/img/team/cezary.png",
      twitter: "https://twitter.com/cehalihali",
      linkedin: "https://www.linkedin.com/in/cezary-h-3a1338108/",
    },
    {
      name: "Matt",
      role: "Growth",
      img: "/assets/img/team/matt.png",
      twitter: "https://twitter.com/mattgurbiel",
      linkedin: "https://pl.linkedin.com/in/mateuszgurbiel",
    },
    {
      name: "Max",
      role: "DevOps & Web3 Dev",
      img: "/assets/img/team/max.png",
      twitter: "https://twitter.com/Max_Levitskiy",
      linkedin: "https://www.linkedin.com/in/maximlevicky/",
    },
  ];

  const element = document.getElementById("members");

  members.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-12", "col-sm-5", "col-md-4", "col-lg-3");

    card.innerHTML += `
      <img class="member-picture" src="${member.img}"/>
      <div class="member-info fw-medium">
        <p class="mb-0 fs-0">${member.name}</p>
        <p  class="mb-0 fs-0">${member.role}</p>
        <div class="member-social">
        <a
          href="${member.twitter}"
          target="_blank"
          referrerpolicy="no-referrer"
        >
          <img
            class="contact-button-image"
            src="/assets/img/icons/twitter.svg"
          >
        </a>
        <a
          href="${member.linkedin}"
          style="color: #616368
          target="_blank"
          referrerpolicy="no-referrer"
        >
          <img
            class="contact-button-image"
            src="/assets/img/icons/linkedin.svg"
          >
        </a>
      </div>`;

    element.appendChild(card);
  });
}
