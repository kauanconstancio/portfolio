const Button = (props) => {
  return (
    <div className="">
      <button className="text-xl text-white py-2 px-4 border-2 rounded-2xl border-solid border-white cursor-pointer focus:shadow-lg focus:shadow-green-500 transition-all ease-in-out">
        {props.button}
      </button>
    </div>
  );
};

export default Button;
