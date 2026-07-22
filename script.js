//your code here
const container = document.getElementById("container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const para = document.getElementById("para");

const images = ["img1", "img2", "img3", "img4", "img5"];

const duplicate = images[Math.floor(Math.random()*images.length)]

const title = [...images,duplicate]

title.sort(()=> Math.random() - 0.5);


let selected = [];

title.forEach((cls,index)=>{
	const img = document.createElement('img');
	img.classList.add(cls);
	img.dataset.type = cls;
	img.dataset.index = index;

	img.addEventListener("click", function () {
     
    if (selected.find(item => item.dataset.index === this.dataset.index)) {
      return;
    }

	if(selected.length>= 2)return;

		this.classList.add("selected");
		selected.push(this);

		resetBtn.style.display ="inline-block";
	 if (selected.length === 2) {
      verifyBtn.style.display = "inline-block";
    }
  });

  container.appendChild(img);
});
resetBtn.addEventListener("click", () => {
  selected.forEach(img => img.classList.remove("selected"));

  selected = [];

  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
  para.innerText = "";
});
verifyBtn.addEventListener("click", () => {
  if (
    selected[0].dataset.type === selected[1].dataset.type
  ) {
    para.innerText = "You are a human. Congratulations!";
  } else {
    para.innerText =
      "We can't verify you as a human. You selected the non-identical tiles.";
  }

  verifyBtn.style.display = "none";
});
