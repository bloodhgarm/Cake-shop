<template>
        <v-toolbar app height="180" scroll-toolbar-off-screen scroll-threshold="180" d-flex align-center class="black nav-bar">
            <v-container grid-list-lg lg12>
                <v-layout row wrap align-center justify-center>
                    <v-toolbar-items class="hidden-sm-and-down list-links">
                        <v-btn  append flat color="grey lighten-5" to="/home" class="header-link">home</v-btn>
                        <v-btn  append flat color="grey lighten-5" to="/about" class="header-link">ABOUT US</v-btn>
                        <v-btn  append flat color="grey lighten-5" to="/menus" class="header-link">menu</v-btn>
                    </v-toolbar-items>
                <img src="../assets/images/logo-light.svg" alt="">
                    <v-toolbar-items class="hidden-sm-and-down list-links">
                        <v-btn  append flat color="grey lighten-5"  class="header-link">FEATURES</v-btn>
                        <v-btn  append flat color="grey lighten-5" to="/blog" class="header-link">BLOG</v-btn>
                        <v-btn  append flat color="grey lighten-5" to="/contact" class="header-link">CONTACT</v-btn>
                    </v-toolbar-items>
                </v-layout>
            </v-container>
            
        </v-toolbar>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
#app{
    .nav-bar::after{
        content: "";
        display: inline-block;
        width: 100%;
        height: 1px;
       background-color: #fdb822;
        position: absolute;
        bottom: 10px;
    }
       .list-links{
           margin: 0 30px;
       }
        .header-link{
            padding: 10px;
            font-size: 14px;
        }   
}
</style>
