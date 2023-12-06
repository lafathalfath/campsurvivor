import { Link } from 'react-router-dom';
import "./Home.css";
import LycheeTea from '../assets/img/Signatur/LYCHEE-TEA.jpg';
import MiloBanana from '../assets/img/Signatur/Milo-Banana-Shake.jpg';
import SodaGembira from '../assets/img/Signatur/soda-gembira-sq.jpg';
import YakultLemon from '../assets/img/Signatur/yakult lemonade.jpg';
import YakultLychee from '../assets/img/Signatur/Yakult-lychee.jpg';
import VideoTron from '../assets/img/camp survivor/VID-20230530-WA0002.mp4';
import Event1 from '../assets/img/camp survivor/Event&Travelism/IMG-20230530-WA0029.jpg';
import Event2 from '../assets/img/camp survivor/Event&Travelism/IMG-20230530-WA0030.jpg';
import Event3 from '../assets/img/camp survivor/Event&Travelism/IMG-20230530-WA0031.jpg';
import Event4 from '../assets/img/camp survivor/Event&Travelism/IMG-20230530-WA0057.jpg';
import Event5 from '../assets/img/camp survivor/Event&Travelism/IMG-20230530-WA0094.jpg';
import Event6 from '../assets/img/camp survivor/Event&Travelism/IMG-20230530-WA0109.jpg';
import Event7 from '../assets/img/camp survivor/Event&Travelism/IMG-20230530-WA0131.jpg';
import Event8 from '../assets/img/camp survivor/Event&Travelism/IMG-20230530-WA0140.jpg';
import Event9 from '../assets/img/camp survivor/Event&Travelism/IMG-20230530-WA0141.jpg';
import Event10 from '../assets/img/camp survivor/Event&Travelism/IMG-20230530-WA0142.jpg';
import Event11 from '../assets/img/camp survivor/Event&Travelism/IMG-20230530-WA0143.jpg';
import Event12 from '../assets/img/camp survivor/Event&Travelism/IMG-20230530-WA0144.jpg';
import Event13 from '../assets/img/camp survivor/Event&Travelism/IMG-20230530-WA0017.jpg';
import Event14 from '../assets/img/camp survivor/Event&Travelism/IMG-20230530-WA0099.jpg';
import Trvlsm1 from '../assets/img/camp survivor/travelism/IMG-20230530-WA0019.jpg';
import Trvlsm2 from '../assets/img/camp survivor/travelism/IMG-20230530-WA0021.jpg';
import Trvlsm3 from '../assets/img/camp survivor/travelism/IMG-20230530-WA0022.jpg';
import Trvlsm4 from '../assets/img/camp survivor/travelism/IMG-20230530-WA0023.jpg';
import Trvlsm5 from '../assets/img/camp survivor/travelism/IMG-20230530-WA0052.jpg';
import Mrc1 from '../assets/img/camp survivor/merch/merch1.jpg';
import Mrc2 from '../assets/img/camp survivor/merch/merch2.jpg';
import Mrc3 from '../assets/img/camp survivor/merch/merch3.jpg';
import Mrc4 from '../assets/img/camp survivor/merch/merch4.jpg';
import Mrc5 from '../assets/img/camp survivor/merch/merch5.jpg';
import Mrc6 from '../assets/img/camp survivor/merch/merch6.jpg';
import Mrc7 from '../assets/img/camp survivor/merch/merch7.jpg';
import Mrc8 from '../assets/img/camp survivor/merch/merch8.jpg';

const Home = ()=>{
    return(
        <>
            <section className="jumbotron">
                <video controls autoPlay loop>
                    <source src={VideoTron} type='video/mp4'/>
                </video>
                {/* <h1>Ceritakan Pengalaman Hebat Anda Bersama Teman Sambil Meminum Kopi.</h1> */}
                <h1>
                    <span className='sp1'>NGOPI • NGOBROL • DISKUSI</span><br/><br/>
                    Experience The Magic Of Discovering A New Place<br/><br/>
                    <span className='sp2'>Koordinat • 6°34'46.3"S 106°46'29.2"E</span>
                </h1>

            </section>
            <section className='signature-menu'>
                <h2 className='section-title'>Signature</h2>
                <div className='home-card-container'>
                    <div className='menu-card-onHome'>
                        <img src={LycheeTea} alt=''/>
                        <div className='card-title'>
                            Lychee Tea
                        </div>
                    </div>
                    <div className='menu-card-onHome'>
                        <img src={MiloBanana} alt=''/>
                        <div className='card-title'>
                            Milo Banana
                        </div>
                    </div>
                    <div className='menu-card-onHome'>
                        <img src={SodaGembira} alt=''/>
                        <div className='card-title'>
                            Soda Gembira
                        </div>
                    </div>
                    <div className='menu-card-onHome'>
                        <img src={YakultLemon} alt=''/>
                        <div className='card-title'>
                            Yakult Lemonade
                        </div>
                    </div>
                    <div className='menu-card-onHome'>
                        <img src={YakultLychee} alt=''/>
                        <div className='card-title'>
                            Yakult Lychee
                        </div>
                    </div>
                </div>
                <br/>
                <p>Lihat lebih banyak menu makanan dan minuman dari Camp Survivor</p><br/>
                <div className='to-menu-btn-container'>
                    <Link to='menu' className='to-menu-btn'>See Other Menu</Link>
                </div>
            </section>
            <section className='event'>
                <h2 className='section-title'>Events</h2>
                <div className='event-card-container'>
                    <img src={Event1} alt=''/>
                    <img src={Event2} alt=''/>
                    <img src={Event3} alt=''/>
                    <img src={Event4} alt=''/>
                    <img src={Event5} alt=''/>
                    <img src={Event6} alt=''/>
                    <img src={Event7} alt=''/>
                    <img src={Event8} alt=''/>
                    <img src={Event9} alt=''/>
                    <img src={Event10} alt=''/>
                    <img src={Event11} alt=''/>
                    <img src={Event12} alt=''/>
                    <img src={Event13} alt=''/>
                    <img src={Event14} alt=''/>
                </div>
            </section>
            <section className='travelism'>
                <h2 className='section-title'>Travelism</h2>
                <div className='travelism-card-container'>
                    <img src={Trvlsm5} alt=''/>
                    <img src={Trvlsm4} alt=''/>
                    <img src={Trvlsm1} alt=''/>
                    <img src={Trvlsm2} alt=''/>
                    <img src={Trvlsm3} alt=''/>
                </div>
            </section>
            <section className='merch'>
                <h2 className='section-title'>Merch</h2>
                <div className='merch-card-container'>
                    <img src={Mrc1} alt=''/>
                    <img src={Mrc2} alt=''/>
                    <img src={Mrc3} alt=''/>
                    <img src={Mrc4} alt=''/>
                    <img src={Mrc5} alt=''/>
                    <img src={Mrc6} alt=''/>
                    <img src={Mrc7} alt=''/>
                    <img src={Mrc8} alt=''/>
                </div>
            </section>
        </> 
    )
};

export default Home;