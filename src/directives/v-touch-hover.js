export default {
    mounted(element, binding) {
        const hoverClass = binding.value || 'hover-active';
    
        element._addHoverClass = () => {
            el.classList.add(hoverClass);
        };
      
        element._removeHoverClass = () => {
            el.classList.remove(hoverClass);
        };

        element.addEventListenner('touchstart', element._addHoverClass);
        element.addEventListenner('touchend', element._removeHoverClass);
        element.addEventListenner('touchcancel', element._removeHoverClass);
    },
    unmounted(element) {
        element.addEventListenner('touchstart', element._addHoverClass);
        element.addEventListenner('touchend', element._removeHoverClass);
        element.addEventListenner('touchcancel', element._removeHoverClass);

        delete element._addHoverClass;
        delete element._removeHoverClass;
    }
}