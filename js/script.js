/*   ***  Start of Async Drift ChatApp Code  ***   */
"use strict";
    
    !function() {
      var t = window.driftt = window.drift = window.driftt || [];
      if (!t.init) {
        if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
        t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
        t.factory = function(e) {
          return function() {
            var n = Array.prototype.slice.call(arguments);
            return n.unshift(e), t.push(n), t;
          };
        }, t.methods.forEach(function(e) {
          t[e] = t.factory(e);
        }), t.load = function(t) {
          var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
          o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
          var i = document.getElementsByTagName("script")[0];
          i.parentNode.insertBefore(o, i);
        };
      }
    }();
    drift.SNIPPET_VERSION = '0.3.1';
    drift.load('x6rms9x2ghni');
    
/*   ***  End of Async Drift ChatApp Code  ***   */


/*   ***  Start of onScroll Code  ***   */

window.onscroll = function() {scrollFunction()};
			
	function scrollFunction() {


		if (window.scrollY > 100) {
			document.querySelector(".Navbar").style.display ="flex";				
			document.querySelector(".Navbar").style.height = "100px"; 
			document.querySelector(".Navbar").style.backgroundColor = "rgba(20, 100, 185, 1)";
			document.querySelector(".Navbar").style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 1)"; 

				if (screen.width < 415) {
					document.querySelector(".Navbar__Link-toggle").style.display = "flex";
					document.querySelector(".Navbar__Link-toggle").style.marginRight = "auto";

					document.querySelector(".Navbar__Link-brand").style.width = "85%"; 
					document.querySelector(".Navbar__Link-brand").style.marginLeft = "auto";

					document.querySelector(".Navbar__Items").style.display = "none";

				} else if (screen.width > 414 && screen.width < 722) {
					document.querySelector(".Navbar__Link-toggle").style.display = "flex"; 
					document.querySelector(".Navbar__Link-toggle").style.marginRight = "25px";

					document.querySelector(".Navbar__Link-brand").style.width = "30%";
					document.querySelector(".Navbar__Link-brand").style.marginLeft = "30px";

					document.querySelector(".Navbar__Items").style.display = "none";

				} else if (screen.width < 740) {
					document.querySelector(".Navbar__Link-toggle").style.display = "flex"; 
					document.querySelector(".Navbar__Link-toggle").style.marginRight = "25px";

					document.querySelector(".Navbar__Link-brand").style.width = "340px";
					document.querySelector(".Navbar__Link-brand").style.marginLeft = "30px";

					document.querySelector(".Navbar__Items").style.display = "none";


				} else if (screen.width < 1024) {
					document.querySelector(".Navbar__Link-toggle").style.display = "none"; 

					document.querySelector(".Navbar__Link-brand").style.width = "340px";
					document.querySelector(".Navbar__Link-brand").style.marginLeft = "30px";

					document.querySelector(".Navbar__Items").style.display = "flex";
					

				} else if (screen.width < 1367) {
					document.querySelector(".Navbar__Link-toggle").style.display = "none"; 

					document.querySelector(".Navbar__Link-brand").style.width = "450px";
					document.querySelector(".Navbar__Link-brand").style.marginLeft = "50px";			  

					document.querySelector(".Navbar__Items").style.display = "flex";							
						

				} else if (screen.width < 1921) {
					document.querySelector(".Navbar__Link-toggle").style.display = "none"; 

					document.querySelector(".Navbar__Link-brand").style.width = "500px";
					document.querySelector(".Navbar__Link-brand").style.marginLeft = "50px";			  

					document.querySelector(".Navbar__Items").style.display = "flex";
					

				} else {
					document.querySelector(".Navbar__Link-toggle").style.display = "none"; 

					document.querySelector(".Navbar__Link-brand").style.width = "550px";
					document.querySelector(".Navbar__Link-brand").style.marginLeft = "50px";

					document.querySelector(".Navbar__Items").style.display = "flex";

				}

		} else if (window.scrollY <= 0) {
			document.querySelector(".Navbar").style.display ="flex";                
			document.querySelector(".Navbar").style.height = "130px";
			document.querySelector(".Navbar").style.backgroundColor = "rgba(20, 100, 185, 0)";
			document.querySelector(".Navbar").style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0)";

				if (screen.width < 415) {
					document.querySelector(".Navbar__Link-toggle").style.display = "none"; 
					document.querySelector(".Navbar__Link-toggle").style.marginRight = "15px";

					document.querySelector(".Navbar__Link-brand").style.width = "90%";
					document.querySelector(".Navbar__Link-brand").style.marginLeft = "auto";
					document.querySelector(".Navbar__Link-brand").style.marginRight = "auto";

					document.querySelector(".Navbar__Items").style.display = "none";

				} else if (screen.width > 414 && screen.width < 722) {
					document.querySelector(".Navbar__Link-toggle").style.display = "none"; 
					document.querySelector(".Navbar__Link-toggle").style.marginRight = "25px";

					document.querySelector(".Navbar__Link-brand").style.width = "30%";
					document.querySelector(".Navbar__Link-brand").style.marginLeft = "30px";

					document.querySelector(".Navbar__Items").style.display = "none";

				} else if (screen.width < 740) {
					document.querySelector(".Navbar__Link-toggle").style.display = "none";

					document.querySelector(".Navbar__Link-brand").style.width = "340px";
					document.querySelector(".Navbar__Link-brand").style.marginLeft = "30px"; 

					document.querySelector(".Navbar__Items").style.display = "none";

				} else if (screen.width < 1024) {
					document.querySelector(".Navbar__Link-toggle").style.display = "none";

					document.querySelector(".Navbar__Link-brand").style.width = "340px";
					document.querySelector(".Navbar__Link-brand").style.marginLeft = "30px"; 

					document.querySelector(".Navbar__Items").style.display = "flex";

				}  else if (screen.width < 1367) {
						document.querySelector(".Navbar__Link-toggle").style.display = "none"; 

						document.querySelector(".Navbar__Link-brand").style.width = "450px";
						document.querySelector(".Navbar__Link-brand").style.marginLeft = "50px";			  

						document.querySelector(".Navbar__Items").style.display = "flex";

				} else if (screen.width < 1921) {
					document.querySelector(".Navbar__Link-toggle").style.display = "none"; 

					document.querySelector(".Navbar__Link-brand").style.width = "500px";
					document.querySelector(".Navbar__Link-brand").style.marginLeft = "50px";

					document.querySelector(".Navbar__Items").style.display = "flex";

				} else {
					document.querySelector(".Navbar__Link-toggle").style.display = "none"; 

					document.querySelector(".Navbar__Link-brand").style.width = "550px";
					document.querySelector(".Navbar__Link-brand").style.marginLeft = "50px";

					document.querySelector(".Navbar__Items").style.display = "flex";

				}
		}
	};
    
               


           /*   OVERLAY NAVIGATION   */
           
                function openNav() {
			  document.getElementById("myNav").style.width = "100%";
					document.getElementById("myNav").style.opacity = "1";
		}

		function closeNav() {
			  document.getElementById("myNav").style.width = "0%";
			document.getElementById("myNav").style.opacity = "0";
		}

/*   ***  End of onScroll Code  ***   */