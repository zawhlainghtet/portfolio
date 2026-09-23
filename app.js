const categories = [
  { id: "all", label: "All" },
  { id: "portfolio-projects", label: "Portfolio Projects" },
  { id: "freelance", label: "Freelance / Part-time" },
  { id: "web-simulator", label: "Web Simulator" }
];

const simulatorUrl = "https://robotkinematics.study/";

const projects = [
  {
    id: "project-kinematics",
    title: "Robot Arm Kinematics Web Simulator",
    category: "web-simulator",
    image: "./assets/images/projects/robot-kinematics-ik-3d.jpg",
    summary: "Interactive browser tool with a 5/6-DOF 3D IK page, FK, DH parameters, Jacobian singularity analysis, and 3D robot arm visualization.",
    tags: ["5/6-DOF 3D IK", "Web simulation", "JavaScript", "DH / Jacobian"],
    details: [
      "Designed and developed an interactive browser-based robot arm simulator with a 5/6-DOF 3D inverse-kinematics workflow for studying spatial robot-arm motion.",
      "Includes forward kinematics, inverse kinematics, DH parameters, Jacobian singularity analysis, adjustable joint values, visual learning guidance, and exportable reports.",
      "The 3D IK page supports configurable 2- to 7-DOF chains, with 5/6-DOF setups highlighted for portfolio demonstration.",
      "Built as a robotics education and portfolio demonstration tool."
    ],
    actions: [{ label: "Open simulator", href: simulatorUrl }]
  },
  {
    id: "project-delivery-robot",
    title: "Autonomous Food Delivery Robot",
    category: "portfolio-projects",
    image: "./assets/images/projects/delivery-robot-cover-20260922.jpg",
    summary: "Autonomous service robot work for food and item delivery, covering mechanical prototyping, CAD and simulation, mobile-base integration, manipulator handling, navigation testing, and real environment trials.",
    tags: ["Service robot", "Navigation", "Manipulator", "Field testing"],
    details: [
      "Built and tested delivery robot concepts for food, item, and room-service style delivery tasks.",
      "Worked across prototype hardware, CAD simulation, navigation-path testing, sensor integration, and mobile-base platform setup.",
      "Integrated a robotic arm and tray-style payload area for pickup, carrying, and handover workflows.",
      "Validated the robot in lab and real service environments to document practical movement, interaction, and payload handling behavior."
    ],
    images: [
      { src: "./assets/images/projects/delivery-robot-cover-20260922.jpg", alt: "Autonomous food delivery robot platform with sensors, display, and mobile base" },
      { src: "./assets/images/projects/delivery-robot-prototype-platform.jpg", alt: "Early delivery robot prototype with electronics and payload shelves" },
      { src: "./assets/images/projects/delivery-robot-cad-gripper.jpg", alt: "Delivery robot CAD model with tablet display and robotic gripper" },
      { src: "./assets/images/projects/delivery-robot-navigation-sim.jpg", alt: "Delivery robot navigation simulation with path planning view" },
      { src: "./assets/images/projects/delivery-robot-lab-platform.jpg", alt: "Autonomous delivery robot platform during lab testing" },
      { src: "./assets/images/projects/delivery-robot-arm-detail.jpg", alt: "Robotic arm and tray mechanism mounted on the delivery robot" }
    ]
  },
  {
    id: "project-auv-freelance",
    title: "AUV Power and GNSS Antenna Actuation Design",
    category: "freelance",
    image: "./assets/images/projects/auv-gnss-actuation-cover.png",
    summary: "Freelance part-time engineering design work for a 50 kg autonomous underwater vehicle, covering sonar/thruster power distribution, EMI suppression, and a protected GNSS antenna lift mechanism.",
    tags: ["AUV", "Power distribution", "EMI suppression", "Mechanical CAD"],
    details: [
      "Prepared a power-distribution concept for an AUV sonar and thruster system with separated high-current thruster and low-noise sonar branches.",
      "Designed a non-contact magnetic ON/OFF control approach using a Hall sensor, ATtiny latch logic, and MOSFET switching for sealed underwater operation.",
      "Specified protection and filtering concepts including a 40 A fuse, TVS diode, ferrite bead, LC pi filter, and gate pull-down resistor to reduce conducted EMI from ESC switching.",
      "Created a protected GNSS antenna actuation concept using a waterproof linear actuator, 100 mm lift travel, 6061-T6 aluminum linkage, stainless mounting parts, and serviceable bolted assembly."
    ],
    images: [
      { src: "./assets/images/projects/auv-gnss-actuation-cover.png", alt: "AUV CAD model with raised GNSS antenna actuation mechanism" },
      { src: "./assets/images/projects/auv-power-distribution-diagram.jpg", alt: "AUV power distribution and EMI suppression block diagram" },
      { src: "./assets/images/projects/auv-linear-actuator-travel.png", alt: "Waterproof linear actuator travel diagram for 100 mm GNSS lift" },
      { src: "./assets/images/projects/auv-assembly-front.png", alt: "AUV CAD front view with sonar and GNSS antenna assembly" },
      { src: "./assets/images/projects/auv-gnss-lift-detail.png", alt: "GNSS lift linkage and protection structure CAD detail" },
      { src: "./assets/images/projects/auv-gnss-raised-detail.png", alt: "Raised GNSS antenna protection structure and actuator linkage" }
    ]
  },
  {
    id: "project-matcha-whisking",
    title: "Automatic Matcha Whisking Mechanism",
    category: "freelance",
    image: "./assets/images/projects/matcha-whisking-cover.png",
    summary: "Freelance part-time mechanism design for a compact automatic matcha whisking module, using coulisse and reciprocating gear concepts to reproduce traditional zigzag hand-whisking motion with one motor.",
    tags: ["Mechanism design", "Coulisse mechanism", "Gear design", "Product CAD"],
    details: [
      "Compared crank-slider, W/M path, and coulisse mechanism approaches for generating the whisking motion required for matcha preparation.",
      "Selected a coulisse mechanism to convert continuous rotary motor motion into smooth left-right oscillation similar to traditional hand whisking.",
      "Added a reciprocating gear concept so the whisk can also move slightly forward and backward, improving mixing coverage and foam formation while keeping a single-motor design.",
      "Designed for a compact 110 x 200 x 200 mm module with a 110 x 60 mm chasen, easy assembly, fastener-based maintenance, rubber or silicone vibration isolation, and flexible RPM stages for mixing, foaming, and finishing."
    ],
    images: [
      { src: "./assets/images/projects/matcha-whisking-cover.png", alt: "Automatic matcha whisking mechanism CAD assembly with motor, gears, and chasen" },
      { src: "./assets/images/projects/matcha-whisking-top-mechanism.png", alt: "Top view of coulisse and reciprocating gear mechanism for matcha whisking" },
      { src: "./assets/images/projects/matcha-whisking-gear-detail.png", alt: "Gear detail for the matcha whisking reciprocating mechanism" },
      { src: "./assets/images/projects/matcha-whisking-chasen-holder.png", alt: "Chasen holder CAD design with protective rubber or silicone interface" },
      { src: "./assets/images/projects/matcha-whisking-cad-view.png", alt: "Angled CAD view of automatic matcha whisking mechanism" },
      { src: "./assets/images/projects/matcha-whisking-calculation.jpg", alt: "Hand calculation notes for matcha whisking mechanism geometry and RPM" }
    ]
  },
  {
    id: "project-automotive-reverse-engineering",
    title: "Automotive Parts Reverse Engineering and CAD Modeling",
    category: "freelance",
    image: "./assets/images/projects/automotive-parts-reverse-engineering.jpg",
    summary: "Freelance part-time reverse-engineering work for automotive interior and mechanical parts, converting existing car components into clean CAD models for replacement, repair, and 3D-printable fabrication.",
    tags: ["Reverse engineering", "Automotive parts", "3D CAD", "3D printing"],
    details: [
      "Recreated automotive parts from physical references, using measurement and visual inspection to rebuild accurate CAD geometry.",
      "Modeled dashboard, switch-cover, clamp, bracket, adapter, and gear-style components with attention to mounting features and practical fitment.",
      "Prepared CAD outputs suitable for prototyping, replacement-part fabrication, and design iteration.",
      "Documented both the original car-part references and the reverse-drawn CAD models to show the full reference-to-model workflow."
    ],
    images: [
      { src: "./assets/images/projects/automotive-parts-reverse-engineering.jpg", alt: "Automotive parts reverse engineering collage showing car components and recreated CAD models" }
    ]
  },
  {
    id: "project-emergency-device",
    title: "Emergency GPS/GSM Device",
    category: "portfolio-projects",
    image: "./assets/images/projects/emergency-device.png",
    summary: "Emergency message sending and tracking device using ESP32, SIM900, and GPS to send location messages, call saved contacts, and respond to SMS location requests.",
    tags: ["ESP32", "SIM900", "GPS", "SMS"],
    details: [
      "Developed during internship as an emergency message sending and tracking prototype.",
      "Used SIM900, GPS module, and ESP32 for communication and positioning.",
      "Sends emergency messages with location data and can call a saved phone contact.",
      "Responds to SMS location requests by calculating the GPS position and sending it back through SIM900."
    ]
  },
  {
    id: "project-spray-robot",
    title: "Spray Robot CAD System",
    category: "portfolio-projects",
    image: "./assets/images/projects/spray-robot.jpg",
    summary: "Spray robot 3D CAD design for Star City Yangon Smart Garden Project, including prototype CAD, component selection, camera-triggered plant spraying, and bottle turn-opener style tank design.",
    tags: ["Fusion 360", "3D CAD", "Smart garden"],
    details: [
      "Built the CAD design for the Star City Yangon Smart Garden prototype.",
      "Selected suitable components for a plant-spraying robot concept.",
      "Designed the mechanism for camera-triggered spraying when insects or plant infection are detected.",
      "Created a bottle turn-opener style tank mechanism for the spraying system."
    ],
    images: [
      { src: "./assets/images/projects/spray-robot-detail-01.jpg", alt: "Spray robot CAD full exterior view" },
      { src: "./assets/images/projects/spray-robot-detail-02.jpg", alt: "Spray robot CAD front sensor and servo assembly" },
      { src: "./assets/images/projects/spray-robot-detail-03.jpg", alt: "Spray robot CAD cutaway internal layout" },
      { src: "./assets/images/projects/spray-robot-detail-04.jpg", alt: "Spray robot CAD electronics and sensor layout" },
      { src: "./assets/images/projects/spray-robot-detail-05.jpg", alt: "Spray robot CAD rear and side view" },
      { src: "./assets/images/projects/spray-robot-detail-06.jpg", alt: "Spray robot CAD underside drivetrain view" }
    ]
  },
  {
    id: "project-industrial-arm",
    title: "Industrial Robotic Arm",
    category: "portfolio-projects",
    image: "./assets/images/projects/industrial-arm.jpg",
    summary: "Robotic arm for industry covering system design, Fusion 360 mechanical CAD, reversed servo drawings, MCU and circuits, FK, IK, DH, control system calculation, smooth motion algorithm, and Arduino testing.",
    tags: ["Robot arm", "Control", "Arduino", "FK / IK"],
    details: [
      "Created system design and mechanical CAD in Fusion 360 for an industrial robotic arm.",
      "Prepared reversed drawings for servos, MCU layout, and circuit planning.",
      "Calculated forward kinematics, inverse kinematics, DH parameters, and control-system behavior.",
      "Built timestamp-based smooth motion algorithm and tested the process in Arduino IDE."
    ]
  },
  {
    id: "project-mentored",
    title: "Mentored Robotics Projects",
    category: "portfolio-projects",
    image: "./assets/images/projects/mentored-projects.jpg",
    summary: "Robotics projects mentored for Science Fair while working at Hyper Lab and as Computer Science Department representative mentor, supporting Tron Luna and Team New York award-winning projects.",
    tags: ["Mentoring", "Science Fair", "Robotics teams"],
    details: [
      "Mentored robotics projects for Science Fair while working at Hyper Lab and as Computer Science Department representative mentor.",
      "Supported student teams through project planning, robotics implementation, and presentation preparation.",
      "Tron Luna received a Special Award, and Team New York received Second Prize and People's Choice recognition."
    ]
  },
  {
    id: "project-crowd-counting",
    title: "Crowd Counting with AI Model",
    category: "portfolio-projects",
    image: "./assets/images/projects/crowd-counting-ai.jpg",
    summary: "Real-time MRT crowd monitoring system using EfficientNet-B0 for classification, YOLO for human detection and counting, and CSRNet for dense crowd counting with zone-based analysis.",
    tags: ["EfficientNet-B0", "YOLO", "CSRNet", "Crowd analysis"],
    details: [
      "Developed a real-time MRT crowd monitoring system using deep learning.",
      "Implemented EfficientNet-B0 for classification, YOLO for human detection and counting, and CSRNet for dense crowd counting.",
      "Applied zone-based analysis, data preprocessing, transfer learning, and model fine-tuning for varying crowd densities.",
      "Designed for public transport safety and passenger-density awareness."
    ]
  }
];

