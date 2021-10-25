/*
    Defina o objeto base para a criação da aplicação vue 
*/
const fans = {
    data() {
        return {
            vueLogo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
            fanCount: 0,
            vueFans: [],
            name: "",
        };
    },
    methods: {
        addFan()  {
            if(this.name !== "") {
                const existingFan =  this.vueFans.find(fan => fan.name === this.name)
                if (existingFan) { return }
                this.vueFans.push({
                    id: this.fanCount,
                    name: this.name
                });
            } else {
                window.alert('Fan name is empty');
            }
            this.name="";
            this.fanCount++;
        }
    }
};

const app = Vue.createApp(fans);
const vm = app.mount('#fans');

/*
    Crie o app e monte ele na div especificada
*/
