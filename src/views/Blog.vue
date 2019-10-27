<template>
   <v-layout row wrap>
        <section>
            <v-img src="http://bengel.ru/wp-content/uploads/2014/05/bengel-2.jpg" height="350">
            <v-container grid-list-lg>
                <v-layout class="header-title" column wrap justify-center align-center mt-5>
                <h2>BLOG WITH SIDEBAR</h2>
                <p>Here you will find our blog pages</p>
                </v-layout>
            </v-container>
            </v-img>
        </section>  
        <section>
            <v-container grid-list-lg>
                <v-layout row justify-center wrap>
                    <v-flex lg2>
                        <v-layout column wrap>
                            <v-flex lg12>
                                <h3>ABOUT OUR STORE</h3>
                                <v-avatar
                                    size="90"
                                    color="red"
                                >
                                    <img src="src" alt="alt">
                                </v-avatar>
                                <p>Hello mi nombre is Dick Harper
                                    I am the owner of the Bakery Shop
                                    I love to read and write
                                    so follow me.</p>
                            </v-flex>
                            <v-flex lg12>
                                <h3>BANNER</h3>
                                <img src="" alt="">
                            </v-flex>
                            <v-flex lg12>
                                 <h3>CATEGORIES</h3>
                                  <v-card  dark color="black">
                                    <v-list>
                                    <v-list-tile
                                        v-for="(item, index) in Categories" :key="index"
                                        
                                    >
                                        <v-list-tile-content>
                                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                                        <v-list-tile-sub-title v-text="item.col"></v-list-tile-sub-title>
                                        </v-list-tile-content>
                                       
                                       
                                    </v-list-tile>
                                    </v-list>
                                </v-card>
                            </v-flex>
                            <v-flex lg12>
                                 <h3>TWITTER FEEDS</h3>
                                <v-carousel class="twitter-carusel" height="180" hide-delimiters>
                                    <v-carousel-item>
                                       <v-card
                                            color="#26c6da"
                                            dark
                                            max-width="400"
                                        >
                                            <v-card-text  class=" font-weight-regular">
                                            "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                                            </v-card-text>

                                            <v-card-actions>
                                            <v-list-tile class="grow">
                                                <v-list-tile-avatar color="grey darken-3">
                                                    <v-img
                                                        class="elevation-6"
                                                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                                    ></v-img>
                                                </v-list-tile-avatar>

                                                <v-list-tile-content>
                                                <v-list-tile-title>Evan You</v-list-tile-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                            </v-card-actions>
                                        </v-card>
                                    </v-carousel-item>
                                </v-carousel>
                            </v-flex>
                            <v-flex lg12>
                                <h3>RECENT POSTS</h3>
                                <v-card dark color="black">
                                    <v-img
                                    class="white--text"
                                    height="200px"
                                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                    >
                                    </v-img>
                                    <v-card-title>
                                        <span class="grey--text">15 July, 2016</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <h4>App that it looks Great</h4>
                                        <div>
                                            We do what is best for our clients, in order to get full satisfaction and perfection. Our primary goal is to make thing work.
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex lg12>
                                <h3>POPULAR POSTS</h3>
                                    <v-card dark color="black" >
                                    <v-list  two-line>
                                    <template  v-for="(item, index) in BestPosts">
                                        <v-subheader
                                        v-if="item.header"
                                        :key="item.header"
                                        >
                                        {{ item.header }}
                                        </v-subheader>

                                        <v-divider
                                        v-else-if="item.divider"
                                        :key="index"
                                        :inset="item.inset"
                                        ></v-divider>

                                        <v-list-tile
                                        v-else
                                        :key="item.title"
                                        avatar
                                        >
                                        <v-list-tile-avatar>
                                            <img :src="item.avatar">
                                        </v-list-tile-avatar>

                                        <v-list-tile-content>
                                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                        </v-list-tile-content>
                                        </v-list-tile>
                                    </template>
                                    </v-list>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        
                    </v-flex>
                    <v-flex lg1>
                        
                    </v-flex>
                    <v-flex lg6>
                        <v-layout  mb-4 justify-space-between row>
                            <h2>CROISSANTS THAT COMBINES WITH COFFEE</h2>
                            <div>
                                <span>admin</span>
                                <span>23.03.2018</span>
                                <span>23 comments</span>
                            </div>
                        </v-layout>
                        <v-layout column wrap>
                            <v-carousel >
                                <v-carousel-item  src="http://unuvarpastacafe.com/images/banner.jpg"></v-carousel-item>
                            </v-carousel>
                            <p>
                                But the placing of the cap-sheaf to all this blundering business was reserved for the scientific Frederick Cuvier, brother to the famous Baron. In 1836, he published a Natural History of Whales, in which he gives what he calls a picture of the Sperm Whale. Before showing that picture to any Nantucketer, you had best provide for your summary retreat from Nantucket. In a word, Frederick Cuvier's Sperm Whale is not a Sperm Whale, but a squash. 

                                Of course, he never had the benefit of a whaling voyage (such men seldom have), but whence he derived that picture, who can tell? Perhaps he got it as his scientific predecessor in the same field.

                                Desmarest, got one of his authentic abortions; that is, from a Chinese drawing. And what sort of lively lads with the pencil those Chinese are, many queer cups and saucers inform us.

                                But the placing of the cap-sheaf to all this blundering business was reserved for the scientific Frederick Cuvier, brother to the famous Baron. In 1836, he published a Natural History of Whales, in which he gives what he calls a picture of the Sperm Whale. Before showing that picture to any Nantucketer, you had best provide for your summary retreat from Nantucket. In a word, Frederick Cuvier's Sperm Whale is not a Sperm Whale, but a squash. Of course, he never had the benefit of a whaling voyage (such men seldom have), but whence he derived that picture, who can tell? Perhaps he got it as his scientific predecessor in the same field, Desmarest, got one of his authentic abortions; that is, from a Chinese drawing. And what sort of lively lads with the pencil those Chinese are, many queer cups and saucers inform us.
                            </p>
                            <v-layout  mt-3 row justify-space-between align-center>
                                <div>
                                <span>SHARE:</span>
                                    <v-btn v-for="icon in icons" :key="icon" class="mx-1" dark icon>
                                        <v-icon size="24px">{{ icon }}</v-icon>
                                    </v-btn>
                                </div>
                                <p>TAGS: <span> Bread, Croissant, Bakery</span></p>
                            </v-layout>
                            <v-layout mt-3 row wrap>
                                <v-flex d-flex justify-space-around lg10>
                                    <v-avatar class="avatar-block"
                                        size="86"
                                        color="red"
                                    >
                                        <img src="https://st2.depositphotos.com/6913282/12369/v/950/depositphotos_123698584-stock-illustration-cake-with-strawberries-icon-cake.jpg" alt="alt">
                                    </v-avatar>
                                    <div  lg6>
                                        <div>
                                            <span>Hnsom Rob</span> <span>24.04.1020</span> <a>reply</a>
                                        </div>
                                        <div>
                                            <p>
                                                Nevertheless, in the proper place we shall see that no knowing fisherman will ever turn up his nose at such a whale as this, however much he may shun blasted whales in general.
                                            </p>
                                        </div>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <v-layout mt-3 row wrap>
                                <form class="comment-form" d-flex lg12>
                                    <v-flex lg4>
                                        <v-text-field
                                        v-model="name"
                                        :error-messages="nameErrors"
                                        :counter="10"
                                        label="Name"
                                        required
                                        dark
                                        outline
                                        @input="$v.name.$touch()"
                                        @blur="$v.name.$touch()"
                                        ></v-text-field>
                                        <v-text-field
                                        v-model="email"
                                        :error-messages="emailErrors"
                                        label="E-mail"
                                        required
                                        outline
                                        dark
                                        @input="$v.email.$touch()"
                                        @blur="$v.email.$touch()"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex lg8>
                                         <v-textarea
                                            outline
                                            black
                                            dark
                                            no-resize
                                            height="145"
                                            name="input-7-4"
                                            label="Your comment"
                                            
                                            ></v-textarea>
                                            <v-btn @click="submit">submit</v-btn>
                                            <v-btn @click="clear">clear</v-btn>
                                    </v-flex>
                                </form>
                            </v-layout>
                        </v-layout>
                        <v-btn color="brown darken-2" large dark>prev</v-btn>
                        <v-btn color="brown darken-2" large dark>next</v-btn>
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
    mixins: [validationMixin],
     validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
   
    },
   data() {
       return {
        icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
        ],
        name: '',
        email: '',
        Categories:[
            {
                title:'Photography',
                col: '9'
            },
            {
                title: 'Movies',
                col: '6'
            },
            {
                title:'Life Style',
                col:'3'
            },
            {
                title:'Quotes',
                col:'6'
            },
            {
                title:'Web Development',
                col: '33'
            }
        ],
        BestPosts: [
          { header: 'Today' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "Wish I could come, but I'm out of town this weekend."
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle: "Do you have Paris recommendations? Have you ever been?"
          }
        ]
       }
       
   },
   computed: {
    nameErrors () {
    const errors = []
    if (!this.$v.name.$dirty) return errors
    !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
    !this.$v.name.required && errors.push('Name is required.')
    return errors
    },
    emailErrors () {
    const errors = []
    if (!this.$v.email.$dirty) return errors
    !this.$v.email.email && errors.push('Must be valid e-mail')
    !this.$v.email.required && errors.push('E-mail is required')
    return errors
    }
},
methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
      }
    }
}
</script>
<style lang="scss">
     section{
        width: 100%;
        background-color: #000;
        h2,p{
            color: white;
            margin-bottom: 0;
        }
        h3{
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 15px;
        }
        .avatar-block{
            margin-right: 30px;
        }
        div{
            span{
                margin-right: 15px;
            }
            a{
                text-transform: uppercase;
                color: tan;
            }
        }
        .comment-form{
            display: flex;
            width: 100%;
            color: white;

        }
        .twitter-carusel{
            
        }
    }
</style>
