<template>


  <div class="col">
    <div class="tabs">
      <div class="tab">
        <input type="radio" id="rd1" name="rd">
        <label class="tab-label" for="rd1">About me</label>
        <div class="tab-content">
         Computer Scientist and Mechatronic Engineer, and PhD Researcher in the Human-Centered Ubiquitous Media group at LMU Munich. My research field is human computer interaction, particularly human augmentation/Human-computer Integration/Human-computer symbiosis. I'm highly interested in creating technologies to help humans overcome their natural sensory, cognitive, and motor limitations.
        </div>
      </div>
      <div class="tab">
        <input type="radio" id="rd2" name="rd">
        <label class="tab-label" for="rd2">Influences</label>
        <div class="tab-content">
          
Research takes time, effort and commitment, and more important: good mentors. I had the chance to work with knowledgeable people across my career as a researcher. I acknowledge all of those professors and researchers who taught me the tips and tricks of the academy. Hereby, I will tell you who influenced my academic path, let us start from the beginning:
I got my bachelor's degree from the Instituto Tecnologico Metropolitano de Medellin (Colombia). Where my passion for research started, thanks to <b>Prof. Diego Hincapie Zuluaga</b> and <b>Prof. Dr. Edwar Torres</b> and their work in thermodynamic simulations using the Finite Elements Method. Afterward, at Masters's level, and having moved to Brazil, I applied this knowledge to propose, under the advice of <b>Prof. Dr. Anderson Maciel (UFRGS)</b>, a <a href="https://www.sciencedirect.com/science/article/abs/pii/S0097849318301389">method</a> to simulate phase change in real-time applications. Brazil was a productive journey; I also had the chance to learn haptics and immerse myself in <a href="https://www.lume.ufrgs.br/handle/10183/202057">Human-Computer Interaction</a>, exploring areas like mid-air haptics, force feedback, and texture simulation. During the last semester of my master's, I had the chance to work with <b>Dr. Claudio Pacchierotti</b> and <b>Prof. Maud Marchal</b> at INRIA Rennes (France). Together we developed a <a href="https://www.lume.ufrgs.br/handle/10183/202057">study</a> on stiffness perception of tangible objects as a continuation of the work of Dr. Pacchierotti in wearable haptics. Once I finished my time in France, I had the chance to work with Prof. <b>Dr. Albrecht Schmidt</b> and <b>Dr. Tonja Machula</b> at Human-centered Ubiquitous Media in Munich (Germany) – my current affiliation. At HCUM, We are actively working to find ways to enhance human capabilities and create new senses. The world has changed, and we have a unique opportunity to accelerate evolution through embodied devices. If this topic is from your interest, find me in the <a href="/social/">social networks</a> and share with me your thoughts about the future of augmented humans and interaction with machines.

        </div>
      </div>
      <div class="tab">
        <input type="radio" id="rd3" name="rd">
        <label for="rd3" class="tab-close">Close others &times;</label>
      </div>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style lang="scss">
$midnight: #3eaf7c;
$clouds: #ecf0f1;
// General
body {

}
h1 {
  margin: 0;
  line-height: 2;
  text-align: center;
}
h2 {
  margin: 0 0 .5em;
  font-weight: normal;
}
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
// Layout
.row {
  display:flex;
  .col {
    flex:1;
    &:last-child {
      margin-left: 1em;
    }
  }
}
/* Accordion styles */
.tabs {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0,0,0,0.0);
}
.tab {
  width: 100%;
  color: white;
  overflow: hidden;
  &-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: $midnight;
    font-weight: bold;
    cursor: pointer;
    /* Icon */
    &:hover {
      background: darken($midnight, 10%);
    }
    &::after {
      content: "\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all .35s;
    }
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    color: black;
     line-height: 1.8;
    background: white;
    transition: all .35s;
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: $midnight;
    cursor: pointer;
    &:hover {
      background: darken($midnight, 10%);
    }
  }
}

// :checked
input:checked {
  + .tab-label {
    background: darken($midnight, 10%);
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}

</style>