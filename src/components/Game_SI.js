import {
  ReactPhotoSphereViewer,
  MarkersPlugin
} from "react-photo-sphere-viewer";
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Modal from './Modal'
import day_1 from '../days_SI/day-1'
import day_2 from '../days_SI/day-2'
import day_3 from '../days_SI/day-3'
import day_4 from '../days_SI/day-4'
import day_5 from '../days_SI/day-5'
import day_6 from '../days_SI/day-6'
import day_7 from '../days_SI/day-7'
import day_8 from '../days_SI/day-8'
import day_9 from '../days_SI/day-9'
import day_10 from '../days_SI/day-10'
import day_11 from '../days_SI/day-11'
import day_12 from '../days_SI/day-12'
import day_13 from '../days_SI/day-13'
import day_14 from '../days_SI/day-14'

const CalendarForm = (props) => {

  const [formFields, setFormFields] = useState({
      ime_i_prezime: '',
      grad_i_postanski_broj: '',
      adresa: '',
      email: '',
      telefon: '',
  });
  const [newsletter, setNewsletter] = useState(false); 
  const [suglasnostPodaci, setSuglasnostPodaci] = useState(false); 
  const [suglasnostPravila, setSuglasnostPravila] = useState(false); 
  
  const [formMessages, setFormMessages] = useState({
      successMessage: false,
      errorMessage: '',
      messageSent: false,
      errorImePrezime: '',
      errorGradPosta: '',
      errorAdresa: '',
      errorEmail: '',
      errorTelefon: '',
      errorSuglasnostPodaci: '',
      errorSuglasnostPravila: '',
  });

  const handleChangeNewsletter = () => { 
    setNewsletter(!newsletter); 
  }; 
  const handleChangeSuglasnostPodaci = () => { 
    setSuglasnostPodaci(!suglasnostPodaci); 
  }; 
  const handleChangeSuglasnostPravila = () => { 
    setSuglasnostPravila(!suglasnostPravila); 
  }; 
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value

    setFormFields({...formFields, [name]: value})

    if (name === 'ime_i_prezime') {
      setFormMessages({
        ...formMessages,
        errorImePrezime: ''
      })
    }
    if (name === 'grad_i_postanski_broj') {
      setFormMessages({
        ...formMessages,
        errorGradPosta: ''
      })
    }
    if (name === 'adresa') {
      setFormMessages({
        ...formMessages,
        errorAdresa: ''
      })
    }
    if (name === 'email') {
      setFormMessages({
        ...formMessages,
        errorEmail: ''
      })
    }
    if (name === 'telefon') {
      setFormMessages({
        ...formMessages,
        errorTelefon: ''
      })
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessages({
        ...formMessages,
        successMessage: false,
        errorMessage: '',
        errorSuglasnostPodaci: '',
        errorSuglasnostPravila: ''
    });

    const formData = new FormData();
    formData.append('ime_i_prezime', formFields.ime_i_prezime)
    formData.append('grad_i_postanski_broj', formFields.grad_i_postanski_broj)
    formData.append('adresa', formFields.adresa)
    formData.append('telefon', formFields.telefon)
    formData.append('email', formFields.email)

    formData.append('prijava_newsletter', newsletter ? 1 : 0)

    // disabled submit button
    document.querySelector(".modalSubmit").classList.add("loading");
    

    if(!suglasnostPodaci) {
      setFormMessages({
          ...formMessages,
          errorSuglasnostPodaci: "Vaša privolitev za obdelavo podatkov je obvezna."
      });
      document.querySelector(".modalSubmit").classList.remove("loading");
     
    }
    if(!suglasnostPravila) {
      setFormMessages({
          ...formMessages,
          errorSuglasnostPravila: "Vaše soglasje s pravili nagradne igre je obvezno."
      });
      document.querySelector(".modalSubmit").classList.remove("loading");
     
    }
    if(suglasnostPodaci && suglasnostPravila) {
      document.querySelector(".modalContainer").classList.add("modaThankYou");

      setFormMessages({
        ...formMessages,
        successMessage: true,
        messageSent: true,
        errorMessage: '',
        errorSuglasnostPodaci: '',
        errorSuglasnostPravila: '',
      });
      document.querySelector(".modalSubmit").classList.remove("loading");
    }
    
    axios({
      url: '/collect_si.php',
      method: 'post',
      data: formData,
      config: {
        headers:
        {
          'Content-Type': 'multipart/form-data'
        }
      }
    })
      .then(function (response) {
        if (response.data.success) {
            setFormFields({
                ime_i_prezime: '',
                grad_i_postanski_broj: '',
                adresa: '',
                telefon: '',
                email: '',
                errorMessage: "",
            });
            setFormMessages({
              ...formMessages,
              successMessage: true,
              messageSent: true,
              errorMessage: '',
              errorSuglasnostPodaci: '',
              errorSuglasnostPravila: '',
            });
            document.querySelector(".modalContainer").classList.add("modaThankYou");
        }

        // make  submit button active
        document.querySelector(".modalSubmit").classList.remove("loading");

      })
      .catch(function (error) {
        // make  submit button active
        document.querySelector(".modalSubmit").classList.remove("loading");
        if (error.response.data.errors) {
          if (error.response.data.errors.ime_i_prezime) {
              setFormMessages({
                  ...formMessages,
                  errorImePrezime: error.response.data.errors.ime_i_prezime
              });
          }
          if (error.response.data.errors.grad_i_postanski_broj) {
            setFormMessages({
                ...formMessages,
                errorGradPosta: error.response.data.errors.grad_i_postanski_broj
            });
          }
          if (error.response.data.errors.adresa) {
              setFormMessages({
                ...formMessages,
                  errorAdresa: error.response.data.errors.adresa
              });
          }
          if (error.response.data.errors.telefon) {
              setFormMessages({
                ...formMessages,
                  errorTelefon: error.response.data.errors.telefon
              });
          }
          if (error.response.data.errors.email) {
              setFormMessages({
                ...formMessages,
                  errorEmail: error.response.data.errors.email
              });
          }
        }

        if (error.response.data.message) {
          setFormMessages({
            ...formMessages,
            errorMessage: error.response.data.message
          });
        }

        if (error.response.status === 401 ||
          error.response.status === 403 ||
          error.response.status === 404 ||
          error.response.status === 405 ||
          error.response.status === 406 ||
          error.response.status === 407 ||
          error.response.status === 408 ||
          error.response.status === 413 ||
          error.response.status === 500 ||
          error.response.status === 502 ||
          error.response.status === 503 ||
          error.response.status === 504) {
          setFormMessages({
            ...formMessages,
            errorMessage: "Prišlo je do napake. Poskusite ponovno."
          });
        }

      });
      
  }
  const ShowMessageImePrezime = () => {
    if (formMessages.errorImePrezime !== '') {
        return (
            <div className="formError my-2"><p>{formMessages.errorImePrezime}</p></div>
        );
    }
  }
  const ShowMessageGradPosta = () => {
    if (formMessages.errorGradPosta !== '') {
        return (
            <div className="formError my-2"><p>{formMessages.errorGradPosta}</p></div>
        );
    }
  }
  const ShowMessageAdresa = () => {
    if (formMessages.errorAdresa !== '') {
        return (
            <div className="formError my-2"><p>{formMessages.errorAdresa}</p></div>
        );
    }
  }
  const ShowMessageEmail = () => {
    if (formMessages.errorEmail !== '') {
        return (
            <div className="formError my-2"><p>{formMessages.errorEmail}</p></div>
        );
    }
  }
  const ShowMessageTelefon = () => {
    if (formMessages.errorTelefon !== '') {
        return (
            <div className="formError my-2"><p>{formMessages.errorTelefon}</p></div>
        );
    }
  }
  const ShowMessage = () => {
    if (formMessages.errorMessage !== '') {
      return (
        <div className="formError"><p>{formMessages.errorMessage}</p></div>
      );
    }
  }
  const ShowMessageSuglasnostPodaci = () => {
    if (formMessages.errorSuglasnostPodaci !== '') {
        return (
            <div className="formError"><p>{formMessages.errorSuglasnostPodaci}</p></div>
        );
    }
    return false;
  }
  const ShowMessageSuglasnostPravila = () => {
    if (formMessages.errorSuglasnostPravila !== '') {
      return (
          <div className="formError"><p>{formMessages.errorSuglasnostPravila}</p></div>
      );
    }
    return false
  }

  const requiredMessage = () => {
    return <div className="formError">Polje je obvezno</div>
  }

  

  const handleReload = () => {
    window.location.reload()
  }

  return (

    <>
      <div className="w-100 modalForm">
        <div className="align-center pt-4 pb-6 sm:pt-10 " style={{display: formMessages.messageSent ? 'none' :''}}>
          <h2 className="modal-title" style={{fontSize: "3rem", lineHeight: "1.2", color: "#f4b702"}}>Čestitke!</h2>
          <h3 style={{fontSize: "1.5rem", color: "#000"}}>Našli ste vsa jajca in izdelke! Izpolni obrazec in sodeluj v igri!</h3>
        </div>
        <div className="align-center py-10" style={{display: formMessages.messageSent ? '' :'none'}}>
          <h2 className="mb-2 modal-title" style={{fontSize: "2.3rem", lineHeight: "1.2", color: "#f4b702"}}>Vaša prijava je uspešno prejeta! Hvala!</h2>
          {!newsletter ? <h2 style={{color: "#000"}}>Uspešno ste se prijavili na naše novice.</h2> : ''}
          <h2 style={{fontSize: "2rem", color: "#000"}}>Srečno!</h2>
         {/*} <a href="https://oetker-shop.hr/" target="_blank" className="basic-button" rel="noreferrer">Posjeti naš WEB SHOP</a>*/}
         <div className="basic-button cursor-pointer" onClick={handleReload}>Ponastavi igro</div>
        </div>
        <form action="." method="POST" onSubmit={handleSubmit} className="mt-4" style={{display: formMessages.messageSent ? 'none' :''}}>
          <div className="mb-3">
            <label className="pb-1 formLabel">Ime in Priimek:</label>
            <input name="ime_i_prezime" onChange={handleChange}/>
            {formMessages.errorImePrezime === '' ? '' : requiredMessage}
            <ShowMessageImePrezime />
          </div>
          <div className="mb-3">
            <label className="pb-1 formLabel">Mesto in poštana številka:</label>
            <input name="grad_i_postanski_broj" onChange={handleChange} />
            {formMessages.errorGradPosta === '' ? '' : requiredMessage}
            <ShowMessageGradPosta />
          </div>
          <div className="mb-3">
            <label className="pb-1 formLabel">Naslov:</label>
            <input name="adresa" onChange={handleChange} />
            {formMessages.errorAdresa === '' ? '' : requiredMessage}
            <ShowMessageAdresa />
          </div>
          <div className="mb-3">
            <label className="pb-1 formLabel">E-naslov:</label>
            <input name="email" onChange={handleChange}/>
            {formMessages.errorEmail === '' ? '' : requiredMessage}
            <ShowMessageEmail />
          </div>
          <div className="mb-3">
            <label className="pb-1 formLabel">Telefonska številka:</label>
            <input name="telefon" onChange={handleChange}/>
            {formMessages.errorTelefon === '' ? '' : requiredMessage}
            <ShowMessageTelefon />
          </div>
          
          <div className="flex mt-0 my-4"><ShowMessage /></div>
          <div className="mb-1 flex align-left my-2">
            <input style={{ outline: 'none', width: '1.4rem', marginRight: '.5rem', position: 'relative', top: '-0.3rem' }} type="checkbox" name="suglasnost_podaci" onChange={handleChangeSuglasnostPodaci}/>
            <span style={{ fontFamily: 'Roboto Condensed', textAlign: 'left', lineHeight: '1' }} className="pb-1">Strinjam se z obdelavo <a style={{ textDecoration: 'underline' }} href="https://www.oetker.hr/hr-hr/footer-meta/zastita-podataka" rel="noreferrer" target="_blank">osebnih podatkov</a></span>
          </div>
          {!suglasnostPodaci ? <div className="mb-1 flex -top-2 relative"><ShowMessageSuglasnostPodaci /></div> : <div className="mb-1 flex -top-2 relative"></div>}
          <div className="mb-1 flex align-left my-2">
            <input style={{ outline: 'none', width: '1.8rem', marginRight: '.5rem', position: 'relative', top: '-0.3rem' }} type="checkbox" name="suglasnost_pravila" onChange={handleChangeSuglasnostPravila}/>
            <span style={{ fontFamily: 'Roboto Condensed', textAlign: 'left', lineHeight: '1' }} className="pb-1 align-left">Prebral/-a sem in strinjam se s <a style={{ textDecoration: 'underline' }} href="/Lov na pirhe - Pravila nagradne igre.docx" rel="noreferrer" target="_blank">pravili nagradne igre.</a></span>
          </div>
          {!suglasnostPravila ? <div className="mb-1 flex -top-2 relative"><ShowMessageSuglasnostPravila /></div> : <div className="mb-1 flex -top-2 relative"></div>}
          <div className="mb-1 flex align-center my-2 text-left">
            <input style={{ outline: 'none', width: '1.4rem', marginRight: '.5rem', position: 'relative', top: '-0.3rem' }} type="checkbox" name="prijava_newsletter" onChange={handleChangeNewsletter}/>
            <span style={{ fontFamily: 'Roboto Condensed', textAlign: 'left', lineHeight: '1' }} className="pb-1 align-left">Želim se prijaviti pri dr. Oetker novice</span>
          </div>
          <div>
            <button className="modalSubmit" type="submit">Pošlji</button>
          </div>
        </form>
      </div>
    </>
  )
}

