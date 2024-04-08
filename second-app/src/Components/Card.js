function Card({ data }) {
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src={data.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">
                        <b style={{ color: 'red' }}>Price:{data.price}</b><br></br>
                        Description:{data.description}
                    </p>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </>
    );
}
export default Card;