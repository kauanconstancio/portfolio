const FormInputs = (props) => {
  return (
    <div>
      <input
        className="border-1 border-border-white rounded-2xl p-5 w-full text-white placeholder:text-white outline-none"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export const FormTextarea = (props) => {
  return (
    <div>
      <textarea
        className="border-1 border-border-white rounded-2xl p-5 w-full text-white placeholder:text-white resize-none"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
};

export default FormInputs;
