const elements = document.querySelectorAll('.cv_work .info .btn');

const resps = document.querySelectorAll('.cv_work .info .resp');

for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = () => {
      resps[i].classList.toggle('visible');
    }
}
