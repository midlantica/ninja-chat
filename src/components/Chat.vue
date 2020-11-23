<template>
  <div class="container chat pad1">
    <h2 class="center teal-text">Ninja Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{message.name}}</span>
            <span class="grey-text text-darken-3">{{message.content}}</span>
            <div class="grey-text time">{{message.timestamp}}</div>
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
  import db from '@/firebase/init'
  import moment from 'moment'

  export default {
    name: 'Chat',
    props: ['name'],
    components: {
      NewMessage
    },
    data() {
      return {
        messages: []
      }
    },
    created(){
      let ref= db.collection('messages').orderBy('timestamp')

      ref.onSnapshot(snapshot => {
        console.table(snapshot.docChanges().forEach(change => {
            if(change.type == 'added') {
              let doc = change.doc
              this.messages.push({
                id: doc.id,
                name: doc.data().name,
                content: doc.data().content,
                timestamp: moment(doc.data().timestamp).format('lll')
              })
            }
          }
        ))
      })
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
    font-size: 1.25rem;
  }

  .chat .time {
    /* display: block; */
    font-size: .75rem;
  }

  .messages {
    max-height: 300px;
    overflow: auto;
  }

  ::-webkit-scrollbar {
    height: 0.6rem;
    width: 0.6rem;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      to bottom,
      hsla(174, 42%, 65%, 0.514) 0%,
      hsla(174, 42%, 65%, 0.514) 100%
    );
    border-radius: 0px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

</style>
