<template>
<div class="options" >
   <div class="option" :class="{active: isActive==1}" style="--optionBackground:url(/images/dance1.jpg);" @click="isActive=1">
      <div class="shadow"></div>
      <div class="label">
         <div class="icon">
            <img src="/images/dance.png" >
         </div>
         <div class="info">
            <div class="main">Motor Learning</div>
            <div class="sub">Create ubiquitous or VR tools to support dance learning and remote dance</div>
         </div>
      </div>
   </div>

   <div class="option" :class="{active: isActive==2}" style="--optionBackground:url(/images/Augmentation.jpg);" @click="isActive=2">
      <div class="shadow"></div>
      <div class="label">
         <div class="icon">
            <img src="/images/cyborg.png" >
         </div>
         <div class="info">
            <div class="main">Human Augmentation</div>
            <div class="sub">Desing and create systems to help humans overcome their natural limitations</div>
         </div>
      </div>
   </div>
   <div class="option" :class="{active: isActive==3}" style="--optionBackground:url(/images/Haptic.jpg);" @click="isActive=3">
      <div class="shadow"></div>
      <div class="label">
         <div class="icon">
             <img src="/images/touch.png" >
         </div>
         <div class="info">
            <div class="main">Haptics</div>
            <div class="sub">Use the tactile sense to comunicate information or replicate real-world experiences in VR</div>
         </div>
      </div>
   </div>
 

</div>
</template>

<script>
export default {
    data() {
        return{
  isActive: undefined
  }
},
  methods: {
    select() {
       
    }
  },

}
</script>


<style lang="scss">
$optionDefaultColours: #ED5565,#FC6E51,#FFCE54,#2ECC71,#5D9CEC,#AC92EC;

@media (max-width: 767px) {
 .icon{
      display:none;
      }
   .sub{
      display:none;
      }
}

body {

   .credit {
      position: absolute;
      bottom:20px;
      left:20px;
      
      color:#000;
   }
   .options {
        display:flex;
      flex-direction:row;
      align-items:stretch;
      overflow:hidden;

      min-width:600px;
      max-width:900px;
      width:calc(100% - 100px);
      
      height:300px;
      
      @for $i from 1 through 4 {
         @media screen and (max-width:798px - $i*80) {
            min-width:700px - $i*80;
            .option:nth-child(#{6-$i}) {
               //display:none;
            }
            
            
         }
      }

      
      .option {
         position: relative;
         overflow:hidden;

         min-width:60px;
         margin:10px;
         //border:0px solid --defaultColor;

         background:var(--optionBackground, var(--defaultBackground, #E6E9ED));
         background-size:auto 120%;
         background-position:center;

         cursor: pointer;

         transition:.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

         @for $i from 1 through length($optionDefaultColours) {
            &:nth-child(#{$i}) {
               --defaultBackground:#{nth($optionDefaultColours, $i)};
            }
         }
         &.active {
            flex-grow:10000;
            transform:scale(1);
            
            max-width:600px;
            margin:0px;
            border-radius:40px;
            
            background-size:auto 100%;
            .shadow {
               box-shadow:inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black;
            }
            .label {
               bottom:20px;
               left:20px;
               .info >div {
                  left:0px;
                  opacity:1;
               }
            }
            /*&:active {
               transform:scale(0.9);
            }*/
         }
         &:not(.active) {
            flex-grow:1;
        
            border-radius:30px;
            .shadow {
               bottom:-40px;
               box-shadow:inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black;
            }
            .label {
               bottom:10px;
               left:10px;
               .info >div {
                  left:20px;
                  opacity:0;
               }
            }
         }
         .shadow {
            position: absolute;
            bottom:0px;
            left:0px;
            right:0px;
            
            height:120px;
            
            transition:.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
         }
         .label {
            display:flex;
            position: absolute;
            right:0px;

            height:40px;
            transition:.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
            .icon {
               //display:flex;
               flex-direction:row;
               justify-content:center;
               align-items:center;
               
               min-width:40px;
               max-width:40px;
               height:40px;
               border-radius:90%;

               background-color:white;
               color:var(--defaultBackground);
            }
            .info {
               display:flex;
               flex-direction:column;
               justify-content:center;
               
               margin-left:0px;
               
               color:white;
               
              
               >div {
                  position: relative;
                  
                  transition:.5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity .5s ease-out;
               }
            .main {
                  font-weight:bold;
                  font-size:1.2rem;
               }
               .sub {
                transition-delay:.1s;
                //display: inline-block;
                word-wrap: break-word;
               
                margin:0px 20px 50px 0px;
               }
            }
         }
      }
   }
}

</style>
