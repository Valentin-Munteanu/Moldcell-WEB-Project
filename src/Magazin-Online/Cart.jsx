import React from 'react'
import { Conte } from '../Context/Context'
import { useContext } from 'react';


// 2 Adaugam valorile din context, variabilile care raspund de cos, cart,Setcart


const Cart = () => {
  const{cart, SetCart} = useContext(Conte);

  // 3 Vom face o functie care va raspunde de butoanele plus si minus, de cantitatea produselor , in aceasta functie vom trimite 2 parametri id, type




  // 4 SetCart Vom seta variabila de cart, unde cart.map = trecerea peste fiecare element din tablou, unde vom crea un parametru de obj, in care vom face verificarea, daca obj.id are valoarea id atunci afisam alta verificare in care verificam prin parametrul de type care a fost dat la noi in functia de Quantity, daca avem valoarea de minus si cantitatea mai mica decat 1 atunci vom returna ...obj = Adaugarea in tablou a elementelor noi EX

  // 4a Aray1= [1,2,3]
  // Array2 =[...Array1, 4,5 ] = Array1 =[1,2,3,4,5]

  // Rezulta ca prin aceasta comanda vom scadea cantitatea un produs din cos iar prin type plus vom adauga cantitatea

  // In caz contar in care nu vom avea nimic de adaugat vom returna valoarea intitila adica daca avem 1 produs in cos, in cazul in care nu vom scadea sau nu vom adauga initila va ramane in cos doar un produs



  const Quantity =(id,type) => {
SetCart(cart.map(obj => {
  if(obj.id === id){
    if(type === "minus" && obj.quantity> 1){
      return{...obj, quantity: obj.quantity -1 }
    } else if (type === "plus"){
      return{...obj,quantity: obj.quantity + 1}
    } else {
      return obj
    }
  } else {
    return obj



  }
  
}))


  }




  // 4c Facem functia care ne va sterge produsul din cart, Creem o functie de deleteProduct unde vom trimite in functie un parametru de id , unde facem o verificare prin care vom seta variabila de cart in care vom vedea daca produsele vor coresounde cu id atunci ele vor putea fi sterse

// ATENTIE !!! PENTRU A STERGE 2 PRODUSE DIN COS AVEM NEVOIE DE MAI MULTE FUNCTII DE SETCART UNDE VOM ADAUGA FIECARE ID A PRODUSULUI IN PARTE ACEASTA IN CAZ CONTRAR LA APASAREA BUTONULUI DE "STERGE PRODUSUL" se vor sterge toate produsele din 
  const deleteProduct = (id,i,h) => {
    SetCart(cart.filter(obj => obj.id !== id))
    SetCart(cart.filter(obj => obj.i !== i))
  
    SetCart(cart.filter(obj => obj.h !== h))



    // 5 Facem afisarea elementelor, Dechidem acoladele unde verifica daca lungimea elementelor din variabila[tabloul] de cart este mai mare decat 0 atunci afisam la ecran elementele 



  }
  return (
    <div className='flex items-center justify-center flex-col gap-3'>
      {
  cart.length > 0 ? 
  
  (
    <>
    
    <div onClick={()=> SetCart([])}>
      <br />

    <button className='bg-gray-700 text-white px-3 py-1 flex items-center gap-2 text-lg rounded-md hover:bg-violet-600'>Sterge Produsele</button>
    
    </div>




    {
      cart.map(obj => (
        <div className='cart' key={obj.id}>
        
<img src={obj.image} alt="" />
<h1>{obj.brand}</h1>
<h3>{obj.add}</h3>


<p>{
  obj.quantity > 1 ?
  `${obj.quantity} x ${obj.price} MDL = ${obj.quantity * obj.price} MDL`:
   `${obj.price} MDL`


}
</p> 



<div className='quantity'>
  <button  onClick={() => Quantity(obj.id, "minus")} className={`bg-gray-700 text-white px-3 py-1 flex items-center gap-2 text-lg rounded-md hover:bg-violet-600 ${obj.quantity <= 1 ? "hidden" : ""}`}>-</button>
  <h2>{obj.quantity}</h2>
  <button className='bg-gray-700 text-white px-3 py-1 flex items-center gap-2 text-lg rounded-md hover:bg-violet-600' onClick={() => Quantity(obj.id,"plus")}>+</button>
  <br />


<br />
</div>
<br />
<div>
  {/* Atentie In acesasta functie adaugam obj.i etc  ,pentru a putea sterge fiecare produs separat, in caz contrar la apasarea pe acest buton se vor sterge toate produsele din cos   */}
  <button onClick={() => deleteProduct(obj.id,obj.i, obj.h)} className="bg-gray-700 text-white px-3 py-1 flex items-center gap-2 text-lg rounded-md hover:bg-violet-600">Șterge Produsul din coș</button>
</div>

        </div>
        
      ))
    }

    <div className='total'>
      <h1>Total</h1>
      </div>
      
      <div className='text2'>
        {
          cart.map(obj => (
            <div className='text' key={obj.id}>
              <br />
              <h1>{obj.brand}</h1>
              <h2>{obj.add}</h2>
              <p>{obj.price} MDL</p>

              <p>{obj.quantity} x {obj.price} MDL = {obj.quantity * obj.price} MDL</p>
              </div>
          ))
        }
        <h4>
          
        {
          cart.reduce((sum,obj)=> sum + (obj.quantity * obj.price), 0)
        }
        MDL  
        </h4>

        </div>


<br />
    </>
      
  )
  :

  (
<div className='total'>

  <h1>Cosul gol</h1>


</div>
  )

      
    }
    <br />
    
    </div>

  )
}

export default Cart
