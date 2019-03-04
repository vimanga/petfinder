<template>
<div class="test">
  <h2 style="text-align:center; padding-top:10%">Where pets find there people</h2>
  
  <img alt="Vue logo" src="/home/vimanga/Documents/Projects/Vue/Pet-Finder/src/assets/images.jpeg" />


  <div style=" padding-left:25%; padding-right:25%;">
    <div class="row"  style="background:purple; padding:4%">

    
    <div class="col-md-2">
  <!-- <a href="default.asp">Home</a>  -->
            
        </div>
        <div class="col-md-3">
      <input type="text"  placeholder="Pet">
      </div>
        <div class="col-md-2">
      <a href="contact.asp">{{ title1 }}</a>
      </div>
        <div class="col-md-2">
      <a href="about.asp">{{ title2 }}</a>
        </div>
        <div class="col-md-2">
      <a href="about.asp">find other pets</a>
        </div>

    </div>
  </div>
</div>
</template>

<style>
</style>

<script>
export default {
  name: "background",
  props: {
    msg: String
  },
  data() {
    return{
    find: 'find',
    animal1: 'cat',
    animal2: 'dog',
    }
  },
  computed:{
    title1(){
      return this.find + ' ' + this.animal1
    },
    title2(){
      return this.find + ' ' + this.animal2
    }
  },
  
};



</script>



