Vue.component('demo-component',{
    props: ['click'],
    template: `
        <div>
            <h3>This is a demo component with a child component</h3>
            <slot></slot>
            <p>The inner button was clicked {{click}} times.</p>
        </div>
    `,
});

Vue.component('child-component',{
    template: `
        <div>
            <ul>
                <li v-for="todo in todoList" v-bind:key="todo.id">
                {{todo.txt}}
                </li>
            </ul>
            <input v-model="inputText"></input>
            <button v-on:click="clickFunc">Add todo</button>
        </div>
    `,
    data: function(){
        return{
            todoList: [
                {id: 0, txt: "clean the house"},
            ],
            inputText: '',
            latestId: 0,
        }
    },
    methods: {
        clickFunc: function() {
            this.todoList.push(
                {id: ++this.latestId, txt: this.inputText}
            );
            this.$emit('press');
        }
    }
});


const app = new Vue({
    el: '#app',
    data: {
        click_count: 0,
    },
    methods: {
        handle_press: function() {
            this.click_count++;
        }
    }
});
