// AOS INIT
AOS.init({
  duration:1200,
  once:true
});

// TILT EFFECT
VanillaTilt.init(document.querySelectorAll(".tilt-card"),{
  max:15,
  speed:400,
  glare:true,
  "max-glare":0.3
});

// COUNTER
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter,20);

    }else{

      counter.innerText = target;

    }

  };

  updateCounter();

});

// NEWSLETTER
const form = document.getElementById("newsletter-form");

form.addEventListener("submit",(e)=>{

  e.preventDefault();

  alert("🔥 Welcome to Hustle Intelligence!");

});

// USER TRACKING SYSTEM
document.addEventListener("click",(e)=>{

  console.log("User clicked:", e.target);

  // FUTURE:
  // Send analytics to backend
  // MongoDB / Firebase / Supabase

});
