<template>
  <div class="test1">
    <!-- <h1>This is an about page</h1>
    <img alt="Vue logo" src="../assets/logo.png" /> -->
    
    <template>

<div class="row"  style="background:purple">

    <div class="col-md-2">
  | 
    </div>
    <div class="col-md-2">
  <!-- <a href="default.asp">Home</a>  -->
            <div class="dropdown">
  <a href="@/views/FindPet.vue">About pet adoption</a>
  
</div>

    </div>
    <div class="col-md-2">
  <a href="@/views/FindPet.vue">Dog Care</a>
  </div>
    <div class="col-md-1">
  <a href="contact.asp">Cat Care</a>
  </div>
    <div class="col-md-1">
  <a href="about.asp">All Pet Care</a>
    </div>
    <div class="col-md-1">
  <a href="about.asp">Shelters And Rescues</a>
    </div>
    <div class="col-md-1">
  <a href="about.asp">Helping Pets</a>
    </div>
    <div class="col-md-1">
  <a href="about.asp">Videos</a>
    </div>



</div>


</template>

    <background/>
  </div>
</template>











<style>
.row {
  list-style-type: none;
  margin: 0;
  padding: 15px;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
}



a {
  display: block;
  color: white;
  text-align: center;
  
  
  text-decoration: none;
  
}


</style>

// <script>
// export default {
//   name: "resources",
//   props: {
//     msg: String
//   }
// };
// </script>

<script>
import background from "@/components/background.vue";

export default {
    name: "test",
    components:{
        background
    }    
};
</script>
