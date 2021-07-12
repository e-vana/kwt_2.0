<template>
  <div id="registration">
    <div v-if="!nextClicked  && !isSuccess" class="content-container">
      <h2>Registration</h2>
      <p>Please fill out the following form for each athlete that needs to be registered for the 2021 season.</p>
      <p>Please only submit this form <b>ONCE FOR EACH ATHLETE.</b></p>
      <form v-on:submit.prevent>
        <label for="">Athlete Full Name</label>
        <br>
        <input v-model="athleteName" type="text" placeholder="Athlete Full Name">
        <br>

        <label for="">Parent Full Name</label>
        <br>
        <input v-model="parentName" type="text" placeholder="Parent Full Name">
        <br>


        <label for="">Parent Address</label>
        <br>
        <input v-model="parentAddress" type="text" placeholder="Parent Address">
        <br>

        <label for="">Parent Address City</label>
        <br>
        <input v-model="parentAddressCity" type="text" placeholder="Parent Address City">
        <br>

        <label for="">Parent Address State</label>
        <br>
        <input v-model="parentAddressState" type="text" placeholder="Parent Address State">
        <br>

        <label for="">Parent Address Zip</label>
        <br>
        <input v-model="parentAddressZip" type="text" placeholder="Parent Address Zip">
        <br>

        <label for="">Parent Email Address</label>
        <br>
        <input v-model="parentEmail" type="text" placeholder="Parent Email">
        <br>


        <label for="">Parent Contact Phone Number</label>
        <p>This is the primary emergency contact, please make sure that this number is available at anytime.</p>
        <input v-model="parentPhone" type="text" placeholder="Parent Contact Phone Number">
        <br>

        
        <label for="">Emergency Contact Name</label>
        <br>
        <input v-model="emergencyName" type="text" placeholder="Emergency Contact Full Name">
        <br>

        <label for="">Emergency Contact Phone Number</label>
        <p>This is a secondary emergency contact number.  The primary number above will always be tried first, but in case that number can't be reached please leave someone else we can contact.</p>
        <input v-model="emergencyPhone" type="text" placeholder="Emergency Contact Phone Number">
        <br>

        <label for="">Athlete Shirt Size</label>
        <input v-model="athleteShirtSize" type="text" placeholder="Small, Medium, Large, X-Large, XXL">
        <br>
        <button v-on:click="nextToggle()">Next</button>
      </form>
    </div>
    <div v-if="nextClicked && !isSuccess"  id="confirm-registration" class="content-container">
      <h2>Confirmation</h2>
      <p>Please confirm the following information, make sure all of the information is accurate before submitting the registration for this athlete.</p>
      <label for="">Athlete Information</label>
      <p>
        Athlete Name:{{athleteName}}
        <br>
        Shirt Size:{{ athleteShirtSize }}
      </p>
      <label for="">Parent Information</label>
      <p>
        Parent Name: {{parentName}}
        <br>
        Parent Address: {{parentAddress}}, {{parentAddressCity}}, {{parentAddressState}}, {{parentAddressZip}}
        <br>
        Parent Email: {{parentEmail}}
        <br>
        Parent Phone: {{parentPhone}}
      </p>
      <label for="">Emergency Contact Information</label>
      <p>
        Emergency Contact Name: {{emergencyName}}
        <br>
        Emergency Contact Phone Number: {{emergencyPhone}}
      </p>
      <button v-if="!verifyChecked" v-on:click="nextToggle()">Edit Information</button>
      <p>
        I have verified that everything on this form is correct.
        <input v-model="verifyChecked" type="checkbox">
      </p>
      <button @click="submitRegistration" class="button-loader" v-if="verifyChecked">
        <b v-if="!isSubmitting">Submit Registration for this Athlete</b>
        <div v-if="isSubmitting" class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </button>
    </div>

    <div class="content-container" v-if="isSuccess">
      <h3>You have succesfully registered {{athleteName}} for the 2021 track season.</h3>
      <p>You'll receive an email from us shortly to confirm your registration for this track season.  This email may arrive in your spam folder.</p>
    </div>

  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Registration',
  data: function(){
    return {
      athleteName: '',
      parentName: '',
      parentAddress: '',
      parentAddressCity: '',
      parentAddressZip: '',
      parentAddressState: '',
      parentEmail: '',
      parentPhone: '',
      emergencyName: '',
      emergencyPhone: '',
      athleteShirtSize: '',
      nextClicked: false,
      verifyChecked: false,
      isSubmitting: false,
      isSuccess: false,
    }
  },
  methods: {
    nextToggle(){
      console.log("toggling next click")
      this.nextClicked = !this.nextClicked;
    },
    submitRegistration: async function(){
      try{
        this.isSubmitting = true;

        // await axios.get(`${process.env.VUE_APP_API_URL}/api/athletes`)
        // .catch(error => {
        //   console.log(error.response.data.message);
        // })
        // .then(response => {
        //   console.log(response.data);
        // })

        await axios.post(`${process.env.VUE_APP_API_URL}/api/athletes`, {
          athleteName: this.athleteName,
          parentName: this.parentName,
          parentAddress: this.parentAddress,
          parentAddressCity: this.parentAddressCity,
          parentAddressZip: this.parentAddressZip,
          parentAddressState: this.parentAddressState,
          parentEmail: this.parentEmail,
          parentPhone: this.parentPhone,
          emergencyName: this.emergencyName,
          emergencyPhone: this.emergencyPhone,
          athleteShirtSize: this.athleteShirtSize,
        }).catch(error => {
          console.log(error.response.data.message);
          this.isSuccess = false;
          this.isSubmitting = false;
        })
        .then(response => {
          console.log(response.data);
          this.isSuccess = true;
          this.isSubmitting = false;


        })

      }catch(err){
        console.log(err);
      }
    }
  }
}
</script>

<style>
.button-loader {
  display: flex;
  align-items: center;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
  margin: 0px 5px 10px 0px;

}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 32px;
  height: 32px;
  border: 4px solid rgb(132, 0, 255);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: rgb(230, 149, 255) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>