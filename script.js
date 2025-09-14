const projects = [
  {
    title: "My profile",
    description: "A designed profile with dark and light theme HTML, CSS and JavaScript.",
    tags: ["complete", "HTML", "CSS", "JavaScript", "Json"],
    link: "https://ghannaway-tech.github.io/Restaurant-menu/green_theme/profile/profile.html"
  },
  {
    title: "Restaurant Web Menu",
    description: "A profesional webpage Digital menu which updates products, categories, prices and images in real-time with an exel sheet as a server front-end. Built with HTML, CSS, JavaScript and Googlesheets.",
    tags: ["Complete", "HTML", "CSS", "JavaScript","Googlesheets"],
    link: "https://ghannaway-tech.github.io/Restaurant-menu/green_theme/"
  },
  {
    title: "Restaurant Pos",
    description: "A point of sale web system built with HTML, CSS and JavaScript.",
    tags: ["Incomplete...", "HTML", "CSS", "JavaScript", "Json"],
    link: "pos/login.html"
  },
  {
    title: "Restaurant Order-Web Menu",
    description: "A profesional webpage menu derived from Restaurant Web Menu with an exel sheet as a server front-end works with real-time ordering from a local network of the Restaurant. Built with HTML, CSS, JavaScript and Googlesheets.",
    tags: ["Incomplete...", "HTML", "CSS", "JavaScript","Googlesheets"],
    link: "index.html"
  },
  {
    title: "Movers Website",
    description: "A small movers website built with HTML, CSS, and JavaScript.",
    tags: ["Incomplete...", "HTML", "CSS", "JavaScript"],
    link: "https://ghannaway-tech.github.io/mikesdemoweb/"
  },
  {
    title: "FAQ template",
    description: "A personal FAQ template built with HTML, CSS, and JavaScript.",
    tags: ["Complete", "HTML", "CSS", "JavaScript"],
    link: "index.html"
  },
  {
    title: "QR Code generator",
    description: "A personal QR-Code generator built with HTML, CSS, and JavaScript.",
    tags: ["Complete", "HTML", "CSS", "JavaScript"],
    link: "#"
  },
  {
    title: "React Todo App",
    description: "A todo application built using React.",
    tags: ["React", "JavaScript"],
    link: "#"
  },
  {
    title: "Quotation center",
    description: "A PDF Quotation creater build with JavaScript, HTML and CSS.",
    tags: ["Incomplete...", "HTML", "CSS", "JavaScript"],
    link: "#"
  },
  {
    title: "Node API",
    description: "A RESTful API built with Node.js and Express.",
    tags: ["Node", "JavaScript"],
    link: "#"
  },
];

const projectGrid = document.querySelector('.project-grid');
const searchInput = document.getElementById('search');
const tagButtons = document.querySelectorAll('.tag');

function displayProjects(filteredProjects) {
  projectGrid.innerHTML = '';
  filteredProjects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectGrid.appendChild(card);
  });
}

function filterProjects() {
  const searchTerm = searchInput.value.toLowerCase();
  const activeTag = document.querySelector('.tag.active')?.dataset.tag;
  let filtered = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm) || project.description.toLowerCase().includes(searchTerm);
    const matchesTag = activeTag === 'all' || project.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });
  displayProjects(filtered);
}

searchInput.addEventListener('input', filterProjects);

tagButtons.forEach(button => {
  button.addEventListener('click', () => {
    tagButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    filterProjects();
  });
});

// Dark Mode
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.getElementById('themeToggle').textContent =
    document.body.classList.contains('dark') ? '🌞' : '🌗';
});

// Clipboard Utility
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Copied to clipboard!');
  });
}

// Back to Top
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize
document.querySelector('.tag[data-tag="all"]').classList.add('active');
displayProjects(projects);

