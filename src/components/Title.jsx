const Title = (props) => {
  return (
    <div>
      <div className="mb-20 flex flex-col gap-3">
        <h2 className="text-neon-green text-4xl font-bold">{props.title}</h2>
        <p className=" text-primary-white text-xl font-medium">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
};

export default Title;
