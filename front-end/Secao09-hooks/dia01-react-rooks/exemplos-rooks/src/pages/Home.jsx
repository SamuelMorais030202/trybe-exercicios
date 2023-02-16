function Home(props) {
  const { data } = props;
  console.log(data);
  return (
    <div>
      <h1>Olá { data.username }</h1>
    </div>
  );
}

export default Home;
