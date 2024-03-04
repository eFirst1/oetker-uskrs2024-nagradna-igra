import './App.css';
import MainContent from './components/MainContent'
import Game from './components/Game'
import HeroContent from './components/HeroContent'
import boxes_landing from './boxes_landing'

function App() {
  return (
    <>
      <div className="main-content pb-20">
        <div className="container mx-auto max-w-5xl bg-transparent">
          <HeroContent />
        </div>
        <div className="container mx-auto max-w-5xl px-0 lg:px-0 py-0 text-center bg-white">
          <MainContent />
        </div>
        <div className="container-fluid">
         <Game />
        </div>
        <div className="container-fluid pt-8 md:pt-16 px-4">
          <div className="flex justify-center gap-6 md:gap-24">
            {/*<a href="/Lov na pirhe - Pravila nagradne igre.docx"  rel="noreferrer" target="_blank" className="image-button button-pravila"></a>*/}
            <a href="/Lov na pisanice - Pravila nagradne igre.doc"  rel="noreferrer" target="_blank" className="image-button button-pravila"></a>
            
           <a href="https://www.oetker.hr/uskrs/dobitnici-lov-na-pisanice" rel="noreferrer" target="_blank" className="image-button button-dobitnici"></a>
           {/* <a href="https://www.oetker.si/velika-noc/prejemniki-nagradne-igre" rel="noreferrer" target="_blank" className="image-button button-dobitniki"></a>*/}
          </div>
        </div>
        <div className="container mx-auto max-w-5xl pt-8 md:pt-16">
          <div className="flex justify-center flex-wrap gap-5 px-6 xl:px-0">
            {boxes_landing.map(item => {
              return (
              <div key={item.id} className="product-floating-element style-2 flex bg-white rounded-lg shadow-lg items-center cursor-default">
                <div className="product-floating-element__image">
                  <img className="w-full" src={item.image} alt="product" />
                </div>
                <div className="px-0 py-4 sm:px-6 sm:py-6">
                  <p className="subtitle uppercase text-gray-500">{item.subtitle}</p>
                  <h3 className="text-2xl mb-2">{item.title}</h3>
                  <p className="mb-2">{item.description}</p>
                  <a className="product-floating-element__button mt-1 text-sm hover:underline" href={item.link_url} target="_blank"> {item.link_text}</a>
                </div>
              </div>

              )
              })}
              
              
          </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
