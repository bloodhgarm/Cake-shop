<template>
    <v-layout row wrap>
        <section>
            <v-img src="http://bengel.ru/wp-content/uploads/2014/05/bengel-2.jpg" height="350">
            <v-container grid-list-lg>
                <v-layout class="header-title" column wrap justify-center align-center mt-5>
                <h2>MENUS</h2>
                <p>See our menus and what we offer</p>
                </v-layout>
            </v-container>
            </v-img>
        </section>   
        <section>
         <v-layout justify-center row wrap>
             <v-flex lg8>
                 <v-layout row wrap>
                     <v-flex lg9>
                         
                     </v-flex>
                     <v-flex lg3>
                         <v-text-field
                            append-icon="mic"
                            class="mx-3"
                            label="Search"
                            dark
                            prepend-inner-icon="search"
                            solo-inverted>
                            </v-text-field>
                            <h2>Categories</h2>
                            <v-radio-group v-model="radioGroup">
                            <v-radio
                                v-for="(item, index) in Categories" :key="index"
                                :label="item.categories"
                            ></v-radio>
                        </v-radio-group>
                        <v-card dark  color="black">
                            <v-card-text>
                                <v-layout row>
                                    <v-flex shrink style="width: 60px">
                                    <v-text-field
                                        v-model="value3[0]"
                                        class="mt-0"
                                        hide-details
                                        single-line
                                        type="number"
                                    ></v-text-field>
                                    </v-flex>

                                    <v-flex class="px-3">
                                    <v-range-slider
                                        v-model="value3"
                                        :max="600"
                                        :min="20"
                                        :step="10"
                                    ></v-range-slider>
                                    </v-flex>

                                    <v-flex shrink style="width: 60px">
                                    <v-text-field
                                        v-model="value3[1]"
                                        class="mt-0"
                                        hide-details
                                        single-line
                                        type="number"
                                ></v-text-field>
                                </v-flex>
                            </v-layout>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn>FILTER</v-btn>
                            </v-card-actions>
                        </v-card>
                     </v-flex>
                 </v-layout>
             </v-flex>
         </v-layout>
        </section>   
    </v-layout> 
</template>

<script>
export default {
    data () {
      return {
        value1: [30, 60],
        value2: [0, 40],
        value3: [110, 440],
        Catigories: [
            {
                catigories: 'Breads'
            },
            {
                catigories: 'Croissants'
            },
            {
                catigories: ' Cakes'
            },
            {
                catigories: 'Fluor Products'
            },
            {
                catigories: 'Diabetes'
            }
        ]
      }
    }
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
</style>
