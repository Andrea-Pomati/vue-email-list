const { createApp } = Vue;

createApp({


  data() {
    return {
      
      emails: [],
    }
  },

  created() {
    
    this.getEmails(20);

  },

  mounted() {
   
  },

  methods: {

    getEmails(quantity) {

      for(let i = 0; i < quantity; i++) {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail?count').then((res) => {

          const mailReceived = res.data.response;

          this.emails.push(mailReceived);
          
        });

        
      }
      
    },

  },




}).mount('#app');
