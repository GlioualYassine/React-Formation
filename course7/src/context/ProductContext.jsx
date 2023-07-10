import { createContext , useState } from "react";

export let ProductContext = createContext()
export let ProductProvider = (({children})=>{
   
    let [products,setProducts] = useState( [
        {id : 1 , label : 'iphone 13',price : 15200},
        {id : 2 , label : 'ipad',price : 15860},
      ])

      let deleteProduct = (id)=>{
        let newlist = products.filter(prod=>prod.id!==id)
        setProducts(newlist)
      }

      let addProduct = (item)=>{
        setProducts([item, ...products])
      }
    return (
        <ProductContext.Provider value={{
            message : "salam",
            title : "bright life",
              newProduct : {
                label : "ipad 4",
                price : 3500
            },
            products,
            deleteProduct,
            addProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
})

