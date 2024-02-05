import React from 'react'
import { useState , createContext,useEffect } from 'react'
import dater from "./Data.json"
import daters from "./Acces.json"
import exclusiv from "./Exclusiv.json"
import apple from "./Apple.json"
import tablet from "./Tablete.json"
import nouts  from "./Nout.json"
import gads from "./Gadjet.json"
import telik from "./Telik.json"


export const Conte = createContext()
const Context = ({children}) => {
    const[date , SetDate] = useState(dater)
    const[data , SetData] = useState(daters)
    const[dats , SetDats] = useState(exclusiv,apple)
    const[apples , SetApples] = useState(apple)
    const[tab , SetTab] = useState(tablet)
    const[nout , SetNout] = useState(nouts)
    const[gadj , SetGadj] = useState(gads)
    const[tel , SetTel] = useState(telik)
    // ATENTIE CART !!! 
    // Creem o constanta cu numele de cart si SetCart care va raspunde de cart si de setarea lui , aceasta varibila va fi de tip useState, avem nevoie sa salvam produsele in browserul nostru prin localstorage, care raspunde de salvarea a datelor local, Prin json.PARSE VOM converta datele noatre in formatul lor original, aceste date initial sunt sub forma de caractere

    // || + "cart" = II atribuim in valoare de localstorage, o variabila de "cart" pentru a indica campul in care vor fi salvate datele noastre sub aceasta denumire, || = inseamna in caz contrar nu vom avea denumirea de cart datele vor fi salvate sub forma unui tablou gol


const[cart, SetCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

        useEffect(()=> {
          localStorage.setItem("cart", JSON.stringify(cart))
        }, [cart])

        // Creem functia de adaugare in cos a produsului, 
        // adaugam id adica ATENTIE!! in cazul nostru id = pagina de telefoane, vom avea nevoie de id unui a paginei de produse din JSON, poate fi id de a, t etc/

        // Creem o variabila de product pentru produse folosind si variabila de useState care in cazul nostru raspunde de o pagina anumita de produse , in cazul nostru variabila de date raspunde de pagina de telefoane, deci vom face functionalul de adaugare in cos pentru telefoane, prin functia de find = vom cauta elementul nostru care va fi urmatoarea conditie, daca elementul de obj va trimite valoare de obj.id unde valoarea va fi egala cu un id unic al produsului, id poate fi denumit in orice element care poate fi unic pentru un produs 

        // Creem o alta variabila de cart product unde verificam daca avem produsul in cos, verificam prin if daca exista cartProduct , facem verificarea unde vom Seta variabila de cart care prin functia map va cauta elementul din tablou, in care valoarea va fi egala cu id , in acest caz vom adauga ... in parametrul de obj cantitatea produsului care va fi marita cu 1 , adica la apasare vom trimite un produs in cos, in caz contrat vom returna obiectul gol , si rezulta ca prin ultima verificare vom adauga in cosul nostru produsul cu cantitatea 1, Prin acest cod interactionam cu pagina produselor prin functia addToCart care va adauga produsul in cos, si de afisarea produsului in cos



        const addToCart = (id) => {
          const product = date.find(obj => obj.id === id)

          const cartProduct = cart.find(obj => obj.id === id)
          if (cartProduct) {
            SetCart(cart.map(obj => {
                if (obj.id === cartProduct.id) {
                    return { ...obj, quantity: obj.quantity + 1 }
                } else {
                    return obj
                }
            }))
        } else {
            SetCart([...cart, { ...product, quantity: 1 }])
        }

// Setam adaugarea in cos pentru accesorii ATENTIE AVEM NEVOIE DE ALTA FUNCTIE DE ADAUGARE IN COS PENTRU CA PRODUSUL NOSTRU DIN PAGINA DIFERITA SA SE ADAUGE IN COS 
      }

      const addToCart2 = (i) => {
        const product2 = data.find(obj => obj.i === i)
        
                const cartProduct2 = cart.find(obj => obj.i === i)
                if (cartProduct2) {
                  SetCart(cart.map(obj => {
                      if (obj.i === cartProduct2.i) {
                          return { ...obj, quantity: obj.quantity + 1 }
                      } else {
                          return obj
                      }
                  }))
              } else {
                  SetCart([...cart, { ...product2, quantity: 1 }])
              }
        
                }
// Apple Add to cart 

                const addToCart3 = (a) => {
                  // Verificam daca produsul exista si valoarea lui este = t = id

                  const product3 = apples.find(obj => obj.a === a)
                  // Verificam daca id produsului exista in cos 
                const cartProduct3 = cart.find(obj => obj.a === a)
                if(cartProduct3) {
                  // Daca exista in cos setam variabila de cart unde vom trimite parametrul nostru de obj sa faca alta verificare, 
                  SetCart(cart.map(obj => {
                      // daca id produsuil este egal cu id produsului din cos 
                    if(obj.a === cartProduct3.a){
// Adaugam in obj un camp de quantity, care va fi + 1 = Adica vom adauga in cos la apasarea butonului cate un produs
                      return{...obj , quantity: obj.quantity + 1}
                    } else {
                      return obj
                    }

                    // In caz contrar ca produsul este adaugat vom seta variabila de cart unde in variabila de produs vom adauga cantitatea de 1 
                  }))
                } else {
                  SetCart([...cart, {...product3, quantity: 1}])
                }
                }



                // Exclusiv Add to cart


const addToCart4 = (e) => {
  const product4 = dats.find(obj => obj.e === e)
  
  const cartProduct4 = cart.find(obj => obj.e === e)
  if(cartProduct4) {
    SetCart(cart.map(obj => {
      if(obj.e === cartProduct4.e){
        return{...obj, quantity: obj.quantity + 1}
      } else {
        return obj
      }
    }))
  } else {
    SetCart([...cart, {...product4, quantity: 1}])
  }
}
              
// Functinalul Cart Pentru tablete

const addToCart5 = (t) => {
  const product5 = tab.find(obj => obj.t === t)

  const cartProduct5 = cart.find(obj => obj.t === t)
  if(cartProduct5) {
  SetCart(cart.map(obj => {
    if(obj.t === cartProduct5.t) {
      return{...obj, quantity: obj.quantity + 1}
    } else {
      return obj
    }
  }))
  } else {
    SetCart([...cart, {...product5, quantity: 1}])
  }
}


// Gadjeturi Add to cart


const addToCart6 = (g) => {
  const product6 = gadj.find(obj => obj.g === g )

  const cartProduct6 = cart.find(obj => obj.g === g)
  if(cartProduct6) {
    SetCart(cart.map(obj=> {
    if(obj.g === cartProduct6.g){
      return{...obj, quantity: obj.quantity + 1}
    } else {
      return obj
    }
  }))
  } else {
    SetCart([...cart, {...product6, quantity: 1}])
  }
}



// LAPTOPURI ADD TO CART 

const addToCart7 = (n) => {
  const product7 = nout.find(obj => obj.n === n)

  const CartProduct7 = cart.find(obj => obj.n === n)

  if(CartProduct7) {
    SetCart(cart.map(obj=>{
      if(obj.n === CartProduct7.n){
        return{...obj, quantity: obj.quantity + 1}
      } else {
        return obj
      }
    }))
  } else {
    SetCart([...cart, {...product7, quantity: 1}])
  }
}


// Televizoare ADD TO CART 

const addToCart8 = (h) => {
  const product8 = tel.find(obj=>obj.h === h)

  const CartProduct8 = cart.find(obj=>obj.h === h)
  if(CartProduct8){
    SetCart(cart.map(obj=>{
      if(obj.h === CartProduct8.h){
        return{...obj, quantity: obj.quantity + 1}
      } else {
        return obj
      }
    }))
  } else {
    SetCart([...cart, {...product8, quantity:1}])


  }
}




        
    //  Adaugam functia de cart in conte.Provider pentru a putea lucra cu cosul nostru


  
  return (
<Conte.Provider value={{date: date, data:data, dats: dats, apples: apples, tab: tab, nout: nout, gadj: gadj, tel: tel, cart: cart, addToCart: addToCart, SetCart: SetCart, addToCart2: addToCart2, addToCart3 : addToCart3, addToCart4: addToCart4, addToCart5: addToCart5, addToCart6: addToCart6, addToCart7: addToCart7, addToCart8: addToCart8}}>
    {children}
</Conte.Provider>
  )
}

export default Context