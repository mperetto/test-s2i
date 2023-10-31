
/**
 * Set the Cookie Utm Name
 * 
 * @param {string} cUtmName Cookie UTM name
 */
function setUtmCookie(cUtmName){

    let cName = cUtmName;
    
    let url = new URL(window.location);
    let search_params = url.searchParams;

    const cValue = {};

    for (const key of search_params.keys()) {
        cValue[key] = search_params.get(key)
    }
    
    // inizio blocco
    // se è importante che questi parametri siano presenti devo lasciare questo blocco,
    // per assicurarmi che siano presenti

    let utm_campaign = search_params.get('utm_campaign');
    let utm_medium = search_params.get('utm_medium');
    let utm_source = search_params.get('utm_source');

    // fine blocco

    let expDays = 30;
    let landed_at = new Date().toLocaleString();
    cValue["landed_at"] = landed_at;

    if (utm_campaign && utm_medium && utm_source) { // se è fondamentale che questi parametri siano presenti devo lasciare il recupero e il controllo
        Cookie.setCookie(cName, JSON.stringify(cValue), expDays);
    }
}

setUtmCookie('utm_parameters');