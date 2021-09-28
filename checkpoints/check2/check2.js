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

Vue.component('input-emit-component',{
    /*
        What is being demonstrated here:
            - you can emit to the vue instance what v-model captures, without needing any buttons to do it
            - event listener methods can be passed more than just the event object
    */

    template: `
        <div>
            <input v-model="textForEmit" v-on:keyup="emitText(variableExample, 'string example', $event)"></input>
        </div>
    `,
    data: function(){
        return {
            textForEmit: '',
            variableExample: 'variable example',
        }
    },
    methods: {
        emitText: function(variableValue, stringValue, event) {
            console.log(variableValue, stringValue, event);
            this.$emit('emit-data', this.textForEmit);
        },
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
        },
        handleTextEmit: function(data) {
            console.log('emitted data: ' + data);
        }
    }
});