const Game_SI = () => {
  const pSRef = React.createRef();
  let itemsOfTheDayParent = day_1;

  let [points, setPoints] = useState(0);
  let pointsLimit = 10;
  let [productVisible, setProductVisible] = useState(false);
  
  let [clickedItemID, setClickedItemID] = useState(0);
  let clickedIDsOutside = [];
  let clickedIDsInside = [];
  let [stateArea, setStateArea] = useState("outside");
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [currentDay, setCurrentDay] = useState(new Date().getDate())
  let month = new Date().getMonth() + 1;

  /* Period from 27.3. to 9.4. */
  let day2 = currentDay === 28 && month === 3;
  let day3 = currentDay === 29 && month === 3;
  let day4 = currentDay === 30 && month === 3;
  let day5 = currentDay === 31 && month === 3;
  let day6 = currentDay === 1 && month === 4;
  let day7 = currentDay === 2 && month === 4;
  let day8 = currentDay === 3 && month === 4;
  let day9 = currentDay === 4 && month === 4;
  let day10 = currentDay === 5 && month === 4;
  let day11 = currentDay === 6 && month === 4;
  let day12 = currentDay === 7 && month === 4;
  let day13 = currentDay === 8 && month === 4;
  let day14 = currentDay === 9 && month === 4;

  /* Load data per days */
  if(day2) {
    itemsOfTheDayParent = day_2;
  }
  if(day3) {
    itemsOfTheDayParent = day_3;
  }
  if(day4) {
    itemsOfTheDayParent = day_4;
  }
  if(day5) {
    itemsOfTheDayParent = day_5;
  }
  if(day6) {
    itemsOfTheDayParent = day_6;
  }
  if(day7) {
    itemsOfTheDayParent = day_7;
  }
  if(day8) {
    itemsOfTheDayParent = day_8;
  }
  if(day9) {
    itemsOfTheDayParent = day_9;
  }
  if(day10) {
    itemsOfTheDayParent = day_10;
  }
  if(day11) {
    itemsOfTheDayParent = day_11;
  }
  if(day12) {
    itemsOfTheDayParent = day_12;
  }
  if(day13) {
    itemsOfTheDayParent = day_13;
  }
  if(day14) {
    itemsOfTheDayParent = day_14;
  }

  let itemsOfTheDay = itemsOfTheDayParent[0];
  let panoramaOutsideImage = itemsOfTheDay.main[0].image;
  let panoramaInsideImage = itemsOfTheDay.main[1].image;

  const prevPointsRef = useRef();
  let windowHeight = window.innerHeight;
  let desktopScreenHeight = 1200;
  let percentage = 1;
  let correctionCoeficient = 1;

  let device = "Desktop";

  if(window.innerWidth < 1700){
      device = "Laptop";
  }
  if(window.innerWidth < 1270){
    device = "Tablet";
  }
  if(window.innerWidth < 768){
    device = "Mobile";
  }

  if(windowHeight < desktopScreenHeight && !(window.innerWidth > 767 && window.innerWidth < 1000)) {

    if(!((window.innerWidth > 991 && window.innerWidth < 1200))){
      if(window.innerHeight > 950 && window.innerHeight < 1200){
        correctionCoeficient = 4.5;
        percentage = windowHeight / desktopScreenHeight;
      } else if(window.innerHeight > 850 && window.innerHeight < 949){
        correctionCoeficient = 2.8;
        percentage = windowHeight / desktopScreenHeight;
      }  else if(window.innerHeight > 750 && window.innerHeight < 849){
        correctionCoeficient = 2.3;
        percentage = windowHeight / desktopScreenHeight;
      }  else if((window.innerHeight < 749)){
        correctionCoeficient = 1.5;
        percentage = windowHeight / desktopScreenHeight;
      } 
    }
}

  useEffect(() => {
    //assign the ref's current value to the count Hook
    prevPointsRef.current = points;
  }, [points]);
  let markerArray = [];

  const handleCloseModal = () => {
    setIsModalOpen(false)
    document.querySelector("body").classList.remove("overflow-hidden");
  }
  
  const handleReady = (instance) => {
    const markersPlugs = instance.getPlugin(MarkersPlugin);
    if (!markersPlugs) return;
    let area = "outside";

    markersPlugs.addEventListener("select-marker", (e) => {
      let target = e.marker;

      e.marker.element.classList.add("marker-clicked")

      if(target.config.isPrize) {
        if(area === "outside") {
          if(clickedIDsOutside.indexOf(target.config.customID) == -1){
            clickedIDsOutside.push(target.config.customID);
            setPoints((points) => points + 1);

            markersPlugs.updateMarker({
              id: target.config.id,
              tooltip: {
                content: `<h4>Bravo!</h4> <strong>${prevPointsRef.current + 1}</strong> od <strong>${pointsLimit}</strong>!`,
                className: 'custom-tooltip',
                position: 'top',
                trigger: 'click',
              },
            });
          } else {
            markersPlugs.updateMarker({
              id: target.config.id,
              tooltip: false,
            });
          }
        } else {
          if(clickedIDsInside.indexOf(target.config.customID) == -1){
            clickedIDsInside.push(target.config.customID);
            setPoints((points) => points + 1);

            markersPlugs.updateMarker({
              id: target.config.id,
              tooltip: {
                content: `<h4>Bravo!</h4> <strong>${prevPointsRef.current + 1}</strong> od <strong>${pointsLimit}</strong>!`,
                className: 'custom-tooltip',
                position: 'top',
                trigger: 'click',
              },
            });
          }else{
            markersPlugs.updateMarker({
              id: target.config.id,
              tooltip: false,
            });
          }
        }
        
        setProductVisible(true);
        setClickedItemID(target.config.customID);
      } else {
        setProductVisible(false);
      }
      // if limit is reached
      if((clickedIDsOutside.length + clickedIDsInside.length) == pointsLimit){
        setIsModalOpen(true)
        document.querySelector("body").classList.add("overflow-hidden");
      }
      
      // if click on doors set new panorama image
      if(!target.config.isPrize){
        if(area === "outside"){
          
          instance.setPanorama(panoramaInsideImage)
          .then(() => {
            itemsOfTheDay.inside.map(item => {
              let itemId = item.id;
              markersPlugs.updateMarker({
                  id: "jaje" + itemId,
                  customID: itemId, 
                  position: { yaw: item.position.yaw, pitch: item.position.pitch },
                  image: item.trigger_image,
                  anchor: "bottom center",
                  size: { width: percentage === 1 ? item.size.width : (item.size.width - (item.size.width * percentage)) * correctionCoeficient, height: percentage === 1 ? item.size.height : (item.size.height - (item.size.height * percentage)) * correctionCoeficient },
                  tooltip: {
                    content: `<h4>Bravo!</h4> <strong>${prevPointsRef.current + 1}</strong> od <strong>${pointsLimit}</strong>!`,
                    className: 'custom-tooltip',
                    position: 'top',
                    trigger: 'click',
                  },
                  isPrize: item.vrata ? false : true,
              });
             
            })
          });
          setStateArea("inside")
          area = "inside"

        } else {
          
          instance.setPanorama(panoramaOutsideImage).then(() => {
            itemsOfTheDay.outside.map(item => {
              let itemId = item.id;
              markersPlugs.updateMarker({
                  id: "jaje" + itemId,
                  customID: itemId, 
                  position: { yaw: item.position.yaw, pitch: item.position.pitch },
                  image: item.trigger_image,
                  anchor: "bottom center",
                  size: { width: percentage === 1 ? item.size.width : (item.size.width - (item.size.width * percentage)) * correctionCoeficient, height: percentage === 1 ? item.size.height : (item.size.height - (item.size.height * percentage)) * correctionCoeficient },
                  tooltip: {
                    content: `<h4>Bravo!</h4> <strong>${prevPointsRef.current + 1}</strong> od <strong>${pointsLimit}</strong>!`,
                    className: 'custom-tooltip',
                    position: 'top',
                    trigger: 'click',
                  },
                  isPrize: item.vrata ? false : true,
              });
            })
          });
          setStateArea("outside")
          area = "outside"
        }
      }
    });
  };

  // create array of markers based by "day" array
  let markerItems = itemsOfTheDayParent.map(items => {
    items.outside.map(item => {
      let itemId = item.id;

      let marker = {
        id: "jaje" + itemId,
        customID: itemId, 
        position: { yaw: item.position.yaw, pitch: item.position.pitch },
        image: item.trigger_image,
        anchor: "bottom center",
        size: { width: percentage === 1 ? item.size.width : (item.size.width - (item.size.width * percentage)) * correctionCoeficient, height: percentage === 1 ? item.size.height : (item.size.height - (item.size.height * percentage)) * correctionCoeficient },
        tooltip: false,
        isPrize: item.vrata ? false : true,
      }
      markerArray.push(marker);
    });
    
  });

  const plugins = [
    [
      MarkersPlugin,
      {
        // list of markers
        markers: markerArray
      }
    ]
  ];
 
  const handleClick = () => {
    setProductVisible(false);
  };
  const handleCloseProduct = () => {
    setProductVisible(false);
  }
  const ProductItemBox = (props) => {
    let context = stateArea === "outside" ? itemsOfTheDay.outside[clickedItemID] : itemsOfTheDay.inside[clickedItemID];
    return (
      <div className="product-floating-element p-6 flex bg-white rounded-lg shadow-lg cursor-default mb-5 items-center">
        <div className="product-floating-element__image">
          <img className="w-full" src={context.product_image} alt="product" />
        </div>
        <div className="pl-6">
          <div onClick={handleCloseProduct} className="close-product text-2xl absolute right-3 top-3 cursor-pointer">x</div>
          <h3 className="text-2xl mb-3">{context.product_title}</h3>
          <p>{context.product_description}</p>
          <a className="product-floating-element__button uppercase font-semibold p-2 block text-center text-white rounded-md mt-4" href={context.product_url} target="_blank">Preberi več</a>
        </div>
      </div>
    )
  }
  // define height of the game section
  const panoramaSize = () => {
    let percentageSize = window.innerHeight * 0.15;
    return window.innerHeight - percentageSize;
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
      >
        <CalendarForm />
      </Modal>
      <div className="game-section relative">
        <span className="game-overlay"></span>
        <div className="product-wrapper absolute top-5 left-5 z-100">
          {productVisible ? 
            <ProductItemBox />
            : <></>}
        </div>
        <div className="absolute top-5 right-5 z-100 bodovi-box py-2 px-4 rounded-lg drop-shadow-lg"><h3 className="points-text text-xl md:text-3xl text-white">Zadetki: {points}/{pointsLimit}</h3></div>
        <ReactPhotoSphereViewer
          ref={pSRef}
          src={panoramaOutsideImage}
          height={panoramaSize()}
          width={"100%"}
          littlePlanet={false}
          onClick={handleClick}
          onReady={handleReady}
          plugins={plugins}
          defaultZoomLvl={device === "Tablet" || device === "Mobile" ? "60" : "72" }
          navbar={false}
          minFov={device === "Tablet" || device === "Mobile" ? "60" : "72" }
          maxFov={device === "Tablet" || device === "Mobile" ? "60" : "72" }
        ></ReactPhotoSphereViewer>
      </div>
    </>
  )

}

export default Game_SI