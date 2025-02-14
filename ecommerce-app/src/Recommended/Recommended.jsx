import Button from "../components/Button.jsx";

const Recommended = ({ handleClick }) => {
  return (
    <div className="lg:w-[70%] md:w-[70%] mx-auto flex flex-col gap-3 m-4 p-2">
      <h2>Recommended</h2>
      <div className="flex gap-4 ">
        <Button
          onClickHandler={handleClick}
          value=""
          title="All Products"
        ></Button>
        <Button onClickHandler={handleClick} value="Nike" title="Nike" />
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleClick} value="Puma" title="Puma" />
        <Button onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
};
export default Recommended;
