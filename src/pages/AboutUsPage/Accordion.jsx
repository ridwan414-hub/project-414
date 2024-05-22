const Accordion = ({ id, text, title }) => {
  return (
    <div tabIndex={id} className="collapse collapse-plus bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content bg-white">{text}</div>
    </div>
  );
};

export default Accordion;
