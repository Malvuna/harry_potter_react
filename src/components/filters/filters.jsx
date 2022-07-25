export function Filters({ name, onNameChange, onSchoolChange }) {
  return (
    <div className="conteiner">
      <form className="text_label" method="post">
        <div className="form_card">
          <div className="form_name">
            <label htmlFor="fname">Name</label> <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter name"
              value={name}
              onChange={onNameChange}
            />
            <br />
          </div>

          <div className="form_school">
            <div>
              <label htmlFor="school">School</label> <br />
            </div>
            <div className="styled-select">
              <select
                id="school"
                name="school"
                onChange={onSchoolChange}
                defaultValue="">
                <option value="" disabled hidden>
                  Choose school
                </option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
