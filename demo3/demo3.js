const app = new Vue({
    el: '#app',
    data: {
        message: "Testing some other v- directives:",
        toggle: true,
    },
    methods: {
        set_toggle: function() {
            this.toggle = !this.toggle;
        },
        boundClasses: function() {
            /*
                To dynamically change styling you must return a JSON object with:
                    css class names in quotes,
                    true / false (or an expression evaluating to true / false) for if the class will be applied or not

                note: this is one case where you do actually return a value,
                    even though this function is a method
            */
            return {
                'divBackground':(!this.toggle),
                'biggerFontsize':(this.toggle)
            }
        }
    },
    computed: {
        otherToggle: function() {
            return !this.toggle;
        }
    }
});
