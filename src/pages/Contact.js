import './Contact.css';
import jam from '../assets/img/clock.png';
import letak from '../assets/img/location.png';
// import wa from '../assets/img/wa-icon.png';
// import email from '../assets/img/email-icon.png';
import ig from '../assets/img/ig-icon.png';

const Contact=()=>{
    return(
        <section className='contact-page'>
            <div className='contact-wrapper'>
                <h2 className='section-title'>Hubungi Kami</h2>
                <p>Kunjungi Social Media kami:</p><br/>
                <div className='contact-link'>
                    <a href='https://www.instagram.com/campsurvivor/' target='_blank' rel="noopener noreferrer" className='contact-direct'>
                        <span className='direct-icon-ig'>
                            <img src={ig} alt=""/>
                        </span>
                        <div>@campsurvivor</div>
                    </a>
                </div><br/><br/>
                <div className='waktu'>
                    <div className='waku-img'><img src={jam} alt=""/></div>
                    <div className='waktu-ket'>
                        <div>Open&emsp;&ensp; : 11.00 WIB</div>
                        <div>Closed&emsp; : 23.000 WIB</div>
                    </div>
                </div>
                <div className='tempat'>
                    <div className='tempat-img'><img src={letak} alt=""/></div>
                    <div className='teempat-ket'>
                        <a href='https://goo.gl/maps/8tkxCjhc2v653W2t6' target='_blank' rel="noopener noreferrer">
                            Jl. DR. Sumeru No.142, RT.03/RW.06, Cilendek Bar., Kec. Bogor Bar., Kota Bogor, Jawa Barat 16111
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;