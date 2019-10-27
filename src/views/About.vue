<template>
<v-layout column wrap>
  <section>
    <v-img src="https://cheeseit.ru/wp-content/uploads/2018/01/AAA_4903.jpg" height="350">
      <v-container grid-list-lg>
        <v-layout class="header-title" column wrap justify-center align-center mt-5>
          <h2>ABOUT</h2>
          <p>What is our company worth for</p>
        </v-layout>
      </v-container>
    </v-img>
  </section>  
  <section>
      <v-flex lg12>
        <v-container grid-list-lg>
          <v-layout row wrap justify-center>
            <v-flex lg8>
              <p class="subtitle">We work all the time with our customers and together we are able to create beautifull and amazing things that surely brings positive results and complete satisfaction.</p>
              <h2>ABOUT BAKERY AND CAKERY</h2>
              <p>See our big range of departaments, whe offer a lot of attention to our patients
                see what fits you and give us a call</p>
            </v-flex>
            <v-flex lg5>
              <v-img src="https://media.timeout.com/images/102364367/image.jpg" height="405"></v-img>
            </v-flex>
            <v-flex lg5>
              <h2>THE STORY OF OUR SUCCESS</h2>
              <p>Just thirty days after my advent upon Barsoom we entered the ancient city of Thark, from whose long-forgotten people this horde of green men have stolen even their name. The hordes of Thark number some thirty thousand souls, and are divided into twenty-five communities. Each community has its own jed and lesser chieftains, but all are under the rule of Tal Hajus, Jeddak of Thark. </p>
              <p>We made our entry into the great central plaza early in the afternoon. There were no enthusiastic friendly greetings for the returned expedition. Those who chanced to be in sight spoke the names of warriors or women with whom they came in direct contact, in the formal greeting of their kind.</p>
              <ul class="adventags-list">
                <li>100% RESPONSIVE</li>
                <li>RETINA READY ICONS</li>
                <li>BOXED AND WIDE VERSION</li>
                <li>NICE DOCUMENTATION</li>
              </ul>
            </v-flex>
        </v-layout>    
        </v-container>    
      </v-flex>
  </section>
  <section>
    <v-container grid-list-lg>
      <v-layout column wrap align-center>
        <h1>VIDEO PRESENTATION</h1>
        <iframe width="1170" height="620" src="https://www.youtube.com/embed/YUrCcFeF5-A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </v-layout>
    </v-container>
  </section>
</v-layout>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  section{
    background-color: #000;
    padding: 20px 0;
   
    *{
      color: #fff;
    }
    .subtitle{
      color:  #696969;
      font-size: 44px;
      font-weight: 300;
      line-height: 66px;
      text-align: left;
      position: relative;
      &::before{
        content: "";
        display: block;
        width: 2px;
        height: 170px;
        background-color: #fff;
        position: absolute;
        top: 15px;
        left: -25px;
      }
    }
    .subtitle + h2,.subtitle ~ p{
      text-align: center;
      margin: 0;
      margin-bottom: 15px;
    }
    .adventags-list{
      display: flex;
      flex-flow: wrap;
      list-style: none;
      li{
        width: 50%;
        &::before{
          content: "f00c";
          color: #fdb822;
        }
      }
    }
    h1{
      font-size: 43px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
  }
  .header-title{
    h2,p{
      font-size: 30px;
      display: block;
      background-color: #fff;
      color: #000;
      padding: 5px 10px;
    }
  }
</style>
