# DM script — « Vous êtes déjà sur Ceety Boy » (every outreach job reuses this) · paid Founding 100

For Henry's team, on WhatsApp, Instagram or Facebook DMs. Agents write the send files; **people send**. French first; English only for
English-speaking businesses. Terms: `OFFER.md` / `OFFER-english.md`. Fill only from data: `<Nom>` / `<Name>` = the name on our page,
`<quartier>` = the page's quartier, `<lien>` = the page URL + `?utm_source=whatsapp&utm_campaign=cb90&utm_content=<row>`
(Instagram/Facebook: `utm_source=instagram` / `facebook`). Remaining places `<N>` = the counter on ceetyboy.com that day (it counts PAID
founders); never a guessed number. `<ref>` = the reference printed by `bun scripts/seo/founder.ts add …` (CB-<place id>).
MTN MoMo number (Henry 17 Nov 2026, Q152): **01 67 24 95 58** (+229), filled in below. Never send a message with a `<…>` still in it.
**Do not use before the Mac has put task 1691 live.**

## Rules for whoever sends
1. One first message, at most one reminder after 3 days, then stop. A « non » or no answer after the reminder = never again (log it in `outreach-log.csv`).
2. Never say they are a partner, a client or « recommandé ». Never invent a number of users, views or customers.
3. Never promise what is not in `OFFER.md`. The price is said once, clearly: 5 000 FCFA une seule fois.
4. Their page is only claimed by them, at their door. The team never claims for them.
5. The Vitrine goes online the day their photos and written OK arrive (`founder.ts add` that day); the 7 days to pay start that day.
6. Answer within the day if you can: a quick answer is the sale.

## 1. First message
**FR**
```
Bonjour <Nom> 👋
Votre commerce est déjà sur Ceety Boy, la carte 3D de Cotonou : <lien>
Réclamez votre page gratuitement en 2 minutes (« C'est mon entreprise », devant votre porte) et recevez votre Lien Ceety pour guider vos clients jusqu'à chez vous, à <quartier>.
Offre Fondateurs : nous créons votre Vitrine (photos, produits, horaires, boutons WhatsApp et « Y aller »), en ligne 60 jours avec le badge « Fondateur ». 5 000 FCFA une seule fois, payés par MTN MoMo dans les 7 jours après la mise en ligne. Il reste <N> places.
```
**EN**
```
Hello <Name> 👋
Your business is already on Ceety Boy, the 3D map of Cotonou: <link>
Claim your page for free in 2 minutes ("This is my business", at your door) and get your Ceety Link to guide your customers to you in <quartier>.
Founding offer: we build your Showcase (photos, goods, hours, WhatsApp and "Drive there" buttons), online for 60 days with the "Founder" badge. 5,000 FCFA once, paid by MTN MoMo within 7 days of going online. <N> places left.
```

## 2. Reminder (once, 3 days later, only if no answer)
**FR** `Bonjour <Nom>, je me permets de vous relancer une seule fois : votre page Ceety Boy vous attend (<lien>). Il reste <N> places dans l'Offre Fondateurs. Bonne journée !`
**EN** `Hello <Name>, one reminder only: your Ceety Boy page is waiting for you (<link>). <N> places left in the Founding offer. Have a good day!`

