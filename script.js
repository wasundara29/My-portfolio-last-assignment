function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

/* Smooth scroll animation */
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("messageText").value;

    if (name && email && message) {
        document.getElementById("success-msg").innerText =
            "Thank you! Your message has been sent successfully.";

        document.querySelector(".message-form").reset();
    }
    return false; // prevent page refresh
}

// Skills Animation
const skillsSection = document.querySelector('.skills-grid');
if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skills = entry.target.querySelectorAll('.skill-item');
                skills.forEach((skill, index) => {
                    setTimeout(() => {
                        skill.classList.add('visible');
                    }, index * 150);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    observer.observe(skillsSection);
}

// Projects Animation
const projectsSection = document.querySelector('.projects-grid');
if (projectsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const projects = entry.target.querySelectorAll('.project-item');
                projects.forEach((project, index) => {
                    setTimeout(() => {
                        project.classList.add('visible');
                    }, index * 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    observer.observe(projectsSection);
}

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("active");
        } else {
            backToTopBtn.classList.remove("active");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}