---
next: "/teaching"
prev: "/bio"
---
# Publications
<ClientOnly>
<PaperMobile 
v-for="paper in posts"
:year="paper.year"
:title="paper.title"
:authors="paper.authors"
:venue="paper.venue"
:link="paper.link"
:abstract="paper.abstract"
:picture="paper.picture"
/>
</ClientOnly>

<script>

        // Entry Model
       //  {
       // title: '', 
       // authors: "", 
       // venue:"" ,
       // year: 2022,
       // picture: "",
       // link: "",
       // abstract:"",
       // bibtex:"",
       //  },

    export default {
  // ...
  data() {
    return {
      posts: [          
             {
       title: 'Designing a Physiological Loop for the Adaptation of Virtual Human Characters in a Social VR Scenario', 
       authors: "Chiossi, Francesco; Welsch, Robin; Villa, Steeven; Chuang, Lewis L.; Mayer, Sven", 
       venue:"IEE VR 2022" ,
       year: 2022,
       picture: "/images/Papers/vr-adaptation.jpg",
       link: "Not Available",
       abstract:"Social virtual reality is getting mainstream not only for entertainment purposes but also for productivity and education. This makes the design of social VR scenarios functional to support the operator's performance. We present a physiologically-adaptive system that optimizes for visual complexity in a dual-task scenario based on electrodermal activity. Specifically, we propose a system that adapts the amount of non-player characters while jointly performing an N-Back task (primary) and visual detection task (secondary). Our preliminary results show that when optimizing the complexity of the secondary task, users report an improved user experience.",
       bibtex:"",
        },

                  {
       title: 'EMStriker: Potentials of Enhancing the Training Process of Racket-based Sports via Electrical Muscle Stimulation', 
       authors: "Faltaous, Sarah; Hubert, Anna; Karolus, Jakob; Villa, Steeven; Kosch, Thomas; Wozniak, Pawel", 
       venue:"Sixteenth International Conference on Tangible, Embedded, and Embodied Interaction" ,
       year: 2022,
       picture: "/images/Papers/emsstriker.jpg",
       link: "https://dl.acm.org/doi/10.1145/3490149.3505578",
       abstract:"Racket sports offer an enjoyable form of physical activity and are fertile ground for interactive technologies supporting new players. Yet, current research has neglected its potential to support not only active players but also coaches in their training methods. To investigate how interactive technologies can support skill acquisition in training, we designed an Electrical Muscle Stimulation (EMS) system that helps maintain the ready position in crossminton. We compared the system with a vibrotactile solution in a user study, interviewing novice players and experienced coaches about their perception of the system. The system allowed coaches to effectively and immediately guide players to the ready position. An EMS-based feedback system for coaches can potentially reduce delay (physical and cognitive) for trainees, as stated by coaches. Our work contributes insights into designing systems that facilitate learning sports techniques using interactive feedback.",
       bibtex:"",
        },
                     {
       title: 'Immediate Effects of Vibrotactile Biofeedback Instructions on Human Postural Control', 
       authors: "Tannert, Isabel; Schulleri, Katrin; Michel, Youssef; Villa, Steeven; Leif, Johannsen; Hermsdorfer, Joachim; Lee, Dongheui", 
       venue:"43rd Annual International Conference of the IEEE Engineering in Medicine & Biology Society (EMBC)" ,
       year: 2021,
       picture: "/images/Papers/posture.jpg",
       link: "https://ieeexplore.ieee.org/abstract/document/9630992",
       abstract:"Vibrotactile biofeedback can improve balance and consequently be helpful in fall prevention. However, it remains unclear how different types of stimulus presentations affect not only trunk tilt, but also Center of Pressure (CoP) displacements, and whether an instruction on how to move contributes to a better understanding of vibrotactile feedback.Based on lower back tilt angles (L5), we applied individualized multi-directional vibrotactile feedback to the upper torso by a haptic vest in 30 healthy young adults. Subjects were equally distributed to three instruction groups (attractive - move in the direction of feedback, repulsive - move in the opposite direction of feedback & no instruction - with attractive stimuli). We conducted four conditions with eyes closed (feedback on/off, Narrow Stance with head extended, Semi-Tandem stance), with seven trials of 45s each. For CoP and L5, we computed Root Mean Square (RMS) of position/angle and standard deviation (SD) of velocity, and for L5 additionally, the percentage in time above threshold. The analysis consisted of mixed model ANOVAs and t-tests (α-level: 0.05).In the attractive and repulsive groups feedback significantly decreased the percentage above threshold (p<0.05). Feedback decreased RMS of L5, whereas RMS of CoP and SD of velocity in L5 and COP increased (p<0.05). Finally, an instruction on how to move contributed to a better understanding of the vibrotactile biofeedback.",
       bibtex:"",
        },
                  {
       title: 'Assisting Motor Skill Transfer for Dance Students Using Wearable Feedback', 
       authors: "Villa, Steeven; Niess, Jasmin; Eska, Bettina; Schmidt, Albrecht; Machulla, Tonja", 
       venue:"International Symposium on Wearable Computers" ,
       year: 2021,
       picture: "/images/Papers/assisting.jpg",
       link: "https://dl.acm.org/doi/10.1145/3460421.3478817",
       abstract:"Dance plays a crucial role in human well-being and expression. To learn dance, transferring motor knowledge across humans is relevant. Several technologies have been proposed to support such knowledge transfer from teacher to student. However, most of such systems applied a pragmatic approach focused on the feedback and the quality of the feedback system and not necessarily on the human mechanisms behind the dance learning process. In contrast, we inquire about the teacher-to-student motor knowledge transfer from the neural perspective to design motor learning wearable systems. We conducted interviews with dance students and teachers using vignettes based on motor learning theory as a discussion base. We derived insights about dance learning and identified a series of requirements for motor skill transfer-focused wearable devices. Based on our results, we present a prototype that reflects the minimum functional setup for effectively supporting motor learning.",
       bibtex:"",
        },
        {
        title: 'Altering the Stiffness, Friction, and Shape Perception of Tangible Objects in Virtual Reality Using Wearable Haptics', 
        authors: "Villa, Steeven.; Pacchierotti, C; De Tinguy, Xavier.; Maciel, Anderson.; Marchal, Maud.", 
        venue:"IEEE Transactions on Haptics 2020. " ,
        picture: "/images/Papers/altering.jpg",
        year: 2020,
        link: "https://ieeexplore.ieee.org/document/8961106",
        abstract:"Tangible objects are used in virtual reality (VR) and augmented reality (AR) to enhance haptic information on the general shape of virtual objects. However, they are often passive or unable to simulate rich varying mechanical properties. This article studies the effect of combining simple passive tangible objects and wearable haptics for improving the display of varying stiffness, friction, and shape sensations in these environments. By providing timely cutaneous stimuli through a wearable finger device, we can make an object feel softer or more slippery than it really is, and we can also create the illusion of encountering virtual bumps and holes. We evaluate the proposed approach carrying out three experiments with human subjects. Results confirm that we can increase the compliance of a tangible object by varying the pressure applied through a wearable device. We are also able to simulate the presence of bumps and holes by providing timely pressure and skin stretch sensations. Altering the friction of a tangible surface showed recognition rates above the chance level, albeit lower than those registered in the other experiments. Finally, we show the potential of our techniques in an immersive medical palpation use case in VR. These results pave the way for novel and promising haptic interactions in VR, better exploiting the multiple ways of providing simple, unobtrusive, and inexpensive haptic displays.",
        bibtex:"",
         },
         {
        title: 'Touching is believing: exploring physics-based simulation and haptics to feel virtual worlds', 
        authors: "Villa, Steeven.", 
        venue:"LUME Digital Repository." ,
        year: 2019,
        picture: "/images/Papers/heat-based.jpg",
        link: "https://www.lume.ufrgs.br/handle/10183/202057",
        abstract:"Modeling the real world is a responsibility which different fields assumed through history, from philosophy to physics. Although the objective is similar, the strategies used to model real- world are different from field to field. Nowadays, the modeling of the world took a more tangible significance: Being in the modeled world, existing in the artificial world instead of the actual world. However, the path to get an artificial world equal to the real world is long and arduous. In this manuscript, we address this issue by exploring methods in computer graphics (Physics-based animation) and haptics to project a sensory represen- tation of the actual world into the artificial world. We report results on Position based dynamics for simulating phase-change phenomena and interaction in VR with physical objects. Also, Ultrasound phased arrays, as well as wearable haptics for stiffness and softness rendering are studied",
        bibtex:"",
         },
                  {
        title: 'Phys-Sketch: Sketching 3D Dynamic Objects in Immersive Virtual Reality', 
        authors: "Ticona, Jose.; Villa, Steeven.; Torchelsen, Rafael; Maciel, Anderson.; Nedel, Luciana.", 
        venue:"Computer Graphics International 2019." ,
        year: 2019,
        picture: "/images/Papers/phys-sketch.png",
        link: "https://link.springer.com/chapter/10.1007/978-3-030-22514-8_10",
        abstract:"Sketching was traditionally a 2D task. Even when the new generation of VR devices allowed to sketch in 3D, the drawn models remained essentially static representations. In this paper, we introduce a new physics-inspired sketching technique built on the top of Position-based Dynamics to enrich the 3D drawings with dynamic behaviors. A particle-based method allows interacting in real time with a wide range of materials including fluids, rigid bodies, soft bodies and clothes. Users can interact with the dynamic sketches and sculpt them while they move, deform and fall. We analyze the expressiveness of the system from the regard of two experienced artists. Thus, this paper also gives a starting point to move towards an improved generation of physics-enabled sketching applications. ",
        bibtex:"",
         },
                  {
        title: 'Towards Moving Virtual Arms Using Brain-Computer Interface', 
        authors: "Salas, Jaime.; Villa, Steeven.; Maciel, Aanderson.; Nedel, Luciana.; Barone, Dante.", 
        venue:"Computer Graphics International 2019. " ,
        year: 2019,
        picture: "/images/Papers/towards.png",
        link: "https://link.springer.com/chapter/10.1007/978-3-030-22514-8_43",
        abstract:"Motor imagery Brain-Computer Interface (MI-BCI) is a paradigm widely used for controlling external devices by imagining bodily movements. This technology has inspired researchers to use it in several applications such as robotic prostheses, games, and virtual reality (VR) scenarios. We study the inclusion of an imaginary third arm as a part of the control commands for BCI. To this end, we analyze a set of open-close hand tasks (including a third arm that comes out from the chest) performed in two VR scenarios: the classical BCI Graz, with arrows as feedback; and a first-person view of a human-like avatar performing the corresponding tasks. This study purpose is to explore the influence of both time window of the trials and the frequency bands on the accuracy of the classifiers. Accordingly, we used a Filter Bank Common Spatial Patterns (FBCSP) algorithm for several time windows (100, 200, 400, 600, 800, 1000 and 2000 ms) for extracting features and evaluating the classification accuracy. The offline classification results show that a third arm can be effectively used as a control command (accuracy > 0.62%). Likewise, the human-like avatar condition (  67% ) outperforms the Graz condition (  63% ) significantly, suggesting that the realistic scenario can reduce the abstractness of the third arm. This study, thus, motivates the further inclusion of non-embodied motor imagery task in BCI systems.",
        bibtex:"",
         },
                  {
        title: 'Heat-based Bidirectional Phase Shifting Simulation Using Position-based Dynamics', 
        authors: "Villa, Steeven. ; Ticona, Jose.; Torchelsen, R; Maciel, A.; Nedel, L.", 
        venue:"Computers & Graphics 2018. " ,
        year: 2018,
        picture: "/images/Papers/heat-based.jpg",
        link: "https://www.sciencedirect.com/science/article/pii/S0097849318301389",
        abstract:"Phase-change phenomena are present in our daily life. Examples are the evaporation of a fluid when it reaches its boiling temperature, the condensation of water vapor in air due to the pressure changes or due to the difference of temperature in boundaries, and the melting of snow when winter is ending. Current development in physics-based animation allows the simulation of these phenomena, but an integrated solution for modeling bidirectional phase-shifting objects is not available for games and other virtual environments. In this work we present a temperature-based method that drives phase transition phenomena based on latent heat of materials using position-based dynamics (PBD). Modifications to density, viscosity and distance PBD constraints are proposed to simulate the necessary thermal phenomena. Results show that melting, fusion, evaporation, condensation, dilation and even convection effects can be obtained by modifying the original PBD constraints in function of latent heat.",
        bibtex:"",
         },
                  {
        title: '3dathlon: 3d Gestural Interfaces To Support A 3-stage Contest In Vr', 
        authors: "Grandi, Jj; Debarba, H; Franz, J; Oliveira, V; Ticona, Jose; Souza, G; Berti, I; Villa, S. ; Maciel, A.; Nedel, L.", 
        venue:"Ieee Conference On Virtual Reality And 3d User Interfaces 2018. " ,
        year: 2018,
        picture: "/images/Papers/3dathlon.jpg",
        link: "https://ieeexplore.ieee.org/document/8446286",
        abstract:"In the context of the 3DUI Contest promoted by the IEEE VR 2018, we propose 3D interaction techniques that address three distinct tasks in a virtual environment setup: climbing a ladder, controlling a quadcopter in a first-person view flight, and building a tower by stacking a series of objects. The interaction techniques were developed so the player, our 3D-athlete, has control over the events in each task, following metaphors that facilitate the use of the interface, and having status and spatial awareness supported by clear feedback cues. Thus, the player should be able to execute the tasks with precision and agility.",
        bibtex:"",
         },
             // Entry Model
        {
       title: 'Evaluation Of Visual, Auditory And Vibro-tactile Alerts In Supervised Interfaces', 
       authors: "Souza, G.; Amaya, L.; Stein, V; Villa, S. ;ticona, J.; Maciel, A.; Nedel, L.", 
       venue:"20th Symposium On Virtual And Augmented Reality 2018  " ,
       year: 2018,
       picture: "/images/Papers/evaluating.jpg",
       link: "https://ieeexplore.ieee.org/document/8802446",
       abstract:"In teleoperation, particularly when controlling systems performing tasks that must be supervised for many hours, human users cannot keep a high level of attention all time. An open issue in the design of such interfaces is to help the user to maintain a situational awareness. In this paper, we compare three types of alert signals aiming to inform users about critical situations that require their full attention. Haptic, visual and auditory signals were assessed as pre-attention mechanisms for tasks in a camera-based supervisory interface scenario. Results show that haptic alerts, for long term supervision, are more effective than auditory and visual ones.",
       bibtex:"",
        }
      ]
    }
  }
}
</script>

