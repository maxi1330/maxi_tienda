
function Item ({item}) {
    return (
        <>
        <div class="col s8 m6 xl3 center" >
            <div class="card">
                <div class="card-image">
                    <img src={item.image}
                            alt='imagen auto'
                            height='220'/>
                    <span class="card-title">{item.title}</span>
                </div>
                <div class="card-content">
                    <p>{item.description}
                    </p><br/>
                    <p>${item.price}</p>
                </div>
                <div className="card-action center">
                    <button className="btn">Agregar al carrito</button>
                </div>
            </div>
        </div>
        </>
    );
    
}

export default Item