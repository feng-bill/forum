import React, { Component } from "react";
import "./School.css";
import Tab from "../Tab/Tabs";
import TabList from "../Tab/TabList";
import TabPanel from "../Tab/TabPanel";
import Tabs from "../Tab/Tabs";
import "../TabCSS/Tab.css";

class School extends Component {

  constructor() {
    super();
    this.state = {
    selected: 0
    };
  }
  render() {
    return (
      <div>
        <section className="hero is-medium has-bg-img">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Title 1</h1>
              <h2 className="subtitle">Subtitle 3</h2>
            </div>
          </div>
        </section>

        <div className="body">
          <div className="columns">
            <div className="column is-two-thirds">
              <div />
              <Tabs>
    <TabList>
      <Tab>Mario</Tab>
      <Tab disabled>Luigi</Tab>
      <Tab>Peach</Tab>
      <Tab>Yoshi</Tab>
      <Tab>Toad</Tab>
    </TabList>

    <TabPanel>
      <p>
        <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (<i>English:
        /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional character in the Mario video
        game franchise, owned by Nintendo and created by Japanese video game designer
        Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist
        of the series, Mario has appeared in over 200 video games since his creation.
        Depicted as a short, pudgy, Italian plumber who resides in the Mushroom
        Kingdom, his adventures generally center upon rescuing Princess Peach from the
        Koopa villain Bowser. His younger brother and sidekick is Luigi.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/Mario" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
    <TabPanel>
      <p>
        <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
        Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
        released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
        as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
        appears in many games throughout the Mario franchise, often as a sidekick to his brother.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
    <TabPanel>
      <p>
        <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
        is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
        Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
        attack by Bowser. She often plays the damsel in distress role within the series and
        is the lead female. She is often portrayed as Mario's love interest and has appeared
        in Super Princess Peach, where she is the main playable character.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
    <TabPanel>
      <p>
        <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (<i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once
        romanized as Yossy, is a fictional anthropomorphic dinosaur who appears in
        video games published by Nintendo. Yoshi debuted in Super Mario World (1990) on the
        Super Nintendo Entertainment System as Mario and Luigi's sidekick. Yoshi later starred
        in platform and puzzle games, including Super Mario World 2: Yoshi's Island, Yoshi's Story
        and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
        Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting
        game series Super Smash Bros. Yoshi belongs to the species of the same name, which is
        characterized by their variety of colors.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
    <TabPanel>
      <p>
        <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a fictional character who primarily
        appears in Nintendo's Mario franchise. Created by Japanese video game designer Shigeru Miyamoto,
        he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most loyal
        attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC)
        who provides assistance to Mario and his friends in most games, but there are times when Toad(s)
        takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario's Woods,
        Super Mario 3D World, and Captain Toad: Treasure Tracker.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
  </Tabs>
              <div className="tabs is-toggle is-fullwidth" id="tabs">
                <ul>
                  <li className="is-active" data-tab="1">
                    <a>
                      <span className="icon is-small">
                        <i className="fa fa-image" />
                      </span>
                      <span>Pictures</span>
                    </a>
                  </li>
                  <li data-tab="2">
                    <a>
                      <span className="icon is-small">
                        <i className="fa fa-music" />
                      </span>
                      <span>Music</span>
                    </a>
                  </li>
                  <li data-tab="3">
                    <a>
                      <span className="icon is-small">
                        <i className="fa fa-film" />
                      </span>
                      <span>Videos</span>
                    </a>
                  </li>
                  <li data-tab="4">
                    <a>
                      <span className="icon is-small">
                        <i className="fa fa-file-text-o" />
                      </span>
                      <span>Documents</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="tab-content">
                <p className="is-active" data-content="1">
                  Pictures
                </p>
                <p data-content="2">Music</p>
                <p data-content="3">Videos</p>
                <p data-content="4">Documents</p>
              </div>
              <div className="tabs">
                <ul id="guide-tabs">
                  <li className="is-active">
                    <a href="#link1" data-toggle="tab">
                      Popular
                    </a>
                  </li>
                  <li>
                    <a href="#link2" data-toggle="tab">
                      New
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane is-active" id="Popular">
                  <div className="box">
                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img
                            src="https://bulma.io/images/placeholders/128x128.png"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>Example Posting</strong>{" "}
                            <small>@johnsmith</small> <small>31m</small>
                          </p>
                        </div>
                        <nav className="level is-mobile">
                          <div className="level-left">
                            <a className="level-item" aria-label="reply">
                              <span className="icon is-small">
                                <i
                                  className="fas fa-reply"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                            <a className="level-item" aria-label="retweet">
                              <span className="icon is-small">
                                <i
                                  className="fas fa-retweet"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                            <a className="level-item" aria-label="like">
                              <span className="icon is-small">
                                <i
                                  className="fas fa-heart"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                          </div>
                        </nav>
                      </div>
                    </article>
                  </div>
                </div>

                <div className="tab-pane" id="New">
                  <div className="box">
                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img
                            src="https://bulma.io/images/placeholders/128x128.png"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>Example Posting</strong>{" "}
                            <small>@johnsmith</small> <small>31m</small>
                          </p>
                        </div>
                        <nav className="level is-mobile">
                          <div className="level-left">
                            <a className="level-item" aria-label="reply">
                              <span className="icon is-small">
                                <i
                                  className="fas fa-reply"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                            <a className="level-item" aria-label="retweet">
                              <span className="icon is-small">
                                <i
                                  className="fas fa-retweet"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                            <a className="level-item" aria-label="like">
                              <span className="icon is-small">
                                <i
                                  className="fas fa-heart"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                          </div>
                        </nav>
                      </div>
                    </article>
                  </div>
                </div>
                <hr />
                <div className="posting">
                  <textarea
                    className="textarea"
                    placeholder="Create your own post..."
                  />
                  <div className="field is-grouped is-pulled-right">
                    <a className="button is-primary">
                      <span>Submit</span>
                    </a>
                    <a className="button">Clear</a>
                  </div>
                </div>
                <nav
                  className="pagination"
                  role="navigation"
                  aria-label="pagination"
                >
                  <a
                    className="pagination-previous"
                    title="This is the first page"
                    disabled
                  >
                    Previous
                  </a>
                  <a className="pagination-next">Next page</a>
                  <ul className="pagination-list">
                    <li>
                      <a
                        className="pagination-link is-current"
                        aria-label="Page 1"
                        aria-current="page"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a className="pagination-link" aria-label="Goto page 2">
                        2
                      </a>
                    </li>
                    <li>
                      <a className="pagination-link" aria-label="Goto page 3">
                        3
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="content">
              <p className="subTitle">
                <b>Trending</b>
              </p>
              <hr />
              <ul>
                <li>
                  <a href="/" target="_blank">
                    A Specific Post
                  </a>
                </li>
                <hr />
                <li>
                  <a href="/" target="_blank">
                    A Specific Post
                  </a>
                </li>
                <hr />
                <li>
                  <a href="/" target="_blank">
                    A Specific Post
                  </a>
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default School;
