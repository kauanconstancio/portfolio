const SocialInput = (props) => {
  return (
    <div>
      <a
        href={props.link}
        className="flex items-center gap-2 border-1 border-solid border-border-white px-3 py-2 rounded-2xl cursor-pointer"
      >
        <span className={props.iconClass}>{props.icon}</span>
        <div>
          <p className="text-white font-bold text-lg">{props.socialPlatform}</p>
          <p className="text-xs text-border-white font-medium">
            {props.description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default SocialInput;
