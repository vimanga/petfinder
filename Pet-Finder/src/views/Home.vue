<template>
  <div class="test">
    <!-- <h1>This is an about page</h1>
    <img alt="Vue logo" src="../assets/logo.png" /> -->
    <template>

<div class="row"  style="background:purple">

    <div class="col-md-2">
  | 
    </div>
    <div class="col-md-2">
  <!-- <a href="default.asp">Home</a>  -->
            <!-- <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div> -->
    </div>

    <!-- <div class="col-md-2">
  <a href="news.asp">News</a>
  </div> -->
    <div class="col-md-2">
  <a href="contact.asp">Dog Breads</a>
  </div>
    <div class="col-md-2">
  <a href="about.asp">Cat Breads</a>
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

<script>
export default {
  name: "background",
  props: {
    msg: String
  },
  
};
</script>

<script>
import background from "@/components/background.vue";

export default {
    name: "test",
    components:{
        background
    }    
};
</script>
