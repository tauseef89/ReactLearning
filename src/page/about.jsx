const About = () => {
  const [userName, setUserName] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const handleClick = () => {
    userName.push(inputVal);
    setUserName(userName);
    setInputVal("");
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setInputVal(value);
  };
  console.log(userName);
  return (
    <>
      <input type="text" value={inputVal} onChange={handleChange} />
      <button onClick={handleClick}>Add user</button>
      <h3>User List</h3>
      {userName?.map((uName, i) => {
        return <div key={i}>{uName}</div>;
      })}
    </>
  );
};

export default About;
