<template>
    <div>
        <div class="input_group">
            <span>Semester</span> <input v-model.trim="new_sem"><br>
            -- <span>Program</span> <input v-model.trim="new_program"><br>
            -- <span>Final</span> <input v-model.trim="new_final"><br>
            -- <span>Location</span> <input v-model.trim="new_location"><br>
            -- <span>School</span> <input v-model.trim="new_school"><br>
            <br><button v-on:click="addItem">Add</button>
        </div>

        <C2Child class="group" v-for="item in example_data" v-bind:key="item.id" v-bind:data="item"></C2Child>
    </div>
</template>

<script>
import { database } from '@/database';
import { ref, onValue, off, set } from 'firebase/database'
import C2Child from '@/components/Chkpt2Child.vue'

export default {
    name: "Checkpoint2",
    components: {
        C2Child
    },
    data() {
        return {
            example_data: [],
            new_sem: '',
            new_final: '',
            new_location: '',
            new_program: '',
            new_school: '',
        }
    },
    methods: {
        addItem() {
            const dataRef = ref(database, `/${this.new_sem}`);
            set(dataRef, {
                program: this.new_program,
                final: this.new_final,
                location: this.new_location,
                school: this.new_school,
            })
            .then(() => {
                console.log("Set was successful!");
                console.log('----------------');
            })
            .catch((error) => {
                console.log("Set had an error!");
                console.log(error);
                console.log('----------------');
            });
        }
    },
    mounted() {
            const dataRef = ref(database, '/');
            onValue(dataRef, (snap) => {
                const data = snap.val();
                this.example_data = [];
                for(let key in data) {
                    this.example_data.push({id:key, data:data[key]});
                }
            });
    },
    beforeDestroy() {
        const dataRef = ref(database, '/');
        off(dataRef);
        console.log("Removed listener");
    }
}
</script>

<style>
    .input_group {
        text-align: start;
    }

    .group {
        padding: 10px;
        background: #CFB991;
        margin: 10px auto;
        width: 250px;
    }
</style>
