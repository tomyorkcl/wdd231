const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links'); 

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

//Last modification //

const lastModifiedDate = document.lastModified;
document.getElementById("last-modified").textContent = lastModifiedDate;

//Directory//

document.addEventListener("DOMContentLoaded", () => {
  fetchMembers();
});

async function fetchMembers() {
  const response = await fetch("data/members.json");
  const members = await response.json();
  displayMembers(members);
}

function displayMembers(members, view = "grid") {
  const container = document.querySelector("#members-container");
  container.innerHTML = ""; 

  members.forEach(member => {
      const memberCard = document.createElement("div");
      memberCard.classList.add("member-card", view);

      memberCard.innerHTML = `
          <img src="images/${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
          <p class="membership-level">Membership: ${getMembershipLevel(member.membership)}</p>
      `;

      container.appendChild(memberCard);
  });
}

function getMembershipLevel(level) {
  return level === 3 ? "Gold" : level === 2 ? "Silver" : "Member";
}

// Toggle between grid and list view
document.querySelector("#toggle-view").addEventListener("click", function () {
  const container = document.querySelector("#members-container");
  if (container.classList.contains("grid")) {
      container.classList.remove("grid");
      container.classList.add("list");
      this.textContent = "Switch to Grid View";
  } else {
      container.classList.remove("list");
      container.classList.add("grid");
      this.textContent = "Switch to List View";
  }
});


// Modals section
document.getElementById("timestamp").value = new Date().toISOString();

function showModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}




function saveFormData(event) {
  event.preventDefault(); 

  // Save data in sessionStorage
  sessionStorage.setItem('fname', document.getElementById('fname').value);
  sessionStorage.setItem('lname', document.getElementById('lname').value);
  sessionStorage.setItem('email', document.getElementById('email').value);
  sessionStorage.setItem('phone', document.getElementById('phone').value);
  sessionStorage.setItem('org', document.getElementById('org').value);
  sessionStorage.setItem('membership', document.querySelector('select[name="membership"]').value);
  sessionStorage.setItem('description', document.querySelector('textarea[name="description"]').value);

  window.location.href = 'thankyou.html';
}