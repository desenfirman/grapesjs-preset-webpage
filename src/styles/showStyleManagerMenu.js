export default (active_id, siblings) => {
	if (active_id == 'gjs-traits-manager') {
		const sm_el = document.getElementsByClassName('gjs-sm-sectors')[0];
    	sm_el.style.width = '14%';
    	sm_el.style.display = 'inline-block';

    	document.getElementById('gjs-sm-button-toogle').style.width = '100%';

      	const trait_manager = document.getElementsByClassName('gjs-trt-traits')[0];
      	trait_manager.style.display = 'inline-block';
      	trait_manager.style.width = '86%';
        trait_manager.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        // trait_manager.childNodes[0].style.display = 'none';
        // trait_manager.childNodes[1].style.display = 'none';

    }else{
    	document.getElementsByClassName('gjs-sm-sectors')[0].style.width = '100%';
    	document.getElementById('gjs-sm-button-toogle').style.width = '14%';
      	const trait_manager = document.getElementsByClassName('gjs-trt-traits')[0];
      	trait_manager.style.display = 'none';
    }
    siblings.forEach((el) => {
      el.style.display = "none";
      


      if (el.id === active_id || el.id === 'gjs-sm-button-toogle') {
        el.style.display = "inline-block";
        // document.getElementById(active_id + "-btn").className = 'gjs-four-color active gjs-pn-btn';
      }
    });
  };