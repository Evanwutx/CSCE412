  function switchcss() {
    if(document.getElementById("style-link").getAttribute('href') === 'style1.css') 
    {
		  document.getElementById("style-link").setAttribute('href', 'style2.css');
      localStorage.setItem('style', 'style2.css');
	  } 
    else if(document.getElementById("style-link").getAttribute('href') === 'style2.css') 
    {
		  document.getElementById("style-link").setAttribute('href', 'style1.css');
      localStorage.setItem('style', 'style1.css');
  	}
  }

  window.onload = function() {
    if(localStorage.getItem('style') === null)
    {
        localStorage.setItem('style', 'style1.css');
    }
    document.getElementById("style-link").setAttribute('href', localStorage.getItem('style'));
  }