/**
 * 💡 HELPER FUNCTION
 * Declares a course module concisely.
 * Defaults driveUrl to '#' if not provided.
 */
const m = (id, specialty, semester, icon, title, description, driveUrl = "#") => ({
  id, specialty, semester, icon, title, description, driveUrl
});

/**
 * 🎓 SEMESTER MAPPING BY SPECIALTY
 * Configures which semesters belong to each specialty choice.
 */
const semesterOptionsMap = {
  // Tronc Commun (Ingéniorat) : S1, S2, S3, S4
  tc: [
    { value: "s1", label: "Semester 1 (S1)" },
    { value: "s2", label: "Semester 2 (S2)" },
    { value: "s3", label: "Semester 3 (S3)" },
    { value: "s4", label: "Semester 4 (S4)" }
  ],
  // Spécialités (ex: Réseaux & Télécoms, SI) : à partir du S5
  res: [
    { value: "s5", label: "Semester 5 (S5)" },
    { value: "s6", label: "Semester 6 (S6)" }
  ],
  si: [
    { value: "s5", label: "Semester 5 (S5)" },
    { value: "s6", label: "Semester 6 (S6)" }
  ]
};

/**
 * 📚 MODULE DATA REPOSITORY
 * Specialty keys: 'tc' (Tronc Commun), 'res' (Networks & Telecoms), 'si' (Information Systems)
 * Semester keys: 's1', 's2', 's3', 's4', 's5', 's6'
 */
