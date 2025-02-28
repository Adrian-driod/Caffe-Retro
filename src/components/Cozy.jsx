import RedBox from "./RedBox";
import BlackBox from "./BlackBox";
const Cozy = ({ data }) => {
  const [description1, description2] = data.description.split("...");

  return (
    <div className="cozy">
      <h2>Cozy</h2>
      <div className="description1">
        <RedBox description={description1} />
      </div>
      <div className="description2">
        <RedBox description={description2} />
      </div>
      <BlackBox
        className="black-box"
        names={[data.name, data.hours, data.address, data.phone]}
      />
    </div>
  );
};

export default Cozy;
