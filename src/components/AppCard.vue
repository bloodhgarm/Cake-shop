<template>
  <div>
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
</template>
<script>
export default {
    computed:[
      {
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
              src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
              title:'Croissant',
              description:'Bakery, Cakery',
              price:'2.99',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
              title:'Croissant',
              description:'Bakery, Cakery',
              price:'2.99',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
              title:'Croissant',
              description:'Bakery, Cakery',
              price:'2.99',
            }, {
              src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
              title:'Croissant',
              description:'Bakery, Cakery',
              price:'2.99',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
              title:'Croissant',
              description:'Bakery, Cakery',
              price:'2.99',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
              title:'Croissant',
              description:'Bakery, Cakery',
              price:'2.99',
            }, 
            
          ]
        },
      }
    ]
}
</script>
<style lang="scss">
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
</style>
