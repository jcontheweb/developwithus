'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('listing/:slug', 'ListingController.find');

Route.group(() => {
  Route.post("register", "Auth/AuthenticationController.register");
  Route.post("login", "Auth/AuthenticationController.login");
  Route.get("me", "Auth/AuthenticationController.me").middleware(["auth"]);

  Route.post("work-experience", "WorkExperienceController.create");
  Route.delete("work-experience", "WorkExperienceController.delete");

  Route.post("education", "EducationController.create");
  Route.delete("education", "EducationController.delete");
  // Route.get("work-experience/:id", "WorkExperienceController.get");

  Route.post("profile", "ProfileController.create");
  Route.get("profiles/:id", "ProfileController.getProfileById");
  Route.get("profile/:id", "ProfileController.get");
  Route.get("profile/name/:id", "ProfileController.getNameById");
  Route.put("profile", "ProfileController.update");
  Route.post("profile/avatar", "ProfileController.avatar");

  Route.post('listing', 'ListingController.create')
  Route.get('listing', 'ListingController.index')


  Route.post('active', async ({ auth }) => {
    const user = await auth.getUser()
    const profile = await user.profile().fetch()
    profile.last_active = new Date()
    await profile.save()
  }).middleware(['auth'])
}).prefix("api");