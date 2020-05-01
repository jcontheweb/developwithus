<script>
export default {
  asyncData({ store, redirect }) {
    const id = store.state.auth.user.id;

    if (!id) return redirect("/404");

    return redirect(`/profile/${id}`);
  }
};
</script>