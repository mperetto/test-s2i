# Relazione

Il codice è stato organizzato tutto in un inica soluzione.
Nella root potrete trovare i file utilizzati per implementare la landing page, mentre nella cartella backend potrete trovare il codice che implementa le tabelle a DB scritte sfruttando i modelli messi a disposizione da sequelize.

## Parte Landing page

Ho suddiviso il codice in due parti.

1. Il file script js contiente solamente la funzione per implementare il recupero dei parametri dall'url, recuperati in modo tale da poter definire quanti parametri si vogliono senza dover modificare il codice per aggiungerli.
2. Il file utils js contiene il codice con delle funzioni generiche di utilità, in questo caso contiene un oggetto Cookie che espone due funzioni per salvare un nuovo Cookie o recuperarne uno esistente (se presente).

All'interno della funzione setUtmCookie ho lasciato i seguenti snippet `let utm_campaign = search_params.get('utm_campaign');` dato che da requisiti è importante che questi parametri siano presenti.

## Parte BackEnd

La cartella contiene il codice che fa riferimento alla parte backend dell'applicazione, in questo caso contiene solamente il file dove sono stati definiti i modelli per le risorse che dovranno essere salvate all'interno del DB, (Utente, Campagna, Medium).

### Schema ER

![ER](/ER_Schema.png)