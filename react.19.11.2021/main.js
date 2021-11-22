const DivElement = document.getElementById("app");

function WriteTitle() {
  return (
    <div>
      <h1>Hello</h1>
      <Name />
    </div>
  );
}

function CarObj() {
  const car = {
    model: "civic",
    year: 2013,
  };

  return (
    <div>
      {car.model} {car.year}
    </div>
  );
}

function Name() {
  return <h1>myNAme</h1>;
}

function Header() {
  return <header>header</header>;
}

function Main() {
  return <main>main</main>;
}

function Footer() {
  return <footer>footer</footer>;
}

function IsName(props) {
  return (
    <div>
      <h1>hello {props.myNAme}</h1>
    </div>
  );
}

function NameAndAge(props) {
  console.log(props);
  return (
    <div>
      <h3>
        {" "}
        {props.myNAme} {props.myAge}
      </h3>
    </div>
  );
}

function Images(props) {
  return (
    <div>
      <img src={props.img}></img>
    </div>
  );
}

function Videos(props) {
  return (
    <div>
      <video src={props.video} width="320" height="240" controls>
      </video>
    </div>
  );
}

function Media(props) {
  return (
    <div>
      <Videos video={props.video} />
      <Images img={props.img} />
    </div>
  );
}

ReactDOM.render(
  <div>

    <Media
      img="https://cdn.pixabay.com/photo/2014/11/16/15/15/field-533541__340.jpg"
      video="https://player.vimeo.com/external/586228759.sd.mp4?s=d35b9b32851db86dde64302bd696390232105dd2&profile_id=165"
    />

    {/* <WriteTitle />
    <CarObj />
    <CarObj />
    <CarObj />
    <CarObj />
    <CarObj />
    <CarObj /> */}
    {/* <CarObj /> */}
    {/* <CarObj />
    <CarObj /> */}
    {/* <CarObj /> */}
    {/* <Header />
    <Main /> */}
    {/* <Footer />
    <IsName myNAme="asras" />
    <IsName myNAme="a" />
    <IsName myNAme="b" />
    <IsName myNAme="c" />
    <IsName myNAme="d" />
    <IsName myNAme="e" />
    <IsName myNAme="f" />
    <IsName myNAme="g" />
    <IsName myNAme="h" />
    <IsName myNAme="i" />
    <NameAndAge myNAme="david" myAge = "38" /> */}

    {/* <Media img = "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"/>
    <Media img = "https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405__340.jpg"/> */}
   

    {/* <Name/> */}
  </div>,

  DivElement
);
