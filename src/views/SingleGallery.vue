<template>
    <v-layout row wrap>
         <section>
            <v-img src="http://bengel.ru/wp-content/uploads/2014/05/bengel-2.jpg" height="350">
            <v-container grid-list-lg>
                <v-layout class="header-title" column wrap justify-center align-center mt-5>
                <h2>GALLERY SINGLE</h2>
                <p>Here you will find our single pages</p>
                </v-layout>
            </v-container>
            </v-img>
        </section> 
        <section>
            <v-layout justify-center row wrap>
                <v-flex lg8>
                    <v-layout row wrap>
                        <v-flex lg4>
                            <v-layout row justify-space-between wrap>
                                <span class="price">2.99</span>
                                <p class="name-product">Chocolate Croissant<span>Bakery, Cakery</span></p>
                            </v-layout>
                            <p class="description">Though in many natural objects, whiteness refiningly enhances beauty, as if imparting some special virtue of its own, as in marbles, japonicas, and pearls; and though various nations have in some way recognised a certain royal preeminence in this hue; even the barbaric, grand old kings of Pegu placing the title "Lord of the White Elephants" above all their other magniloquent ascriptions of dominion; and the modern kings of Siam unfurling the same snow-white quadruped in the royal standard; and the Hanoverian flag bearing the one figure of a snow-white charger; and the great Austrian Empire.</p>

                        </v-flex>
                        
                        <v-flex offset-lg1 lg7>
                            <v-carousel>
                                <v-carousel-item
                                    src="http://s1.1zoom.me/b5556/802/Croissant_Chocolate_Plate_Two_547531_1600x900.jpg"
                                    transition="transition"
                                    reverse-transition="reverseTransition"
                                ></v-carousel-item>
                            </v-carousel>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </section>  
    </v-layout>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
      section{
        width: 100%;
        background-color: #000;
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
    .price{
        color: #000000;
        font-weight: 700;
        text-align: center;
        position: relative;
        font-size: 36px;
        padding: 5px 15px;
        background-color: #fdb822;
        &::before{
            content: "$";
        }
    }
    .name-product{
        font-size: 26px;
        font-weight: 700;
        text-align: right;
        span{
            color:  #696969;
            font-size: 18px;
            font-weight: 400;
            display: block;
            margin-right: 0;
        }
        
    }
    .description{
        margin-top: 20px;
    }
</style>
