import { useEffect } from 'react';
import './Menu.css';
// import { useState } from 'react';
//cemilan
import Indomie from '../assets/img/Cemilan/instant-noodles-soup-eat-sliced-onions-peppers-put-pork-into-top-view.jpg';import Piscok from'../assets/img/Cemilan/pisang_coklat_keju_susu.jpg';import Rotbak from '../assets/img/Cemilan/rotbak_coklat_keju_susu.jpg';import Rujak from '../assets/img/Cemilan/rujak_cireng.jpg';
//coffe
import CoffeBeer from '../assets/img/Coffee/coffee bear.jpg';import CoffeeV60 from '../assets/img/Coffee/Coffee V60.jpg';import CoffeeTubruk from '../assets/img/Coffee/coffee-tubruk.jpg';import JapaneseCoffee from '../assets/img/Coffee/Japanese-Iced-Coffee-VI.jpg';import KopiLestari from '../assets/img/Coffee/kopi lestari.jpg';import KopiRobusta from '../assets/img/Coffee/kopi tubruk robusta.jpg';import KopiArabica from '../assets/img/Coffee/kopi-tubruk-arabica.jpg';import Mazagran from '../assets/img/Coffee/mazagran.jpg';import VietDrip from '../assets/img/Coffee/vietnam drip.jpg';
//nasgor
import NasgorKampung from '../assets/img/NasiGoreng/nasi_goreng_kampung.jpg';import NasgorLumut from '../assets/img/NasiGoreng/nasi-goreng-lumutjpeg.jpeg';
//signature
import LycheeeTea from '../assets/img/Signatur/LYCHEE-TEA.jpg';import MiloBanana from '../assets/img/Signatur/Milo-Banana-Shake.jpg';import SodaGembira from '../assets/img/Signatur/soda-gembira.jpg';import YakultLemon from '../assets/img/Signatur/yakult lemonade.jpg';import YakultLychee from '../assets/img/Signatur/Yakult-lychee.jpg';
// sumur
import SumurAvocado from '../assets/img/SUMUR/avocado.jpg';import SumurBanana from '../assets/img/SUMUR/banana.jpg';import SumurChoco from '../assets/img/SUMUR/choco delvi.jpg';import SumurBubble from '../assets/img/SUMUR/bubble gum.jpg';import SumurDurian from '../assets/img/SUMUR/durian.jpg';import SumurGreenTea from '../assets/img/SUMUR/Green Tea.jpg';import SumurMango from '../assets/img/SUMUR/mangga.jpg';import SumurMelon from '../assets/img/SUMUR/melon.jpg';import SumurRedVel from '../assets/img/SUMUR/Red velvet.jpg';import SumurStrawberry from '../assets/img/SUMUR/susu murni strawberry.jpg';import SumurTiramisu from '../assets/img/SUMUR/susu tiramisu.jpg';
//warkop
import Mineral from '../assets/img/Warkop/air mineral.jpg';import Cappucino from '../assets/img/Warkop/cappucino.jpg';import Josu from '../assets/img/Warkop/ekstrajosu.jpg';import Kukubima from '../assets/img/Warkop/kukubima.jpg';import LemonTea from '../assets/img/Warkop/lemon tea.jpg';import Milo from '../assets/img/Warkop/milo.jpg';import TehManis from '../assets/img/Warkop/teh manis.jpg';import TehTarik from '../assets/img/Warkop/teh tarik susu.jpg';import TehTawar from '../assets/img/Warkop/teh tawar.jpg';

