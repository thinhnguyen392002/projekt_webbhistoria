function visainnehåll60() {
    if(document.getElementById("60").innerHTML == ""){
        document.getElementById("60").innerHTML=`<div>
    
        <h3> OGAS logotyp.</h3><br>
         <p>Året före JCR Licklider beskriver sina idéer om ett ”intergalaktiskt nätverk”, som senare kommer att utvecklas till det som är internet, presenterar ryssen Viktor Glushkov en liknande plan. Projektet heter OGAS (en förkortning som på svenska ungefär betyder ”hela statens automatiska system”), och påminner till stor del om internet.
         Redan 1959 har ett liknande projekt lagts ner (initierat av Anatolij Kitov), som syftade till att automatisera ekonomiska uppgifter, då militären varit oroliga för att de skulle behöva överlämna viktig information till civila ekonomiska planerare.</p>
    
        <p> OGAS är något annat och ska vara uppdelat i tre lager, tänker sig Viktor Glushkov. Nätverket ska styras från Moskva, med 200 centraler på medelnivå och 20 000 inkopplade datorer runt om i Sovjetunionen. Dessa ska kunna kommunicera med varandra decentraliserat – alltså utan att gå vägen via Moskva. Allt sammankopplat via telefonledningar.
         Visionerna är större än så, i framtiden vill han koppla ihop alla länder i Europa och Asien i nätverket. Varenda fabrik och vartenda kontor skulle var uppkopplat. Perfekt för en planekonomi, tyckte Glushkov. Genom nätverket skulle man även kunna göra betalningar, utan att använda fysiska pengar.
         Men projektet förverkligas inte, eftersom Viktor Glushkov i oktober 1970 helt enkelt inte får vidare finansiering till sin satsning. Finansministern säger nej. Då har amerikanarna redan startat Arpanet, som kommer att bli det vi i dag kallar internet. Glushkov arbetar vidare och föreslår nya, liknande, satsningar, men även dessa nobbas av kommunistpartiet.</p>
    </div>
     <img src="/60-talet.png" alt=""class="bild-60talet">`;

    } else {
        document.getElementById("60").innerHTML="";
    }
  }
  function visainnehåll70() {
if(document.getElementById("70").innerHTML == ""){
    document.getElementById("70").innerHTML=`<div>

    <p> När det svenska elnätet digitaliseras inspireras man av Arpanet. Men allt går inte som det är tänkt. Det blir början på en bit svensk internethistoria – som når världen.
        Den 9 november 1965 är en ovanligt kall dag i nordöstra USA. När alla vrider igång sina elektroniska apparater samtidigt får elnätet nog. 25 miljoner människor blir utan ström en hel dag.
        Händelsen skickar chockvågor ända till Sverige där överingenjören Lars Gustafsson är chef för Vattenfalls driftavdelning. Därmed har han ansvar över hela landets kraftnät, som även sitter ihop med det finska, norska och det danska. För att minska risken för liknande störningar beslutas att skapa ett datorbaserat övervakningssystem. Hittills har all kommunikation skett via telefon.
         </p> 
        <p> Bild från Tidas officiella invigning 1977. C-politikern Olof Johansson syns på bakre raden. Foto: Vattenfall AB.
        Uppdraget går till Asea. Systemet ska täcka hela landet och det kallas TIDAS – totalintegrerat datasystem. Så vad har detta med internet att göra? Ganska mycket, kommer det att visa sig. Torsten Cegrell på Asea är inspirerad av paketförmedlingen i det amerikanska Arpanet, som han tror kommer att gå att använda även i TIDAS. Men svenskarna stöter på patrull. TIDAS innehåller betydligt fler datorer och routingmekanismen (som är tänkt att se till att paketen når fram på det mest effektiva sättet) som Arpanet använder sig av har för hög felprocent.
        Då 27-årige Cegrell hittar år 1972 en lösning.<p>
        – Lösningen ter sig i efterhand enkel. Det blev felaktig information när noderna lurade systemet. Vad jag gjorde var att införa ett nytt begrepp, split horizon. Detta löste problemet med ping-pongtrafiken och vi kunde bygga en robust och stabil routingmekanism, berättar han i en intervju med Internetmuseum (se filmen nedan).</p>
      <p>  – Det fungerade! Det var en av mina större triumfer. Men till våra chefer blev det mest en information: det fungerade.
        Arpanet bygger in
        Asea söker patent, men det visar sig vara för dyrt, dessutom ansågs det ligga för långt bort från företagets kärnverksamhet. Istället publiceras resultatet (se rapporten här), och Arpanet informeras. Leonard Kleinrock, som är ansvarig för Arpanet, hör av sig.
      <br> <br> – I ett brev till mig så bekräftar han att de tagit till sig tekniken. Det innebär att Arpanet inför man samma teknik som vi hade. Och då upphörde ping-pongtrafiken, säger Torsten Cegrell och lägger till:
       <br>qA,
        <br>– Om vi inte kommit på det hade någon annan löst problemet. Men vi var först.
    </p>
</div>
 <img src="/70-talet.png" alt=""class="bild-70talet">
 `
}
else{
    document.getElementById("70").innerHTML=""
}
  }
  