const projectGrid = document.querySelector("#projectGrid");
const categoryFilter = document.querySelector("#categoryFilter");
const modal = document.querySelector("#detailModal");
const modalPanel = modal.querySelector(".modal-panel");
const modalKicker = document.querySelector("#modalKicker");
const modalTitle = document.querySelector("#modalTitle");
const modalSummary = document.querySelector("#modalSummary");
const modalDetails = document.querySelector("#modalDetails");
const modalTags = document.querySelector("#modalTags");
const modalActions = document.querySelector("#modalActions");
const modalImages = document.querySelector("#modalImages");
const servoPdfUrl = "./assets/docs/Servo_Modification.pdf";
const scienceFairDrawingMachineImages = [
  {
    src: "./assets/images/awards/science-fair-drawing-machine-certificate.jpg",
    alt: "Science Fair Drawing Machine certificate"
  },
  {
    src: "./assets/images/awards/science-fair-drawing-machine-laptop.jpg",
    alt: "Drawing Machine connected to a laptop for testing"
  },
  {
    src: "./assets/images/awards/science-fair-drawing-machine-assembly.jpg",
    alt: "Drawing Machine mechanical assembly with electronics"
  },
  {
    src: "./assets/images/awards/science-fair-drawing-machine-portrait.jpg",
    alt: "Portrait drawn by the Drawing Machine"
  },
  {
    src: "./assets/images/awards/science-fair-drawing-machine-software.jpg",
    alt: "Drawing Machine software path preview"
  },
  {
    src: "./assets/images/awards/science-fair-drawing-machine-cartoon.jpg",
    alt: "Cartoon sketch drawn by the Drawing Machine"
  }
];
const greenPlanetChallengeImages = [
  {
    src: "./assets/images/awards/green-planet-challenges-robot-car.jpg",
    alt: "Team Tron Green Planet Challenges robot car"
  },
  {
    src: "./assets/images/awards/green-planet-challenges-arm-robot.jpg",
    alt: "Green Planet Challenges robot arm mechanism"
  }
];
const worldRobotGameImages = [
  {
    src: "./assets/images/awards/world-robot-game-medals.jpg",
    alt: "World Robot Game Performance Award medals"
  },
  {
    src: "./assets/images/awards/world-robot-game-controller.jpg",
    alt: "World Robot Game robot controller and chassis electronics"
  },
  {
    src: "./assets/images/awards/world-robot-game-team-robots.jpg",
    alt: "World Robot Game four-robot team hardware setup"
  },
  {
    src: "./assets/images/awards/world-robot-game-cad-front.jpg",
    alt: "World Robot Game robot CAD front view"
  },
  {
    src: "./assets/images/awards/world-robot-game-cad-side.jpg",
    alt: "World Robot Game robot CAD side view"
  }
];
const clashRobot1Images = [
  {
    src: "./assets/images/awards/clash-robot-1-certificate.jpg",
    alt: "Clash of Robots 1 People's Choice Award certificate"
  },
  {
    src: "./assets/images/awards/clash-robot-1-pickup.jpg",
    alt: "Team Tron robot with pickup arm for Clash of Robots 1"
  },
  {
    src: "./assets/images/awards/clash-robot-1-body.jpg",
    alt: "Team Tron robot body at Clash of Robots 1 event"
  },
  {
    src: "./assets/images/awards/clash-robot-1-arm.jpg",
    alt: "Team Tron robot arm mechanism for Clash of Robots 1"
  }
];

