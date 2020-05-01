<template>
  <div>
    <div class="-mx-6 bg-white sm:mx-0 md:rounded-md md:shadow-cardSlim">
      <p class="px-4 py-5 text-xl font-bold border-b border-gray-100 md:px-10">About you</p>
      <div class="p-4 md:p-10">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div class="form-row">
            <label class="required" for="first_name">First Name</label>
            <input v-model="profile.first_name" type="text" name="first_name" id="first_name" />
          </div>
          <div class="form-row">
            <label class="required" for="first_name">Surname</label>
            <input v-model="profile.surname" type="text" name="first_name" id="first_name" />
          </div>
          <div class="form-row">
            <label for="first_name">Currency</label>
            <select v-model="profile.currency" class="form-select">
              <option v-for="code in Object.keys(countries)" :key="code" :value="code">{{code}}</option>
            </select>
          </div>
          <div class="form-row">
            <label for="first_name">Where are you based?</label>
            <input v-model="profile.location" type="text" />
          </div>
          <div class="form-row">
            <label for="first_name">Gender</label>
            <select v-model="profile.gender" name id class="form-select">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="form-row">
            <label for="first_name">Date of birth</label>
                    <flat-pickr
                v-model="profile.dob"                                                  
                class="form-control" 
                placeholder="Select date"               
                name="date">
        </flat-pickr>
            <!-- <select v-model="profile.dob" name id class="form-select">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select> -->
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-6">
          <div class="form-row">
            <label for>Languages that you are fluent in</label>
            <multiselect
              v-model="profile.languages"
              placeholder="Languages"
              :options="languages"
              :multiple="true"
              :taggable="true"
            ></multiselect>
            <!-- <select v-model="profile.languages" name id class="form-select">
              <option
                v-for="language in languages"
                :key="language.code"
                :value="language.name"
              >{{ language.name }}</option>
            </select>-->
          </div>
          <div class="flex flex-col form-row">
            <label for>Profile bio</label>
            <textarea
              v-model="profile.bio"
              class="flex-1 block w-full form-textarea"
              name
              id
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 -mx-6 bg-white sm:mx-0 md:rounded-md md:shadow-cardSlim">
      <p class="px-4 py-5 text-xl font-bold border-b border-gray-100 md:px-10">Experience</p>
      <div class="p-4 md:p-10">
        <div class="md:flex">
          <div class="mr-16 timeline-entry" style="min-width: 200px;">
            <p class="mb-10">Work Experience</p>
            <WorkExperienceList :roles="work" />
            <Button
              @click="modal = 'WorkExperience'"
              modifier="secondary"
              size="small-wide"
              text="+ work experience"
            ></Button>
            <WorkExperience
              @submit="handleNewWorkExperience"
              @close="modal = null"
              v-if="modal == 'WorkExperience'"
            />
          </div>
          <div class="timeline-entry" style="min-width: 200px;">
            <p class="mb-10">Education</p>
            <EducationList :educations="education" />
            <Button
              @click="modal = 'Education'"
              modifier="secondary"
              size="small-wide"
              text="+ education"
            ></Button>
            <Education
              @submit="handleNewEducation"
              @close="modal = null"
              v-if="modal == 'Education'"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex mt-12">
      <Button @click="save" modifier="primary" size="large" text="save changes"></Button>
      <button
        class="ml-8 font-bold text-black uppercase transition duration-300 opacity-75 hover:opacity-100 hover:underline focus:outline-none"
      >cancel</button>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import countries from "~/static/data/countries.json";
import languages from "~/static/data/languages";

export default {
  components: {
    Multiselect,
    flatPickr,
    WorkExperience: () =>
      import("~/components/Settings/Modals/WorkExperience.vue"),
    WorkExperienceList: () =>
      import("~/components/Profile/WorkExperienceList.vue"),
    Education: () => import("~/components/Settings/Modals/Education.vue"),
    EducationList: () => import("~/components/Profile/EducationList.vue")
  },
  data() {
    return {
      countries,
      languages,
      profile: {},
      modal: null
    };
  },
  created() {
    this.profile = JSON.parse(
      JSON.stringify(this.$store.getters.loggedInUserProfile)
    );

    if (this.profile.languages) {
      this.profile.languages = this.profile.languages.split(",");
    }

  },
  methods: {
    async save() {
      const languages = this.profile.languages.toString();
      const profile_copy = JSON.parse(
        JSON.stringify(this.profile)
      );

      profile_copy.languages = languages;
      
      const res = await this.$axios.$put("profile", profile_copy);
    },
    handleNewEducation(education) {
      // this.$store.commit("PUSH_NEW_EDUCATION", education);
    },
    handleNewWorkExperience(experience) {
      this.profile.work.push(experience);
      this.$store.dispatch("WorkExperienceAdd", experience);
    }
  },
  computed: {
    education() {
      if (!this.$store.getters.loggedInUserProfile) {
        return null;
      }

      return this.$store.getters.loggedInUserProfile.education;
    },
    work() {
      if (!this.$store.getters.loggedInUserProfile.work) return null

      return this.$store.getters.loggedInUserProfile.work
    }
  }
};
</script>

<style scoped lang="scss">
.timeline-entry p {
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>