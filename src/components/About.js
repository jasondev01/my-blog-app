

function About() {

    return (
    <>
        <section className="banner pt-5 mt-5">
            <div className="container-lg d-flex align-items-center pt-5 mt-5">
               <div className="row w-100 m-auto">
                    <div className="col-8 d-flex flex-column justify-content-center">
                        <h3 className="my-2">Hey! I am</h3>
                        <h1 className="my-3">JASON SANTILLAN RUBEN</h1>
                        <h2 className="my-2">And I am currently learning ReactJS</h2>
                        <p className="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus porro sapiente, assumenda voluptates fuga dignissimos rem dolor maxime voluptas accusamus illo itaque veniam possimus reprehenderit impedit dolorum aut, consequuntur id?</p>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <div className="image-container">
                            <img className="h-100 w-100" src="https://images.unsplash.com/photo-1576504677598-49a46e4b7abb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80" alt="bearded-man" />
                        </div>
                    </div>
               </div>
            </div>
        </section>

        <section className="skill-tech py-1 my-1">
            <div className="container-lg d-flex align-items-center py-3 my-3 ">
               <div className="row w-100 m-auto">
                    <div className="col-6 d-flex flex-column justify-content-start align-items-center p-2">
                        <h2 className="my-2 text-center">SOFT SKILLS</h2>
                        <p className="text-center px-2">I have identified the following soft skills as areas of strength and continuously work to improve them through ongoing development.</p>
                        <ul className="d-flex px-0 py-4 gap-2 list-unstyled m-0 flex-wrap justify-content-center">
                            <li className="border border-dark py-2 px-3">Work Ethic</li>
                            <li className="border border-dark py-2 px-3">Communication</li>
                            <li className="border border-dark py-2 px-3">Problem Solving</li>
                            <li className="border border-dark py-2 px-3">Teamwork</li>
                            <li className="border border-dark py-2 px-3">Critical Thinking</li>
                            <li className="border border-dark py-2 px-3">Time Management</li>
                            <li className="border border-dark py-2 px-3">Versatility</li>
                            <li className="border border-dark py-2 px-3">Eagerness to Learn</li>
                        </ul>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-start align-items-center p-2">
                        <h2 className="my-2 text-center">TECHNOLOGIES</h2>
                        <p className="text-center px-2 ">I am keen on delving deeper into the following technology stacks for the purpose of developing new and exciting projects.</p>
                        <ul className="d-flex px-0 py-4 gap-2 list-unstyled m-0 flex-wrap justify-content-center">
                            <li className="border border-dark py-2 px-3">HTML5</li>
                            <li className="border border-dark py-2 px-3">CSS3</li>
                            <li className="border border-dark py-2 px-3">SCSS</li>
                            <li className="border border-dark py-2 px-3">JavaScript ES6+</li>
                            <li className="border border-dark py-2 px-3">Firebase</li>
                            <li className="border border-dark py-2 px-3">ReactJS</li>
                            <li className="border border-dark py-2 px-3">NodeJS</li>
                            <li className="border border-dark py-2 px-3">Laravel</li>
                            <li className="border border-dark py-2 px-3">Bootstrap5</li>
                            <li className="border border-dark py-2 px-3">Tailwind CSS</li>
                            <li className="border border-dark py-2 px-3">NextJS</li>
                            <li className="border border-dark py-2 px-3">TypeScript</li>
                            <li className="border border-dark py-2 px-3">Redux</li>
                            <li className="border border-dark py-2 px-3">Git</li>
                            <li className="border border-dark py-2 px-3">MySQL</li>
                            <li className="border border-dark py-2 px-3">MongoDB</li>
                            <li className="border border-dark py-2 px-3">REST API</li>
                        </ul>
                    </div>
               </div>
            </div>
        </section>

    </>
    );

}

export default About;