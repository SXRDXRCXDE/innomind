import React from "react";
import style from "./style.module.css";
import placeholder from "../../assets/img/people/noa_baruch.png";
import collab from "../../assets/img/layer/collab.png";

export default function AboutUs() {



    return<>
        <div className={'w-full h-auto min-h-screen bg-white flex flex-col items-center pt-20 overflow-x-clip'}>

            <div className={style.enter_layer}>

                <span className={style.entrance_title}>The team</span>
                <span className={style.entrance_description}>Our multidisciplinary team, comprising individuals from clinical, engineering, and technological backgrounds</span>
                <div className={style.button}>Collab with us</div>

            </div>

            <div className={'w-full flex flex-col items-center  bg-white py-20'}>

                <div className={'w-full max-w-[1200px] max-[1200px]:px-5 flex flex-col items-center gap-24'}>

                    <div className={'w-full flex max-[1000px]:flex-col max-[1000px]:items-center items-start justify-between'}>

                        <div className={'w-48 h-48 max-[1200px]:w-36 max-[1200px]:h-36 overflow-hidden rounded-full '}>

                            <img className={'w-full h-full object-cover '} src={placeholder} alt={'innomind'}/>

                        </div>

                        <div className={'w-full max-w-[850px] max-[1200px]:max-w-[800px] flex flex-col items-start text-start'}>

                            <div className={style.card_name}>Dr. Raz Gross</div>
                            <div className={'w-24 h-2 rounded-full bg-[#4089ED] my-4'}></div>
                            <p className={`${style.card_description} mt-4`}>
                                Dr. Raz Gross completed his medical studies as part of the IDF's academic reserve at the Tel Aviv University School of Medicine serving as a medical officer in the IDF.<br/><br/>
                                He is a specialist in psychiatry from the Sheba Medical Center in Tel Hashomer.<br/><br/>
                                Dr. Gross is also a psychotherapist, a graduate of a four-year program within the advanced study track of the School of Psychotherapy at the Faculty of Medicine at Tel Aviv University, and serves as a lecturer at the Faculty of Medicine at Tel Aviv University.<br/><br/>
                                Dr. Gross is certified in public health (MPH) by Columbia University in New York, and a graduate of the program in epidemiology of Mental Health on behalf of the Department of Epidemiology and the Department of Psychiatry of Columbia University in New York.<br/><br/>
                            </p>

                            <span className={style.card_link}>Raz.Gross@sheba.health.gov.il</span>



                        </div>

                    </div>

                    <div className={'w-full flex items-start max-[1000px]:flex-col max-[1000px]:items-center justify-between'}>

                        <div className={'w-48 h-48 max-[1200px]:w-36 max-[1200px]:h-36 overflow-hidden rounded-full '}>

                            <img className={'w-full h-full object-cover '} src={placeholder} alt={'innomind'}/>

                        </div>

                        <div className={'w-full max-w-[850px] max-[1200px]:max-w-[800px] flex flex-col items-start text-start'}>

                            <div className={style.card_name}>Dr. Nadav Goldenthal</div>
                            <div className={'w-24 h-2 rounded-full bg-[#4089ED] my-4'}></div>
                            <p className={`${style.card_description} mt-4`}>
                                Dr. Nadav Goldental completed his medical studies at the Technion, and is a specialist in adult psychiatry at the Sheba Medical Center in Tel Hashomer.<br/><br/>
                                He graduated from a 3-year program for dynamic psychotherapy in a psychoanalytic style for severe mental disorders, as well as training for CBT treatment for anxiety disorders and OCD disorder. <br/><br/>
                                He is also a director of Keshet Clinic in Sheba Tel Hashomer Hospital - a clinic for autistic spectrum disorders in adults.<br/><br/>
                                Dr. Gross engages in academic and research activities that include the training of specialized psychiatrists, and at the same time engages in the research of disorders related to stress and trauma. <br/><br/>
                            </p>

                            {/*<span className={style.card_link}>Raz.Gross@sheba.health.gov.il</span>*/}



                        </div>

                    </div>


                    <div className={'w-full flex items-start max-[1000px]:flex-col max-[1000px]:items-center justify-between'}>

                        <div className={'w-48 h-48 max-[1200px]:w-36 max-[1200px]:h-36 overflow-hidden rounded-full '}>

                            <img className={'w-full h-full object-cover '} src={placeholder} alt={'innomind'}/>

                        </div>

                        <div className={'w-full max-w-[850px] max-[1200px]:max-w-[800px] flex flex-col items-start text-start'}>

                            <div className={style.card_name}>Ms. Noa Baruch</div>
                            <div className={'w-24 h-2 rounded-full bg-[#4089ED] my-4'}></div>
                            <p className={`${style.card_description} mt-4`}></p>

                            {/*<span className={style.card_link}>Raz.Gross@sheba.health.gov.il</span>*/}



                        </div>

                    </div>

                </div>

            </div>


            <div className={'w-full h-[600px] max-[700px]:h-auto bg-[#D9D9D93D] max-[700px]:p-5  px-20 flex flex-col items-start justify-center '}>

                <div className={'w-full flex max-[700px]:flex-col-reverse  items-center max-[700px]:gap-5 justify-between'}>

                    <div className={'w-1/2 max-[700px]:w-full h-full flex flex-col max-[700px]:items-center items-start justify-center text-start'}>

                        <span className={`${style.card_name} `}>We want to cooperate with you!</span>
                        <div className={'w-24 h-2 rounded-full bg-[#4089ED] max-[700px]:self-start my-4'}></div>
                        <span className={`${style.footer_description} mt-4 `}>Join us in revolutionizing treatment and cooperate with us in future projects.</span>
                        <div className={`${style.button2} mt-12`}>Contact us</div>

                    </div>

                    <img className={'w-fit max-[700px]:h-auto max-[1000px]:h-[200px] max-[1200px]:h-[300px] h-full object-contain'} src={collab} alt={'innomind'}/>

                </div>


            </div>

            <div className={'w-full h-[496px] bg-[#07215B]'}></div>

        </div>
    </>
}