const clashRobot2Images = [
  {
    src: "./assets/images/awards/clash-robot-2-winner-plaque.jpg",
    alt: "Clash of Robots 2 self-balancing robot winner plaque"
  },
  {
    src: "./assets/images/awards/clash-robot-2-award-handover.jpg",
    alt: "Team Tron receiving the Clash of Robots 2 award"
  },
  {
    src: "./assets/images/awards/clash-robot-2-arena-closeup.jpg",
    alt: "Self-balancing robot competing in the Clash of Robots 2 arena"
  },
  {
    src: "./assets/images/awards/clash-robot-2-maze-run.jpg",
    alt: "Self-balancing robot running through the Clash of Robots 2 maze"
  },
  {
    src: "./assets/images/awards/clash-robot-2-controller.jpg",
    alt: "Clash of Robots 2 controller, winner plaque, and self-balancing robot"
  },
  {
    src: "./assets/images/awards/clash-robot-2-certificate.jpg",
    alt: "Clash of Robots 2 honorable award certificate"
  }
];

const detailItems = [
  ...projects.map((project) => ({
    id: project.id,
    kicker: categories.find((item) => item.id === project.category)?.label || "Project",
    title: project.title,
    summary: project.summary,
    details: project.details,
    tags: project.tags,
    actions: project.actions,
    images: project.images || []
  })),
  {
    id: "research-mrt",
    kicker: "Applied research",
    title: "Final Year Project: Autonomous MRT Passenger Density Counting and Monitoring System",
    summary: "Final-year research and prototype system for autonomous MRT passenger-density counting, combining embedded capture, AI crowd analysis, cloud result reporting, and a 3D-printed train model.",
    details: [
      "Developed an autonomous passenger-density counting and monitoring concept for MRT environments, focused on transport safety, crowd awareness, and operational decision support.",
      "Built a Node.js-based application layer for real-time data processing, hardware communication, system automation, and cloud result updates.",
      "Used event-driven image capture triggered by train door closure so each count is taken at a controlled moment instead of processing unnecessary continuous video.",
      "Implemented and evaluated CSRNet, YOLO, and EfficientNet workflows for detection, classification, and dense crowd-count estimation, with CSRNet selected for stronger high-density performance.",
      "Designed a privacy-focused cloud pipeline that sends numerical passenger-density results instead of raw passenger images.",
      "Built a physical 3D-printed MRT train carriage prototype with camera placement, passenger layout, sensor integration, a rack-and-pinion door mechanism, and modified-servo feedback."
    ],
    tags: ["Final Year Project", "Node.js", "CSRNet", "YOLO", "Cloud pipeline"]
  },
  {
    id: "research-servo",
    kicker: "Applied research",
    title: "Experimental Study on Servo Motor Modification and Control Performance Enhancement",
    summary: "Modified standard servo systems to improve control flexibility and analyze real-world response behavior such as overshoot and settling time.",
    details: [
      "Investigated limitations of standard servo systems and developed modification approaches to improve flexibility and control performance.",
      "Conducted experimental testing to analyze dynamic response characteristics and system stability.",
      "Applied control-system concepts to evaluate and improve behavior.",
      "Documented findings and performance improvements based on experimental results."
    ],
    tags: ["Servo feedback", "Control systems", "Overshoot", "Settling time"],
    actions: [{ label: "Open servo modification PDF", href: servoPdfUrl }]
  },
  {
    id: "award-clash-1",
    kicker: "Award",
    title: "Clash of Robot 1 (2018) - People's Choice Award",
    summary: "Team Tron represented university robotics work in a competition organized by Myanmar Computer Professionals Association.",
    details: [
      "Competition categories included obstacle racing, sumo fight, and object pickup.",
      "Team Tron reached final and semifinal rounds across the competition categories.",
      "The team received the People's Choice Award."
    ],
    tags: ["2018", "Team Tron", "People's Choice"],
    images: clashRobot1Images
  },
  {
    id: "award-science-fair",
    kicker: "Award",
    title: "Science Fair (2018) - Special Award",
    summary: "Led Team WMBFI with a Drawing Machine Robot / CNC project at the University of Yangon Science Fair.",
    details: [
      "Participated as team leader for the project innovation show.",
      "Presented a Drawing Machine Robot / CNC project.",
      "Received the Special Award."
    ],
    tags: ["2018", "Team WMBFI", "Drawing Machine", "CNC"],
    images: scienceFairDrawingMachineImages
  },
  {
    id: "award-green-planet",
    kicker: "Award",
    title: "Green Planet Challenges (2019) - First Runner Up",
    summary: "Team Tron competed in Makerfest's Green Planet Challenges at American Center Yangon.",
    details: [
      "Competition categories included pick-and-place for green plants and a hunter robot with shooting mechanism.",
      "Team Tron completed the robotics challenge and achieved First Runner Up."
    ],
    tags: ["2019", "Team Tron", "American Center Yangon"],
    images: greenPlanetChallengeImages
  },
  {
    id: "award-clash-2",
    kicker: "Award",
    title: "Clash of Robots 2 (2019) - Winner",
    summary: "Led Team Tron to the champion prize in a robotics competition with 16 university teams.",
    details: [
      "Competition categories included auto sensing obstacles and path ways, plus manual maze solving and racing with balance robots.",
      "Led the team and handled 3D modeling, PID control, and embedded design.",
      "Team Tron won the champion prize."
    ],
    tags: ["2019", "Winner", "PID control", "Embedded design"],
    images: clashRobot2Images
  },
  {
    id: "award-wrg",
    kicker: "Award",
    title: "World Robot Game Myanmar 2020 - Performance Award",
    summary: "Led Team Tron in the Rugby Robot Game category and received the Performance Award for Yangon University.",
    details: [
      "Rugby Robot Game used four robots in one team.",
      "Led 3D modeling, CAD, embedded design, and control work.",
      "The team passed qualifier and quarter-final rounds, then lost the semifinal by one mark.",
      "Received the Performance Award for Yangon University."
    ],
    tags: ["2020", "Team Tron", "Rugby Robot", "Performance Award"],
    images: worldRobotGameImages
  }
];

