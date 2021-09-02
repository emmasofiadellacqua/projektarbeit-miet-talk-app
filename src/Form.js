import React from 'react';
import './Form.css';

function Form() {
    return (
      <section className="container_form">
       <div className="div_form">
        <h1 className="h1_form"> &#10094; FORMULAR</h1>
            <form className="form_form">
                <label className="label_form">
                 Bitte wähle eine Kategorie:
                 <br/>
                     <select className="select_form">
                        <option selected value="Kategorie">Kategorie wählen</option>
                        <option value="allgemein">Allgemeine Anfrage</option>
                        <option value="reperatur">Schaden & Reperatur</option>
                        <option value="miete">Miete & Vertrag</option>
                    </select>
                </label>
                <label className="label_form">
                 Wie können wir helfen?
                <br/>
                <textarea className="textarea_form" type="text" name="message" />
                </label>
                <br/>
                <p className="p_form">&#9729; Dokument/Foto hochladen</p>
                <button className="button_form" type="submit">Abschicken</button>
            </form>
        </div>
      </section>
    );
  }

export default Form;