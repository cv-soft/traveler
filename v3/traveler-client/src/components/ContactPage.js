import React from 'react';

const ContactPage = props =>{
    return(
        <div>
            <section>
                <div className="container form_animate">
                    <h4>If something went wrong or you have suggestion how to improve our blog platform, you can leave
                        your message bellow</h4>
                    <div className="form">
                        <form action="#" className="form_area">
                            <div className="add_post">
                                <p>Your Subject <span id="star">*</span></p>
                                <input type="text" name="headline" id="name" maxLength="300" className="form-input"/>
                            </div>
                            <div className="add_post">
                                <p>Message <span id="star">*</span></p>
                                <textarea name="message" maxLength="3000" rows="1" className="form-input message"></textarea>
                            </div>
                            <div className="add_post">
                                <button name="button" type="normal" className="btn">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section id="quote">
                <span className="quote">– " I'm in love with cities I've never been
                        <br/> to and people I've never met. " – John Green.</span>
            </section>
        </div>
    )
};

export default ContactPage;