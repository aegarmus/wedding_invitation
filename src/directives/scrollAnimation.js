export default {
  beforeMount(el) {
    el.classList.add('before-enter');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('enter');
          el.classList.remove('before-enter');
        } else {
          el.classList.remove('enter');
          el.classList.add('before-enter');
        }
      });
    }, { threshold: 0.1 });
    observer.observe(el);
  }
};