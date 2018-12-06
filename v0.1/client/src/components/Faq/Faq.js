import React, { Component} from 'react';
import './Faq.css'
import axios from 'axios';

class Faq extends Component {
    render() {
        return(
            <div>
                <nav class="navbar is-white">
                    <div class="container">
                        <div class="navbar-menu">
                            <div class="navbar-start">
                                <a class="navbar-item is-active" href="#">Popular</a>
                                <a class="navbar-item" href="#">Recent</a>
                                <a class="navbar-item" href="#">Rising</a>
                            </div>
                            <div class="navbar-end">
                                <div class="navbar-item">
                                    <input class="input" type="search" placeholder="Search forum..."></input>
                                </div>
                            </div>
                        </div>
                    </div>
		        </nav>
                
                <section className="container">
                    <div className="columns">
                        <div className="column is-9">
                            <div className="box content">
                                <article className="post">
                                    <h4>Bill: I write stuff</h4>
                                    <div className="media">
                                        <div className="media-left">
                                            <p><i className="fa fa-twitter"></i></p>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <a href="#">@jsmith</a> replied 34 minutes ago &nbsp;
                                                    <span class="tag">Question</span>
                                                </p>
                                            </div>
                                        </div>  
                                        <div className="media-right">
                                            <span className="has-text-gray">
                                                <i class="fa fa-comments"></i>
                                            </span>
                                        </div>
                                    </div>
                                </article> 
                            </div>
                        </div>
                        <div className="column is-3">
                            <a class="button is-primary is-block is-alt is-large" href="#">New Post</a>
                        </div>
                    </div>
                </section>

            </div>
        )
    };
}

export default Faq;
