<template>

<div>

    <h1 style="padding-left:20%; padding-top:5%">Find Pet By ID</h1>


        <form style="padding-left:20%; padding-right:20%; padding-top:10%">
  <div class="form-group">
    <label for="text">Pet ID</label>
    <input type="text" v-model="petid" class="form-control" id="petid" aria-describedby="emailHelp" placeholder="Pet ID">
    <small id="emailHelp" class="form-text text-muted">EX : 41208453</small>
  </div>
  <p>{{petid}}</p>
  
  <button type="submit" class="btn btn-primary" v-on:click="getpet">Submit</button>
</form>

    <div style="padding-left:20%; padding-top:5%">
        <h3>Pet name : {{petName}}</h3>
        <h3>Pet age :  {{petAge}}</h3>
        <h3>Pet location :  {{petContact}}</h3>
    </div>

</div>
</template>


<script>

import axios from 'axios'

export default {
  name: "findpet",
  props: {
    msg: String
  },

  data(){
      return{
          petArr:[],
          petid:"",
          petName:'',
          petAge:'',
          petContact:''
      }
  },
  
    methods:{
        getpet: function(petArr,petid){
            var petid = this.petid;
            
            axios
        .get(`http://api.petfinder.com/pet.get?format=json&key=3e59894f5cc0e69444420f4a22033645&id=${petid}`)
        .then(response => {
            
            this.petArr = response.data,
            this.petName = response.data.petfinder.pet.name
            this.petAge = response.data.petfinder.pet.age
            this.petContact = response.data.petfinder.pet.contact.phone

            console.log(response.data.petfinder.pet.name)
            
        })
        .catch(error => {
            console.log('there was an error : '+error.response)
        })
        }
    },



  
};
</script>