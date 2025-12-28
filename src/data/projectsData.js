// src/data/projectsData.js

const projectsData = [
  {
    slug: 'dip-line-automation',
    title: 'Dip Line Automation Project (Ansell Textile Lanka)',
    shortSummary: 'What happens when robots take over a traditional glove dipping line? This project transformed a labour-intensive PVA process into an automated, ergonomic and consistent production flow driven by collaborative robotics and intelligent control.',
    summary: 'The project focuses on the end-to-end design and semi-automation of the Polyvinyl Alcohol (PVA) glove dipping line at Ansell Textile Lanka, aiming to modernize a traditionally labor-intensive stage by integrating advanced robotics and control systems to enhance production efficiency, product consistency, and occupational safety. The existing manual process required operators to lift and move heavy racks of glove molds weighing approximately 12 kg up to 600 times per shift, resulting in inconsistent quality due to human variation in dipping angles and dwell times, significant safety risks including chronic back injuries and exposure to harmful chemicals, and operational inefficiencies such as production bottlenecks, high labor turnover, and increased costs. The proposed solution replaces manual handling with a coordinated robotic cell and automated subsystems, featuring a FANUC CR-35iB collaborative robot (cobot) for precise rack picking, dipping, and placement, with initial trials and motion path optimization conducted using a FANUC CR-30iA platform. A custom end-of-arm tooling unit combining pneumatic and magnetic mechanisms was designed to handle heavy racks with high repeatability, while automated spray and turnover systems, including a touchless alcohol disinfection module with programmable nozzles and a mechanical turnover unit, reduced chemical waste by 40% and standardized rack rotation. Advanced control was achieved through PLC integration for real-time process monitoring and cycle standardization. Key results include successful fabrication of robot base plates, tool unit plates, and trolley components, simulations indicating 20% faster cycle times and 61.42% higher utilization efficiency, and a significant reduction in human exposure to hazardous chemicals alongside energy-efficient curing practices. Economically, the automation framework offers a scalable solution to reduce labor dependency while ensuring superior product uniformity in the PPE industry. Tools and technologies employed include SOLIDWORKS (CAD & FEA Simulation), FANUC ROBOGUIDE, PLC programming, robotic kinematics, pneumatic system design, and finite element analysis (FEA).',
    images: ['/images/projects/pva.png'],
    videos: ['/images/projects/pva/pva.mp4'],
    type: 'Final Year Capstone Project'
  },
  {
    slug: 'smart-weighing-bin',
    title: 'Smart Weighing Bin Design Project',
    shortSummary: 'Ever wondered how bulk food shopping could be faster and hands free? This automated weighing bin redesigns supermarket workflow with precision dispensing and self service efficiency.',
    summary: `This project redesigned a supermarket weighing bin to automate bulk-food dispensing, making shopping faster, precise, and hands-free. The design integrates automated sensors, controlled dispensing mechanisms, and user-friendly interfaces to optimize workflow and efficiency in commercial environments.`,
    images: ['/images/projects/swb.png'],
    videos: ['/images/projects/swb/swb1.mp4', '/images/projects/swb/swb2.mkv', '/images/projects/swb/swb3.mkv'],
    type: 'Final Year Design Project'
  },
  {
    slug: 'bucket-elevator',
    title: 'Bucket Elevator Project',
    shortSummary: 'Replacing endless conveyors with a compact vertical lifter, this project reimagines biomass handling to expand storage capacity while ensuring a steadier and more efficient feed to the boiler, resulting in improved overall plant performance.',
    summary: `Replacing endless conveyors with a compact vertical lifter, this project reimagines biomass handling to expand storage capacity while ensuring a steadier and more efficient feed to the boiler, improving overall plant performance.`,
    images: ['/images/projects/bucketelevator.png'],
    //videos: ['/videos/bucket1.mp4', '/videos/bucket2.mp4', '/videos/bucket3.mp4'], 
    type: 'Hayleys Fabric PLC'
  },
  {
    slug: 'liquid-texturing-tank',
    title: 'Liquid Texturing Tank Design Project',
    shortSummary: 'A tank that designs itself. Enter a few parameters and a complete liquid texturing tank is generated for fabrication. This project links automated design with real industrial use.',
    summary: `A tank that designs itself. Enter a few parameters and a complete liquid texturing tank is generated for fabrication. The project links automated design with real industrial use, optimizing the texturing process for efficiency and precision.`,
    images: ['/images/projects/DGX.jpg'],
    //videos: ['/videos/dgx1.mp4', '/videos/dgx2.mp4', '/videos/dgx3.mp4'],
    type: 'Ansell Lanka Pvt Ltd'
  },
  {
    slug: 'smart-dip-line',
    title: 'Smart Dip Line Project',
    shortSummary: 'Imagine robots, SCARA arms, AMRs and vision systems working together on one line. This exhibition setup demonstrated how future glove production connects advanced automation technologies into one intelligent workflow.',
    summary: `This project demonstrated a fully connected glove production line where robots, SCARA arms, AMRs, and vision systems collaborate to achieve automation, improve throughput, and ensure consistent product quality.`,
    images: ['/images/projects/sfms.png'],
    //videos: ['/videos/sfms1.mp4', '/videos/sfms2.mp4', '/videos/sfms3.mp4'],
    type: 'Ansell Lanka Pvt Ltd'
  },
  {
    slug: 'printing-machine',
    title: 'Printing Machine Project',
    shortSummary: 'Where complex fabric printing requirements meet smart control. This project involved designing key components and developing PLC control logic that delivers precision and reliability to printing operations.',
    summary: `This project involved designing key components and developing PLC control logic to deliver precision, reliability, and repeatability in fabric printing operations.`,
    images: ['/images/projects/tcr.png'],
    //videos: ['/videos/tcr1.mp4', '/videos/tcr2.mp4', '/videos/tcr3.mp4'],
    type: 'Ansell Lanka Pvt Ltd'
  },
  {
    slug: 'furnace-oil-filter',
    title: 'Furnace Oil Filter Machine Design Project',
    shortSummary: 'Low grade furnace oil becomes cleaner and more reusable through this custom filtration system, improving boiler efficiency and reducing waste in industrial fuel usage.',
    summary: `Low-grade furnace oil becomes cleaner and more reusable through this custom filtration system, improving boiler efficiency and reducing industrial fuel waste.`,
    images: ['/images/projects/filter.png'],
    //videos: ['/videos/filter1.mp4', '/videos/filter2.mp4', '/videos/filter3.mp4'],
    type: 'Hayleys Fabric PLC'
  },
  {
    slug: 'glove-former',
    title: 'Glove Former Design Project',
    shortSummary: 'A redesigned glove former built for improved shaping accuracy, durability and production performance. Small geometric refinements achieve significant impact on forming quality.',
    summary: `A redesigned glove former built for improved shaping accuracy, durability, and production performance. Small geometric refinements achieve significant impact on forming quality.`,
    images: ['/images/projects/former.png'],
    //videos: ['/videos/former1.mp4', '/videos/former2.mp4', '/videos/former3.mp4'],
    type: 'Ansell Vietnam'
  },
  {
    slug: 'automated-hopper-weighing',
    title: 'Automated Hopper Weighing System Project',
    shortSummary: 'What if biomass usage could be monitored in real time without manual checks? This automated weighing system delivers accurate measurement and process transparency for fuel-based operations.',
    summary: `This automated weighing system delivers accurate measurement and process transparency for fuel-based operations, reducing manual monitoring and increasing reliability.`,
    images: ['/images/projects/hopper.png'],
    //videos: ['/videos/hopper1.mp4', '/videos/hopper2.mp4', '/videos/hopper3.mp4'],
    type: 'Hayleys Fabric PLC'
  },
  {
    slug: 'aluminium-profile-inspection',
    title: 'Aluminium Profile Inspection Machine Project',
    shortSummary: 'AI driven defect detection paired with pneumatic sorting. This system automates quality control for aluminium profiles by combining machine vision, sensing and actuation.',
    summary: `AI-driven defect detection paired with pneumatic sorting automates quality control for aluminium profiles, improving throughput and accuracy.`,
    images: ['/images/projects/alum.png'],
    videos: ['/images/projects/alum/alum.mp4'],
    type: 'Undergraduate Project'
  },
  {
    slug: 'automated-bra-cup-moulding',
    title: 'Automated Bra Cup Moulding Project',
    shortSummary: 'From manual moulding to robotic precision. This project integrates SCARA based handling to speed up bra cup production while reducing repetitive tasks and headcount.',
    summary: `From manual moulding to robotic precision. This project integrates SCARA-based handling to speed up bra cup production while reducing repetitive tasks and headcount.`,
    images: ['/images/projects/bra.png'],
    videos: ['/images/projects/bra/bra.mp4'],
    type: 'Undergraduate Project'
  },
  {
    slug: 'salinity-barrier',
    title: 'Salinity Barrier Design Project',
    shortSummary: 'How do you stop saltwater intrusion without blocking a river? This project balances hydraulics, structural considerations and environmental constraints to protect freshwater resources in Galle.',
    summary: `This project balances hydraulics, structural considerations, and environmental constraints to protect freshwater resources, focusing on saltwater intrusion prevention in Galle.`,
    images: ['/images/projects/salinity.png'],
    //videos: ['/videos/salinity1.mp4', '/videos/salinity2.mp4', '/videos/salinity3.mp4'],
    type: 'Undergraduate Project'
  },
  {
    slug: 'mini-copra-slicer',
    title: 'Mini Copra Slicer Machine Design Project',
    shortSummary: 'Cutting copra by hand is slow and inconsistent. This compact slicer introduces mechanical efficiency to small scale processing with a simple and user friendly design.',
    summary: `Cutting copra by hand is slow and inconsistent. This compact slicer introduces mechanical efficiency to small-scale processing with a simple and user-friendly design.`,
    images: ['/images/projects/copra.png'],
    //videos: ['/videos/copra1.mp4', '/videos/copra2.mp4', '/videos/copra3.mp4'],
    type: 'Undergraduate Project'
  },
  {
    slug: 'animal-motion-mechanism',
    title: 'Animal Motion Mechanism Mini Project',
    shortSummary: 'Can mechanical linkages mimic natural motion? This project models animal movement through engineered mechanisms to study how kinematics can replicate biological motion.',
    summary: `Can mechanical linkages mimic natural motion? This project models animal movement through engineered mechanisms to study how kinematics can replicate biological motion.`,
    images: ['/images/projects/animal.png'],
    videos: ['/images/projects/animal/animal.mp4'],
    type: 'Undergraduate Project'
  }
];

export default projectsData;
