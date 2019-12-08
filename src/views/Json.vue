<template>
  <div class="container">
  <h2>JSON格式校验</h2>
  <button v-on:click="toJson" type="button" class="btn btn-outline-secondary" >Go</button>
  <form>
    <div class="form-group row">
      <textarea v-model="holder" placeholder=""  class="form-control col-6" rows="5"  style="height:30em;"></textarea>
      <div  class="col-6" >
        <!-- <span>{{data}}</span> -->
        <pre data-type="object" id='text'>{{data}}</pre>

      </div>

    </div>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      holder:'',
      string: {
        placestring:''
      },
      data:''
    };
  },
  methods:{
    toJson: function(){
      console.log(typeof this.holder);
      console.log(this.holder);
      this.data = JSON.stringify(JSON.parse(this.holder), null, '  ');
      console.log(this.data);
    },
  }
}
</script>

<style>
#text{
  text-align: left
}
</style>

