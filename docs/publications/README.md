---
article: false
pageClass: custom-page-class
next: '/teaching'
prev: '/bio'
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
:alias="paper.alias"
:abstract="paper.abstract"
:picture="paper.picture"
:pdf="paper.pdf"
/>
</ClientOnly>

# Patents

<ClientOnly>
<PaperMobile 
title='Intervention drive system comprising an umbilical'
year="2021"
venue="US Patent"
link="https://patentimages.storage.googleapis.com/eb/9d/5a/5f26a1222bed8b/US20210396342A1.pdf"
alias="patentimages"
abstract="The present invention relates to an intervention drive pig comprising an umbilical. In this scenario, the present invention provides an intervention drive pig comprising an umbilical, wherein the umbilical (6) is manufactured from a low-density material, wherein the umbilical (6) comprises an external covering of material having a low coefficient of friction."
picture="/images/Papers/Patent.jpg"
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
  title: 'Understanding the Influence of Electrical Muscle Stimulation on Motor Learning: Enhancing Motor Learning or Disrupting Natural Progression?',
  authors: "Steeven Villa, Finn Jacob Eliyah, Yannick Weiss, Robin Welsch, Thomas Kosch",
  venue: "CHI Conference on Human Factors in Computing Systems (CHI'25)",
  year: 2025,
  picture: "/images/Papers/ems_motor_learning_2025.jpg",
  link: "None",
  alias: "None",
  abstract: "Electrical Muscle Stimulation (EMS) induces movement via external currents and has emerged as a promising modality for motor‑skill acquisition. In a two‑session study, EMS feedback was compared with electrotactile feedback and a no‑feedback control to examine rapid learning, consolidation, and transfer. While electrotactile feedback yielded the steepest learning curve, EMS produced the highest learning plateau, supporting its suitability for motor augmentation and skill transfer. Results contribute empirical evidence clarifying EMS effects in motor‑learning models.",
  bibtex: "",
  pdf: "/Papers/ems_motor_learning_2025.pdf"
},

{
  title: 'Developing and Validating the Perceived System Curiosity Scale (PSC): Measuring Users’ Perceived Curiosity of Systems',
  authors: "Jan Leusmann, Steeven Villa, Burak Berberoglu, Chao Wang, Sven Mayer",
  venue: "CHI Conference on Human Factors in Computing Systems (CHI'25)",
  year: 2025,
  picture: "/images/Papers/psc_scale_2025.jpg",
  link: "None",
  alias: "None",
  abstract: "Curiosity is a human‑like trait increasingly embedded in AI and robotic systems, yet no metric exists to assess how users perceive such system curiosity. Following a standard scale‑development pipeline, the authors created and validated the 12‑item Perceived System Curiosity (PSC) scale, comprising explorative, investigative, and social sub‑scales. Across two crowdsourced studies (N=734), the PSC demonstrated internal reliability and convergent and construct validity, offering researchers a tool to systematically investigate the role of system‑expressed curiosity in interaction.",
  bibtex: "",
  pdf: "/Papers/psc_scale_2025.pdf"
},

