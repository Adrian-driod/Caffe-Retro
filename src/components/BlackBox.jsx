const BlackBox = ({ className, names }) => {
  if (!names || names.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      {names.map((name) => (
        <p key={name}>{name}</p>
      ))}
    </div>
  );
};

export default BlackBox;
