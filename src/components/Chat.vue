<template>
  <div class="container chat pad1">
    <h2 class="center teal-text">Ninja Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="teal-text">Name</span>
            <span class="grey-text text-darken-3">message</span>
            <span class="grey-text time">time</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <form>
          <input type="text" placeholder="Message...">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  props: ['name'],
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .chat {
    /*  */
  }

  .chat h2 {
    font-size: 2.6rem;
    margin-bottom: 2rem;
  }

  .chat span {
    font-size: 1.5rem;
  }

  .chat .time {
    display: block;
    font-size: 1rem;
  }

</style>
