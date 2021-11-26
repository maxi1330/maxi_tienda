import "./ItemDetail.css";

function ItemDetail ({title, image, description, price }) {
    return (
        <>
            <div class="container">
                <div class="section">
                    <div class="row">
                        <div class="col s7">
                            <img className="imageItem center responsive-img" src={image} alt=""/>
                        </div>
                        <div class="col s5">
                            <div>
                                <h4>{title}</h4>
                                <p class="light">{description}</p>
                                <p className="priceItem">Precio: {price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail