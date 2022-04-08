import React from "react";

export default function Dashboard() {
  return (
    <div>
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
              <li>5th: Player Name</li>
              <li>7th: Player Name</li>
              <li>7th: Player Name</li>
            </ol>
          </div>
          <div className="mainLeftBottom">
            <h1>Event Summary</h1>
            <p>
              Alex V was publically humiliated by Will flexing on him post
              match. Will lost the match, but Alex could not handle Will's
              biceps being bigger than his and broke down in tears immediately.
            </p>
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
          <li>
            <a
              href="https://discord.gg/TGDsYuEBUm"
              alt="discordLink"
              target="blank"
            >
              Discord
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/groups/200424973356187"
              alt="facebookLink"
              target="blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
