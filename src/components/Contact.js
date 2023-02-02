

function Contact() {

    return (
        <section className="skill-tech py-4 my-1">
            <div className="container-lg d-flex align-items-center py-3 my-3 ">
               <div className="row w-100 m-auto ">
                    <h2 className="text-center">CONTACT</h2>
                    <p className="text-center w-75 m-auto">Contact me for any questions or collaborations. Open to new opportunities. Let's work together.</p>
                    <div className="col-7 d-flex align-items-center p-5 flex-column justify-content-start">
                        <h5 className="border py-2 px-3">FILL UP THE FORM</h5>
                        <form className="grid-form py-3">
                            <label htmlFor="name">Name:<br/>
                                <input type="text" name="name" id="name"/>
                            </label>
                            <label htmlFor="email">Email:<br/>
                                <input type="text" name="email" id="email"/>
                            </label>
                            <label htmlFor="linkedin">LinkedIn:<br/>
                                <input type="text" name="linkedin" id="linkedin"/>
                            </label>
                            <label htmlFor="contact">Contact #:<br/>
                                <input type="text" name="contact" id="contact"/>
                            </label>
                            <label className="textarea" htmlFor="message">Message:<br/>
                                <textarea rows="6" name="message" id="message"> </textarea>
                            </label>
                            <button className="btn rounded-0 py-3">SUBMIT</button>
                        </form>
                    </div>
                    <div className="col-5 d-flex flex-column justify-content-start align-items-center p-5">
                        <h5 className="border py-2 px-3">OR CONTACT ME THROUGH:</h5>
                        <div className="contact-info d-flex flex-column align-items-center justify-content-center h-75">
                            <button className="btn rounded-0 my-2 ">jasonruben@gmail.com</button>
                            <ul className="list-unstyled d-flex gap-4 justify-content-center my-2">
                                <li><i class="bi bi-facebook external"></i></li>
                                <li><i class="bi bi-instagram external"></i></li>
                                <li><i class="bi bi-twitter external"></i></li>
                                <li><i class="bi bi-github external"></i></li>
                                <li><i class="bi bi-linkedin external"></i></li>
                            </ul>
                        </div>
                    </div>
               </div>
            </div>
        </section>
    )

}

export default Contact;