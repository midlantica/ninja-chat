<template>
  <div class="container welcome w50 marT3">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name</label>
          <input type="text" name="name" placeholder="Enter name..." v-model="name">
          <p v-if="feedback" class="red-text fs-small">{{ feedback }}</p>
          <button class="btn teal toCapitalize marT1 marB1">Enter Chat</button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    data () {
      return {
        name: null,
        feedback: null
      }
    },
    methods: {
      enterChat() {
        //console.log(this.name)
        if(this.name) {
          this.$router.push({ name: 'Chat', params: { name: this.name } });
        } else {
          this.feedback = "Enter a name please!"
        }
      }
    }
  }
</script>

<style>
  .welcome {

  }
</style>
