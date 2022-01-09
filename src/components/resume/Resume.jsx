import React from 'react';
import "./resume.css";

const Resume = () => {
    return ( 
        <div className='resume' id='resume'>
            <div className="resume-left">
                <div className="resume-section">
                    <img src="icon/iconREACT240.png" alt="" className="resume-imgLeft" />
                        <div className="resume-textsLeft">
                            <h4 className="resume-titleLeft">Professional Skills</h4>
                            <p className="resume-descLeft"> 
                            Langages de programmation (JS, PHP, JAVA, PYTHON)
                            </p>
                        </div>
                        <div className='containerEstrella'>
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            {/* <img className='resumeEstrella' src="icon/Estrella96.png" alt="" /> */}
                        </div>
                </div>                            {/* Fin resume section*/}
                <div className="resume-section">
                    <img src="icon/iconREACT240.png" alt="" className="resume-imgLeft" />
                        <div className="resume-textsLeft">
                            <h4 className="resume-titleLeft">Professional Skills</h4>
                            <p className="resume-descLeft"> 
                            HyperText Markup Language (HTML + CSS)
                            </p>
                        </div>
                        <div className='containerEstrella'>
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                        </div>
                </div>                            {/* Fin resume section*/}
                <div className="resume-section">
                    <img src="icon/iconREACT240.png" alt="" className="resume-imgLeft" />
                        <div className="resume-textsLeft">
                            <h4 className="resume-titleLeft">Professional Skills</h4>
                            <p className="resume-descLeft"> 
                            Database management systems(SQL - MySQL)
                            </p>
                        </div>
                        <div className='containerEstrella'>
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            {/* <img className='resumeEstrella' src="icon/Estrella96.png" alt="" /> */}
                        </div>
                </div>                            {/* Fin resume section*/}
                <div className="resume-section">
                    <img src="icon/iconREACT240.png" alt="" className="resume-imgLeft" />
                        <div className="resume-textsLeft">
                            <h4 className="resume-titleLeft">Professional Skills</h4>
                            <p className="resume-descLeft"> 
                            Project management - Github
                            </p>
                        </div>
                        <div className='containerEstrella'>
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            {/* <img className='resumeEstrella' src="icon/Estrella96.png" alt="" /> */}
                        </div>
                </div>                            {/* Fin resume section*/}
                <div className="resume-section">
                    <img src="icon/iconREACT240.png" alt="" className="resume-imgLeft" />
                        <div className="resume-textsLeft">
                            <h4 className="resume-titleLeft">Professional Skills</h4>
                            <p className="resume-descLeft"> 
                            Operating systems (Windows, Linux)
                            </p>
                        </div>
                        <div className='containerEstrella'>
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                            <img className='resumeEstrella' src="icon/Estrella96.png" alt="" />
                        </div>
                </div>                            {/* Fin resume section*/}
            </div>            {/* Fin resume-left */}
            <div className="resume-right">
                <h1 className="resume-title">About Me</h1>
                <p className="resume-sub">
                    Hello my name is Raul HERNANDEZ, I'm from Venezuela. 
                    I've been living in france for 7 years.
                </p>
                <p className="resume-desc">
                Already having a Systems Engineer degree from Venezuela, currently enrolled for the professional designation application development design, this training at GRETA Montpellier-Littoral will allow me to acquire new knowledge towards application developement.
                Computer science is my favorite field, my university studies and my professional experience have given me the skills and taste for the development of advanced techniques.
                </p>


                <form className='formAboutMe'>
                    <button className='btnHire'>Hire Me</button>
                    <button className='btnDownloadCv'>Download CV</button>
                </form>

            </div>                                {/* Fin a-right */}
        </div>
     );
}
 
export default Resume;