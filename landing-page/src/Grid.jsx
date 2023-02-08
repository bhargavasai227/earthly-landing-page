import React from 'react'
import { Fade } from 'react-reveal';

function Grid() {


    return (<div>
        <div className=' underline text-center m-6'><h1 className='text-3xl opacity-90 text--red-900'>Contains</h1></div>
        <div className='grid grid-rows-5 grido justify-center align-center grid-col mx-2'>
            <Fade bottom cascade>
                <div>
                    <a href="https://www.earthly.ie/product-page/reusable-bamboo-straws"><h1 className='underline'>Reusable Bamboo Straws</h1></a>
                    <p>We collaborated with artisans in Veitnam, Earthly Organic Bamboo Straws are 100% Compostable, Vegan and BPA free. They can be reused, thrown in a compost bin, or even in your backyard. Serve with cold beverages like ice tea, cold coffee and many more. </p>
                </div>
                <div><img className='h-2/3 slid' src='https://static.wixstatic.com/media/ead566_9cbaa34eb7e94b8e8ebba3580880d70d~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_9cbaa34eb7e94b8e8ebba3580880d70d~mv2.webp' alt="bamboo img"></img></div>
                <div>
                    <a href="https://www.earthly.ie/product-page/natural-bamboo-loofah"><h1 className='underline'>Natural Bamboo Loofah</h1></a>
                    <p>Natural loofah sponges actually come from the fruits of vine-growing Luffa plants.These plants are part of the gourd family (Cucurbitaceae) making them relatives of watermelons, cucumbers and pumpkins.</p>
                </div>
                <div><img className='h-2/3' src="https://static.wixstatic.com/media/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.webp" alt="sponge"></img></div>


                <div>

                    <a href="https://www.earthly.ie/product-page/bamboo-toothbrush"><h1 className='underline'>Bamboo Toothbrush (set of 2)</h1></a>
                    <p>Earthly Bamboo Toothbrush are BPA free, Biodegradable and have charcoal infused bristles that help remove stains effectively. We guarantee your satisfaction. See for yourself!</p>
                </div>
                <div><img src="https://static.wixstatic.com/media/ead566_4508cbf965bc4b5d8fea145a89f9e3c6~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_4508cbf965bc4b5d8fea145a89f9e3c6~mv2.webp" alt="img"></img></div>
                <div>

                    <a href="https://www.earthly.ie/product-page/plant-based-containers-reusable"><h1 className='underline'>Plant Based Reusable Containers</h1></a>
                    <p>Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable containers which can be used hundreds of times.
                        Microwave safe, seal proof, and sturdy, they are perfect to store snacks or lunch.
                        Designed in USA. Tested in Germany.</p>
                </div>
                <div><img src="https://static.wixstatic.com/media/ead566_53f4426d550441a19ffaa69e7f03dafd~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_53f4426d550441a19ffaa69e7f03dafd~mv2.webp" alt="img"></img></div>
                <div>

                    <a href="https://www.earthly.ie/product-page/reusable-plant-based-cups"><h1 className='underline'>Plant Based Reusable Cups</h1></a>
                    <p>Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable cups which can be used hundreds of times.</p>
                </div>
                <div><img src="https://static.wixstatic.com/media/ead566_e1b6fd66a76d448286cc3562f6a4d290~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_e1b6fd66a76d448286cc3562f6a4d290~mv2.webp" alt="img"></img></div>

            </Fade>
        </div>
    </div>
    )
}

export default Grid