const Menu=()=>{
    useEffect(()=>{
        const allMenus = document.getElementsByClassName('menu-card');
        Array.from(allMenus).forEach((element)=>{
            element.style.display = 'flex';
        });
    }, []);
    //allcategories
    const showAllMenu=()=>{
        const allMenus = document.getElementsByClassName('menu-card');
        Array.from(allMenus).forEach((element)=>{
            element.style.display = 'flex';
        });
    };
    //Drinks categories
    const showAllDrinks=()=>{
        const allMenus = document.getElementsByClassName('menu-card');
        const drinks = document.getElementsByClassName('drinks');
        Array.from(allMenus).forEach((element)=>{
            element.style.display = 'none';
        });
        Array.from(drinks).forEach((element)=>{
            element.style.display = 'flex';
        });
    }
    //food categories
    const showAllFoods=()=>{
        const allMenus = document.getElementsByClassName('menu-card');
        const foods = document.getElementsByClassName('foods');
        Array.from(allMenus).forEach((element)=>{
            element.style.display = 'none';
        });
        Array.from(foods).forEach((element)=>{
            element.style.display = 'flex';
        });
    }
    //signature categories
    const showAllSignature=()=>{
        const allMenus = document.getElementsByClassName('menu-card');
        const signatures = document.getElementsByClassName('category-signature');
        Array.from(allMenus).forEach((element)=>{
            element.style.display = 'none';
        })
        Array.from(signatures).forEach((element)=>{
            element.style.display = 'flex';
        })
    }
    //coffee categories
    const showAllCoffee=()=>{
        const allMenus = document.getElementsByClassName('menu-card');
        const coffees = document.getElementsByClassName('category-coffee');
        Array.from(allMenus).forEach((element)=>{
            element.style.display = 'none';
        })
        Array.from(coffees).forEach((element)=>{
            element.style.display = 'flex';
        })
    }
    //sumur categories
    const showAllSumur=()=>{
        const allMenus = document.getElementsByClassName('menu-card');
        const sumurs = document.getElementsByClassName('category-sumur');
        Array.from(allMenus).forEach((element)=>{
            element.style.display = 'none';
        })
        Array.from(sumurs).forEach((element)=>{
            element.style.display = 'flex';
        })
    }
    //warkop categories
    const showAllWarkop=()=>{
        const allMenus = document.getElementsByClassName('menu-card');
        const warkop = document.getElementsByClassName('category-warkop');
        Array.from(allMenus).forEach((element)=>{
            element.style.display = 'none';
        })
        Array.from(warkop).forEach((element)=>{
            element.style.display = 'flex';
        })
    }
    //camilan categories
    const showAllCamilan=()=>{
        const allMenus = document.getElementsByClassName('menu-card');
        const camilan = document.getElementsByClassName('category-cemilan');
        Array.from(allMenus).forEach((element)=>{
            element.style.display = 'none';
        })
        Array.from(camilan).forEach((element)=>{
            element.style.display = 'flex';
        })
    }
    //nasgor categories
    const showAllNasgor=()=>{
        const allMenus = document.getElementsByClassName('menu-card');
        const nasgor = document.getElementsByClassName('category-nasgor');
        Array.from(allMenus).forEach((element)=>{
            element.style.display = 'none';
        })
        Array.from(nasgor).forEach((element)=>{
            element.style.display = 'flex';
        })
    }

    return(
        <>
            <section className="menu">
                <h2 className='section-title'>Menu <br/><span>Ngobrol Ngopi Diskusi</span></h2>
                <div className='filter'>
                    {/* <button className='filter-btn sorting'>
                        Sort A to Z
                    </button> */}
                    Categories:
                    <div className='filter-container'>
                        <button className='filter-btn' onClick={showAllMenu}>All</button>
                        <button className='filter-btn' onClick={showAllDrinks}>Drinks</button>
                        <button className='filter-btn' onClick={showAllFoods}>Foods</button>
                        <button className='filter-btn' onClick={showAllSignature}>Signature</button>
                        <button className='filter-btn' onClick={showAllCoffee}>Coffee</button>
                        <button className='filter-btn' onClick={showAllSumur}>Sumur</button>
                        <button className='filter-btn' onClick={showAllWarkop}>Warkop</button>
                        <button className='filter-btn' onClick={showAllCamilan}>Camilan</button>
                        <button className='filter-btn' onClick={showAllNasgor}>Nasi<span>_</span>Goreng</button>
                    </div>
                </div>

                <div className='menu-card-container'>
                    <div className='menu-card category-warkop drinks'>
                        <img src={Mineral} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Air Mineral</div>
                            <div className='menu-card-price'>Rp. 5.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-warkop drinks'>
                        <img src={Cappucino} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Cappucino</div>
                            <div className='menu-card-price'>Rp. 12.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-coffee drinks'>
                        <img src={CoffeBeer} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Coffee Beer</div>
                            <div className='menu-card-price'>Rp. 20.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-coffee drinks'>
                        <img src={CoffeeTubruk} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Coffee Tubruk</div>
                            <div className='menu-card-price'>Rp. 14.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-coffee drinks'>
                        <img src={CoffeeV60} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Coffee V60</div>
                            <div className='menu-card-price'>Rp. 20.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-warkop drinks'>
                        <img src={Josu} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Ekstrajos Susu</div>
                            <div className='menu-card-price'>Rp. 12.000,-</div>
                        </div> 
                    </div> 
                    <div className='menu-card category-cemilan foods'>
                        <img src={Indomie} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Indomie</div>
                            <div className='menu-card-price'>Rp. 10.000,-</div>
                        </div>
                    </div> 
                    <div className='menu-card category-coffee drinks'>
                        <img src={JapaneseCoffee} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Japanese Iced Coffe</div>
                            <div className='menu-card-price'>Rp. 20.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-coffee drinks'>
                        <img src={KopiLestari} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Kopi Lestari</div>
                            <div className='menu-card-price'>Rp. 18.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-coffee drinks'>
                        <img src={KopiArabica} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Kopi Tubruk Arabica</div>
                            <div className='menu-card-price'>Rp. 16.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-coffee drinks'>
                        <img src={KopiRobusta} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Kopi Tubruk Robusta</div>
                            <div className='menu-card-price'>Rp. 10.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-warkop drinks'>
                        <img src={Kukubima} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Kukubima</div>
                            <div className='menu-card-price'>Rp. 12.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-warkop drinks'>
                        <img src={LemonTea} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Lemon Tea</div>
                            <div className='menu-card-price'>Rp. 12.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-signature drinks'>
                        <img src={LycheeeTea} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Lychee Tea</div>
                            <div className='menu-card-price'>Rp. 18.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-coffee drinks'>
                        <img src={Mazagran} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Mazagran</div>
                            <div className='menu-card-price'>Rp. 25.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-warkop drinks'>
                        <img src={Milo} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Milo</div>
                            <div className='menu-card-price'>Rp. 12.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-signature drinks'>
                        <img src={MiloBanana} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Milo Banana</div>
                            <div className='menu-card-price'>Rp. 20.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-nasgor foods'>
                        <img src={NasgorKampung} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Nasi Goreng Kampung</div>
                            <div className='menu-card-price'>Rp. 22.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-nasgor foods'>
                        <img src={NasgorLumut} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Nasi Goreng Lumut</div>
                            <div className='menu-card-price'>Rp. 22.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-cemilan foods'>
                        <img src={Piscok} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Pisang Cokelat Keju Susu</div>
                            <div className='menu-card-price'>Rp. 18.000,-</div>
                        </div>
                    </div>
                    <div className='menu-card category-cemilan foods'>
                        <img src={Rotbak} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Roti Bakar</div>
                            <div className='menu-card-price'>Rp. 18.000,-</div>
                        </div>
                    </div>
                    <div className='menu-card category-cemilan foods'>
                        <img src={Rujak} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Rujak Cireng</div>
                            <div className='menu-card-price'>Rp. 16.000,-</div>
                        </div>
                    </div>
                    <div className='menu-card category-signature drinks'>
                        <img src={SodaGembira} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Soda Gembira</div>
                            <div className='menu-card-price'>Rp. 16.000,-</div>
                        </div> 
                    </div> 
                    <div className='menu-card category-sumur drinks'>
                        <img src={SumurAvocado} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Susu Murni Avocado</div>
                            <div className='menu-card-price'>Rp. 14.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-sumur drinks'>
                        <img src={SumurBanana} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Susu Murni Banana</div>
                            <div className='menu-card-price'>Rp. 14.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-sumur drinks'>
                        <img src={SumurBubble} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Susu Murni Bubble Gum</div>
                            <div className='menu-card-price'>Rp. 14.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-sumur drinks'>
                        <img src={SumurChoco} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Susu Murni Choco</div>
                            <div className='menu-card-price'>Rp. 14.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-sumur drinks'>
                        <img src={SumurDurian} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Susu Murni Durian</div>
                            <div className='menu-card-price'>Rp. 14.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-sumur drinks'>
                        <img src={SumurGreenTea} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Susu Murni Green Tea</div>
                            <div className='menu-card-price'>Rp. 14.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-sumur drinks'>
                        <img src={SumurMango} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Susu Murni Mango</div>
                            <div className='menu-card-price'>Rp. 14.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-sumur drinks'>
                        <img src={SumurMelon} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Susu Murni Melon</div>
                            <div className='menu-card-price'>Rp. 14.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-sumur drinks'>
                        <img src={SumurStrawberry} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Susu Murni Strawberry</div>
                            <div className='menu-card-price'>Rp. 14.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-sumur drinks'>
                        <img src={SumurTiramisu} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Susu Murni Tiramisu</div>
                            <div className='menu-card-price'>Rp. 14.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-sumur drinks'>
                        <img src={SumurRedVel} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Susu Murni Red Velvet</div>
                            <div className='menu-card-price'>Rp. 14.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-warkop drinks'>
                        <img src={TehManis} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Teh Manis</div>
                            <div className='menu-card-price'>Rp. 8.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-warkop drinks'>
                        <img src={TehTarik} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Teh Tarik Susu</div>
                            <div className='menu-card-price'>Rp. 12.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-warkop drinks'>
                        <img src={TehTawar} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Teh Tawar</div>
                            <div className='menu-card-price'>Rp. 5.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-coffee drinks'>
                        <img src={VietDrip} alt=''/>
                        <div className='menu-card-text'>
                                <div className='menu-card-title'>Vietnam Drip</div>
                            <div className='menu-card-price'>Rp. 20.000,-</div>
                        </div> 
                    </div>   
                    <div className='menu-card category-signature drinks'>
                        <img src={YakultLemon} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Yakult Lemonade</div>
                            <div className='menu-card-price'>Rp. 18.000,-</div>
                        </div> 
                    </div>
                    <div className='menu-card category-signature drinks'>
                        <img src={YakultLychee} alt=''/>
                        <div className='menu-card-text'>
                            <div className='menu-card-title'>Yakult Lychee</div>
                            <div className='menu-card-price'>Rp. 18.000,-</div>
                        </div> 
                    </div>
                </div>
            </section>
        </>
    )
};

export default Menu;