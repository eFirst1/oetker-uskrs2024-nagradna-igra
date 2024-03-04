import React, { useState } from 'react'
import axios from 'axios'
import advent_days from '../advent_days_SI'
import Modal from './Modal'
import FileInput from 'react-simple-file-input'

import starHead from '../assets/img/grafika/modal-zvijezda.png'

const CalendarForm = (props) => {

  const { selectedItem } = props;
  const allowedFileTypes = ["image/png", "image/jpeg", "application/pdf"];

  const [formFields, setFormFields] = useState({
      ime_i_prezime: '',
      grad_i_postanski_broj: '',
      adresa: '',
      email: '',
      telefon: '',
      tekst: '',
      files: '',
      filesContents: [],
      filesPreview: [],
      file: false,
      filePreview: '',
      totalFileSize: 0,
  });
  const [uploadedFiles, setUploadedFiles] = useState(false); 
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
      errorSlikaRacuna: '',
      errorFileType: '',
      errorSuglasnostPodaci: '',
      errorSuglasnostPravila: '',
      errorFotoTextMessage: '',
      errorTekst: ''
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

    if(name === 'ime_i_prezime'){
        setFormMessages({
            ...formMessages,
            errorImePrezime: ''
        })
    }
    if(name === 'grad_i_postanski_broj'){
      setFormMessages({
          ...formMessages,
          errorGradPosta: ''
      })
    }
    if(name === 'adresa'){
      setFormMessages({
          ...formMessages,
          errorAdresa: ''
      })
    }
    if(name === 'email'){
      setFormMessages({
          ...formMessages,
          errorEmail: ''
      })
    }
    if(name === 'telefon'){
      setFormMessages({
          ...formMessages,
          errorTelefon: ''
      })
    }
    if(name === 'tekst'){
      setFormMessages({
          ...formMessages,
          errorTekst: ''
      })
    }
  }

  const fileIsIncorrectFiletype = (file) => {
      if (allowedFileTypes.indexOf(file.type) === -1) {
          return true;
      } else {
          return false;
      }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessages({
        ...formMessages,
        successMessage: false,
        errorMessage: '',
        errorImage: '',
        errorFileType: '',
        errorImePrezime: '',
        errorGradPosta: '',
        errorAdresa: '',
        errorEmail: '',
        errorTelefon: '',
        errorSlikaRacuna: '',
        errorSuglasnostPodaci: '',
        errorSuglasnostPravila: '',
        errorFotoTextMessage: '',
        errorTekst: ''
    });

    const formData = new FormData();

    formData.append('ime_i_prezime', formFields.ime_i_prezime)
    formData.append('grad_i_postanski_broj', formFields.grad_i_postanski_broj)
    formData.append('adresa', formFields.adresa)
    formData.append('telefon', formFields.telefon)
    formData.append('email', formFields.email)
    
    if(uploadedFiles){
      formData.append('slika_racun', uploadedFiles);
    } 
    
    formData.append('tekst', formFields.tekst)
    
    formData.append('prijava_newsletter', newsletter ? 1 : 0)

    // disabled submit button
    document.querySelector(".modalSubmit").classList.add("loading");
    
    if(!suglasnostPodaci) {
      setFormMessages({
          ...formMessages,
          errorSuglasnostPodaci: "Vaša privolitev za obdelavo podatkov je obvezna."
      });
      document.querySelector(".modalSubmit").classList.remove("loading");
      return false;
    }
    if(!suglasnostPravila) {
      setFormMessages({
          ...formMessages,
          errorSuglasnostPravila: "Vaše soglasje s pravili nagradne igre je obvezno."
      });
      document.querySelector(".modalSubmit").classList.remove("loading");
      return false;
    }

    axios({
        url: '/collect_si.php',
        method: 'post',
        data: formData,
        config: { headers:
            {
                'Content-Type': 'multipart/form-data'
            }
        }
    })
    .then(function(response) {
        if (response.data.success) {
            setFormFields({
                ime_i_prezime: '',
                grad_i_postanski_broj: '',
                adresa: '',
                telefon: '',
                email: '',
                slika_racun: '',
                errorMessage: "",
                tekst: '',
                files: '',
                file: false,
                filesContents: [],
                filePreview: [],
                totalFileSize: 0,
            });
            setFormMessages({
              ...formMessages,
              successMessage: true,
              messageSent: true,
              errorMessage: '',
              errorImePrezime: '',
              errorGradPosta: '',
              errorAdresa: '',
              errorEmail: '',
              errorTelefon: '',
              errorSlikaRacuna: '',
              errorSuglasnostPodaci: '',
              errorSuglasnostPravila: '',
              errorTekst: ''
            });
            document.querySelector(".modalContainer").classList.add("modaThankYou");
        }

        // make  submit button active
        document.querySelector(".modalSubmit").classList.remove("loading");

    })
    .catch(function(error) {
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
            if (error.response.data.errors.slika_racun) {
                setFormMessages({
                  ...formMessages,
                    errorSlikaRacuna: error.response.data.errors.slika_racun
                });
            }
            if (error.response.data.errors.tekst) {
              setFormMessages({
                ...formMessages,
                  errorTekst: error.response.data.errors.tekst
              });
            }
          
        }

        if (error.response.data.message) {
            setFormMessages({
                ...formMessages,
                errorMessage: error.response.data.message
            });
        }

        if(error.response.status === 401 ||
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
  const ShowMessageSlikaRacun = () => {
    if (formMessages.errorSlikaRacuna !== '') {
        return (
            <div className="formError my-2"><p>{formMessages.errorSlikaRacuna}</p></div>
        );
    }
  }
  const ShowMessageTekst = () => {
    if (formMessages.errorTekst !== '') {
        return (
            <div className="formError my-2"><p>{formMessages.errorTekst}</p></div>
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
  
  const showInvalidFileTypeMessage = (file) => {
      setFormMessages({
          ...formMessages,
          errorFileType: "Naložite lahko samo fotografijo v formatu pdf, jpg, png."
      })
  }

  const requiredMessage = () => {
    return <div className="formError">Polje je obvezno</div>
  }

  const handleFileSelected = (event, file) => {
    let reader = new FileReader();

    let filesContents = formFields.filesContents;
    filesContents.push(event.target.result);

    setUploadedFiles(file);
    setFormFields({...formFields, filesContents: filesContents });

    reader.onloadend = () => {
        let filesPreview = formFields.filesPreview;
        filesPreview.push(reader.result);
        setFormFields({ ...formFields, filesPreview: filesPreview });
    }
    // clear error message and save sum of file sizes
    setFormFields({
      ...formFields, 
      totalFileSize: formFields.totalFileSize + file.size,
    })
    
    setFormMessages({
      ...formMessages,
      errorFileType: "",
      errorMessage: "",
      errorImage: ""
    });

    reader.readAsDataURL(file)
  }

  return (
    
    <>
      <div className="w-100 modalForm">
        <div className="modalPrizeImage">
          {selectedItem?.prize_image && <img src={`${require(`../assets/img/nagrade/${selectedItem?.prize_image}`)}`} alt="" />}
          <div className="modalPrizeTitles">
            <ol>
            {selectedItem?.prizes.map((item) => <li key={item.title}><a href={item.url} target="_blank" rel="noreferrer" className={item.url === '' ? 'disabled-link' : ''} dangerouslySetInnerHTML={{__html:item.title}}></a></li>)}
            </ol>
          </div>
        </div>
        <div className="star">
          <div className="starTail">
          {selectedItem?.tail_image && <img src={`${require(`../assets/img/repovi/${selectedItem?.tail_image}`)}`} alt="star tail graphic" />}
          </div>
          <div className="starHead">
            <img src={starHead} alt="star tail graphic" />
          </div>
        </div>
        <div className="align-center py-10" style={{display: formMessages.messageSent ? '' :'none'}}>
          <h2 style={{fontSize: "2rem", lineHeight: "1.2"}}>Vaša prijava je uspešno prejeta! Hvala!</h2>
          {newsletter ? <h2>Uspešno ste se prijavili na naše novice in ob naslednjem nakupu v naši spletni trgovini lahko s promocijsko kodo: ADVENT2022 pridobite 20% popust.</h2> : ''}
          <h2 style={{fontSize: "2rem"}}>Srečno!</h2>
          <a href="https://oetker-shop.si/" target="_blank" className="basic-button" rel="noreferrer">Obiščite našo spletno trgovino</a>
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
          
          <div className="mb-3">
          <label className="pb-1 formLabel">Priložite fotografijo računa z vidnim datumom nakupa (pdf, jpg, png):</label>
          </div>
          <div className="mb-3 formGroupUpload">
              <div className="fileUpload inline-block mb-2">
                  Naloži
                  <FileInput
                    name="slika_racun"
                    readAs='binary'
                    style={ { opacity: '0' } }
                    onLoad={handleFileSelected}
                    cancelIf={fileIsIncorrectFiletype}
                    onCancel={showInvalidFileTypeMessage}
                    />
              </div>
              <div className="uploadedItems">
                {uploadedFiles ? <div className="uploadedItem italic"><p>{uploadedFiles.name}</p></div> : ''}
              </div>
          </div>
          <ShowMessageSlikaRacun />
          <div className="mb-3">
          <label className="pb-1 formLabel">Ali napišite svoj najljubši božični recept (od 500 do 1000 besed):</label>
          <textarea name="tekst" onChange={handleChange}></textarea>
          </div>
          <ShowMessageTekst />
          <div className="flex mt-0 my-4"><ShowMessage /></div>
          <div className="mb-1 flex align-left my-2">
            <input style={{ outline: 'none', width: '1.4rem', marginRight: '.5rem' }} type="checkbox" name="suglasnost_podaci" onChange={handleChangeSuglasnostPodaci}/>
            <span style={{ fontFamily: 'Roboto Condensed', textAlign: 'left', lineHeight: '1' }} className="pb-1">Strinjam se z obdelavo <a style={{ textDecoration: 'underline' }} href="https://www.oetker.si/si-si/footer-meta/varstvo-osebnih-podatkov" rel="noreferrer" target="_blank">osebnih podatkov</a></span>
          </div>
          {!suglasnostPodaci ? <div className="mb-1 flex -top-2 relative"><ShowMessageSuglasnostPodaci /></div> : ''}
          <div className="mb-1 flex align-left my-2">
            <input style={{ outline: 'none', width: '1.8rem', marginRight: '.5rem' }} type="checkbox" name="suglasnost_pravila" onChange={handleChangeSuglasnostPravila}/>
            <span style={{ fontFamily: 'Roboto Condensed', textAlign: 'left', lineHeight: '1' }} className="pb-1 align-left">Prebral/-a sem in strinjam se s <a style={{ textDecoration: 'underline' }} href="/Pravila%20nagradne%20igre%20Adventni%20kolendar.docx" rel="noreferrer" target="_blank"> pravili nagradne igre.</a></span>
          </div>
          {!suglasnostPravila ? <div className="mb-1 flex -top-2 relative"><ShowMessageSuglasnostPravila /></div> : ''}
          <div className="mb-1 flex align-center my-2 text-left">
            <input style={{ outline: 'none', width: '1.4rem', marginRight: '.5rem' }} type="checkbox" name="prijava_newsletter" onChange={handleChangeNewsletter}/>
            <span style={{ fontFamily: 'Roboto Condensed', textAlign: 'left', lineHeight: '1' }} className="pb-1 align-left">Želim se prijaviti pri dr. Oetker novice in pridobiti 20% popusta pri prvem nakupu</span>
          </div>
          <div>
            <button className="modalSubmit" type="submit">Pošlji</button>
          </div>
        </form>
      </div>
    </>
  )
}

const CalendarItem = (props) => {

  const {
    grid_image,
    setIsModalOpen,
    setSelectedItem,
    isActive
  } = props

  const handleItemClick = (e) => {
    setSelectedItem(advent_days.find(item => item.id === props.id))
    setIsModalOpen(true)
    document.querySelector("body").classList.add("overflow-hidden");
  }

  return <div
    style={{
      backgroundImage: `url(${require(`../assets/img/kucice/${grid_image}`)})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      objectFit: 'cover',
      backgroundRepeat: 'no-repeat',
      cursor: 'pointer'
    }}
    className={`relative h-20 xs:h-28 lg:h-32 xl:h-36 transition ease-in-out ${props.isActive ? "lg:hover:-translate-y-2 0 duration-200" : "not-active"}`}
    onClick={isActive ? handleItemClick : undefined}
  ><span className="item-overlay"></span></div>
}

const Calendar_SI = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState()
  const [isActive, setIsActive] = useState(false)
  const [currentDay, setCurrentDay] = useState(new Date().getDate())

  const handleCloseModal = () => {
    setIsModalOpen(false)
    document.querySelector("body").classList.remove("overflow-hidden");
  }

  return (
    <div className="grid gap-2 grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 md:gap-4">
      {advent_days.map(day => (
        <CalendarItem
          key={day.id}
          {...day}
          setIsModalOpen={setIsModalOpen}
          setSelectedItem={setSelectedItem}
          isActive={currentDay === day.id ? !setIsActive : false}
        />
      ))}
      <Modal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
      >
        <CalendarForm
          selectedItem={selectedItem}
        />
      </Modal>
    </div>
  )
}

export default Calendar_SI