export function Filters({ name, onSearch, onSearchSelect }) {
  return (
    <div className="container">
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
              onChange={onSearch}
            />
            <br />
          </div>

          <div className="form_school">
            <div>
              <label htmlFor="school">House</label> <br />
            </div>
            <div className="styled-select">
              <select
                id="school"
                name="school"
                onChange={onSearchSelect}
                defaultValue="">
                <option value="">
                  Choose house
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
