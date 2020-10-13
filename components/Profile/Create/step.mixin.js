export default {
    props: {
        profile: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        entry: ""
    }),
    methods: {
        next() {
            this.$emit("step:forward", { [this.$el.getAttribute('data-step')]: this.entry });
        },
        back() {
            this.$emit("step:backward")
        }
    },
    mounted() {
        if (this.$refs.focus) {
            this.$refs.focus.focus()
        }

        document.addEventListener('keypress', (event) => {
            if (event.keyCode === 13) {
                this.next()
            }
        })
    }
}