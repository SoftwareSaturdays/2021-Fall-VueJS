const app = new Vue({
    el: '#app',
    data: {
        message: "Testing some other v- directives:",
        toggle: true,
        changingClass: 'divBackground',
    },
    methods: {
        set_toggle: function() {
            this.toggle = !this.toggle;
            this.changingClass = 'biggerFontsize';
        }
    },
    computed: {
        otherToggle: function() {
            return !this.toggle;
        }
    }
});
