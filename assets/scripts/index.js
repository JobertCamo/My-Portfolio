document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault(); // stop redirect
    const form = e.target;

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            form.reset(); // clear inputs
            const successMsg = document.getElementById("form-success");
            successMsg.classList.remove("hidden");

            // hide after 2 seconds
            setTimeout(() => {
                successMsg.classList.add("hidden");
            }, 2000);
        } else {
            document.getElementById("form-success").classList.add("hidden");
            const errorMsg = document.getElementById("form-error");
            
            errorMsg.classList.remove("hidden");

            setTimeout(() => {
                errorMsg.classList.add("hidden");
            });
        }
    } catch (error) {
        document.getElementById("form-error").classList.remove("hidden");
        document.getElementById("form-success").classList.add("hidden");
    }
});


// 

function animateCounter(id, target, duration) {
    const element = document.getElementById(id);
    let start = 0;
    let increment = target / (duration / 16); 
    let timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(start);
    }, 16);
  }

  window.onload = () => {
    animateCounter("yearold", 24, 1000);
    animateCounter("project", 5, 1000);
    animateCounter("deploy", 3, 1000);
    animateCounter("coding", 8, 1000);
  };




document.addEventListener("DOMContentLoaded", () => {

    AOS.init({
    once: false,     // animate only once
    disable: function() {
      // Disable AOS if screen width < 1024px (Tailwind's lg breakpoint)
      return window.innerWidth < 1024;
    }
  });

// 

var typed = new Typed("#typed", {
    strings: ["I'm Jobert Camo!", "I'm a Web Developer.", "Welcome to my portfolio."],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// 
    
    
    
new FinisherHeader({
    "count": 40,
    "size": {
        "min": 2,
        "max": 40,
        "pulse": 0
    },
    "speed": {
        "x": {
        "min": 0,
        "max": 0.8
        },
        "y": {
        "min": 0,
        "max": 0.2
        }
    },
    "colors": {
        "background": "#15182e",
        "particles": [
        "#ff926b",
        "#87ddfe",
        "#acaaff",
        "#1bffc2",
        "#f9a5fe"
        ]
    },
    "blending": "screen",
    "opacity": {
        "center": 1,
        "edge": 1
    },
    "skew": 0,
    "shapes": [
        "c",
        "s",
        "t"
    ]
    })
    });