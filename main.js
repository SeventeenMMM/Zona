const burgerMenu = document.getElementById("burger-menu");
const overlay = document.getElementById("menu");
const body = document.body;

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
  body.classList.toggle("no-scroll");
});

class Rotate3D {
  constructor(obj) {
    this.cards = document.querySelectorAll(obj.cards);
    this.cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        this.rotate(e, card);
      });
      card.addEventListener("mouseout", () => {
        this.rotateNone(card);
      });
    });
  }

  rotate(e, card) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;
    const maxRotation = 10;

    const rotateX = percentY * maxRotation;
    const rotateY = percentX * maxRotation;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  }

  rotateNone(card) {
    card.style.transform = "rotateX(0) rotateY(0)";
  }
}

const rotate3d = new Rotate3D({
  cards: ".card",
});


class Scroll {
  constructor(obj) {
    this.sections = document.querySelectorAll(obj.sections);

    window.addEventListener("scroll", () => {
      this.sections.forEach(section => {
        this.fadeRightAnim(section, 2);
      });
    });
  }

  fadeRightAnim(section, coordinate) {
    const fadeRight = section.querySelectorAll(".fade-right");
    fadeRight.forEach((fadeRight) => {
      const speed = fadeRight.dataset.speed;
      fadeRight.style.transition = speed + "ms";
      if (
        window.scrollY >=
        section.offsetTop - section.offsetHeight * coordinate
      ) {
        fadeRight.classList.add("active");
      } else {
        fadeRight.classList.remove("active");
      }
    });
  }
}

const scroll = new Scroll({
  sections: ".scroll",
});
