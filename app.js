const app = Vue.createApp(
    {
        data () {
            return {
                goalA: 'finish VueJS Course',
                goalB: 'Master VueJs',
                link: 'https://vuejs.org/'
            };
        },

        methods: {
            
            output () {
                const num = Math.random();
                if (num < 0.5) {
                    return this.goalA;
                }

                else {
                    return this.goalB;
                }
            }
        }
    }
);


app.mount('#user-goal');