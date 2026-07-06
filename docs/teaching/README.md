---
article: false
next: "/contact/"
prev: "/publications/"
---

# Mentoring

## Lectures / Courses

<ClientOnly>
<TeachingList :entries="lectures" />
</ClientOnly>

## Workshop / Tutorial

<ClientOnly>
  <TeachingList :entries="workshops" />
</ClientOnly>

## Advised Junior Researchers

<ClientOnly>
  <TeachingList :entries="theses" />
</ClientOnly>

<script setup>
import { NButton } from 'naive-ui'

const lectures = [
  { code: 'UX1',  term: 'WS', title: 'User Experience 1 @ LMU',                              year: '2025/2026' },
  { code: 'SWH',  term: 'WS', title: 'Practical Course: Sketching with Hardware @ LMU',      year: '2025/2026' },
  { code: 'UX1',  term: 'WS', title: 'User Experience 1 @ LMU',                              year: '2024/2025' },
  { code: 'SWH',  term: 'WS', title: 'Practical Course: Sketching with Hardware @ LMU',      year: '2024/2025' },
  { code: 'PVRU', term: 'SS', title: 'Practical Course: VR programming using Unity',         year: '2024' },
  { code: 'CG1',  term: 'SS', title: 'Computer Graphics @ LMU',                              year: '2024' },
  { code: 'HRI',  term: 'WS', title: 'Practical Course: Human-Robot Interaction @ LMU',      year: '2023/2024' },
  { code: 'UX3',  term: 'SS', title: 'Practical Course: User Experience 3 @ LMU',            year: '2023' },
  { code: 'PVRU', term: 'SS', title: 'Practical Course: VR programming using Unity',         year: '2023' },
  { code: 'CG1',  term: 'SS', title: 'Computer Graphics @ LMU',                              year: '2023' },
  { code: 'MMI2', term: 'WS', title: 'Mensch‑Maschine‑Interaktion 2 Tutorials @ LMU',        year: '2022/2023' },
  { code: 'SWH',  term: 'WS', title: 'Practical Course: Sketching with Hardware @ LMU',      year: '2022/2023' },
  { code: 'SWH',  term: 'SS', title: 'Practical Course: Sketching with Hardware @ LMU',      year: '2022' },
  { code: 'SWH',  term: 'SS', title: 'Practical Course: Sketching with Hardware Basics @ LMU',year: '2022' },
  { code: 'UX3',  term: 'SS', title: 'Practical Course: User Experience 3 @ LMU',            year: '2022' },
  { code: 'PVRU', term: 'SS', title: 'Practical Course: VR programming using Unity',         year: '2022' },
  { code: 'SWH',  term: 'WS', title: 'Practical Course: Sketching with Hardware @ LMU',      year: '2021/2022' },
  { code: 'MMI2', term: 'WS', title: 'Mensch‑Maschine‑Interaktion 2 Tutorials @ LMU',        year: '2021/2022' },
  { code: 'PVRU', term: 'SS', title: 'Practical Course: VR programming using Unity',         year: '2021' },
  { code: 'SWH',  term: 'SS', title: 'Practical Course: Sketching with Hardware @ LMU',      year: '2021' },
  { code: 'UX3',  term: 'SS', title: 'Practical Course: User Experience 3 @ LMU',            year: '2021' },
  { code: 'MMI2', term: 'WS', title: 'Mensch‑Maschine‑Interaktion 2 Tutorials @ LMU',        year: '2020/2021' },
  { code: 'SWH',  term: 'WS', title: 'Practical Course: Sketching with Hardware @ LMU',      year: '2020/2021' },
  { code: 'SWH',  term: 'SS', title: 'Practical Course: Sketching with Hardware @ LMU',      year: '2020' },
  { code: 'SWH',  term: 'SS', title: 'Practical Course: User Experience 3 @ LMU',            year: '2020' },
  { code: 'MMI2', term: 'WS', title: 'Mensch‑Maschine‑Interaktion 2 Tutorials @ LMU',        year: '2019/2020' }
]

const workshops = [
  { code: 'CHI',      term: 'Ws',  title: 'EvalAI @ CHI',                                                                    year: '2024' },
  { code: 'Dagstuhl', term: 'Ws',  title: 'Human Augmentation – Immediate Issues @ BMBF Cognitive Augmentation Seminar',      year: '2022' },
  { code: 'BMBF',     term: 'Tut', title: 'Haptic Perception @ BMBF Social XR',                                              year: '2022' },
  { code: 'AVI',      term: 'Tut', title: 'Haptic Perception @ AVI 22',                                                      year: '2022' },
  { code: 'CHI',      term: 'Ws',  title: 'Body as Starting Point @ CHI 21',                                                 year: '2021' },
  { code: 'HIVE',     term: 'Ws',  title: 'Engaging with the Arts in XR @ HIVE‑Lab',                                         year: '2021' },
  { code: 'HIVE',     term: 'Talks', title: 'Conversations in Mixed Reality @ HIVE‑Lab @ Amplify',                           year: '2020/2021' }
]

