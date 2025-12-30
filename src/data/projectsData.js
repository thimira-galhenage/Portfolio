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
    summary: 'This project focuses on developing a compact automated system that accurately weighs, dispenses, and packages granular or powdered materials such as grains, spices, and seeds. The Smart Weighing Bin bridges a major gap in small-scale retail and agricultural operations where weighing and dispensing are still largely manual, resulting in material wastage, time loss, and inconsistent packaging accuracy. The system integrates a load-cell-based weighing unit, a mechanically actuated dispensing gate, and a PID-controlled automation loop to ensure precise material flow with minimal error. A custom rack-and-pinion mechanism driven by a stepper motor regulates dispensing in real time based on feedback from the load cell, enabling a critically damped response that prevents overshoot or material spillage. Design decisions were supported through detailed mechanical calculations, component selection studies, and structural simulations to validate performance and durability. SolidWorks was used to model the full assembly, including the feeding bin, storage bin, dispensing channel, and supporting frame. The control architecture was implemented using an Arduino Mega 2560 platform and tested through iterative parameter tuning in MATLAB/Simulink to achieve reliable automation performance. The final design demonstrates how affordable mechatronic integration can enhance retail automation by reducing human effort, improving accuracy, and supporting hygienic material handling. This project lays the groundwork for future extensions such as multi-bin versions, integration with packaging units, and IoT-based inventory monitoring, making it a scalable solution for supermarkets, spice shops, and small manufacturing businesses.',
    images: ['/images/projects/swb.png'],
    videos: ['/images/projects/swb/swb1.mp4', '/images/projects/swb/swb2.mkv', '/images/projects/swb/swb3.mkv'],
    type: 'Final Year Design Project'
  },
  {
    slug: 'bucket-elevator',
    title: 'Bucket Elevator Project',
    shortSummary: 'Replacing endless conveyors with a compact vertical lifter, this project reimagines biomass handling to expand storage capacity while ensuring a steadier and more efficient feed to the boiler, resulting in improved overall plant performance.',
    summary: 'In this project, I contributed to the complete mechanical design, layout engineering, and feasibility analysis of a new biomass bucket elevator system intended to replace the existing conveyor-based fuel feeding process. I began by performing capacity calculations to determine bucket size, pitch, and quantity based on the boiler’s daily fuel requirements, validating the results through site visits and reference drawings from South Asia Textiles. Using SolidWorks, I developed multiple 3D design concepts for the elevator structure, drive unit arrangement, exit chutes, and maintenance access points. Layout optimization played a major role in the project, requiring meticulous measurements of the current biomass section to determine the optimal location for the elevator while solving several spatial constraints such as limited room in the control area. I evaluated three possible configurations using a weighted decision matrix that considered consumed area, accessibility, structural complexity, and operational convenience, enabling the selection of the most efficient arrangement. I also engineered modifications to the existing conveyor system, cutting and resizing it, to bridge the gap between the elevator exit point and the boiler feeding point in a cost-effective manner. To improve serviceability, I designed new maintenance platforms and modified staircases to ensure safe access to the elevator components. The final deliverables included a fully validated SolidWorks model, layout drawings, design calculations, and a cost analysis package ready for implementation planning.',
    images: ['/images/projects/bucketelevator.png'],
    //videos: ['/videos/bucket1.mp4', '/videos/bucket2.mp4', '/videos/bucket3.mp4'], 
    type: 'Hayleys Fabric PLC'
  },
  {
    slug: 'liquid-texturing-tank',
    title: 'Liquid Texturing Tank Design Project',
    shortSummary: 'A tank that designs itself. Enter a few parameters and a complete liquid texturing tank is generated for fabrication. This project links automated design with real industrial use.',
    summary: 'This project focused on redesigning the liquid texturing tanks used in pre-coating operations to improve solution uniformity, flow behavior, and manufacturability while ensuring compatibility with existing dip-line layouts. I developed a fully parametric CAD model in SolidWorks using global variables and equation-driven geometry, allowing dimensional dependencies, such as baffle spacing, wall thickness transitions, heating coil pitch, and fluid volume offsets, to be modified through a single controlled parameter set. This approach drastically reduced design cycle time for tank variants and created a scalable design template for future capacity changes. Engineering improvements included optimized inlet/outlet placement, revised weir geometry, and internal flow-guiding features to reduce surface turbulence and eliminate stagnant zones within the textured slurry. Structural reinforcement calculations were performed to ensure stability under elevated temperature and continuous agitation loading conditions. By aligning fabrication drawings with equation-linked models, the design ensured consistent tolerances across multiple units, reduced rework during manufacturing, and enabled the automation team to achieve higher surface adhesion consistency during dipping. The redesigned tanks also improved cleaning access and reduced chemical sediment accumulation, directly contributing to longer operational uptime.',
    images: ['/images/projects/DGX.jpg'],
    //videos: ['/videos/dgx1.mp4', '/videos/dgx2.mp4', '/videos/dgx3.mp4'],
    type: 'Ansell Lanka Pvt Ltd'
  },
  {
    slug: 'smart-dip-line',
    title: 'Smart Dip Line Project',
    shortSummary: 'Imagine robots, SCARA arms, AMRs and vision systems working together on one line. This exhibition setup demonstrated how future glove production connects advanced automation technologies into one intelligent workflow.',
    summary: 'In this project, I contributed to the development of a next-generation automated dip line engineered for stable coating thickness, improved chemical utilization, and predictable line takt time. My work centered on fluid dynamics, mechanical integration, and throughput optimization, focusing on the critical subsystems that govern dip quality: mechanical stabilizers, agitator-propeller assemblies, circulation filters, and stage-to-stage timing control. I redesigned stabilizers to minimize former oscillation during immersion and withdrawal, significantly improving coating repeatability. To maintain slurry homogeneity and prevent chemical stratification, I implemented propeller-driven recirculation units with calculated blade pitch and rotational speed, improving shear distribution across the dip volume. A filtration subsystem was incorporated to reduce particle accumulation, extending chemical lifespan and minimizing post-process defects. Using empirical flow-rate measurements and dip-duration mapping, I executed a line balancing study that optimized station timing, immersion profiles, and conveyor velocity, reducing idle intervals and eliminating process bottlenecks. These contributions improved material yield, lowered chemical consumption, and created a more automation-ready workflow for high-volume glove production.',
    images: ['/images/projects/sfms.png'],
    //videos: ['/videos/sfms1.mp4', '/videos/sfms2.mp4', '/videos/sfms3.mp4'],
    type: 'Ansell Lanka Pvt Ltd'
  },
  {
    slug: 'printing-machine',
    title: 'Printing Machine Project',
    shortSummary: 'Where complex fabric printing requirements meet smart control. This project involved designing key components and developing PLC control logic that delivers precision and reliability to printing operations.',
    summary: 'This project involved advancing the functionality of the logo-printing unit integrated into the glove manufacturing line. I developed ladder-logic control software for the pneumatic transfer module, enabling precise synchronization of glove positioning between the conveyor feed and the rotary printing head. The programmed logic handled equipment states such as indexing, part engagement, print confirmation, jam detection, and restart conditions, reducing misprints caused by positional drift and cycle timing variations. Mechanically, I worked on designing rigid safety guarding and maintenance-friendly access panels, applying risk assessment principles (contact prevention, operator reach analysis, clearance zone definition) while retaining service access to pneumatic valves and alignment points. By integrating sensor-based state feedback into the PLC logic, the system achieved significantly reduced print head downtime, fewer cycle interruptions, and improved print repeatability. The enhancements contributed to a modular automation strategy that strengthens traceability, protects operators, and enables seamless integration with future line-level control systems.',
    images: ['/images/projects/tcr.png'],
    //videos: ['/videos/tcr1.mp4', '/videos/tcr2.mp4', '/videos/tcr3.mp4'],
    type: 'Ansell Lanka Pvt Ltd'
  },
  {
    slug: 'furnace-oil-filter',
    title: 'Furnace Oil Filter Machine Design Project',
    shortSummary: 'Low grade furnace oil becomes cleaner and more reusable through this custom filtration system, improving boiler efficiency and reducing waste in industrial fuel usage.',
    summary: 'The Furnace Oil Cleaning Machine Design project involved developing a comprehensive mechanical solution to clean and filter over 60,000 liters of low-quality furnace oil used in factory operations. My contributions focused on transforming rough engineering sketches into manufacturable 3D models and detailed drawings using SolidWorks. I designed approximately half of the machine components, including filter coil housings, structural frames, and piping interfaces, ensuring each part met both functional and safety requirements. During the process, I reassessed all initial measurements due to inaccuracies in the preliminary sketches and corrected them to align with the actual site conditions. Several of the machine’s key parameters, such as internal capacities and component dimensions, were undefined at the start, requiring me to make engineering decisions and assumptions to progress the design efficiently. I produced fully detailed manufacturing drawings with tolerances and section views for third-party fabricators, and I worked closely with those manufacturers to resolve dimensional discrepancies once the first batch of components was produced. These efforts ensured that the manufactured parts matched the engineering specifications and could be assembled without issue. The project ultimately resulted in successfully fabricated components and a well-developed mechanical design that significantly improved the factory’s ability to clean furnace oil efficiently and reliably.',
    images: ['/images/projects/filter.png'],
    //videos: ['/videos/filter1.mp4', '/videos/filter2.mp4', '/videos/filter3.mp4'],
    type: 'Hayleys Fabric PLC'
  },
  {
    slug: 'glove-former',
    title: 'Glove Former Design Project',
    shortSummary: 'A redesigned glove former built for improved shaping accuracy, durability and production performance. Small geometric refinements achieve significant impact on forming quality.',
    summary: 'As part of the Vietnam former design initiative, I contributed to the mechanical redesign of glove formers and their interface components to improve alignment accuracy, structural durability, and compatibility across regional dip lines. The project required analyzing thermal expansion behavior, mechanical wear patterns, and mounting stresses due to repetitive heating-dipping cycles. Based on these insights, I optimized former contact surfaces, reinforced high-stress geometry, and standardized critical dimensions to ensure interchangeable use across multiple production facilities. The updated former design improved stability during beading and dipping, reduced vibration-based imperfections, and streamlined changeover procedures. By considering upstream rack loading and downstream transfer requirements, the design minimized positional mismatch and improved sealing reliability at the wrist profile area, directly impacting coating uniformity and product tolerance stability. The refined former specification provides a scalable solution that supports international production harmonization while maintaining compatibility with existing dip-line automation architecture.',
    images: ['/images/projects/former.png'],
    //videos: ['/videos/former1.mp4', '/videos/former2.mp4', '/videos/former3.mp4'],
    type: 'Ansell Vietnam'
  },
  {
    slug: 'automated-hopper-weighing',
    title: 'Automated Hopper Weighing System Project',
    shortSummary: 'What if biomass usage could be monitored in real time without manual checks? This automated weighing system delivers accurate measurement and process transparency for fuel-based operations.',
    summary: 'In the Automated Hopper Weighing System Project, I designed a fully integrated weighing and batching solution intended to improve accuracy and consistency in handling biomass and granular materials. The project required developing a structurally sound hopper design, load-cell mounting system, and discharge mechanism, all modeled in SolidWorks with attention to vibration reduction and load measurement accuracy. I conducted material flow analyses, such as evaluating the angle of repose, to ensure the hopper geometry supported uninterrupted discharge without arching or rat-holing. A key aspect of the design was integrating industrial load cells and defining the electrical and control system requirements, including signal conditioning, PLC communication, and safety interlocks. I established the automated control sequence for weighing, batching, and discharge cycles, ensuring smooth operation across all process stages. The project also involved layout planning to integrate the hopper with conveyors and existing feeding systems while providing adequate accessibility for maintenance. The final output consisted of a complete engineering package containing 3D models, structural drawings, load calculations, and PLC integration specifications, ready for fabrication and on-site installation.',
    images: ['/images/projects/hopper.png'],
    //videos: ['/videos/hopper1.mp4', '/videos/hopper2.mp4', '/videos/hopper3.mp4'],
    type: 'Hayleys Fabric PLC'
  },
  {
    slug: 'aluminium-profile-inspection',
    title: 'Aluminium Profile Inspection Machine Project',
    shortSummary: 'AI driven defect detection paired with pneumatic sorting. This system automates quality control for aluminium profiles by combining machine vision, sensing and actuation.',
    summary: 'This project presents a vision-based automated inspection system designed to identify manufacturing defects in aluminium extrusion profiles. The solution addresses the limitations of manual inspection methods used in high-volume production environments, where defects such as cracks, die lines, air bubbles, oil marks, and streaks lead to significant material waste and financial losses. The system integrates machine vision, image processing, and automation to classify defective profiles in real time. A custom hardware setup featuring multi-angle cameras captures the entire surface of each aluminium bar as it moves along a conveyor. A trained image-processing model evaluates the captured images to distinguish between acceptable and defective profiles. Based on the classification output, pneumatic actuators automatically separate faulty products from the production line, eliminating reliance on human inspection and reducing potential for error. Mechanically, the system is supported by a fully modelled 3D design developed in SolidWorks, including the camera housing, sorting mechanism, and conveyor-based guidance structure. The software framework was built using Python, OpenCV, NumPy, and machine-learning libraries deployed on a Raspberry Pi control unit, ensuring a compact and scalable implementation. By automating defect detection, this project demonstrates how intelligent inspection systems can strengthen manufacturing quality control, reduce rejection costs, and enhance production efficiency. It establishes a foundation for future enhancements such as defect-type classification, multi-camera synchronized illumination, and integration into Industry 4.0 data workflows.',
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
