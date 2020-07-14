export default (active_id, siblings) => {
    siblings.forEach((el) => {
      // Reset all button to inactive state
      el.style.display = "none";
          
      if (el.id === active_id || (active_id === 'gjs-sm-general' && el.id === 'gjs-sm-layout')) {
        el.style.display = "flex";
        // document.getElementById(active_id + "-btn").className = 'gjs-four-color active gjs-pn-btn';
      }
    });
  };