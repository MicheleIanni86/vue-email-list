// START SCRIPT VUEJS-------------------------------------------------------------------------------------------
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            greetings: 'Esercizio Email List!',
            mailList: [],


        };

    },

    methods() { },

    created() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                console.log(response.data.response);
                this.mailList.push(response.data.response);
            });
        }


    }

}).mount('#root');
// END SCRIPT VUEJS-------------------------------------------------------------------------------------------
