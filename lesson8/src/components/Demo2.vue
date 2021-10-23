<template>
    <div>
        <h1>Software Saturdays</h1>
        <h2>Lesson 8, Demo 2</h2>
        <h3>Check your browser console to see the output of these buttons!</h3>
        <button v-on:click="readData">Read Data</button><br><br>
        <button v-on:click="createData">Create Data</button><br><br>
        <button v-on:click="updateData">Update Data</button><br><br>
        <button v-on:click="deleteData">Delete Data</button><br><br>
    </div>
</template>

<script>
import { database } from '@/database.js';
import { set, update, onValue, remove, ref } from 'firebase/database';

export default {
    name: "Demo2",
    methods: {
        createData() {
            let data = {
                key: 'value',
                otherkey: 'other value',
            }

            const dataRef = ref(database, '/added');
            set(dataRef, data)
            .then(() => {
                console.log("Set was successful");
            })
            .catch((error) => {
                console.log("Set failed");
                console.log(error);
            });

            console.log('-----------------')
            console.log('-----------------')
            console.log('-----------------')
        },
        readData() {
            const dataRef = ref(database, '/');
            onValue(dataRef, (snap) => {
                // This is just a complicated iterative process
                //     to read all the data from the database and
                //     print it to the console. Your data reads
                //     will use a similar loop, but probably
                //     not two of them
                for(let key in snap.val()) {
                    console.log(key, ':');
                    for(let sub_key in snap.val()[key]) {
                        console.log('   ',sub_key, ':', snap.val()[key][sub_key]);
                    }
                    console.log('-----------------')
                }
            });
        },
        updateData() {
            let data = {
                otherkey: 'new value',
            }

            const dataRef = ref(database, '/added');
            update(dataRef, data)
            .then(() => {
                console.log("Update was successful");
            })
            .catch((error) => {
                console.log("Update failed");
                console.log(error);
            });

            console.log('-----------------')
            console.log('-----------------')
            console.log('-----------------')
        },
        deleteData() {
            const dataRef = ref(database, '/added');
            remove(dataRef)
            .then(() => {
                console.log("Remove was successful");
            })
            .catch((error) => {
                console.log("Remove failed");
                console.log(error);
            });

            console.log('-----------------')
            console.log('-----------------')
            console.log('-----------------')
        }
    }
}
</script>

<style>
    button  {
        padding: 5px 10px;
        font-size: 1.25em;
    }
</style>