const modulesData = [
  // =========================================================================
  // --- COMPUTER SCIENCE ENGINEERING (COMMON CORE) - SEMESTER 1 ---
  // =========================================================================
  m(1, "tc", "s1", "💻", "Algorithmics & Data Structures 1 (ADS 1)", "Fundamentals of algorithms, variables, control flow, loops, and 1D/2D arrays.", "https://drive.google.com/drive/folders/10bUixTPGIMwSlIi7ECpECBiOwzc74bvc?usp=drive_link"),
  m(2, "tc", "s1", "⚙️", "Operating Systems 1 (OS 1)", "Introduction to computer systems, OS components, and basic Shell commands."),
  m(3, "tc", "s1", "📐", "Algebra 1", "Set theory, binary relations, algebraic structures (groups, rings, fields), and polynomials."),
  m(4, "tc", "s1", "📊", "Mathematical Analysis 1", "Real-valued functions, limits, continuity, derivatives, and Taylor expansions."),
  m(5, "tc", "s1", "🏛️", "Computer Architecture 1 (Archi 1)", "Information representation, binary/hexadecimal coding, Boolean algebra, and combinational logic circuits."),
  m(6, "tc", "s1", "📝", "Technical Writing & Work Methodology (TEEW)", "Academic writing methodology, effective note-taking, document structuring, and oral presentation skills."),
  m(7, "tc", "s1", "⚡", "Electronics", "Basic electrical components, semiconductor devices, diodes, transistors, and signal processing basics."),

  // =========================================================================
  // --- COMPUTER SCIENCE ENGINEERING (COMMON CORE) - SEMESTER 2 ---
  // =========================================================================
  m(8, "tc", "s2", "💻", "Algorithmics & Data Structures 2 (ADS 2)", "Pointers, dynamic memory allocation, linked lists, stacks, queues, and recursion."),
  m(9, "tc", "s2", "📈", "Mathematical Analysis 2", "Definite/indefinite integrals, integration techniques, differential equations, and numerical series."),
  m(10, "tc", "s2", "📐", "Algebra 2", "Vector spaces, linear transformations, matrices, determinants, and solving linear systems."),
  m(11, "tc", "s2", "🧠", "Mathematical Logic", "Propositional logic, predicate calculus, truth tables, inference rules, and formal proofs."),
  m(12, "tc", "s2", "🏛️", "Computer Architecture 2 (Archi 2)", "Sequential logic circuits, CPU microarchitecture, registers, bus systems, and assembly language basics."),
  m(13, "tc", "s2", "💬", "Oral Expression Techniques (TEO)", "Communication techniques, public speaking, technical report preparation, and professional presentation."),
  m(14, "tc", "s2", "🎲", "Probability & Statistics 1 (PS 1)", "Descriptive statistics, combinatorics, probability spaces, conditional probability, and discrete random variables."),

  // =========================================================================
  // --- COMPUTER SCIENCE ENGINEERING (COMMON CORE) - SEMESTER 3 ---
  // =========================================================================
  m(15, "tc", "s3", "💻", "Algorithmics & Data Structures 3 (ADS 3)", "Binary trees, binary search trees, heaps, balanced trees (AVL), and advanced sorting techniques."),
  m(16, "tc", "s3", "📊", "Mathematical Analysis 3", "Multivariate functions, partial derivatives."),
  m(17, "tc", "s3", "📐", "Algebra 3", "Advanced linear algebra, inner product spaces, eigenvalues, eigenvectors, and matrix diagonalization."),
  m(18, "tc", "s3", "🎲", "Probability & Statistics 2 (PS 2)", "Continuous random variables, probability density functions, limit theorems, parameter estimation."),
  m(19, "tc", "s3", "🗄️", "Introduction to Information Systems (IIS)", "Information system concepts, Merise methodology (MCD, MLD), and system modeling."),
  m(20, "tc", "s3", "💼", "Entrepreneurship", "Business idea generation, market research, financial planning, project management, and startup creation."),
  m(21, "tc", "s3", "☕", "Object-Oriented Programming 1 (POO 1)", "Core OOP principles: classes, objects, methods, constructors, inheritance, polymorphism, abstract classes, interfaces."),

  // =========================================================================
  // --- COMPUTER SCIENCE ENGINEERING (COMMON CORE) - SEMESTER 4 ---
  // =========================================================================
  m(22, "tc", "s4", "⚙️", "Operating Systems 2 (OS 2)", "Process synchronization, CPU scheduling, and memory management."),
  m(23, "tc", "s4", "🗄️", "Introduction to Databases (IDB)", "Relational model, normalization theory, relational algebra, and SQL query language."),
  m(24, "tc", "s4", "🌐", "Introduction to Computer Networks", "OSI & TCP/IP layered architectures, physical/data link protocols, Ethernet, and IP addressing (IPv4/Subnetting)."),
  m(25, "tc", "s4", "☕", "Object-Oriented Programming 2 (POO 2)", "Advanced OOP concepts: list, set, map, threads, and GUI development."),
  m(26, "tc", "s4", "🧩", "Theory of Graphs (THG)", "Directed/undirected graphs, paths, connectivity, shortest path algorithms (Dijkstra), trees, and graph coloring."),
  m(27, "tc", "s4", "🔤", "Theory of Languages (THL)", "Alphabet, formal grammars, regular expressions, finite state automata (DFA/NFA)."),
  m(28, "tc", "s4", "⚖️", "Computer Science Ethics", "Intellectual property, software licensing, data privacy laws, and professional ethics."),

  // =========================================================================
  // --- NETWORKS & TELECOMS (RES) - SEMESTER 5 ---
  // =========================================================================
  m(29, "res", "s5", "📡", "Telecommunication Principles", "Analog/digital signals, modulation techniques (AM, FM, PSK), and transmission media."),
  m(30, "res", "s5", "💻", "Computer Architecture", "Processor architecture, instruction sets, memory organization, and I/O devices."),
  m(31, "res", "s5", "🔌", "Local Area Networks (LAN)", "Ethernet switching, VLAN configuration, Spanning Tree Protocol (STP), and LAN hardware."),
  m(32, "res", "s5", "🌐", "Routing Protocols & IP", "Static/dynamic routing, RIP, OSPF, BGP protocols, and CIDR subnetting."),
  m(33, "res", "s5", "📶", "Wireless & Mobile Networks", "Wi-Fi standards, cellular network generations (4G/5G), signal propagation, and mobility management."),
  m(34, "res", "s5", "🔒", "Network Security & Firewalls", "Packet filtering, firewalls, VPNs, IDS/IPS implementations, and network monitoring."),
  m(35, "res", "s5", "☁️", "Cloud & Network Virtualization", "Software-Defined Networking (SDN), NFV, cloud infrastructure, and resource virtualization.")
];

