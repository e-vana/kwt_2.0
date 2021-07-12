<template>
  <div class="content-container">
    <div>
      <h2>The 2021 Season is Upon Us!</h2>
      <p>The 2021 Track and Field season is bound to the USATF Georgia calendar.  The first day of practice will be Tuesday, March 15th at 6:30pm at our usual practice space, the North Paulding Highschool track.  Follow the signs once you get on campus, you can't miss it!</p>

      <p><b>Need to register an athelete for the 2021 season?</b></p>
      <router-link to="/registration"><button>Register For the 2021 Season</button></router-link>
      <p>You need to submit the registration form for each athlete this season.  Make sure all registration forms and club fees are submitted before the March 15th start date.</p>
    </div>
    <div class="hero">
      <img src="@/assets/images/team_2019.jpg" alt="">
      <p>The 2019 state champion team!</p>
    </div>
    <div>
      <h2>Recapping the 2020 Year</h2>
      <p>We all know the 2020 track year was not the best for anyone with the global pandemic, practice was limited and most of the events were cancelled for this year.  We're still really proud of the progress of all of our athletes and we can't wait to hit the ground running in 2021!</p>
    </div>
    <div>
      <h2>Things to be aware of...</h2>
      <p>There are changes to the USATF handbook this year regarding uniform regulation.  You can find them here.  Fortunately out uniforms follow proper styling so there won't be any substantial changes to this years uniforms.</p>
      <p>Make sure your footware is on the approved footware list.  The list has changed a little bit so make sure that the shoes you plan to participate in are on there so you can compete in all the events this year.</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

}
</script>
