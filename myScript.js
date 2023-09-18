/*This code is used to toggle the skiils, experience and education
in the about section*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

/*This code is used to open and close the menu*/
var sidemeu = document.getElementById("sidemenu");

    function openmenu(){
        sidemeu.style.right = "0";
    }
    function closemenu(){
        sidemeu.style.right = "-200px";
    }

/*Contact form: the details of the user is sent to a google sheet file*/
  const scriptURL = '<https://script.google.com/macros/s/AKfycbwBkHsw55hXQqlVWBOCFdR3wpw9_5fNnTs6mDeD3x98xPWX2xDKz_OTVGWSEnvPQJCboQ/exec>'
  const form = document.forms['submit-to-google-sheet']
  const popUp = document.getElementById('popUp')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        popUp.innerHTML ="Message sent successfully";
        setTimeout(function(){
            popUp.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
