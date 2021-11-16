import ProductRUC from "./ProductRUC"

function Products({products}) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
           {products.slice(0,4).map(({id,title,price,description,category,image,rating}) => (
             <ProductRUC 
                 key={id}
                 id={id}
                 title={title}
                 description={description}
                 image={image}
                 rating={rating}
                 category={category}
                 price={price}
             />
            ))} 

            <img className='md:col-span-full'
            src="https://links.papareact.com/dyz" alt="" />

            <div className='md:col-span-2'>
            {products.slice(4,5).map(({id,title,price,description,category,image,rating}) => (
             <ProductRUC 
                 key={id}
                 id={id}
                 title={title}
                 description={description}
                 image={image}
                 rating={rating}
                 category={category}
                 price={price}
             />
            ))}
            </div>

            {products.slice(5,products.length).map(({id,title,price,description,category,image,rating}) => (
             <ProductRUC 
                 key={id}
                 id={id}
                 title={title}
                 description={description}
                 image={image}
                 rating={rating}
                 category={category}
                 price={price}
             />
            ))}
        </div>
    )
}

export default Products
