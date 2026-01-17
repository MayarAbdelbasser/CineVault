function MultiSelect({ genres, value = [], onChange }) {
  const handleClick = (val) => {
    if (value.includes(val)) {
      onChange(value.filter((v) => v !== val));
    } else {
      onChange([...value, val]);
    }
  };
  return (
    <div className="form__genres">
      {genres.map((g) => {
        return (
          <div
            key={g}
            className={`option ${value.includes(g) ? "selected" : ""}`}
            onClick={() => handleClick(g)}
          >
            {g}
          </div>
        );
      })}
    </div>
  );
}

export default MultiSelect;
