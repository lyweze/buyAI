//Анимация 1
var i =0;
const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
        if (i==0){
            entry.target.classList.toggle("slide-in-from-left", entry.isIntersecting);
            if (entry.isIntersecting == true){
              i++;
            }
        }
    });
  };
  
  const observer = new IntersectionObserver(startAnimation);
  const options = { root: null, rootMargin: '0px', threshold: 1 }; 


    const elements = document.querySelectorAll('.l1');
    elements.forEach(el => {
        observer.observe(el, options);
    });

//Анимация 2
const startl2 = (entriesl2, l2) => {
    entriesl2.forEach(entriesl2 => {
        if(i==1){
            entriesl2.target.classList.toggle("slide-in-from-l2", entriesl2.isIntersecting);
            if (entriesl2.isIntersecting == true){
              i++;
            }
        }
    });
  };

  const l2 = new IntersectionObserver(startl2);
  const optionsl2 = { root: null, rootMargin: '0px', threshold: 1 }; 

  const elem = document.querySelectorAll('.l2');
  elem.forEach(el => {
    l2.observe(el, optionsl2);
  });
//Анимация 3
const startl3 = (entriesl3, l3) => {
    entriesl3.forEach(entriesl3 => {
        if(i==2){
            entriesl3.target.classList.toggle("slide-in-from-l3", entriesl3.isIntersecting);
            if (entriesl3.isIntersecting == true){
              i++;
            }
        }
    });
  };

  const l3 = new IntersectionObserver(startl3);
  const optionsl3 = { root: null, rootMargin: '0px', threshold: 1 }; 

  const elem3 = document.querySelectorAll('.l3');
  elem3.forEach(el => {
    l3.observe(el, optionsl3);
  });


//Text animation
var k = 0;
const startlan = (entrieslan, lan) => {
    entrieslan.forEach(entrieslan => {
        if(k==0){
            entrieslan.target.classList.toggle("slide-in-from-lan", entrieslan.isIntersecting);
            if (entrieslan.isIntersecting == true){
              k++;
            }
        }
    });
  };
  
  const lan = new IntersectionObserver(startlan);
  const optionslan = { root: null, rootMargin: '0px', threshold: 1 }; 

  const elemlan = document.querySelectorAll('.landing');
  elemlan.forEach(el => {
    lan.observe(el, optionslan);
  });

//Knopka DOWN
var l = 0;
const startdown = (entriesdown, down) => {
    entriesdown.forEach(entriesdown => {
        if(l==0){
            entriesdown.target.classList.toggle("slide-in-from-down", entriesdown.isIntersecting);
            if (entriesdown.isIntersecting == true){
              l++;
            }
        }
    });
  };
  
  const down = new IntersectionObserver(startdown);
  const optionsdown = { root: null, rootMargin: '0px', threshold: 1 }; 

  const elemdown = document.querySelectorAll('.down');
    elemdown.forEach(d => {
    down.observe(d, optionsdown);
    });