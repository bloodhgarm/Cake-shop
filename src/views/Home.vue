<template>
    <v-layout row wrap>
        <v-carousel>
          <v-carousel-item class="fullScreen-slider-item" v-for="(item, i) in fullScreenSlider" :key="i" :src="item.src">
            <div class="description-block">
              <h1>{{item.title}}</h1>
              <p>{{item.subtitle}}</p>  
            </div>
          </v-carousel-item>
        </v-carousel>
        <section class="section-card">
          <v-container grid-list-lg >
            <v-layout row wrap justify-center column>
              <v-flex lg12>
                <h2>OUR LATEST BAKERY PRODUCTS</h2>
                <p>Check some of our best products and feel the great passion for food</p>
              </v-flex>
                <div class="card-slider__item">
                  <v-card  width="270" v-for="(item, index) in latestCard" :key="index" flat color="black" class="latest-product__card">
                      <span class="bestSeller-label">Best Seller</span>
                      <v-img :src="item.src" width="100%" height="100%"></v-img>
                      <div class="description-card__hover">
                      <div class="description-card">
                          <v-card-actions class="description-card__btnGroup">
                          <v-btn class="card-btn"  icon large  v-for="(item, i) in cardBtn" :key="i">
                              <v-icon class="theme--dark">{{item.iconName}}</v-icon>
                          </v-btn>
                          </v-card-actions>

                          <v-card-title primary-title>
                          <div>
                          <h3 class="headline">{{item.title}}</h3>
                          <p>{{item.description}}</p>
                                  <span>{{item.price}}</span>
                    </div>
                    </v-card-title>
                    </div>
                    </div>
                  </v-card>
                </div>
                <v-flex lg12 offset-lg5>
                  <v-btn color="white" class="show-more__btn" large flat outline >SEE ALL OUR PRODUCTS</v-btn>
                </v-flex>
            </v-layout>
          </v-container>
        </section>
        <section class="paralax-section">
           <v-parallax src="https://bu-horeca.com.ua/images/bg-slide-01.jpg">
            <v-carousel height="300" hide-controls justify-end >
              <v-carousel-item v-for="(item, index) in PhraseSlider" :key="index">
                <v-flex offset-lg6 mt-5 lg5>
                    <p class="phrase">{{item.phrase}}</p>
                    <span class="name-autor">Charles M. Schulz</span>
                </v-flex>
              </v-carousel-item>
            </v-carousel> 
          </v-parallax>
        </section>
        <section class="services-provide">
            <v-container grid-list-lg>
              <v-layout row wrap>
                <v-flex lg12>
                  <h2>MAIN SERVICES WE PROVIDE</h2>
                  <p>Our services are the best in town, we provide great quality baked products</p>
                      <v-flex d-flex justify-center lg12>
                        <v-card max-width="290" min-width="290" class="service-card" color="transparent" v-for="(item, index) in ServiceProvide" :key="index">
                            <img :src="item.src" alt="">
                          <v-card-title primary-title>
                            <div> 
                              <h3 class="headline mb-3" >{{item.service}}</h3>
                              <div><p color="white">{{item.description}}</p></div>
                            </div>
                          </v-card-title>
                          <v-card-actions class="d-flex">
                            <v-btn flat class="card-link" color="white">READ MORE</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-flex>
                </v-flex>
              </v-layout>
            </v-container>
        </section>
        <section class="section-paralax">
          <v-parallax src="http://legrenierapain.com/wp-content/uploads/2015/02/slide062-700px.jpg">
            <v-container grid-list-lg>
              <v-layout row wrap>
                <v-flex lg12>
                  <h2>DIFFERENT TYPES OF BREAD PRODUCTS</h2>
                  <p>You will find them only the best products in our stores</p>
                </v-flex>
              </v-layout>
            </v-container>
         </v-parallax>
        </section>
        <section class="other-section">
          <v-container grid-list-lg>
            <v-layout row wrap justify-center>
              <v-flex lg12>
                <h2>THIS WEEK OFFERS</h2>
                <p>See our big range of departaments, whe offer a lot of attention to our patients see what fits you and give us a call</p>
              </v-flex>
              <v-flex justify-center d-flex lg8>
               <v-tabs v-model="active" color="black" dark>
                  <v-tab ripple v-for="(item, index) in tabsIcon" :key="index">
                    <v-img :src="item.src" aspect-ratio="1" cover min-width="170" min-height="170"></v-img>
                  </v-tab>
                  <v-tab-item  v-for="(item, index) in tabsIcon" :key="index">
                    <v-card  min-width="985" max-width="985" min-height="600" max-height="600"  flat>
                      <v-flex lg5 pa-4>
                        <v-card-text>
                          <h2>{{ item.name }}</h2>
                          <p>{{ item.description }}</p>
                          <span>Ingedients:</span>
                          <ul>
                            <li></li>
                          </ul>
                        </v-card-text>  
                        <v-card-actions d-flex justify-space-around>
                          <span class="price">{{item.price}}</span>
                          <v-btn depressed large color="yellow">text</v-btn>
                        </v-card-actions>
                      </v-flex>
                      <v-flex lg7>
                        <v-card-media aspect-ratio="1" :src="item.src">
                        </v-card-media>
                      </v-flex>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
              </v-flex>
            </v-layout>
          </v-container>
        </section>
        <section class="blog-posts">
          <v-container grid-list-lg>
            <v-layout row justify-center wrap>
              <v-flex lg12>
                <h2>BLOG POSTS</h2>
                <p>Check our latest Blog Posts, what we are talking about</p>
              </v-flex>
              <v-flex lg8>
                <v-layout row justify-space-between wrap>
                  <v-card width="370" color="black" v-for="(item, index) in PostsCard" :key="index">
                      <v-img
                        :src="item.src"
                        aspect-ratio="1"
                        height="auto"
                      ></v-img>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-2">{{ item.name }}</h3>
                          <div>{{ item.description }}</div>
                        </div>
                      </v-card-title>
                      <v-card-text>
                        <span class="from-whom">{{ item.from }}</span>
                        <span class="when-exposed">{{ item.when }}</span>
                        <span class="comments">{{ item.comments }}</span>
                        <span>Comments</span>
                      </v-card-text>
                  </v-card>
                </v-layout>
              </v-flex>
              
            </v-layout>
          </v-container>
        </section>
        <section class="contacts">
          <GmapMap :center="{lat:52.38, lng:4.892585}" :zoom="13" map-type-id="terrain" style="height: 600px">
            <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" @click="center=m.position"/>
          </GmapMap>
          <v-form class="contact-form" ref="form" v-model="valid" lazy-validation>
            <h2>CONTACT US</h2>
            <p>Our Company is the best, meet the  creative team that never sleeps. Say something to us we will answer to you.</p>
            <v-text-field v-model="name" :counter="10" :error-messages="nameErrors" @input="$v.name.$touch()" @blur="$v.name.$touch()" outline label="Name" required></v-text-field>
            <v-text-field v-model="email" :error-messages="emailErrors" @input="$v.email.$touch()" @blur="$v.email.$touch()" label="E-mail"  outline required></v-text-field>
            <v-textarea v-model="textarea" label="Comment" no-resize  outline></v-textarea>
            <v-btn class="sendMessage-btn" :disabled="!valid" flat large light @click="validate">SEND MESSAGE</v-btn>
          </v-form>
        </section>
        <section class="partners">
          <v-container grid-list-lg>
            <v-layout row wrap>
              <v-flex lg12>
                <h2>OUR TRUSTWORTHY CLIENTS</h2>
                <p>The companies that trust us are the main key to our succes, check out our top clients</p>
              </v-flex>
              <v-flex class="partners-block" lg12>
                <a href="#"><img src="../assets/images/acura.svg" alt=""></a>
                <a href="#"><img src="../assets/images/Baldwin.svg" alt=""></a>
                <a href="#"><img src="../assets/images/Geico.svg" alt=""></a>
                <a href="#"><img src="../assets/images/powerplay.svg" alt=""></a>
                <a href="#"><img src="../assets/images/Salomon.svg" alt=""></a>
              </v-flex>
            </v-layout>
          </v-container>
        </section>
    </v-layout>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'home',
   mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      comment:{required, maxLength: maxLength(25)}
    },
  data() {
    return {
      markers: [
        { position: { lat: 52.38, lng: 4.89 } }
      ],
      name: '',
      email: '',
      comment:''
    };
  },
  computed: {
    fullScreenSlider(){
      return[
        {
          src: 'http://sovcominvest.ru/uploads/products/ffe411d76552af5e44c5d83eafeff064.jpg',
          title: 'Coffe and Croissant',
          subtitle:'Pleasure and Taste in one Place'
        },
        {
          src: 'http://hot-walls.ru/wp-content/uploads/2017/04/IMG_7381.jpg',
          title: 'Taste Fresh Buns',
          subtitle:'Pleasure and Taste in one Place'
        },
        {
          src: 'https://prokhv.ru/uploads/medialib/thumbnails/c96b8725-5df0-44d0-81f7-1a9d8d3c8933_1560x1040.jpg',
          title: 'Frequent coffee customers as a gift',
          subtitle:'Pleasure and Taste in one Place'
        },
        {
          src: 'https://get.pxhere.com/photo/dish-meal-food-produce-breakfast-baking-dessert-bakery-baked-goods-flavor-snack-food-cookies-and-crackers-164232.jpg',
          title: 'Coffe and Croissant',
          subtitle:'Pleasure and Taste in one Place'
        },
      ]
    },
    PhraseSlider(){
      return[
        {
          phrase: 'All you need is love. But a little chocolate now and then doesnt hurt.',
          autor: 'Charles M. Schulz'
        },
        {
          phrase: 'All you need is love. But a little chocolate now and then doesnt hurt.',
          autor: 'Charles M. Schulz'
        },
        {
          phrase: 'All you need is love. But a little chocolate now and then doesnt hurt.',
          autor: 'Charles M. Schulz'
        }
      ]
    },
    cardBtn(){
          return[
            {
              iconName: 'shopping_cart'
            },
            {
              iconName: 'compare_arrows'
            },
            {
              iconName: 'favorite'
            }
          ]
    },
    latestCard(){
      return[
        {
          src: 'https://4allwomen.ru/wp-content/uploads/2018/11/001-80.jpg',
          title:'Croissant',
          description:'Bakery, Cakery',
          price:'2.99',
        },
        {
          src: 'https://4allwomen.ru/wp-content/uploads/2018/11/001-80.jpg',
          title:'Croissant',
          description:'Bakery, Cakery',
          price:'2.99',
        },
        {
          src: 'https://4allwomen.ru/wp-content/uploads/2018/11/001-80.jpg',
          title:'Croissant',
          description:'Bakery, Cakery',
          price:'2.99',
        }, {
          src: 'https://4allwomen.ru/wp-content/uploads/2018/11/001-80.jpg',
          title:'Croissant',
          description:'Bakery, Cakery',
          price:'2.99',
        },
        {
          src: 'https://4allwomen.ru/wp-content/uploads/2018/11/001-80.jpg',
          title:'Croissant',
          description:'Bakery, Cakery',
          price:'2.99',
        },
        {
          src: 'https://4allwomen.ru/wp-content/uploads/2018/11/001-80.jpg',
          title:'Croissant',
          description:'Bakery, Cakery',
          price:'2.99',
        }, 
        
      ]
    },
    ServiceProvide(){
      return[
        {
          src: '@/assets/images/chef-icon.svg',
          service: 'CHEF’S HAT',
          description: 'Whether the flitting attendance of the one still and solitary jet had gradually worked upon Ahab. so that he was now prepared to connect the ideas of mildness.'

        },
        {
          src: '@/assets/images/chef-icon.svg',
          service: 'SWEET’S AND STUFF',
          description: 'Whether the flitting attendance of the one still and solitary jet had gradually worked upon Ahab. so that he was now prepared to connect the ideas of mildness.'

        },
        {
          src: '@/assets/images/chef-icon.svg',
          service: 'LOTS OF BREAD ',
          description: 'Whether the flitting attendance of the one still and solitary jet had gradually worked upon Ahab. so that he was now prepared to connect the ideas of mildness.'

        },
        {
          src: '@/assets/images/chef-icon.svg',
          service: 'CAKES FOR WEDDINGS',
          description: 'Whether the flitting attendance of the one still and solitary jet had gradually worked upon Ahab. so that he was now prepared to connect the ideas of mildness.'

        }
      ]
    },
    tabsIcon(){
      return[
        {
          src: 'https://images.clipartlogo.com/files/istock/thumbs/7675/76753831-baker-shop-bread-icon-in-vintage-style.jpg',
          name: 'CAKE A LA FORNO',
          description: 'A popular contemporary legend holds that the archetypal pizza, Pizza Margherita, was invented in 1889, when the Royal Palace of Capodimonte commissioned the Neapolitan pizzaiolo (pizza maker) Raffaele Esposito to create a pizza in honor of the visiting Queen Margherita.',
          price: '6.60'
        },
        {
          src: 'https://st.depositphotos.com/2966157/3900/v/950/depositphotos_39006499-stock-illustration-bread.jpg',
          name: 'CAKE A LA FORNO',
          description: 'lorem 30',
          price: '6.65'
        },
        {
          src: 'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2017/09/Magnolia-Bakery-banana-pudding-Classic-3-1-social.jpg',
          name: 'CAKE A LA FORNO',
          description: 'lorem 20',
          price: '6.68'
        }
      ]
    },
    PostsCard(){
      return[
        {
          src:'https://img4.goodfon.ru/original/2048x2048/7/f2/kofe-kruassany-kruzhki-razdelochnaia-doska-kofeinye-ziorna.jpg',
          name:'Coffe ombines perfectly with Croissants',
          description:'Now when I looked about the quarter-deck, for some one having authority, in order to propose myself as a candidate for the voyage.',
          from:'admin',
          when:'24.04.2014',
          comments:'23'
        },
        {
        src:'https://img3.goodfon.ru/original/1024x1024/3/13/baking-bread-buns-vypechka-3617.jpg',
        name:'Friday Fresh Recipes',
        description:'Now when I looked about the quarter-deck, for some one having authority, in order to propose myself as a candidate for the voyage.',
        from:'admin',
        when:'24.04.2014',
        comments:'23'
      },
      {
        src:'https://st2.depositphotos.com/1426490/12262/i/950/depositphotos_122629170-stock-photo-professional-baker-preparing-dough.jpg',
        name:'Baking for Large amount of People',
        description:'Now when I looked about the quarter-deck, for some one having authority, in order to propose myself as a candidate for the voyage.',
        from:'admin',
        when:'24.04.2014',
        comments:'23'
      }
      ]
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Enter your name.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('Enter e-mail')
      return errors
    },
  },
  methods:{
    submit () {
        this.$v.$touch()
      }
  }
}
</script>
<style lang="scss">
  *{
    box-sizing: border-box;
    border-collapse: collapse;
  }
  .fullScreen-slider-item{
    position: relative;
    .description-block{
      position: absolute;
      top: 50%;
      left: 10%;
    }
    h1{
      font-size: 60px;
      color: white;
      padding: 0 20px;
      background-color: #684f40;
    }
    p{
      background-color: #fdc03c;
      color: #684f40;
      font-size: 26px;
      padding: 10px 40px;
    }
  }
  .section-card,.paralax-section,
  .services-provide,
  .section-paralax,
  .other-section,
  .blog-posts,
  .contacts,
  .partners
  {
    padding: 50px 0;
    background: #000;
    width: 100%;
    &::after{

    }
    h2,p{
      color: white;
      text-align: center;
      margin-bottom: 10px;
    }
  }
  .card-slider__item{
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    align-self: center;
    
  }
  .latest-product__card{
    position: relative;
    height: 375px;
    padding: 10px;
    margin: 30px;
    background-color: #000;
    outline: 2px solid #fff;
    .bestSeller-label{
      text-transform: uppercase;
      color: white;
      background-color: #ff4800;
      position: absolute;
      z-index: 100;
      width: 60px;
      padding: 15px 0;
      text-align: center; 
      -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 90%, 52% 100%, 0 90%);
      clip-path: polygon(0% 0%, 100% 0, 100% 90%, 52% 100%, 0 90%);
    }
      .description-card__hover{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: none;
        flex-flow: column;
        justify-content: flex-end;
        .description-card{
          height: 150px;
          background-color: #fdb822;
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          h3,p,span{
            color: #ffffff;
            font-size: 14px;
            text-align: center;
            margin-bottom: 0;
          }
          span{
            font-size: 20px;
            width: 100%;
            display: block;
            text-align: center;
            &::before{
              content: "$";
              position: relative;
              left: -5px;
            }
          }
          .description-card__btnGroup{
            position: absolute;
            top: -35px;
            width: 100%;
            display: flex;
            justify-content: center;
            .card-btn{
              width: 54px;
              height: 54px;
              border: 2px solid #fdb822;
              background-color: #fff;
            
            }
          }
        }
      }
  }
  .latest-product__card:hover {
     outline: transparent;
        .description-card__hover{
        display: flex;
        border: 2px solid #fdc03c;
        }
  }
  .show-more__btn{
    text-transform: uppercase;
    width: 260px;
  }
  .paralax-section{
    .phrase{
      font-size: 24px;
      text-align: right;
    }
    .name-autor{
      background-color: #684f40;
      font-weight: 700;
      text-transform: uppercase;
      color: white;
      padding: 15px;
    }
    .v-carousel__controls{
      justify-content: flex-end;
      padding: 0 100px;
      background: transparent;
    }
  }
  .service-card{
    margin: 0 30px;
    background-color: transparent;
    &:hover{
        .card-link{
          
          &::before{
            opacity: 0;
            content: "f30b";
          }
        .v-btn__content{
            color: #fdb822;
          
        }
      }
    }
    h3,p{
      color: white;
      text-align: center;
      width: 100%;
    }
    h3::after{
      content: "";
      display: block;
      width: 100px;
      height: 2px;
      background-color: #fdb822;
      position: relative;
      left: 50%;
      top: 5px;
      transform: translateX(-50%)
    }
    
  }
  .section-paralax{
    h2{
      color: white;
      font-size: 43px;
      padding: 10px 15px;
      background-color: #000;
      margin-bottom: 0;
    }
    p{
      color: white;
      font-size: 25px;
      padding: 5px 15px;
      background-color: #000;
    }
  }
  .other-section{
    .v-tabs__container{
      flex-direction: column;
      height: auto;
      margin-right: 30px;
    }
    .v-tabs{
      flex-direction: row;
      display: flex;
    }
    .v-tabs__slider-wrapper{
      display: none;
    }
    .v-tabs__div{
      width: 170px;
      height: 170px;
      margin: 0 0 45px 30px;
      background-color:#fdb822;
      overflow: hidden;
      position: relative;
      .v-tabs__item--active::before{
        position: absolute;
        content: "";
        width: 170px;
        height: 170px;
        display: block;
        border: 5px solid #fdb822;
        z-index: 100;
      }
      .v-tabs__item--active::after{
        position: absolute;
        content: "";
        width: 70px;
        height: 70px;
        display: block;
        right: -50px;
        z-index: 100;
        background-color: #fff;
        -webkit-clip-path: polygon(0 50%, 100% 100%, 100% 0);
        clip-path: polygon(0 50%, 100% 100%, 100% 0);
      }
      .v-tabs__item{
        padding: 0;
      }
      .v-tabs__item:not(.v-tabs__item--active){
        opacity: 1;
        outline: none;
      }
    }
    .v-card{
      display: flex;
      flex-direction: row;
      outline: 3px solid #fdb822;
      h2,p,span{
        color: black;
        text-align: left;
      }
      .price{
        font-size: 40px;
        font-weight: 700;
        &::before{
          content: "$"
        }
      }
    }
  }
  .blog-posts{
    .v-card__text{
      display: flex;
      justify-content: center;
    }
    .v-card__title{
      div::after{
        content: "";
        display: block;
        width: 55px;
        height: 1px;
        background-color: #fdc447;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        top: 15px;
      }
    }
    .v-card{
      display: flex;
      flex-direction: column;
      .v-card__text{
        align-self: flex-end;
      }
    }
    .v-image{
      border: 2px solid transparent;
    }
    .v-card:hover{
      .v-image{
        border-color: #fdb822;
      }
    }
    span:nth-of-type(2){
      padding: 0 10px;
      margin: 0 5px;
      position: relative;
      &::after{
        content: "|";
        position: absolute;
        right: 0;
      }
      &::before{
        content: "|";
        position: absolute;
        left: 0;
      }
    }
  }
  .contacts{
    position: relative;
    .contact-form{
      position: absolute;
      top: 50px;
      height: 600px;
      left: 10%;
      padding: 35px 30px;
      background-color: #684f40;
      width: 370px;
      .sendMessage-btn{
        padding: 25 35px;
        background-color: #fff;
        color: #684f40;
        text-transform: uppercase;
      }
      .v-input__control{
        .v-input__slot{
          background-color: #fff !important;
          border: 2px solid rgba(0, 0, 0, 1)
        }
      }
    }
  }
  .partners{
    .partners-block{
      display: flex;
      justify-content: center;
      a{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        margin: 10px;
        img{
          filter: grayscale(100%);
          opacity: 0.5;
        }
        &:hover img{
          transition: 0.3s;
          filter: grayscale(0%);
          opacity: 1;

        }
      }
    }
  }
  
</style>

