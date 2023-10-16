import './work.css';

export const Work = () => {
    return (
        <div className="container">
            <div className="content">
                <h2>Our Work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="products">
                <div className="product-card">
                    <img src="product-1.jpg" alt="Product 1" />
                    <p>Trade</p>
                    <p>Lorem</p>
                    <p>ipsum</p>
                    <p>dolor</p>
                    <p>sit</p>
                    <p>amet</p>
                </div>
                <div className="product-card">
                    <img src="product-2.jpg" alt="Product 2" />
                    <p>Business</p>
                    <p>Lorem</p>
                    <p>ipsum</p>
                    <p>dolor</p>
                    <p>sit</p>
                    <p>amet</p>
                </div>
                <div className="product-card">
                    <img src="product-3.jpeg" alt="Product 3" />
                    <p>Growth</p>
                    <p>Lorem</p>
                    <p>ipsum</p>
                    <p>dolor</p>
                    <p>sit</p>
                    <p>amet</p>
                </div>
            </div>
        </div>

    )
}

export default Work;