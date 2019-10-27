<template>
    <v-layout row wrap>
         <section>
            <v-img src="http://bengel.ru/wp-content/uploads/2014/05/bengel-2.jpg" height="350">
            <v-container grid-list-lg>
                <v-layout class="header-title" column wrap justify-center align-center mt-5>
                <h2>CONTACT</h2>
                <p>Say something!</p>
                </v-layout>
            </v-container>
            </v-img>
        </section>  
        <section>
            <v-container grid-list-lg>
                <v-layout column wrap>
                    <v-layout row justify-center wrap>
                        <v-flex lg7 pa-3 >
                            <GmapMap :center="{lat:52.38, lng:4.892585}" :zoom="13" map-type-id="terrain" style="height: 600px">
                                <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" @click="center=m.position"/>
                            </GmapMap>
                        </v-flex>
                        <v-flex lg7>
                            <v-layout row wrap>
                                <v-flex lg7>
                                    <form>
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
                                    </form>
                                </v-flex>
                                <v-flex lg5>
                                    <h2>CONTACT</h2>
                                    <p>He turned, stared, bawled something about "crawling out in a thing like a dish cover," and ran on to the gate of the house at the crest. A sudden whirl of black smoke driving across the road hid him for a moment.</p>
                                    <ul>
                                        <li>0 800 500 55 123 465</li>
                                        <li>Johny Bravo, Street Number, City</li>
                                        <li>info@yourdomain.com</li>
                                    </ul>
                                    <h2>SOCIALIZE</h2>
                                        <v-btn v-for="icon in icons" :key="icon" class="mx-1" dark icon>
                                            <v-icon size="24px">{{ icon }}</v-icon>
                                        </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    
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
      markers: [
        { position: { lat: 52.38, lng: 4.89 } }
      ],
      name: '',
      email: '',
      comment:'',
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    };
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
    }
    
</style>