## 3. Answers to the usual questions
| They say | FR answer | EN answer |
|---|---|---|
| « C'est quoi, Ceety Boy ? » | Une carte de Cotonou qui montre le chemin avec les repères qu'on connaît, et une ville en 3D. Vos clients voient comment venir jusqu'à votre porte. | A map of Cotonou that shows the way with the landmarks people know, plus the city in 3D. Your customers see how to get to your door. |
| « C'est combien ? » | La page et le Lien Ceety sont gratuits, pour toujours. L'Offre Fondateurs coûte 5 000 FCFA une seule fois : nous enregistrons votre entreprise et nous créons votre Vitrine, en ligne 60 jours avec le badge « Fondateur ». | The page and the Ceety Link are free, forever. The Founding offer costs 5,000 FCFA once: we register your business and build your Showcase, online for 60 days with the "Founder" badge. |
| « Et après 60 jours ? » | 5 000 FCFA par mois, un prix bloqué pour vous en tant que fondateur. Si vous ne continuez pas, la Vitrine s'arrête et votre page gratuite reste. | 5,000 FCFA a month, a price locked for you as a founder. If you do not continue, the Showcase stops and your free page stays. |
| « Je paie quand ? Comment ? » | Votre Vitrine est en ligne d'abord, le jour où vous envoyez vos photos. Ensuite vous avez 7 jours pour payer par MTN MoMo au 01 67 24 95 58, avec la référence <ref>. Sans paiement au bout de 7 jours, la Vitrine s'arrête ; votre page gratuite reste. | Your Showcase goes online first, the day you send your photos. Then you have 7 days to pay by MTN MoMo to +229 01 67 24 95 58, with the reference <ref>. If it is not paid after 7 days, the Showcase stops; your free page stays. |
| « Comment je fais ? » | 1) Allez devant votre porte. 2) Ouvrez <lien> et touchez « C'est mon entreprise ». 3) Confirmez le nom, touchez « Je suis devant ma porte », prenez la photo de l'entrée. Votre lien marche tout de suite. Pour la Vitrine, envoyez-nous ensuite vos photos. | 1) Stand at your door. 2) Open <link> and tap "This is my business". 3) Confirm the name, tap "I am at my door", take the entrance photo. Your link works at once. For the Showcase, then send us your photos. |
| « Combien de places ? » | 100 entreprises, les premières qui ont payé, jusqu'au 13 février 2027. Il reste <N> places (le compteur est sur ceetyboy.com). | 100 businesses, the first that have paid, until 13 February 2027. <N> places left (the counter is on ceetyboy.com). |
| « Comment vous avez mon commerce ? » | Votre commerce figure dans les données publiques de la carte de la ville. En réclamant la page, c'est vous qui la confirmez. | Your business is in the city's public map data. By claiming the page, you confirm it yourself. |
| « Le nom / l'adresse est faux. » | Merci ! En réclamant la page vous corrigez le nom et placez le point devant votre porte. | Thank you! When you claim the page you correct the name and put the pin at your door. |
| « Retirez mon commerce. » | Bien sûr, c'est noté, nous nous en occupons. (Team: log it with the page URL in `outreach-log.csv`, status « remove », and tell Henry.) | Of course, noted, we will take care of it. (Team: log it, status « remove », and tell Henry.) |
| « Je n'ai pas le temps. » | Ça prend 2 minutes, devant votre porte, quand vous voulez. Le lien reste valable. | It takes 2 minutes at your door, whenever you like. The link stays valid. |
| « Vous êtes Google ? » | Non, Ceety Boy n'est pas Google. Google vous donne un point ; nous, le chemin jusqu'à votre porte. | No, Ceety Boy is not Google. Google gives you a pin; we give the way to your door. |

## 4. When they have claimed
**FR** `Bravo <Nom> 🎉 Votre Lien Ceety marche. Envoyez-le à vos clients, mettez-le en statut, et imprimez l'autocollant QR pour la caisse. Pour devenir Fondateur (5 000 FCFA une seule fois, Vitrine en ligne 60 jours), envoyez-nous vos photos, vos produits, vos horaires et cette phrase : « J'accepte que <Nom> ait sa Vitrine sur ceetyboy.com ». Votre Vitrine est en ligne le jour même ; vous avez ensuite 7 jours pour payer par MTN MoMo.`
**EN** `Well done <Name> 🎉 Your Ceety Link works. Send it to your customers, put it on your status, and print the QR sticker for the till. To become a Founder (5,000 FCFA once, Showcase online for 60 days), send us your photos, goods, hours and this sentence: "I agree that <Name> has its Showcase on ceetyboy.com". Your Showcase goes online the same day; you then have 7 days to pay by MTN MoMo.`

## 5. The day their Vitrine goes online (send at once, with the link to it)
**FR** `Votre Vitrine est en ligne, avec le badge « Fondateur » : <lien vitrine>. Pour la garder, payez 5 000 FCFA par MTN MoMo au 01 67 24 95 58 avant le <date + 7 jours>, référence <ref>. Merci !`
**EN** `Your Showcase is online, with the "Founder" badge: <showcase link>. To keep it, pay 5,000 FCFA by MTN MoMo to +229 01 67 24 95 58 before <date + 7 days>, reference <ref>. Thank you!`
