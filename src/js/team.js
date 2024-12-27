if (document.getElementById("members")) {
  const members = [
    {
      name: "Jakub",
      role: "Founder CEO",
      img: "/assets/img/team/jakub.png",
      twitter: "https://twitter.com/kuba_eth",
      linkedin: "https://www.linkedin.com/in/jakub-wojciechowski-5901b68/",
    },
    {
      name: "Marcin",
      role: "Co-Founder COO",
      img: "/assets/img/team/marcin.jpg",
      twitter: "https://twitter.com/Marcin_Kaz13",
      linkedin: "https://www.linkedin.com/in/marcin-kazmierczak1/",
    },
    {
      name: "Alex",
      role: "Co-Founder RedStone Lead Dev",
      img: "/assets/img/team/alex.png",
      twitter: "https://twitter.com/hatskier_me",
      linkedin: "https://www.linkedin.com/in/alex-suvorov/",
    },
    {
      name: "Piotr",
      role: "Co-Founder Warp Lead Dev",
      img: "/assets/img/team/ppe.jpeg",
      twitter: "https://twitter.com/ppe_warp",
      linkedin: "https://www.linkedin.com/in/piotr-p%C4%99dziwiatr-2ab105215/",
    },
    {
      name: "Matt",
      role: "RedStone Head of BD",
      img: "/assets/img/team/matt.png",
      twitter: "https://twitter.com/mattgurbiel",
      linkedin: "https://pl.linkedin.com/in/mateuszgurbiel",
    },
    {
      name: "Filip",
      role: "DeFi Degen",
      img: "/assets/img/team/filip.png",
      twitter: "https://twitter.com/Hundert1000",
      linkedin: "https://www.linkedin.com/in/filip-rogalski-0020611b3",
    },
    {
      name: "Maja",
      role: "RedStone Marketing Lead",
      img: "/assets/img/team/maja.png",
      twitter: "https://twitter.com/MajaCholewka",
      linkedin: "https://www.linkedin.com/in/majacholewka/",
    },
    {
      name: "Wolf",
      role: "Warp Marketing Lead",
      img: "/assets/img/team/wolf.png",
      twitter: "https://twitter.com/warcin101",
      linkedin: "https://www.linkedin.com/in/marcin-wilk-73895a1a2/",
    },
  ];

  const element = document.getElementById("members");

  members.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-sm-5", "col-md-4", "col-lg-3");

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
            class="big-button-image"
            src="/assets/img/icons/x.svg"
          >
        </a>
        <a
          href="${member.linkedin}"
          style="color: #616368
          target="_blank"
          referrerpolicy="no-referrer"
        >
          <img
            class="big-button-image"
            src="/assets/img/icons/linkedin.svg"
          >
        </a>
      </div>`;

    element.appendChild(card);
  });
}