/**
 * Safely fetches elements from the DOM whenever called.
 */
function getDOMElements() {
  return {
    selectSpecialty: document.getElementById('select-specialty'),
    selectSemester: document.getElementById('select-semester'),
    emptyState: document.getElementById('empty-state'),
    modulesGrid: document.getElementById('modules-grid')
  };
}

/**
 * Dynamically updates the semester dropdown options based on the selected specialty.
 */
function updateSemesterDropdown() {
  const { selectSpecialty, selectSemester } = getDOMElements();
  if (!selectSpecialty || !selectSemester) return;

  const selectedSpecialty = selectSpecialty.value;
  const availableSemesters = semesterOptionsMap[selectedSpecialty] || [];

  // Rebuild the semester select options
  selectSemester.innerHTML = `<option value="">-- Choose Semester --</option>`;

  if (availableSemesters.length > 0) {
    selectSemester.disabled = false;
    availableSemesters.forEach(sem => {
      const option = document.createElement('option');
      option.value = sem.value;
      option.textContent = sem.label;
      selectSemester.appendChild(option);
    });
  } else {
    // Disable semester dropdown if no specialty selected
    selectSemester.disabled = true;
  }
}

/**
 * Renders card HTML markup efficiently for each filtered module.
 */
function renderCards(modules, targetGrid) {
  if (!targetGrid) return;

  if (modules.length === 0) {
    targetGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #94a3b8;">
        <p style="font-size: 1.1rem; margin-bottom: 8px;">🚫 No modules found for this selection.</p>
        <p style="font-size: 0.9rem;">Try selecting another semester.</p>
      </div>
    `;
    return;
  }

  targetGrid.innerHTML = modules.map(module => `
    <article class="module-card">
      <div>
        <div class="card-header">
          <div class="card-icon">${module.icon}</div>
          <h3 class="module-title">${module.title}</h3>
        </div>
        <p class="module-description">${module.description}</p>
      </div>
      <a href="${module.driveUrl || '#'}" target="_blank" rel="noopener noreferrer" class="btn-drive">
        <svg style="width:18px; height:18px; fill:none; stroke:currentColor; stroke-width:2;" viewBox="0 0 24 24">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        Access Drive
      </a>
    </article>
  `).join('');
}

/**
 * Updates application display state based on selected dropdown options.
 */
function updateDisplay() {
  const { selectSpecialty, selectSemester, emptyState, modulesGrid } = getDOMElements();

  if (!selectSpecialty || !selectSemester || !emptyState || !modulesGrid) return;

  const selectedSpecialty = selectSpecialty.value;
  const selectedSemester = selectSemester.value;

  if (selectedSpecialty !== "" && selectedSemester !== "") {
    const filteredModules = modulesData.filter(
      m => m.specialty === selectedSpecialty && m.semester === selectedSemester
    );

    renderCards(filteredModules, modulesGrid);

    emptyState.classList.add('hidden');
    modulesGrid.classList.remove('hidden');
  } else {
    emptyState.classList.remove('hidden');
    modulesGrid.classList.add('hidden');
  }
}

/**
 * Initializes application event listeners on DOM load.
 */
function initializeApp() {
  const { selectSpecialty, selectSemester } = getDOMElements();

  if (selectSpecialty && selectSemester) {
    selectSpecialty.addEventListener('change', () => {
      updateSemesterDropdown();
      updateDisplay();
    });

    selectSemester.addEventListener('change', updateDisplay);
  }

  updateSemesterDropdown();
  updateDisplay();
}

// Ensure execution after the HTML DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}