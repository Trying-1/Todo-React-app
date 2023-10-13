const List = (props) => {
  return (
    <div>
      {props.getlist.map((member, index) => (
        <h1 key={index}>{member}</h1>
      ))}
    </div>
  );
};
export default List;
