import React from 'react'
import mainContentPrizes from '../assets/img/BIH-glavna-nagrada.png'

const MainContent = () => {

  return (
    <div>
      <article className="mainContent pb-6 bg-white">
        <div className="px-2 lg:px-9">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-8 lg:mb-10">Vrijeme darivanja je tu</h1>
          <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl max-w-[60ch] mx-auto mb-8 lg:mb-10">Sudjelujte u velikom nagradnom natječaju RADOST DARIVANJA u kojem svaki dan imate priliku osvojiti zvijezda jastuk, a svaki tjedan BOSCH hladnjak!</h2>
          <p>Neka vam priprema slastica za najljepše doba godine prođe uz najaromatičnije proizvode iz Dr. Oetkera.</p>
          <p>Priprema kolača s najbližima mnogima je najdraža blagdanska aktivnost, a da bi ove blagdane upotpunili i unijeli još više radosti, mi smo za vas pripremili nagradni natječaj u kojem možete osvojiti vrijedne nagrade.</p>
          <p>Svaki dan u periodu trajanja nagradnog natječaja od 10.12. 2022. do 07.01.2023. godine, jednom dnevnom dobitniku darujemo zvijezda jastuk, a jednom tjedno imate priliku osvojiti i BOSCH hladnjak!</p>
          <br />
          <p><strong>Kako sudjelovati?</strong></p>
          <p>Slijedite par jednostavnih koraka jer nagrada može biti baš vaša!</p>
          <p>Kupnjom bilo kojeg Dr. Oetker proizvoda u vrijednosti 5KM, izvršenoj na jednom računu i odgovoru na kreativno pitanje ostvarujete pravo sudjelovanja u nagradnom natječaju tako da priložite fotografiju računa i popunite polja obrasca za prijavu koji se nalazi u nastavku.</p>
          <br />
          <p>Sretno!</p>
          <br />
          <a href="https://www.oetker.ba/ba-bs/svijet-dekora/dobitnici-nagradnog-natjecaja" target="_blank" className="basic-button">Dobitnici nagradnog natječaja</a>
        </div>
      </article>
      <div className="flex justify-center">
        <img className="w-full" src={mainContentPrizes} alt="advent game prizes" />
      </div>
    </div>
  )

}

export default MainContent