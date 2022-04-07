import "./App.css";
// import Home from "./components/Home";


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <header>
        <nav>
          <div className="navLeft">
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>Staff</li>
              <li>Project M</li>
            </ul>
          </div>

          <div className="navCenter">
            <img src={require('./imgs/AL_Logo.png')} alt = 'AL Melee logo' />  
          </div>
          <div className="navRight">
          <ul>
              <li>Regions</li>
              <li>Social</li>
              <li>PR</li>
              <li>4</li>
              <li>Archives</li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main>
        {/* mainLeft */}
        <section className="mainLeft">
          <div className="mainLeftTop">
            <h1>Current Article</h1>
            <p>Month/Day/Year Recent Event Name</p>
          </div>
          <div className="mainLeftMiddle">
            <ol>
              <li>1st: Player Name</li>
              <li>2nd: Player Name</li>
              <li>3rd: Player Name</li>
              <li>4th: Player Name</li>
              <li>5th: Player Name</li>
              <li>6th: Player Name</li>
              <li>7th: Player Name</li>
            </ol>
          </div>
          <div className="mainLeftBottom">
            <h1>Event Summary</h1>
            <p>Alex V was publically humiliated by Will flexing on him post match. Will lost the match, but Alex could not handle Will's biceps being bigger than his and broke down in tears immediately.</p>
          </div>
        </section>
        {/* mainRight */}
        <section className="mainRight">
          <h1>Recent Events</h1>
          <ul>
            <li>1st Recent</li>
            <li>2nd Recent</li>
            <li>3rd Recent</li>
            <li>4th Recent</li>
            <li>5th Recent</li>
            <li>6th Recent</li>
          </ul>
        </section>
      </main>
      {/* footer */}
      <footer>
        <h1>Follow Our Socials</h1>
          <ul>
            <li><a src="#" alt="discordLink"></a>Discord</li>
            <li><a src="#" alt="facebookLink"></a>Facebook</li>
          </ul>
      </footer>
    </div>
  );
}

export default App;
