const projects = [
  {
    title: "Robot Arm Kinematics Web Simulator",
    image: "./assets/images/projects/robot-kinematics-simulator.png",
    summary: "Interactive browser tool for FK, IK, DH parameters, Jacobian singularity analysis, and 3D robot arm visualization.",
    tags: ["Web simulation", "Kinematics", "JavaScript"],
    link: "https://zawhlainghtet.github.io/RobotKinematics/"
  },
  {
    title: "Delivery Robot Prototype",
    image: "./assets/images/projects/delivery-robot.jpg",
    summary: "Internship prototype built with Keyestudio Uno, MG90s servos, DC gear motors, L298N motor driver, buck converters, and Fusion 360 CAD.",
    tags: ["Arduino", "CAD", "Mobile robot"],
    link: "#contact"
  },
  {
    title: "Emergency GPS/GSM Device",
    image: "./assets/images/projects/emergency-device.png",
    summary: "ESP32-based emergency device using SIM900 and GPS modules to send location messages and respond to SMS location requests.",
    tags: ["ESP32", "GPS", "GSM"],
    link: "#contact"
  },
  {
    title: "Spray Robot CAD System",
    image: "./assets/images/projects/spray-robot.jpg",
    summary: "Smart garden robot concept with CAD design, component selection, camera-triggered plant spraying, and bottle-style tank mechanism.",
    tags: ["Fusion 360", "Robotics CAD", "Smart garden"],
    link: "#contact"
  },
  {
    title: "Industrial Robotic Arm",
    image: "./assets/images/projects/industrial-arm.jpg",
    summary: "Robot arm system design covering mechanical CAD, servo reverse drawings, circuits, FK, IK, DH modeling, smooth motion, and Arduino control.",
    tags: ["Robot arm", "Control", "Arduino"],
    link: "#contact"
  },
  {
    title: "Mentored Robotics Projects",
    image: "./assets/images/projects/mentored-projects.jpg",
    summary: "Mentored student robotics teams for science fair projects, helping teams win special awards, second prize, and people choice recognition.",
    tags: ["Mentoring", "Education", "Robotics teams"],
    link: "#awards"
  }
];

const projectGrid = document.querySelector("#projectGrid");

projectGrid.innerHTML = projects.map((project) => `
  <article class="project-card">
    <img src="${project.image}" alt="${project.title}">
    <div class="project-body">
      <div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
      </div>
      <div class="project-meta">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <a href="${project.link}">View related work</a>
    </div>
  </article>
`).join("");
