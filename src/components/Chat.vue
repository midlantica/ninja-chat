<template>
  <div class="container chat pad1">
    <h2 class="center teal-text">Ninja Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="teal-text">Name</span>
            <span class="grey-text text-darken-3">message</span>
            <div class="grey-text time">time</div>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
  import NewMessage from '@/components/NewMessage'
  export default {
    name: 'Chat',
    props: ['name'],
    components: {
      NewMessage
    },
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
    /* display: block; */
    font-size: 1rem;
  }

</style>
