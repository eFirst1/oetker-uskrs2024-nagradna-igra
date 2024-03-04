import React, { useState } from 'react'
import axios from 'axios'
import FileInput from 'react-simple-file-input'

const CalendarForm = (props) => {

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

    // disabled submit button
    document.querySelector(".modalSubmit").classList.add("loading");
    
    if(!suglasnostPodaci) {
      setFormMessages({
          ...formMessages,
          errorSuglasnostPodaci: "Vaša suglasnost s obradom podataka je obavezna."
      });
      document.querySelector(".modalSubmit").classList.remove("loading");
      return false;
    }
    if(!suglasnostPravila) {
      setFormMessages({
          ...formMessages,
          errorSuglasnostPravila: "Vaša suglasnost s pravilima nagradne igre je obavezna."
      });
      document.querySelector(".modalSubmit").classList.remove("loading");
      return false;
    }

    axios({
        url: '/collect_ba.php',
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
                errorMessage: "Došlo je do pogreške. Pokušajte ponovno."
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
          errorFileType: "Podržani formati fotografije su pdf, jpg, png."
      })
  }

  const requiredMessage = () => {
    return <div className="formError">Polje je obavezno</div>
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
      <div className="w-100 modalForm contentForm contentFormBg">
        
        <div className="align-center py-10" style={{display: formMessages.messageSent ? '' :'none'}}>
          <h2 className="h2-custom mb-6">Vaša prijava je uspješno zaprimljena! Hvala!</h2>
          <h2 className="h2-custom">Sretno!</h2>
        </div>
        <form action="." method="POST" onSubmit={handleSubmit} className="mt-4" style={{display: formMessages.messageSent ? 'none' :''}}>
          <div className="mb-3">
            <label className="pb-1 formLabel">Ime i prezime:</label>
            <input name="ime_i_prezime" onChange={handleChange}/>
            {formMessages.errorImePrezime === '' ? '' : requiredMessage}
            <ShowMessageImePrezime />
          </div>
          <div className="mb-3">
            <label className="pb-1 formLabel">Grad i poštanski broj:</label>
            <input name="grad_i_postanski_broj" onChange={handleChange} />
            {formMessages.errorGradPosta === '' ? '' : requiredMessage}
            <ShowMessageGradPosta />
          </div>
          <div className="mb-3">
            <label className="pb-1 formLabel">Adresa:</label>
            <input name="adresa" onChange={handleChange} />
            {formMessages.errorAdresa === '' ? '' : requiredMessage}
            <ShowMessageAdresa />
          </div>
          <div className="mb-3">
            <label className="pb-1 formLabel">Email:</label>
            <input name="email" onChange={handleChange}/>
            {formMessages.errorEmail === '' ? '' : requiredMessage}
            <ShowMessageEmail />
          </div>
          <div className="mb-3">
            <label className="pb-1 formLabel">Telefonski broj:</label>
            <input name="telefon" onChange={handleChange}/>
            {formMessages.errorTelefon === '' ? '' : requiredMessage}
            <ShowMessageTelefon />
          </div>
          
          <div className="mb-3">
          <label className="pb-1 formLabel">Priložite fotografiju računa s vidljivim datumom kupovine <br />(pdf, jpg, png):</label>
          </div>
          <div className="mb-3 formGroupUpload">
              <div className="fileUpload inline-block mb-2">
                  Učitaj fotografiju računa
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
          <label className="pb-1 formLabel">Koja je najneobičnija kombinacija okusa koju ste probali? <br />(od 20 do 50 znakova):</label>
          <textarea name="tekst" onChange={handleChange}></textarea>
          </div>
          <ShowMessageTekst />
          <div className="flex mt-0 my-4"><ShowMessage /></div>
          <div className="mb-1 flex align-left my-2 items-center">
            <input style={{ outline: 'none', width: '1.4rem', marginRight: '.5rem' }} type="checkbox" name="suglasnost_podaci" onChange={handleChangeSuglasnostPodaci}/>
            <span style={{ fontFamily: 'Roboto Condensed', textAlign: 'left', lineHeight: '1' }} className="pb-1">Suglasan/sna sam s obradom <a style={{ textDecoration: 'underline' }} href="https://www.oetker.ba/ba-bs/footer-meta/zastita-podataka" rel="noreferrer" target="_blank">osobnih podataka</a></span>
          </div>
          {!suglasnostPodaci ? <div className="mb-1 flex -top-2 relative"><ShowMessageSuglasnostPodaci /></div> : ''}
          <div className="mb-1 flex align-left my-2 items-center">
            <input style={{ outline: 'none', width: '1.8rem', marginRight: '.5rem' }} type="checkbox" name="suglasnost_pravila" onChange={handleChangeSuglasnostPravila}/>
            <span style={{ fontFamily: 'Roboto Condensed', textAlign: 'left', lineHeight: '1' }} className="pb-1 align-left">Pročitao/la sam i suglasan/sna sam s <a style={{ textDecoration: 'underline' }} href="/Pravila-Dr.-Oetker-Radost darivanja-nagradni-natječaj.docx" rel="noreferrer" target="_blank"> pravilima nagradne igre.</a></span>
          </div>
          {!suglasnostPravila ? <div className="mb-1 flex -top-2 relative"><ShowMessageSuglasnostPravila /></div> : ''}
          
          <div>
            <button className="modalSubmit" type="submit">Potvrdi</button>
          </div>
        </form>
      </div>
    </>
  )
}

const Calendar_BIH = () => {

  return (
    <div className="grid gap-2 grid-cols-1 md:gap-4">
      <CalendarForm />
    </div>
  )
}

export default Calendar_BIH