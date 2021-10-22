// Load the database first
const firebaseConfig = {
    apiKey: "AIzaSyC-XOvh3AjdCFLYgkMUn6GWRT2GppoagQk",
  authDomain: "initial-test-ssf21-vuejs.firebaseapp.com",
  databaseURL: "https://initial-test-ssf21-vuejs-default-rtdb.firebaseio.com",
  projectId: "initial-test-ssf21-vuejs",
  storageBucket: "initial-test-ssf21-vuejs.appspot.com",
  messagingSenderId: "972254851969",
  appId: "1:972254851969:web:2657927ac5824f23086e80"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let database = firebase.database();

Vue.component('database', {
    props: ['title', 'data'],
    template: `
        <div class="data-entry">
            <p>{{title}}:</p>
            <!-- We haven't covered this syntax, but it is exactly like a regular v-for but for objects -->
            <ul>
                <li v-for="(value, name) in data" v-bind:key="name">{{name}} : {{value}}</li>
            </ul>
        </div>
    `
});

const app = new Vue({
    el: '#app',
    data: {
        data_list: [],
    },
    created: function() {
        database.ref('/').once('value').then((snap) => {
            for(let key in snap.val()) {
                this.data_list.push({title:key, data:snap.val()[key]});
            }
        });
    },
});