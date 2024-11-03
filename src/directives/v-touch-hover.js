export default {
    mounted(el, binding) {
      const hoverClass = binding.value || 'hover-active';
  
      el._handleTouchMove = (event) => {
        const touch = event.touches[0];
        const elementRect = el.getBoundingClientRect();
        const isInside =
          touch.clientX >= elementRect.left &&
          touch.clientX <= elementRect.right &&
          touch.clientY >= elementRect.top &&
          touch.clientY <= elementRect.bottom;
  
        if (isInside) {
          el.classList.add(hoverClass);
        } else {
          el.classList.remove(hoverClass);
        }
      };
  
      el._handleTouchEnd = () => {
        el.classList.remove(hoverClass);
      };
  
      el.addEventListener('touchmove', el._handleTouchMove);
      el.addEventListener('touchend', el._handleTouchEnd);
      el.addEventListener('touchcancel', el._handleTouchEnd);
    },
    unmounted(el) {
      el.removeEventListener('touchmove', el._handleTouchMove);
      el.removeEventListener('touchend', el._handleTouchEnd);
      el.removeEventListener('touchcancel', el._handleTouchEnd);
  
      delete el._handleTouchMove;
      delete el._handleTouchEnd;
    }
  };
  