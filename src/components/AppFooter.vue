<template>
    <v-footer height="auto" color="black" dark>
        <v-container grid-list-lg justify-center>
            <v-layout row wrap  mt-4 justify-center>
                <v-flex lg3 mr-5>
                    <h2>ABOUT</h2>
                    <p>
                    Bakery is a PSD Template with great options and a lot of features. But it may possibly be conceived that, in the internal parts of the whale, in his anatomy there, at least, we shall be able to hit.
                    </p>
                </v-flex>
                <v-flex lg1 >
                    <img src="../assets/images/logo-light.svg" alt="" srcset="">
                </v-flex>
                 <v-flex lg3 ml-5>
                    <h2>NEWSLETTER</h2>
                    <p>Give us your email, and we shall send regular updates for new stuff and events.</p>
                    <input type="text" placeholder="Email" class="footer-mailing">
                    <v-btn class="submit-btn">text</v-btn>
                </v-flex>
            </v-layout>
            <v-layout row wrap mt-4 justify-center>
                <v-flex lg2 mr>
                    <h2>WORKING TIME</h2>
                    <p>Monday Friday:<span>08:00 am - 08:30 pm</span></p>
                    <p>Saturday Sunday:<span>10:00 am - 16:30 pm</span></p>
                </v-flex>
                <v-flex lg2 mr-4 ml-5>
                    <h2>HAPPY HOURS</h2>
                    <p>Join us for Happy Hour! Enjoy discount baked goods. <span>8:00 pm-5:00 pm Daily</span></p>
                </v-flex>
                <v-flex lg2 mr-5 ml-4 pa-4>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-1" dark icon>
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-flex>
                <v-flex lg2>
                   <ul>
                       <li>
                           0 800 123 456 88
                       </li>
                       <li>
                            257 Charlington Gates
                            Road Morrison, Nr. 568
                       </li>
                       <li>
                           info@bakeytemplate.com
                       </li>
                   </ul>
                </v-flex>
            </v-layout>
        </v-container>
    </v-footer>
</template>
<script>
export default {
     data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    })
}
</script>
<style lang="scss">
#app{
    .footer-mailing{
        width: 258px;
        border: 2px solid #a1a3a5;
        padding: 6px 10px;
        font-size: 20px;
        color: white;
    }
    .submit-btn{
        background-color: #a1a3a5;
        width: 130px;
        color: #303133;
        font-size: 16px;
        text-transform: uppercase;
        height: 40px;
        top: 0;
    }
    footer{
        position: relative;
        &::before{
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: #fdb822;
            position: absolute;
            top: 10px;
        }
        img{
            width: 100%;
            object-fit: contain;
        }
    }
}
</style>