{
  title: 'The Impact of Asymmetric AI Assistance on Decision‑Making in Social Dilemmas: A Study on Human Augmentation in Economic Games',
  authors: "Chenxinran Shen, Jurgis Karpus, Thomas Kosch, Daniela Fernandes, Beatriz Mello, Robin Welsch, Steeven Villa",
  venue: "Augmented Humans International Conference (AHs'25)",
  year: 2025,
  picture: "/images/Papers/asymmetric_ai_social_dilemmas_2025.jpg",
  link: "None",
  alias: "None",
  abstract: "Unequal access to AI augmentation may influence cooperation. Using the Trust Game and Prisoner’s Dilemma, this study examined how asymmetric AI assistance shapes trust, cooperation, and fairness perceptions between augmented and non‑augmented players. Overall cooperation rates were unchanged, but non‑augmented players perceived augmented counterparts as more competitive and less warm, anticipating lower trust. These findings underscore the importance of equitable AI access to prevent emergent social divides in AI‑augmented societies.",
  bibtex: "",
  pdf: "/Papers/asymmetric_ai_social_dilemmas_2025.pdf"
},
{
  title: 'Exploring Virtual Reality as a Platform for Early‑Stage Design for Human Augmentation Technologies',
  authors: "Steeven Villa, Robin Neuhaus, Yannick Weiss, Marc Hassenzahl",
  venue: "International Conference on Mobile and Ubiquitous Multimedia (MUM'24)",
  year: 2024,
  picture: "/images/Papers/vr_hat_2024.jpg",
  link: "None",
  alias: "None",
  abstract: "Human‑Augmentation Technologies (HATs) aim to enhance human capabilities and transform our interactions with the environment and with one another, yet prototyping such technologies is complex. This study investigates Virtual Reality (VR) as a platform for early‑stage HAT design in an educational setting. Over a semester, students created virtual augmentations inside a VR environment; three of these applications are showcased and four students were interviewed. Findings underline the need for design guidelines for virtual augmentations, and reveal current VR limitations—simulator sickness and lack of haptic feedback—while highlighting the positive reception of the resulting prototypes.",
  bibtex: "",
  pdf: "/Papers/vr_hat_2024.pdf"
},
       {
       title: 'Envisioning Futures: How the Modality of AI Recommendations Impacts Conversation Flow in AR-enhanced Dialogue', 
       authors: "Steeven Villa, Yannick Weiss, Karin Lu, Moritz Ziarko, Albrecht Schmidt, Jasmin Niess", 
       venue:"International Conference on Multimodal Interaction (ICMI'24)" ,
       year: 2024,
       picture: "/images/Papers/envisioning.jpg",
       link: "None",
       alias:"None",
       abstract:"The use of AI is becoming more common among the population every day; the use of generative AI, such as LLMs, empowers individuals by supporting daily life tasks. Yet, the user interaction with AI models is mostly constrained to chatbot interactions. However, we envision that in the near future, individuals will be able to integrate the use of these technologies into their daily activities without refocusing their attention. Consequently, we explores the impact of such integration on individuals' conversations. In detail, this paper investigates how different modes of information presentation (visual vs. auditory) and triggers for AI action (mechanical vs. ocular) influence conversational dynamics and user experiences. We conducted a mixed-method, within-subjects study with 21 participants using a Discourse Completion Task (DCT) to observe how users develop their discourse in the presence of AI-generated suggestions.  Our study examines the effects of presentation modality on response delay, response length, and response similarity to the AI prompt. The results highlight the significance of managing the balance between human and AI input in conversation, revealing insights into user experience factors with AI assistance in face-to-face conversational settings.",
       bibtex:"",
       pdf:"/Papers/envisioning2024.pdf",
        },
        {
       title: "Touch It Like It's Hot: A Thermal Feedback Enabled Encountered-type Haptic Display for Virtual Reality", 
       authors: "Steeven Villa, Kenji Ishihara, Moritz Ziarko, Sebastian Gunther, Florial Muller", 
       venue:"IEEE International Symposium on Mixed and Augmented Reality (ISMAR'24)" ,
       year: 2024,
       picture: "/images/Papers/cover.jpg",
       link: "None",
       alias:"None",
       abstract:"In recent years, the community has presented various novel solutions to address the lack of haptic feedback in virtual reality experiences. Yet, it remains a major challenge for Virtual Reality applications. Encountered-type Haptic Displays (ETHDs) have emerged as a promising alternative to enable haptic feedback in VR without requiring the user to wear any device while allowing for sensorily rich experiences such as texture, kinaesthetic feedback, and even ultrasonic tactile feedback. Nevertheless, as important as thermal feedback is for daily life interactions, such as assessing the temperature of a mug or knowing if the microwave is on, thermal feedback in ETHD has remained largely unexplored. In this paper, we present a novel ETHD that provides thermal feedback and explore its potential in VR. We describe the design of our ETHD, and we report the results of a user study that compares different thermal feedback settings in VR. Our results show that thermal feedback can significantly enhance the user immersion and haptic experience in VR, and we discuss the implications of our findings for the design of ETHD and VR experiences.",
       bibtex:"",
       pdf:"/Papers/touchit2024.pdf",
        },
        {
       title: 'Embracer: A Wearable Encountered-Type Haptic Controller for 3 DoF Input and Feedback', 
       authors: "Dennis Dietz, Steeven Villa, Moritz Ziarko, Michael Bonfert, Florian Muller, Andreas Butz", 
       venue:"Proceedings of the 2024 ACM International Symposium on Wearable Computers (ISWC'24)" ,
       year: 2024,
       picture: "/images/Papers/embracer.jpg",
       link: "None",
       alias:"None",
       abstract:"The lack of haptic sensations beyond very simple vibration feedback diminishes the feeling of presence in Virtual Reality. Research suggested various approaches to deliver haptic sensations to the user's palm. However, these approaches are typically limited in the number of actuation directions and only focus on enhancing the system's output, ignoring haptic input. We present Embracer, a wrist-mounted encountered-type haptic controller that addresses these gaps by rendering forces along three axes through a sphere-shaped end effector within the user's palm. Using modified servo motors, we sense user-performed manipulations of the end effector as an input modality. In this paper, we contribute the design and implementation of Embracer together with a preliminary technical evaluation. By providing a more comprehensive haptic feedback system, Embracer enhances the realism and immersion of haptic feedback and user control.",
       bibtex:"",
       pdf:"/Papers/dietzEmbracerWearableEncounteredType2024.pdf",
        },
        {
       title: 'An Approach to Elicit Human-Understandable Robot Expressions to Support Human-Robot Interaction', 
       authors: "Jan Leusmann, Steeven Villa, Thomas Liang, Chao Wang, Albrecht Schmidt, Sven Mayer", 
       venue:"Arxiv" ,
       year: 2024,
       picture: "/images/Papers/gestures.png",
       link: "None",
       alias:"None",
       abstract:"Understanding the intentions of robots is essential for natural and seamless human-robot collaboration. Ensuring that robots have means for non-verbal communication is a basis for intuitive and implicit interaction. For this, we contribute an approach to elicit and design human-understandable robot expressions. We outline the approach in the context of non-humanoid robots. We paired human mimicking and enactment with research from gesture elicitation in two phases: first, to elicit expressions, and second, to ensure they are understandable. We present an example application through two studies (N=16 & N=260) of our approach to elicit expressions for a simple 6-DoF robotic arm. We show that it enabled us to design robot expressions that signal curiosity and interest in getting attention. Our main contribution is an approach to generate and validate understandable expressions for robots, enabling more natural human-robot interaction.",
       bibtex:"",
       pdf:"/Papers/gestures.pdf",
        },
        {
       title: 'AI Makes You Smarter, But None The Wiser: The Disconnect Between Performance and Metacognition', 
       authors: "Daniela Fernandes, Steeven Villa, Salla Nicholls, Otso Haavisto, Daniel Buschek, Albrecht Schmidt, Thomas Kosch, Chenxinran Shen, Robin Welsch", 
       venue:"" ,
       year: 2024,
       picture: "/images/Papers/dunnin.png",
       link: "None",
       alias:"None",
       abstract:"Optimizing human-AI interaction requires users to reflect on their own performance critically. Our study examines whether people using AI to complete tasks can accurately monitor how well they perform. Participants (N = 246) used AI to solve 20 logical problems from the Law School Admission Test. While their task performance improved by three points compared to a norm population, participants overestimated their performance by four points. Interestingly, higher AI literacy was linked to less accurate self-assessment. Participants with more technical knowledge of AI were more confident but less precise in judging their own performance. Using a computational model, we explored individual differences in metacognitive accuracy and found that the Dunning-Kruger effect, usually observed in this task, ceased to exist with AI use. We discuss how AI levels our cognitive and metacognitive performance and consider the consequences of performance overestimation for designing interactive AI systems that enhance cognition.",
       bibtex:"",
       pdf:"/Papers/dunning.pdf",
        },
        {
       title: 'An Examination of Ultrasound Mid-air Haptics for Enhanced Material and Temperature Perception in Virtual Environments', 
       authors: "Steeven Villa, Yannick Weiss, Niklas Hirsch, Alexander Wiethoff", 
       venue:"Proceedings of the ACM on Human-Computer Interaction (MobileHCI'24)" ,
       year: 2024,
       picture: "/images/Papers/ultrasound.jpeg",
       link: "None",
       alias:"None",
       abstract:"Rendering realistic tactile sensations of virtual objects remains a challenge in VR. While haptic interfaces have advanced, particularly with phased arrays, their ability to create realistic object properties like state and temperature remains unclear. This study investigates the potential of Ultrasound Mid-air Haptics (UMH) for enhancing the perceived congruency of virtual objects. In a user study with 30 participants, we assessed how UMH impacts the perceived material state and temperature of virtual objects. We also analyzed EEG data to understand how participants integrate UMH information physiologically. Our results reveal that UMH significantly enhances the perceived congruency of virtual objects, particularly for solid objects, reducing the feeling of mismatch between visual and tactile feedback. Additionally, UMH consistently increases the perceived temperature of virtual objects. These findings offer valuable insights for haptic designers, demonstrating UMH's potential for creating more immersive tactile experiences in VR by addressing key limitations in current haptic technologies.",
       bibtex:"",
       pdf:"/Papers/ultrasound.pdf",
        },
        {
       title: 'Exploring Redirection and Shifting Techniques to Mask Hand Movements from Shoulder-Surfing Attacks during PIN Authentication in Virtual Reality', 
       authors: "Yannick Weiss, Steeven Villa, Jesse W Grootjen, Matthias Hoppe, Yasin Kale, Florian Müller", 
       venue:"Proceedings of the ACM on Human-Computer Interaction (MobileHCI'24)" ,
       year: 2024,
       picture: "/images/Papers/aut.png",
       link: "None",
       alias:"None",
       abstract:"The proliferation of mobile Virtual Reality (VR) headsets shifts our interaction with virtual worlds beyond our living rooms into shared spaces. Consequently, we are entrusting more and more personal data to these devices, calling for strong security measures and authentication. However, the standard authentication method of such devices- entering PINs via virtual keyboards- is vulnerable to shoulder-surfing, as movements to enter keys can be monitored by an unnoticed observer. To address this, we evaluated masking techniques to obscure VRusers’ input during PIN authentication by diverting their hand movements. Through two experimental studies, we demonstrate that these methods increase users’ security against shoulder-surfing attacks from observers without excessively impacting their experience and performance. With these discoveries, we aim to enhance the security of future VR authentication without disrupting the virtual experience or necessitating additional hardware or training of users.",
       bibtex:"",
       pdf:"/Papers/weissExploringRedirectionShifting2024.pdf",
        },
        {
       title: 'Evaluating Interactive AI: Understanding and Controlling Placebo Effects in Human-AI Interaction', 
       authors: "Steeven Villa, Robin Welsch, Alena Denisova, Thomas Kosch", 
       venue:"The ACM Conference on Human Factors in Computing Systems, CHI24" ,
       year: 2024,
       picture: "/images/Papers/evalAI.png",
       link: "None",
       alias:"None",
       abstract:"In the medical field, patients often experience tangible benefits from treatments they expect will improve their condition, even if the treatment has no mechanism of effect. This phenomenon often obscuring scientific evaluation of human treatment is termed the' placebo effect.' Latest research in human-computer interaction has shown that using cutting-edge technologies similarly raises expectations of improvement, culminating in placebo effects that undermine evaluation efforts for user studies. This workshop delves into the role of placebo effects in human-computer interaction for cutting-edge technologies such as artificial intelligence, its influence as a confounding factor in user studies, and identifies methods that researchers can adopt to reduce its impact on study findings. By the end of this workshop, attendees will be equipped to incorporate placebo control measures in their experimental designs.",
       bibtex:"",
       pdf:"/Papers/villa2024evaluating.pdf",
        }, 
        {
       title: '"AI enhances our performance, I have no doubt this one will do the same": The Placebo effect is robust to negative descriptions of AI', 
       authors: "Agnes M Kloft, Robin Welsch, Thomas Kosch, Steeven Villa", 
       venue:"The ACM Conference on Human Factors in Computing Systems, CHI24" ,
       year: 2024,
       picture: "/images/Papers/TeaserPlacebox.png",
       link: "https://arxiv.org/abs/2309.16606",
       alias:"arxiv",
       abstract:"Heightened AI expectations facilitate performance in human-AI interactions through placebo effects. While lowering expectations to control for placebo effects is advisable, overly negative expectations could induce nocebo effects. In a letter discrimination task, we informed participants that an AI would either increase or decrease their performance by adapting the interface, but in reality, no AI was present in any condition. A Bayesian analysis showed that participants had high expectations and performed descriptively better irrespective of the AI description when a sham-AI was present. Using cognitive modeling, we could trace this advantage back to participants gathering more information. A replication study verified that negative AI descriptions do not alter expectations, suggesting that performance expectations with AI are biased and robust to negative verbal descriptions. We discuss the impact of user expectations on AI interactions and evaluation and provide a behavioral placebo marker for human-AI interaction",
       bibtex:"",
       pdf:"/Papers/Preprints/2309.16606.pdf",
        }, 
        {
       title: 'SensCon: Embedding Physiological Sensing into Virtual Reality Controllers', 
       authors: "Francesco Chiossi, Thomas Kosch, Luca Menghini, Steeven Villa, Sven Mayer", 
       venue:"Proceedings of the ACM on Human-Computer Interaction (PACM)" ,
       year: 2023,
       picture: "/images/Papers/senscon.png",
       link: "https://dl.acm.org/doi/10.1145/3604270",
       alias:"acm.dl",
       abstract:"Virtual reality experiences increasingly use physiological data for virtual environment adaptations to evaluate user experience and immersion. Previous research required complex medical-grade equipment to collect physiological data, limiting real-world applicability. To overcome this, we present SensCon for skin conductance and heart rate data acquisition. To identify the optimal sensor location in the controller, we conducted a first study investigating users' controller grasp behavior. In a second study, we evaluated the performance of SensCon against medical-grade devices in six scenarios regarding user experience and signal quality. Users subjectively preferred SensCon in terms of usability and user experience. Moreover, the signal quality evaluation showed satisfactory accuracy across static, dynamic, and cognitive scenarios. Therefore, SensCon reduces the complexity of capturing and adapting the environment via real-time physiological data. By open-sourcing SensCon, we enable researchers and practitioners to adapt their virtual reality environment effortlessly. Finally, we discuss possible use cases for virtual reality-embedded physiological sensing.",
       bibtex:"",
       pdf:"/Papers/chiossi2023senscon.pdf",
        }, 
        {
       title: 'Towards a Haptic Taxonomy of Emotions: Exploring Vibrotactile Stimulation in the Dorsal Region', 
       authors: "Steeven Villa, Thuy Duong Nguyen, Benjamin Tag, Tonja-Katrin Machulla, Albrecht Schmidt, Jasmin Niess", 
       venue:"Proceedings of the 2023 ACM International Symposium on Wearable Computers (ISWC)" ,
       year: 2023,
       picture: "/images/Papers/vest.png",
       link: "https://dl.acm.org/doi/abs/10.1145/3594738.3611363",
       alias:"acm.dl",
       abstract:"The implicit communication of emotional states between persons is a key use case for novel assistive and augmentation technologies. It can serve to expand individuals’ perceptual capabilities and assist neurodivergent individuals. Notably, vibrotactile rendering is a promising method for delivering emotional information with minimal interference with visual or auditory perception. To date, the subjective individual association between vibrotactile properties and emotional states remains unclear. Previous approaches relied on analogies or arbitrary variations, limiting generalization. To address this, we conducted a study with 40 participants, analyzing associations between attributes of self-generated vibrotactile patterns (amplitude, frequency, spatial location of stimulation) and four emotional states (Anger, Happiness, Neutral, Sadness). We fin a preference for symmetrically arranged patterns, as well as distinct amplitude and frequency profiles for different emotions.",
       bibtex:"",
       pdf:"/Papers/villa2023towards.pdf",
        }, 
        {
       title: "Society's Attitudes Towards Human Augmentation and Performance Enhancement Technologies (SHAPE) Scale", 
       authors: "Steeven Villa, Jasmin Niess, Albrecht Schmidt, Robin Welsch", 
       venue:"Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)" ,
       year: 2023,
       picture: "/images/Papers/shape.png",
       link: "https://dl.acm.org/doi/abs/10.1145/3610915",
       alias:"acm.dl",
       abstract:"Human augmentation technologies (ATs) are a subset of ubiquitous on-body devices designed to improve cognitive, sensory, and motor capacities. Although there is a large corpus of knowledge concerning ATs, less is known about societal attitudes towards them and how they shift over time. To that end, we developed The Society's Attitudes Towards Human Augmentation and Performance Enhancement Technologies (SHAPE) Scale, which measures how users of ATs are perceived. To develop the scale, we first created a list of possible scale items based on past work on how people respond to new technologies. The items were then reviewed by experts. Next, we performed exploratory factor analysis to reduce the scale to its final length of thirteen items. Subsequently, we confirmed test-retest validity of our instrument, as well as its construct validity. The SHAPE scale enables researchers and practitioners to understand elements contributing to attitudes toward augmentation technology users. The SHAPE scale assists designers of ATs in designing artifacts that will be more universally accepted.",
       bibtex:"",
       pdf:"/Papers/villa2023society.pdf",
        }, 
        {
       title: 'Would You Hold My Hand? Exploring External Observers’ Perception of Artificial Hands', 
       authors: "Svenja Y Schött, Patricia Capsi-Morales, Steeven Villa, Andreas Butz, Cristina Piazza", 
       venue:"Multimodal Technologies and Interaction" ,
       year: 2023,
       picture: "/images/Papers/mti.png",
       link: "https://www.mdpi.com/2414-4088/7/7/71",
       alias:"mdpi",
       abstract:"Recent technological advances have enabled the development of sophisticated prosthetic hands, which can help their users to compensate lost motor functions. While research and development has mostly addressed the functional requirements and needs of users of these prostheses, their broader societal perception (e.g., by external observers not affected by limb loss themselves) has not yet been thoroughly explored. To fill this gap, we investigated how the physical design of artificial hands influences the perception by external observers. First, we conducted an online study (n = 42) to explore the emotional response of observers toward three different types of artificial hands. Then, we conducted a lab study (n = 14) to examine the influence of design factors and depth of interaction on perceived trust and usability. Our findings indicate that some design factors directly impact the trust individuals place in the system’s capabilities. Furthermore, engaging in deeper physical interactions leads to a more profound understanding of the underlying technology. Thus, our study shows the crucial role of the design features and interaction in shaping the emotions around, trust in, and perceived usability of artificial hands. These factors ultimately impact the overall perception of prosthetic systems and, hence, the acceptance of these technologies in society.",
       bibtex:"",
       pdf:"/Papers/mti-07-00071.pdf",
        }, 
        {
       title: 'Towards an Implicit Metric of Sensory-Motor Accuracy: Brain Responses to Auditory Prediction Errors in Pianists', 
       authors: "Elisabeth Pangratz; Francesco Chiossi; Steeven Villa; Klaus Gramann; Lukas Gehrke", 
       venue:"Proceedings of the 15th Conference on Creativity and Cognition" ,
       year: 2023,
       picture: "/images/Papers/TowardsMetric.png",
       link: "https://dl.acm.org/doi/abs/10.1145/3591196.3593340",
       alias:"acm.dl",
       abstract:"During listening to music, the brain expects specific acoustic events based on learned musical rules. During music performance expectancy is additionally created based on motor action by linking keypresses to their sounds. We investigated EEG (Electroencephalography) signals to auditory expectancy violations in piano performance and perception. In our study, pianists experiencedmanipulations of different acoustic features, such as pitch and loudness, during playing and listening to piano sequences. We found that manipulations during performance elicited deflections with stronger amplitudes compared to manipulations during perception indicating that the action of producing sounds strengthens auditory expectancy. Loudness manipulations, violating musical regularity, elicited deflections with smaller latencies compared to pitch manipulations, which violate harmonic expectancy, suggesting that the brain processes expectancy violations of distinct acoustic features in a different way. These EEG signatures may prove useful for applications in intelligent music interfaces by providing information about sensory-motor accuracy.",
       bibtex:"",
       pdf:"/Papers/pangratz2023towards.pdf",
        }, 
          {
       title: 'The Placebo Effect of Human Augmentation: Anticipating Cognitive Augmentation Increases Risk-Taking Behavior', 
       authors: "Steeven Villa; Thomas Kosch; Felix Grelka Albrecht Schmidt; Robin Welsch", 
       venue:"Journal: Computers in Human Behavior (CHB)" ,
       year: 2023,
       picture: "/images/Papers/CHB.jpg",
       link: "https://www.sciencedirect.com/science/article/pii/S0747563223001383", 
       abstract:"Human Augmentation Technologies improve human capabilities using technology. In this study, we investigate the placebo effect of Augmentation Technologies. Thirty naïve participants were told to be augmented with a cognitive augmentation technology or no augmentation system while conducting a Columbia Card Task. In this risk-taking measure, participants flip win and loss cards. The sham augmentation system consisted of a brain-computer interface allegedly coordinated to play non-audible sounds that increase cognitive functions. However, no sounds were played throughout all conditions. We show a placebo effect in human augmentation, where a sustained belief of improvement after using the sham system remains and an increase in risk-taking conditional on heightened expectancy using Bayesian statistical modeling. Furthermore, we identify differences in event-related potentials in the electroencephalogram that occur during the sham condition when flipping loss cards. Finally, we integrate our findings into theories of human augmentation and discuss implications for the future assessment of augmentation technologies.",
       bibtex:"",
       pdf:"/Papers/VillaCHB23.pdf",
       alias: "Springer",
        },   
             {
       title: 'Using Pseudo-Stiffness to Enrich the Haptic Experience in Virtual Reality', 
       authors: "Yannick Weiss; Steeven Villa; Albrecht Schmidt; Sven Mayer; Florian Müller", 
       venue:"The ACM Conference on Human Factors in Computing Systems, CHI23" ,
       year: 2023,
       picture: "/images/Papers/pseudostiffness.png",
       link: "None", 
       abstract:"Providing users with a haptic sensation of the hardness and softness of objects in virtual reality is an open challenge. While physical props and haptic devices help, their haptic properties do not allow for dynamic adjustments. To overcome this limitation, we present a novel technique for changing the perceived stiffness of objects based on a visuo-haptic illusion. We achieved this by manipulating the hands' Control-to-Display (C/D) ratio in virtual reality while pressing down on an object with fixed stiffness. In the first study (N=12), we determine the detection thresholds of the illusion. Our results show that we can exploit a C/D ratio from 0.7 to 3.5 without user detection. In the second study (N=12), we analyze the illusion's impact on the perceived stiffness. Our results show that participants perceive the objects to be up to 28.1% softer and 8.9% stiffer, allowing for various haptic applications in virtual reality.",
       bibtex:"",
       pdf:"/Papers/weiss2023using.pdf",
       alias: "None",
        },
        
        {
       title: 'Understanding Perception of Human Augmentation: A Mixed-Method Study', 
       authors: "Steeven Villa; Jasmin Niess; Takuro Nakao; Jonathan Lazar; Albrecht Schmidt; Tonja-Katrin Machulla", 
       venue:"The ACM Conference on Human Factors in Computing Systems, CHI23" ,
       year: 2023,
       picture: "/images/Papers/understanding.jpg",
       link: "None", 
       abstract:"Technologies that help users overcome their limitations and integrate with the human body are often termed ``human augmentations''. Such technologies are now available on the consumer market, potentially supporting people in their everyday activities. To date, there is no systematic understanding of the perception of human augmentations yet. To address this gap and build an understanding of how to design positive experiences with human augmentations, we conducted a mixed-method study of the perception of augmented humans (AHs). We conducted two scenario-based studies: interviews (n=16) and an online study (n=506) with participants from four countries. The scenarios include one out of three augmentation categories (sensory, motor, and cognitive) and specify if the augmented person has a disability or not. Overall, results show that the type of augmentation and disability impacted user attitudes towards AHs. We derive design dimensions for creating technological augmentations for a diverse and global audience.",
       bibtex:"",
       pdf:"/Papers/Villa2023Understanding.pdf",
       alias: "None",
        },

        {
       title: 'Extended Mid-air Ultrasound Haptics for Virtual Reality', 
       authors: "Steeven Villa; Sven Mayer; Jess Hartcher O’brien; Albrecht Schmidt; Tonja-Katrin Machulla", 
       venue:"Proceedings of the ACM Humuman-Computer Interaction Journal" ,
       year: 2022,
       picture: "/images/Papers/extended.jpg",
       link: "None", 
       abstract:"We present a novel approach to rendering mid-air haptic sensations in a large rendering volume by turning a static array into a dynamic array following the user’s hand. We used a 6DOF robot to drive a haptic ultrasound array over a large 3D space. Our system enables rendering room-scale mid-air experiences while preserving bare-hand interaction, thus, providing tangibility for virtual environments. To evaluate our approach, we performed three evaluations. First, we performed a technical system evaluation, showcasing the feasibility of such a system. Next, we conducted three psychophysical experiments, showing that the motion does not affect the user’s perception with high likelihood. Lastly, we explored seven use cases that showcase our system’s potential using a user study. We discuss challenges and opportunities in how large-scale mid-air haptics can contribute toward room-scale haptic feedback. Thus, with our system, we contribute to general haptic mid-air feedback on a large scale.",
       bibtex:"",
       pdf:"/Papers/_ISS_22__Mid_Air_in_motion__Robotic_guided_ultrasound_mid_air_haptics_for_VR.pdf",
       alias: "None",
        },
        
        {
       title: 'Cobity: A Plug-And-Play Toolbox to Deliver Haptics in Virtual Reality', 
       authors: "Villa, Steeven and Mayer, Sven", 
       venue:"Proceedings of Mensch und Computer" ,
       year: 2022,
       picture: "/images/Papers/cobity.jpg",
       link: "https://dl.acm.org/doi/fullHtml/10.1145/3543758.3543775",
       alias: "dl.acm",
       abstract:"Haptics increase the presence in virtual reality applications. However, providing room-scale haptics is an open challenge. Cobots (robotic systems that are safe for human use) are a promising approach, requiring in-depth engineering skills. Control is done on a low abstraction level and requires complex procedures and implementations. In contrast, 3D tools such as Unity allow to quickly prototype a wide range of environments for which cobots could deliver haptic feedback. To overcome this disconnect, we present Cobity, an open-source plug-and-play solution to control the cobot using the virtual environment, enabling fast prototyping of a wide range of haptic experiences. We present a Unity plugin that allows controlling the cobot using the end-effector’s target pose (cartesian position and angles); the values are then converted into velocities and streamed to the cobot inverse kinematic solver using a specially",
       bibtex:"",
       pdf:"/Papers/MUC_Cobity.pdf",
        }, 
        
        {
       title: 'Virtual Reality Adaptation Using Electrodermal Activity to Support the User Experience', 
       authors: "Chiossi, Francesco; Welsch, Robin; Villa, Steeven; Chuang, Lewis L.; Mayer, Sven", 
       venue:"Big Data and Cognitive Computing" ,
       year: 2022,
       picture: "/images/Papers/MDPIADAPT.jpg",
       link: "https://www.mdpi.com/2504-2289/6/2/55", 
       alias: "MDPI",
       abstract:"Virtual reality is increasingly used for tasks such as work and education. Thus, rendering scenarios that do not interfere with such goals and deplete user experience are becoming progressively more relevant. We present a physiologically adaptive system that optimizes the virtual environment based on physiological arousal, i.e., electrodermal activity. We investigated the usability of the adaptive system in a simulated social virtual reality scenario. Participants completed an n-back task (primary) and a visual detection (secondary) task. Here, we adapted the visual complexity of the secondary task in the form of the number of non-player characters of the secondary task to accomplish the primary task. We show that an adaptive virtual reality can improve users’ comfort by adapting to physiological arousal regarding the task complexity. Our findings suggest that physiologically adaptive virtual reality systems can improve users’ experience in a wide range of scenarios.",
       bibtex:"",
       pdf:"/Papers/BDCC-06-00055.pdf",
        },
                {
       title: 'Design of on-body tactile displays to enhance situation awareness in automated vehicles', 
       authors: "Francesco Chiossi; Steeven Villa; Melanie Hauser; Robin Welsch; Lewis Chuang", 
       venue:"CIVEMSA" ,
       year: 2022,
       picture: "/images/Papers/onbody.jpg",
       link: "https://ieeexplore.ieee.org/abstract/document/9853690", 
       alias: "ieeexplore",
       abstract: "Fatalities with semi-automated vehicles typically occur when users are engaged in non-driving related tasks (NDRTs) that compromise their situational awareness (SA). This work developed a tactile display for on-body notification to support situational awareness, thus enabling users to recognize vehicle automation failures and intervene if necessary. We investigated whether such tactile notifications support 'event detection' (SA-L1) or 'anticipation' (SA-L3). Using a simulated automated driving scenario, a between-groups study contrasted SA-L1 and SA-L3 tactile notifications that respectively displayed the spatial positions of surrounding traffic or future projection of the automated vehicle’s position. Our participants were engaged in an NDRT, i.e., an Operation Span Task that engaged visual working memory (WM) resources. They were instructed to intervene if the tactile display contradicted the driving scenario",
       bibtex:"",
       pdf:"/Papers/_IEEE_CIVEMSA__22__Vest_Paper___Final_Cut.pdf",
        },
     
             {
       title: 'Designing a Physiological Loop for the Adaptation of Virtual Human Characters in a Social VR Scenario', 
       authors: "Chiossi, Francesco; Welsch, Robin; Villa, Steeven; Chuang, Lewis L.; Mayer, Sven", 
       venue:"IEE VR" ,
       year: 2022,
       picture: "/images/Papers/vr-adaptation.jpg",
       link: "https://ieeexplore.ieee.org/abstract/document/9757528", 
       alias: "ieeexplore",
       abstract:"Social virtual reality is getting mainstream not only for entertainment purposes but also for productivity and education. This makes the design of social VR scenarios functional to support the operator's performance. We present a physiologically-adaptive system that optimizes for visual complexity in a dual-task scenario based on electrodermal activity. Specifically, we propose a system that adapts the amount of non-player characters while jointly performing an N-Back task (primary) and visual detection task (secondary). Our preliminary results show that when optimizing the complexity of the secondary task, users report an improved user experience.",
       bibtex:"",
       pdf:"/Papers/chiossi2022designing.pdf",
        },
          {
       title: 'Designing a Wearable Sensor-Fusion Toolkit for Motor Skill Learning', 
       authors: "Eska, Bettina; Villa, Steeven; Mayer, Sven; Niess, Jasmin", 
       venue:"Workshop on Toolkits & Wearables: Developing Toolkits for Exploring Wearable Designs." ,
       year: 2022,
       picture: "/images/Papers/eska2022designing-300x169.jpg",
       link: "https://dl.acm.org/doi/10.1145/3490149.3505578", 
       alias: "Not Available",
       abstract:"User movement data is essential for providing feedback in the area of motor-skill learning. For instance, when learning a new sport such as dancing, people can benefit from meaningful technology-based feedback. However, movement tracking equipment for real-time feedback is costly and challenging to implement. In contrast, wearable devices tracking users' movements are accessible and lightweight. While their lower cost makes them available to a broader audience, several open issues include sensor placement, sensor count, and data synchronization. To address these issues, we propose a wearable sensor-fusion approach for motor skill learning that allows researchers and developers to use one or multiple body-worn sensors for motion tracking. The extracted motion can then be used to deliver real-time feedback on the user's performance, supporting positive learning experiences.",
       bibtex:"",
       pdf:"/Papers/eska2022designing.pdf",
        },
                  {
       title: 'EMStriker: Potentials of Enhancing the Training Process of Racket-based Sports via Electrical Muscle Stimulation', 
       authors: "Faltaous, Sarah; Hubert, Anna; Karolus, Jakob; Villa, Steeven; Kosch, Thomas; Wozniak, Pawel", 
       venue:"Sixteenth International Conference on Tangible, Embedded, and Embodied Interaction" ,
       year: 2022,
       picture: "/images/Papers/emsstriker.jpg",
       link: "https://dl.acm.org/doi/10.1145/3490149.3505578", 
       alias: "dl.acm",
       abstract:"Racket sports offer an enjoyable form of physical activity and are fertile ground for interactive technologies supporting new players. Yet, current research has neglected its potential to support not only active players but also coaches in their training methods. To investigate how interactive technologies can support skill acquisition in training, we designed an Electrical Muscle Stimulation (EMS) system that helps maintain the ready position in crossminton. We compared the system with a vibrotactile solution in a user study, interviewing novice players and experienced coaches about their perception of the system. The system allowed coaches to effectively and immediately guide players to the ready position. An EMS-based feedback system for coaches can potentially reduce delay (physical and cognitive) for trainees, as stated by coaches. Our work contributes insights into designing systems that facilitate learning sports techniques using interactive feedback.",
       bibtex:"",
       pdf:"/Papers/EMStriker.pdf",
        },
                     {
       title: 'Immediate Effects of Vibrotactile Biofeedback Instructions on Human Postural Control', 
       authors: "Tannert, Isabel; Schulleri, Katrin; Michel, Youssef; Villa, Steeven; Leif, Johannsen; Hermsdorfer, Joachim; Lee, Dongheui", 
       venue:"43rd Annual International Conference of the IEEE Engineering in Medicine & Biology Society (EMBC)" ,
       year: 2021,
       picture: "/images/Papers/posture.jpg",
       link: "https://ieeexplore.ieee.org/abstract/document/9630992", 
       alias: "ieeexplore",
       abstract:"Vibrotactile biofeedback can improve balance and consequently be helpful in fall prevention. However, it remains unclear how different types of stimulus presentations affect not only trunk tilt, but also Center of Pressure (CoP) displacements, and whether an instruction on how to move contributes to a better understanding of vibrotactile feedback.Based on lower back tilt angles (L5), we applied individualized multi-directional vibrotactile feedback to the upper torso by a haptic vest in 30 healthy young adults. Subjects were equally distributed to three instruction groups (attractive - move in the direction of feedback, repulsive - move in the opposite direction of feedback & no instruction - with attractive stimuli). We conducted four conditions with eyes closed (feedback on/off, Narrow Stance with head extended, Semi-Tandem stance), with seven trials of 45s each. For CoP and L5, we computed Root Mean Square (RMS) of position/angle and standard deviation (SD) of velocity, and for L5 additionally, the percentage in time above threshold. The analysis consisted of mixed model ANOVAs and t-tests (α-level: 0.05).In the attractive and repulsive groups feedback significantly decreased the percentage above threshold (p<0.05). Feedback decreased RMS of L5, whereas RMS of CoP and SD of velocity in L5 and COP increased (p<0.05). Finally, an instruction on how to move contributed to a better understanding of the vibrotactile biofeedback.",
       bibtex:"",
       pdf:"/Papers/Immediate_Effects_of_Vibrotactile_Biofeedback_Instructions_on_Human_Postural_Control.pdf",
        },
                {
       title: 'Body As Starting Point 4: Inbodied Interaction Design for Health Ownership.', 
       authors: "mc schraefel; Josh Andrés; Aaron Tabor; Scott Bateman; Abby Wanyu Liu; Mike Jones; Kai Kunze; Elizabeth Murnane; Steeven Villa", 
       venue:"CHI EA '21" ,
       year: 2021,
       picture: "/images/Papers/Inbodied.jpg",
       link: "https://dl.acm.org/doi/abs/10.1145/3411763.3441335", 
       alias: "dl.acm",
       abstract:"This Fourth Body as a Starting Point workshop investigates how to design interactive health technologies that assist users in developing insourcing abilities and then assist users in letting go of the same technology—in other words, supporting a transition from health technology dependence to independence. By making explicit two inbodied design continua of (1) ownership, from “outsourcing” to “insourcing” and (2) engagement period, from “single”, to” cycle”, to “permanent”, to prototype and reflect on interactive technology that takes the body as a starting point.",
       bibtex:"",
       pdf:"/Papers/Inbodied.pdf",
        },
                  {
       title: 'Assisting Motor Skill Transfer for Dance Students Using Wearable Feedback', 
       authors: "Villa, Steeven; Niess, Jasmin; Eska, Bettina; Schmidt, Albrecht; Machulla, Tonja", 
       venue:"International Symposium on Wearable Computers" ,
       year: 2021,
       picture: "/images/Papers/assisting.jpg",
       link: "https://dl.acm.org/doi/10.1145/3460421.3478817", 
       alias: "dl.acm",
       abstract:"Dance plays a crucial role in human well-being and expression. To learn dance, transferring motor knowledge across humans is relevant. Several technologies have been proposed to support such knowledge transfer from teacher to student. However, most of such systems applied a pragmatic approach focused on the feedback and the quality of the feedback system and not necessarily on the human mechanisms behind the dance learning process. In contrast, we inquire about the teacher-to-student motor knowledge transfer from the neural perspective to design motor learning wearable systems. We conducted interviews with dance students and teachers using vignettes based on motor learning theory as a discussion base. We derived insights about dance learning and identified a series of requirements for motor skill transfer-focused wearable devices. Based on our results, we present a prototype that reflects the minimum functional setup for effectively supporting motor learning.",
       bibtex:"",
       pdf:"/Papers/Assisting.pdf",
        },
        {
        title: 'Altering the Stiffness, Friction, and Shape Perception of Tangible Objects in Virtual Reality Using Wearable Haptics', 
        authors: "Villa, Steeven.; Pacchierotti, C; De Tinguy, Xavier.; Maciel, Anderson.; Marchal, Maud.", 
        venue:"IEEE Transactions on Haptics. " ,
        picture: "/images/Papers/altering.jpg",
        year: 2020,
        link: "https://ieeexplore.ieee.org/document/8961106", 
       alias: "ieeexplore",
       abstract:"Tangible objects are used in virtual reality (VR) and augmented reality (AR) to enhance haptic information on the general shape of virtual objects. However, they are often passive or unable to simulate rich varying mechanical properties. This article studies the effect of combining simple passive tangible objects and wearable haptics for improving the display of varying stiffness, friction, and shape sensations in these environments. By providing timely cutaneous stimuli through a wearable finger device, we can make an object feel softer or more slippery than it really is, and we can also create the illusion of encountering virtual bumps and holes. We evaluate the proposed approach carrying out three experiments with human subjects. Results confirm that we can increase the compliance of a tangible object by varying the pressure applied through a wearable device. We are also able to simulate the presence of bumps and holes by providing timely pressure and skin stretch sensations. Altering the friction of a tangible surface showed recognition rates above the chance level, albeit lower than those registered in the other experiments. Finally, we show the potential of our techniques in an immersive medical palpation use case in VR. These results pave the way for novel and promising haptic interactions in VR, better exploiting the multiple ways of providing simple, unobtrusive, and inexpensive haptic displays.",
        bibtex:"",
        pdf:"/Papers/ToH2020.pdf",
         },
         {
        title: 'Touching is believing: exploring physics-based simulation and haptics to feel virtual worlds', 
        authors: "Villa, Steeven.", 
        venue:"LUME Digital Repository." ,
        year: 2019,
        picture: "/images/Papers/heat-based.jpg",
        link: "https://www.lume.ufrgs.br/handle/10183/202057", 
       alias: "lume.ufrgs",
       abstract:"Modeling the real world is a responsibility which different fields assumed through history, from philosophy to physics. Although the objective is similar, the strategies used to model real- world are different from field to field. Nowadays, the modeling of the world took a more tangible significance: Being in the modeled world, existing in the artificial world instead of the actual world. However, the path to get an artificial world equal to the real world is long and arduous. In this manuscript, we address this issue by exploring methods in computer graphics (Physics-based animation) and haptics to project a sensory represen- tation of the actual world into the artificial world. We report results on Position based dynamics for simulating phase-change phenomena and interaction in VR with physical objects. Also, Ultrasound phased arrays, as well as wearable haptics for stiffness and softness rendering are studied",
        bibtex:"",
        pdf:"/Papers/MsThesis.pdf",
         },
                  {
        title: 'Phys-Sketch: Sketching 3D Dynamic Objects in Immersive Virtual Reality', 
        authors: "Ticona, Jose.; Villa, Steeven.; Torchelsen, Rafael; Maciel, Anderson.; Nedel, Luciana.", 
        venue:"Computer Graphics International ." ,
        year: 2019,
        picture: "/images/Papers/phys-sketch.png",
        link: "https://link.springer.com/chapter/10.1007/978-3-030-22514-8_10", 
       alias: "link.springer",
       abstract:"Sketching was traditionally a 2D task. Even when the new generation of VR devices allowed to sketch in 3D, the drawn models remained essentially static representations. In this paper, we introduce a new physics-inspired sketching technique built on the top of Position-based Dynamics to enrich the 3D drawings with dynamic behaviors. A particle-based method allows interacting in real time with a wide range of materials including fluids, rigid bodies, soft bodies and clothes. Users can interact with the dynamic sketches and sculpt them while they move, deform and fall. We analyze the expressiveness of the system from the regard of two experienced artists. Thus, this paper also gives a starting point to move towards an improved generation of physics-enabled sketching applications. ",
        bibtex:"",
        pdf:"/Papers/Phy-Sketch.pdf",
         },
                  {
        title: 'Towards Moving Virtual Arms Using Brain-Computer Interface', 
        authors: "Salas, Jaime.; Villa, Steeven.; Maciel, Aanderson.; Nedel, Luciana.; Barone, Dante.", 
        venue:"Computer Graphics International . " ,
        year: 2019,
        picture: "/images/Papers/towards.png",
        link: "https://link.springer.com/chapter/10.1007/978-3-030-22514-8_43", 
       alias: "link.springer",
       abstract:"Motor imagery Brain-Computer Interface (MI-BCI) is a paradigm widely used for controlling external devices by imagining bodily movements. This technology has inspired researchers to use it in several applications such as robotic prostheses, games, and virtual reality (VR) scenarios. We study the inclusion of an imaginary third arm as a part of the control commands for BCI. To this end, we analyze a set of open-close hand tasks (including a third arm that comes out from the chest) performed in two VR scenarios: the classical BCI Graz, with arrows as feedback; and a first-person view of a human-like avatar performing the corresponding tasks. This study purpose is to explore the influence of both time window of the trials and the frequency bands on the accuracy of the classifiers. Accordingly, we used a Filter Bank Common Spatial Patterns (FBCSP) algorithm for several time windows (100, 200, 400, 600, 800, 1000 and 2000 ms) for extracting features and evaluating the classification accuracy. The offline classification results show that a third arm can be effectively used as a control command (accuracy > 0.62%). Likewise, the human-like avatar condition (  67% ) outperforms the Graz condition (  63% ) significantly, suggesting that the realistic scenario can reduce the abstractness of the third arm. This study, thus, motivates the further inclusion of non-embodied motor imagery task in BCI systems.",
        bibtex:"",
        pdf:"/Papers/Towards.pdf",
         },
                  {
        title: 'Heat-based Bidirectional Phase Shifting Simulation Using Position-based Dynamics', 
        authors: "Villa, Steeven. ; Ticona, Jose.; Torchelsen, R; Maciel, A.; Nedel, L.", 
        venue:"Computers & Graphics . " ,
        year: 2018,
        picture: "/images/Papers/heat-based.jpg",
        link: "https://www.sciencedirect.com/science/article/pii/S0097849318301389", 
       alias: "sciencedirect",
       abstract:"Phase-change phenomena are present in our daily life. Examples are the evaporation of a fluid when it reaches its boiling temperature, the condensation of water vapor in air due to the pressure changes or due to the difference of temperature in boundaries, and the melting of snow when winter is ending. Current development in physics-based animation allows the simulation of these phenomena, but an integrated solution for modeling bidirectional phase-shifting objects is not available for games and other virtual environments. In this work we present a temperature-based method that drives phase transition phenomena based on latent heat of materials using position-based dynamics (PBD). Modifications to density, viscosity and distance PBD constraints are proposed to simulate the necessary thermal phenomena. Results show that melting, fusion, evaporation, condensation, dilation and even convection effects can be obtained by modifying the original PBD constraints in function of latent heat.",
        bibtex:"",
        pdf:"/Papers/Heat-based bidirectional phase shifting simulation using.pdf",
         },
                  {
        title: '3dathlon: 3d Gestural Interfaces To Support A 3-stage Contest In Vr', 
        authors: "Grandi, Jj; Debarba, H; Franz, J; Oliveira, V; Ticona, Jose; Souza, G; Berti, I; Villa, S. ; Maciel, A.; Nedel, L.", 
        venue:"Ieee Conference On Virtual Reality And 3d User Interfaces . " ,
        year: 2018,
        picture: "/images/Papers/3dathlon.jpg",
        link: "https://ieeexplore.ieee.org/document/8446286", 
       alias: "ieeexplore",
       abstract:"In the context of the 3DUI Contest promoted by the IEEE VR 2018, we propose 3D interaction techniques that address three distinct tasks in a virtual environment setup: climbing a ladder, controlling a quadcopter in a first-person view flight, and building a tower by stacking a series of objects. The interaction techniques were developed so the player, our 3D-athlete, has control over the events in each task, following metaphors that facilitate the use of the interface, and having status and spatial awareness supported by clear feedback cues. Thus, the player should be able to execute the tasks with precision and agility.",
        bibtex:"",
        pdf:"/Papers/3DAthlon-VR3DUI2018-paper.pdf",
         },
             // Entry Model
        {
       title: 'Evaluation Of Visual, Auditory And Vibro-tactile Alerts In Supervised Interfaces', 
       authors: "Souza, G.; Amaya, L.; Stein, V; Villa, S. ;ticona, J.; Maciel, A.; Nedel, L.", 
       venue:"20th Symposium On Virtual And Augmented Reality   " ,
       year: 2018,
       picture: "/images/Papers/evaluating.jpg",
       link: "https://ieeexplore.ieee.org/document/8802446", 
       alias: "ieeexplore",
       abstract:"In teleoperation, particularly when controlling systems performing tasks that must be supervised for many hours, human users cannot keep a high level of attention all time. An open issue in the design of such interfaces is to help the user to maintain a situational awareness. In this paper, we compare three types of alert signals aiming to inform users about critical situations that require their full attention. Haptic, visual and auditory signals were assessed as pre-attention mechanisms for tasks in a camera-based supervisory interface scenario. Results show that haptic alerts, for long term supervision, are more effective than auditory and visual ones.",
       bibtex:"",
       pdf:"/Papers/Evaluation_of_Visual_Auditory_and_Vibro_Tactile_Alerts_in_Supervised_Interfaces.pdf",
        }
      ]
    }
  }
}
</script>
