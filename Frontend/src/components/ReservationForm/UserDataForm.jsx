import "./UserDataForm.css";

function UserDataInputs(props) {

  const { handleChangeCity, city, handleChangeIsVaccinated } = props;

  return (
    <section className="user-data-inputs">
      <h2 className="reservation-form-title">Completa tus datos</h2>
      <div className="user-data-inputs-container">
        <fieldset className="section-inputs-container">
          <label className="data-user-label">
            Nombre
            <input type="text" name="name" title="Nombre" value={localStorage.getItem("name")} className="reservation-input-disabled" disabled />
          </label>
          <label className="data-user-label">
            Apellido
            <input type="text" name="surname" title="Apellido" value={localStorage.getItem("lastName")} className="reservation-input-disabled" disabled />
          </label>
        </fieldset>
        <fieldset className="section-inputs-container">
          <label className="data-user-label">
            Correo electrónico
            <input type="email" id="reservation-email" name="email" title="Correo electrónico" value={localStorage.getItem("email")} className="reservation-input-disabled" disabled />
          </label>
          <label className="data-user-label">
            Ciudad
            <input type="text" name="city" title="Completa con tu ciudad de residencia" value={city} onChange={handleChangeCity} className="reservation-input" placeholder="¿De dónde eres?" required />
          </label>
        </fieldset>
        <fieldset className="section-radio-container">
          <legend className="section-radio-legend">¿Tienes aplicadas ambas dosis de la vacuna contra COVID-19?</legend>
          <div className="radio-button-container">
            <label className="radio-button-covid" for="yes">SÍ</label>
            <input type="radio" id="yes" name="covid vaccination" value="yes" onChange={handleChangeIsVaccinated} />
          </div>
          <div className="radio-button-container">
            <label className="radio-button-covid" for="no">NO</label>
            <input type="radio" id="no" name="covid vaccination" value="no" onChange={handleChangeIsVaccinated} />
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default UserDataInputs;