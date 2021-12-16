import "./ProductPolicies.css";

function ProductPolicies(props) {

    const { rules, sanity, cancellationPolicy } = props;

    return (
        <section className="product-policies">
            <h2 className="title-product-detail">¿Qué tienes que saber?</h2>
            <div className="line-separation"></div>
            <div className="policies-container">
                <div className="product-rules-container">
                    <h3 className="product-rules-title">Normas de la casa</h3>
                    {rules.map(rule => <p className="product-rule-item" key={rule}>{rule}</p>
                    )}
                </div>
                <div className="product-rules-container">
                    <h3 className="product-rules-title">Salud y seguridad</h3>
                    {sanity.map(rule => <p className="product-rule-item" key={rule}>{rule}</p>
                    )}
                </div>
                <div className="product-rules-container">
                    <h3 className="product-rules-title">Política de cancelación</h3>
                    {cancellationPolicy.map(rule => <p className="product-rule-item" key={rule}>{rule}</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ProductPolicies;