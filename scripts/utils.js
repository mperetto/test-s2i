const Cookie = {

    /**
     * Set a new Cookie with the specified value
     * 
     * @param {string} cname Cookie name
     * @param {string} cvalue Cookie value
     * @param {number} expdays Expire cookie Days
     */
    setCookie(cname, cvalue, expdays) {

        const HOURS_IN_DAY = 24;
        const MINUTES_IN_HOURS = 60;
        const SECONDS_IN_MINUTE = 60;
        const MILLISECONDS_IN_SECOND = 1000;

        const d = new Date();
        d.setTime(d.getTime() + (expdays * HOURS_IN_DAY * MINUTES_IN_HOURS * SECONDS_IN_MINUTE * MILLISECONDS_IN_SECOND));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;"; // TODO set correct domain in production domain=.start2impact.it;
    },
  
    /**
     * Get the value of the specified cookie name
     * 
     * @param {string} cname Cookie name
     * @returns Cookie value
     */
    getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
}