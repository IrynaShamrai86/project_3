import '../../dist/css/aboutUs.css';
import background from "../../dist/img/counter.webp";
import award1 from "../../dist/img/award1.webp";
import award2 from "../../dist/img/award2.webp";
import award3 from "../../dist/img/award3.webp";
import award4 from "../../dist/img/award4.webp";
import award5 from "../../dist/img/award5.webp";
import Counter from "./Counter";

const counter = [
    {
        title: 'HAPPY CLIENTS',
        timerEnd: 1000,
        timerInterval: 1,
        isIconPlus: true,
    },
    {
        title: 'WINNING AWARDS',
        timerEnd: 27,
        timerInterval: 100,
        isIconPlus: false,
    },
    {
        title: 'YEARS OF EXPERIENCE',
        timerEnd: 14,
        timerInterval: 200,
        isIconPlus: true,
    },
    {
        title: 'PARTNERS',
        timerEnd: 8,
        timerInterval: 400,
        isIconPlus: false,
    },
]

const AboutUs = () => {
    return (
        <div className="about">
            <div className="counter-wrapper">
                <img className="background" src={background} alt="background"/>
                <div className="counter-block container">
                    <span className="vertical-border"></span>
                    <div className="content">
                        <h1 className="wow slideInUp">We Bring The Good Film To Life</h1>
                        <h2 className="wow slideInUp">Cursus nulla consectetur phasellus magnis non justo letius pellentesque lacus</h2>
                        <p>Tristique aliquet enim felis integer pulvinar suscipit interdum laoreet tellus efficitur.
                            Dictum ac luctus bibendum facilisi nam hendrerit orci sodales ex faucibus. Arcu nec rutrum
                            accumsan velit justo ipsum molestie cursus quam nunc dolor
                        </p>
                    </div>
                    <div className="counters">
                        <div className="grid-container">
                           {
                               counter.map((singleTimer) =>  <Counter {...singleTimer }/> )
                           }
                        </div>
                    </div>
                </div>
            </div>

            <div className="awards container">
                <span className="awards-title wow slideInUp" data-wow-delay="5s">WINNING AWARDS</span>
                <h2 className="wow slideInUp">Our Achievements On The Journey</h2>
                <p>Metus vulputate justo quisque sollicitudin augue mi scelerisque euismod vehicula velit. Suspendisse
                    quisque sagittis vestibulum lacinia maecenas porta aliquam orci ultricies penatibus. Donec diam
                    vitae lacus habitasse non augue. Nisl rhoncus torquent ad fermentum aenean bibendum
                </p>
                <div className="awards-items">
                    <img className="wow zoomIn" src={award1} alt="award1"/>
                    <img className="wow zoomIn" src={award2} alt="award2"/>
                    <img className="wow zoomIn" src={award3} alt="award3"/>
                    <img className="wow zoomIn" src={award4} alt="award4"/>
                    <img className="wow zoomIn" src={award5} alt="award5"/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;