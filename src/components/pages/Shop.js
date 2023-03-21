import '../../dist/css/shop.css';
import React from "react";
import shop1 from  '../../dist/img/shop1.webp';
import shop2 from  '../../dist/img/shop2.webp';

const Shop = () => {
    return (
        <div className="shop container">
            <span className="wow slideInUp">CHOOSE YOUR PLAN</span>
            <h1 className="wow slideInUp">Excellent films made affordable</h1>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
            </div>
            <div className="plans">
                <div className="plan basic">
                    <h2><span className="bold">Basic </span>Plan</h2>
                    <span className="horizontal-border-bold"></span>
                    <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                    <div className="price">
                        <span className="value">$59</span>
                        <span className="monthly">/Monthly</span>
                        </div>
                    <ul>
                        <li><span className="yes">&#10004;</span>Penatibus efficitur rhoncus</li>
                        <span className="horizontal-border"></span>
                        <li><span className="yes">&#10004;</span>Ante vehicula suscipit</li>
                        <span className="horizontal-border"></span>
                        <li><span className="yes">&#10004;</span>Nulla sed sagittis nascetur</li>
                        <span className="horizontal-border"></span>
                        <li><span className="no">&#10008;</span>Dolor aliquam penatibus</li>
                        <span className="horizontal-border"></span>
                        <li><span className="no">&#10008;</span>Purus ornare imperdiet eget</li>
                    </ul>
                    <input className="btn-buy" type="submit" value="GET STARTED" />
                </div>
                <div className="plan pro">
                    <h2><span className="bold">Pro </span>Plan</h2>
                    <span className="horizontal-border-bold"></span>
                    <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                    <div className="price">
                        <span className="value">$119</span>
                        <span className="monthly">/Monthly</span>
                    </div>
                    <ul>
                        <li><span className="yes">&#10004;</span>Penatibus efficitur rhoncus</li>
                        <span className="horizontal-border"></span>
                        <li><span className="yes">&#10004;</span>Ante vehicula suscipit</li>
                        <span className="horizontal-border"></span>
                        <li><span className="yes">&#10004;</span>Nulla sed sagittis nascetur</li>
                        <span className="horizontal-border"></span>
                        <li><span className="yes">&#10004;</span>Dolor aliquam penatibus</li>
                        <span className="horizontal-border"></span>
                        <li><span className="no">&#10008;</span>Purus ornare imperdiet eget</li>
                    </ul>
                    <input className="btn-buy" type="submit" value="GET STARTED" />
                </div>
                <div className="plan advance">
                    <h2><span className="bold">Advance </span>Plan</h2>
                    <span className="horizontal-border-bold"></span>
                    <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                    <div className="price">
                        <span className="value">$199</span>
                        <span className="monthly">/Monthly</span>
                    </div>
                    <ul>
                        <li><span className="yes">&#10004;</span>Penatibus efficitur rhoncus</li>
                        <span className="horizontal-border"></span>
                        <li><span className="yes">&#10004;</span>Ante vehicula suscipit</li>
                        <span className="horizontal-border"></span>
                        <li><span className="yes">&#10004;</span>Nulla sed sagittis nascetur</li>
                        <span className="horizontal-border"></span>
                        <li><span className="yes">&#10004;</span>Dolor aliquam penatibus</li>
                        <span className="horizontal-border"></span>
                        <li><span className="yes">&#10004;</span>Purus ornare imperdiet eget</li>
                    </ul>
                    <input className="btn-buy" type="submit" value="GET STARTED" />
                </div>
            </div>
            <div className="shop-info">
                <div className="info-block">
                    <span className="title">WHY CHOOSE US</span>
                    <h2 className="wow slideInUp">Premium films made affordable</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                        luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <h3 className="wow slideInUp"><span className="orange">/</span>Great Film Production</h3>
                    <p>Consequat hac praesent urna rhoncus mi eget placerat si inceptos fermentum condimentum.</p>
                    <h3 className="wow slideInUp"><span className="orange">/</span>Creative Teamwork</h3>
                    <p>Consequat hac praesent urna rhoncus mi eget placerat si inceptos fermentum condimentum.</p>
                    <h3 className="wow slideInUp"><span className="orange">/</span>Visual Effects Expert</h3>
                    <p>Consequat hac praesent urna rhoncus mi eget placerat si inceptos fermentum condimentum.</p>
                </div>
                <div className="img-block">
                    <img className="shop1 wow zoomIn" src={shop1} alt="shop1"/>
                    <span className="square"></span>
                    <img className="shop2 wow zoomIn" src={shop2} alt="shop2"/>
                </div>
            </div>

        </div>
    )
};

export default Shop;