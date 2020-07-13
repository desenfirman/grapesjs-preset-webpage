export default (active_id, siblings) => {
    siblings.forEach((el) => {
      // Reset all button to inactive state
      el.style.display = "none";
      document.getElementById(el.id + "-btn").className = 'gjs-pn-btn gjs-two-color';
      
      if (active_id == 'gjs-traits-manager'){
        document.getElementsByClassName('gjs-trt-traits')[0].style.display = "flex";
        document.getElementsByClassName('gjs-sm-sectors')[0].style.display = "none";
        document.getElementById(active_id + "-btn").className = 'gjs-four-bg gjs-pn-btn';
      }

      else 
        {
          document.getElementById("gjs-traits-manager-btn").className = "gjs-pn-btn gjs-four-bg-inactive gjs-two-color";
          document.getElementsByClassName('gjs-trt-traits')[0].style.display = "none";
          document.getElementsByClassName('gjs-sm-sectors')[0].style.display = "flex";
          
          if (el.id === active_id) {
              el.style.display = "flex";
              document.getElementById(active_id + "-btn").className = 'gjs-four-color active gjs-pn-btn';
          }
      }
    });
  };