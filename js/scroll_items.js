const targets = document.querySelectorAll('[data-observer]');

const options = {
    rootMargin: '0px',
    threshold: 0.0
  }
  

  
  const doThings = (entries, observer) => {
    entries.forEach(entry => {
        // 관찰 대상이 뷰포트에 들어온 경우
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else {
        // 관찰 대상이 뷰포트에서 나간 경우
        entry.target.classList.remove("is-visible")
      }
    })
  }

  const observer = new IntersectionObserver(doThings, options);

  targets.forEach(target => {
    observer.observe(target)
  })