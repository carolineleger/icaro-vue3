<template>
  <div class="about-wrapper">
    <!-- ABOUT -->
    <div class="about-container">
        <div class="animated-text">
            <div class="container">
                <div class="text">I'm a</div>        
                <ul>
                    <li>traveller</li>
                    <li class="animated-hide">cinema & video games fan</li>
                    <li class="animated-show">geek</li>
                    <li class="animated2-hide">rock climber</li>
                    <li class="animated2-show">climber</li>
                    <li>bookworm</li>
                </ul>
            </div>
        </div>

        <table>
            <tr>
                <td width="45%" class="about-CV">
                    <h2>I'm also a front end developer with an eye for design </h2>
                    <a href="http://icaro-designs.com/images/CV-CLeger.pdf" target="_blank">
                        <div class="wow button rubberBand" data-wow-delay="1s"> Download CV</div>
                    </a>

                    <div class= "couch-container"></div>
                    <div class= "wow blink light"></div>
                    <a href="http://icaro-designs.com/images/CV-CLeger.pdf" target="_blank"><div class= "wow eye-blink totoro-eyes"></div></a>
                </td>

                <td width="55%" class="about-description">
                    <b>About me:</b> Born in France, I was always interested in design and new technologies. My studies and work experiences have developed my sense of creativity and my technical skills.
                    Also passionate about travelling and discovery, I have worked in countries with rich cultures and landscapes, a great source of inspiration in everyday life!
                    <br/>
                    <p>I'm now a permanent resident in Melbourne, where I work as a contractor/freelancer and keep improving my skills.
                    Having knowledge in both design and development, I really like to multitask and I'm always up for a new challenge!</p> 
                </td> 
            </tr> 
        </table>		
    </div>	

    <div class="about-floor"></div>
  </div>
</template>

<script>

export default {
  name: 'About',
  
  data() {
    return {
    }
  },
  methods: {
   
  }
}
</script>