const theses = [
  { code: 'BT', term: 'Finished', title: 'Finn Krammer — Contributions of EMS to Motor Learning', year: '2024' },
  { code: 'BT', term: 'Finished', title: 'Florian — Using Neurotechnologies for Enhanced Inhibition Control', year: '2024' },
  { code: 'BT', term: 'Finished', title: 'Kenji Ishihara — Investigating Thermal-Enabled Encountered-type Haptics', year: '2024' },
  { code: 'MT', term: 'Finished', title: 'Sarita Sridharan — GPT‑4o Dialogue System & Player Experience', year: '2024' },
  { code: 'MT', term: 'Finished', title: 'Ziyang Zhou — Exploring Sounds to Trick Our Haptic Perception', year: '2024' },
  { code: 'MT', term: 'Finished', title: 'Zihan Kong — Designing Continuous Glucose Monitoring (CGM) Feedback for Augmentation', year: '2024' },
  { code: 'MT', term: 'Finished', title: 'Marion Chariklia Botsivali — LLM-based Conversational AI Assistance in a Modified Multi-Round Trust Game', year: '2024' },
  { code: 'MT', term: 'Finished', title: 'Selin Bekcekaral — UX Evaluation of Pronto: Rapid AR Prototyping vs. Paper-Based Methods', year: '2024' },
  { code: 'MT', term: 'Finished', title: 'Gabriel Udo Lindner — Sense of Ownership in Joint Human-AI Co-Creation in a Museum Context', year: '2024' },
  { code: 'MT', term: 'Finished', title: 'Burak Berberoglu — System Curiosity Scale: Assessing Curiosity in Physical Interactive Systems', year: '2024' },
  { code: 'BT', term: 'Finished', title: 'Aylin Aldemir — Augmenting Human Cognition Using Transcranial Direct Stimulation: Placebo Or Reality', year: '2024' },
  { code: 'MT', term: 'Finished', title: 'Mei Yi Lu — Outsourcing Cognition: Exploring Joint Human-AI Intelligence', year: '2024' },
  { code: 'MT', term: 'Finished', title: 'Tuan Khang Huynh — Comparison of Empirical Methods to Evaluate Human-Robot Interactions', year: '2024' },
  { code: 'MT', term: 'Finished', title: 'Niklas Hirsh — Detecting the Boundaries of Ultrasound Haptics for Rendering Material Properties', year: '2023' },
  { code: 'BT', term: 'Finished', title: 'Aylin Aldemir — Transcranial Stimulation as Augmentation Technology - Placebo or Reality?', year: '2023' },
  { code: 'BT', term: 'Finished', title: 'Marlene Eder — Evaluating Temperature Illusions in Virtual Reality', year: '2023' },
  { code: 'BT', term: 'Finished', title: 'Yasin — Proprioceptive Illusion in Virtual Reality for Enhanced Privacy', year: '2023' },
  { code: 'MT', term: 'Finished', title: 'Bilel Ayech — Stretch Haptic Feedback for Smartphone Interaction', year: '2023' },
  { code: 'BT', term: 'Finished', title: 'Thuy-Duong Nguyen — Creating a Taxonomy of Emotions for Vibrotactile Feedback', year: '2022' },
  { code: 'BT', term: 'Finished', title: 'Robert Scholz — Detecting Implicit Bias Towards Augmented Humans', year: '2022' },
  { code: 'MT', term: 'Finished', title: 'Felix Grelka — Measuring Impact of Human-Augmentation Self Perception in Risk Assessment', year: '2022' },
  { code: 'MT', term: 'Finished', title: 'Vasil Lazarov — Detecting Psychopathy Traces Using In-Game Mechanics', year: '2022' },
  { code: 'MT', term: 'Finished', title: 'Carmen Schanderl — Standardized Assessment of Attitudes Towards Augmented Humans', year: '2022' },
  { code: 'MT', term: 'Finished', title: 'Elisabeth Pangratz — Piano Proficiency Awareness Assessment Using Induced Errors and EEG', year: '2022' },
  { code: 'BT', term: 'Finished', title: 'Christofer Parstorfer — Virtually Extending Room-Scale Mid-air Haptics Using Redirected Walking', year: '2022' },
  { code: 'BT', term: 'Finished', title: 'Daniela K — Evaluating the Impact of Tangible Objects in VR Shopping', year: '2021' },
  { code: 'BT', term: 'Finished', title: 'Gizem Arpat — Using EEG to Modulate VR Environments in Neuromarketing', year: '2021' },
  { code: 'MT', term: 'Finished', title: 'Anna Hubert — Using EMS Stimulation to Support Ready Position in Badminton', year: '2020' },
  { code: 'MT', term: 'Finished', title: 'Bettina Eska — Assisting Motor Skill Transfer for Dance Students', year: '2020' },
  { code: 'MT', term: 'Finished', title: 'Melanie Hauser — Supporting Situational Awareness Using a Vibrotactile Vest', year: '2019' }
]
</script>
