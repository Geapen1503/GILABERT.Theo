// début script étoiles

//Get context and screen size;
var ctx = cnv.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;

//Set Canvas and Background Color;
cnv.width = W;
cnv.height = H;
ctx.fillStyle = "#242936"; //#242936 put this color instead when it's done
ctx.fillRect(0, 0, W, H);

//Glow effect;
ctx.shadowBlur = 10;
ctx.shadowColor = "white";

function starsAnimation() {
  //Random position and size of stars;
  let x = W * Math.random();
  let y = H * Math.random();
  let r = 2.5 * Math.random();

  let factor = (y/H)*0.2 + 0.8; 

  //Draw the stars;
  if(Math.random() > factor) {
    ctx.beginPath();
    ctx.fillStyle = "#AAB5A9";
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  
  setTimeout(starsAnimation, 90);
}

starsAnimation();


// fin script étoiles


// début code arrow project

//début code arrow project lth 
      
        const dropdownlth = document.querySelector(".dropdownLth")
        const btnDropLth = document.querySelector(".bloc-top-lth")

        let toggleIndex = 0;

        btnDropLth.addEventListener('click', () => {

          if (toggleIndex === 0) {
            dropdownlth.style.backgroundColor = "grey";
            dropdownlth.style.height = dropdownlth.scrollHeight + "px";
            toggleIndex++;
          } else if (toggleIndex != 0) {
            dropdownlth.style.backgroundColor = "transparent";
            dropdownlth.style.height = btnDropLth.scrollHeight + "px";
            toggleIndex--;
          }

        });

        document.addEventListener('click', (event) => {
          if (!dropdownlth.contains(event.target)) {
            dropdownlth.style.backgroundColor = "transparent";
            dropdownlth.style.height = btnDropLth.scrollHeight + "px";
            toggleIndex = 0;
          }
        });


// fin code arrow project lth

// début code arrow project akb

        const dropdownakb = document.querySelector(".dropdownAkb")
        const btnDropAkb = document.querySelector(".bloc-top-akb")

        

        btnDropAkb.addEventListener('click', () => {

          if (toggleIndex === 0) {
            dropdownakb.style.backgroundColor = "grey";
            dropdownakb.style.height = dropdownakb.scrollHeight + "px";
            toggleIndex++;
          } else {
            dropdownakb.style.backgroundColor = "transparent";
            dropdownakb.style.height = btnDropAkb.scrollHeight + "px";
            toggleIndex--;
          }

        });

        document.addEventListener('click', (event) => {
          if (!dropdownakb.contains(event.target)) {
            dropdownakb.style.backgroundColor = "transparent";
            dropdownakb.style.height = btnDropAkb.scrollHeight + "px";
            toggleIndex = 0;
          }
        });



// fin code arrow project akb

// fin code arrow project


// début code bouton du bas

const btn = document.querySelector('.retourHaut');

		btn.addEventListener('click', () => {

			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth"
			})

		})


// fin code bouton du bas 

