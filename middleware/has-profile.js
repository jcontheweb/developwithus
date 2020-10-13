export default function ({ store, redirect }) {
    // if the user already has a profile
    if (store.getters.loggedInUser.profile) {
        return redirect('/settings')
    }
}