function renderCategories(activeCategory = "all") {
  categoryFilter.innerHTML = categories.map((category) => `
    <button class="category-button${category.id === activeCategory ? " active" : ""}" type="button" data-category="${category.id}">
      ${category.label}
    </button>
  `).join("");
}

function renderProjects(activeCategory = "all") {
  const visibleProjects = activeCategory === "all"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  projectGrid.innerHTML = visibleProjects.map((project) => {
    const category = categories.find((item) => item.id === project.category);
    return `
      <article class="project-card ${project.id}">
        <img src="${project.image}" alt="${project.title}">
        <div class="project-body">
          <div>
            <span class="project-category">${category ? category.label : "Project"}</span>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
          </div>
          <div class="project-meta">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="project-actions">
            ${(project.actions || []).map((action) => `
              <a class="detail-trigger" href="${action.href}" target="_blank" rel="noopener">${action.label}</a>
            `).join("")}
            <button class="detail-trigger" type="button" data-detail-id="${project.id}">View details</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function openModal(item) {
  const itemCategory = categories.find((category) => category.id === item.category);
  modalKicker.textContent = item.kicker || (itemCategory ? itemCategory.label : "Details");
  modalTitle.textContent = item.title;
  modalSummary.textContent = item.summary;
  modalDetails.innerHTML = item.details.map((detail) => `<li>${detail}</li>`).join("");
  modalTags.innerHTML = item.tags.map((tag) => `<span>${tag}</span>`).join("");
  modalActions.innerHTML = (item.actions || []).map((action) => `
    <a class="button primary" href="${action.href}" target="_blank" rel="noopener">${action.label}</a>
  `).join("");
  modalImages.innerHTML = (item.images || []).map((image) => `
    <figure>
      <img src="${image.src}" alt="${image.alt}">
    </figure>
  `).join("");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalPanel.focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-detail-id]");
  if (trigger) {
    const item = detailItems.find((detail) => detail.id === trigger.dataset.detailId);
    if (item) openModal(item);
    return;
  }

  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

categoryFilter.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  const category = button.dataset.category;
  renderCategories(category);
  renderProjects(category);
});

renderCategories();
renderProjects();
