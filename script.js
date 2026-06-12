const teamMembers = [
  {
    name: "Bill Gates",
    role: "Designer",
    email: "billgates@team.com",
    img: "img/BillGates.jpg"
  },
  {
    name: "Elon Musk",
    role: "Front-end Developer",
    email: "elonmusk@team.com",
    img: "img/ElonMusk.jpg"
  },
  {
    name: "Jeff Bezos",
    role: "Back-end Developer",
    email: "jeffbezos@team.com",
    img: "img/JeffBezos.jpg"
  },
  {
    name: "Mark Zuckerberg",
    role: "SEO Specialist",
    email: "markzuckerberg@team.com",
    img: "img/MarkZuckerberg.jpg"
  },
  {
    name: "Vitantonio Pasqualicchio",
    role: "SEO Specialist",
    email: "vitantoniopasqualicchio@team.com",
    img: "img/VitantonioPasqualicchio.jpg"
  },
  {
    name: "Lucia D'Abramo",
    role: "Veterinary Doctor",
    email: "luciadabramo@team.com",
    img: "img/LuciaD'Abramo.jpeg"
  }
];

const teamContainerDiv = document.querySelector('.team-container');

const teamMembersCardTemplate = member => `
<div class="team-card">
    <div class="card-image">
        <img src="${member.img}" alt="${member.name}">
    </div>
    <div class="card-text">
        <h3>"${member.name}"</h3>
        <p>"${member.role}"</p>
    </div>  
</div>
`;

const renderTeam = () => {

let html = '';
for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];

    html += teamMembersCardTemplate(member);
}

teamContainerDiv.innerHTML = html;
}

renderTeam();