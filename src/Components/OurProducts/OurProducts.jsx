import React, { useEffect, useState } from 'react'
import Cold1 from './Images/Medicines/cold/Cold1.png'
import Cold2 from './Images/Medicines/cold/Colde2.jpg'
import Cold3 from './Images/Medicines/cold/Cold3.png'
import Cold4 from './Images/Medicines/cold/Cold4.jpg'
import Cold5 from './Images/Medicines/cold/Cold5.png'
import Cough1 from './Images/Medicines/cough/Cough1.png'
import Cough2 from './Images/Medicines/cough/Cough2.png'
import Cough3 from './Images/Medicines/cough/Cough3.png'
import Cough4 from './Images/Medicines/cough/Cough4.png'
import Cough5 from './Images/Medicines/cough/Cough5.png'
import Fever1 from './Images/Medicines/fever/Fever1.png'
import Fever2 from './Images/Medicines/fever/Fever2.png'
import Fever3 from './Images/Medicines/fever/Fever3.png'
import Fever4 from './Images/Medicines/fever/Fever4.png'
import Fever5 from './Images/Medicines/fever/Fever5.png'
import Head1 from './Images/Medicines/headache/Head1.png'
import Head2 from './Images/Medicines/headache/Head2.png'
import Head3 from './Images/Medicines/headache/Head3.png'
import Head4 from './Images/Medicines/headache/Head4.png'
import Head5 from './Images/Medicines/headache/Head5.png'
import Pain1 from './Images/Medicines/stomach pain/Pain1.png'
import Pain2 from './Images/Medicines/stomach pain/Pain2.png'
import Pain3 from './Images/Medicines/stomach pain/Pain3.png'
import Pain4 from './Images/Medicines/stomach pain/Pain4.png'
import Pain5 from './Images/Medicines/stomach pain/Pain5.png'
import './Style.css'
import { Carousel } from 'flowbite-react';

import { NavLink } from 'react-router-dom'
import { useMatch, Route, Routes } from 'react-router-dom';
const WelocomeProducts=[
  {
    img: Cold1,
    name: "Cetrizine",
    price: '79',
    star: '4.3',
    data:"Cetirizine is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching. It works by blocking a certain natural substance (histamine) that your body makes during an allergic reaction.Cetirizine does not prevent hives or prevent/treat a serious allergic reaction (such as anaphylaxis)."
  }
  ,
  {
    img:Cold2,
    name: "Oxymetazoline",
    price: '69',
    star: '4.0',
    data:"Oxymetazoline nasal spray is used to relieve nasal discomfort caused by colds, allergies, and hay fever. It is also used to relieve sinus congestion and pressure. Oxymetazoline nasal spray should not be used to treat children younger than 6 years of age unless it is recommended by a doctor. Children 6 to 12 years of age should use oxymetazoline nasal spray carefully and under adult supervision. Oxymetazoline is in a class of medications called nasal decongestants. It works by narrowing the blood vessels in the nasal passages.",
  },
  {
    img: Cough3,
    name: "Benadryl",
    price: '90',
    star: '5.0',
    data:"Benadryl Syrup is used in the treatment of cough. It relieves allergy symptoms such as runny nose, stuffy nose, sneezing, watery eyes, and congestion or stuffiness. It also thins mucus in the nose, windpipe, and lungs, making it easier to cough out.Benadryl Syrup is taken with or without food in a dose and duration as advised by the doctor. The dose you are given will depend on your condition and how you respond to the medicine.",
  }
]
const Products = [[
  {
    img: Cold1,
    name: "Cetrizine",
    price: '79',
    star: '4.3'
  },
  {
    img: Cold2,
    name: "Oxymetazoline",
    price: '69',
    star: '4.0'
  },
  {
    img: Cold3,
    name: "Paracetamol",
    price: '49',
    star: '4.9'
  },
  {
    img: Cold4,
    name: "Phenylephrine",
    price: '19',
    star: '4.7'
  },
  {
    img: Cold5,
    name: "Pseudoephedrine",
    price: '99',
    star: '3.9'
  },
], [
  {
    img: Fever1,
    name: "Amoxycillin",
    price: '15',
    star: '3.2'
  },
  {
    img: Fever2,
    name: "Asozen",
    price: '29',
    star: '3.0'
  }, {
    img: Fever3,
    name: "MefJet",
    price: '45',
    star: '4.9'
  }, {
    img: Fever4,
    name: "Nimesulide",
    price: '17',
    star: '4.2'
  }, {
    img: Fever5,
    name: "Parazex",
    price: '24',
    star: '4.7'
  },
], [
  {
    img: Cough1,
    name: "Acetaminophen",
    price: '39',
    star: '3.0'
  },
  {
    img: Cough2,
    name: "Amitriptyline",
    price: '49',
    star: '4.0'
  },
  {
    img: Cough3,
    name: "Benadryl",
    price: '90',
    star: '5.0'
  },
  {
    img: Cough4,
    name: "Robitussin",
    price: '19',
    star: '3.4'
  },
  {
    img: Cough5,
    name: "Tussionex",
    price: '9',
    star: '3.9'
  },
], [
  {
    img: Head1,
    name: "Dart",
    price: '60',
    star: '5.0'
  }, {
    img: Head2,
    name: "Gomygraine",
    price: '69',
    star: '4.8'
  }, {
    img: Head3,
    name: "Saridon",
    price: '45',
    star: '4.4'
  }, {
    img: Head4,
    name: "Crocin",
    price: '19',
    star: '4.6'
  }, {
    img: Head5,
    name: "Naprox",
    price: '79',
    star: '3.9'
  },
], [
  {
    img: Pain1,
    name: "Antacid",
    price: '89',
    star: '2.9'
  }, {
    img: Pain2,
    name: "Esomeprazole",
    price: '29',
    star: '4.2'
  }, {
    img: Pain3,
    name: "ENO",
    price: '75',
    star: '5.0'
  }, {
    img: Pain4,
    name: "Pepgram",
    price: '99',
    star: '4.8'
  }, {
    img: Pain5,
    name: "Simethicone",
    price: '89',
    star: '3.7'
  },
]]
export default function OurProducts() {
  const check = useMatch('ourproducts/addcart');

 
  const Buybtn=()=>{
    alert("Your Order is Placed")
  }
  useEffect(() => {
  
    // const cards = document.querySelectorAll('.card');
   
    
    const shopping_cart = document.querySelector('.shopping-cart');
    const cart_btns = document.querySelectorAll('.add-to-cart');
    
   
    
    
    
    
    // Fly To Shopping Cart Effect
    
    for (const cart_btn of cart_btns) {
        cart_btn.onclick = (e) => {
    
            shopping_cart.classList.add('active');
    
            let product_count = Number(shopping_cart.getAttribute('data-product-count')) || 0;
            shopping_cart.setAttribute('data-product-count', product_count + 1);
    
            // finding first grand parent of target button 
            let target_parent = e.target.parentNode.parentNode.parentNode;
            target_parent.style.zIndex = "100";
            // Creating separate Image
            let img = target_parent.querySelector('img');
            let flying_img = img.cloneNode();
            flying_img.classList.add('flying-img');
    
            target_parent.appendChild(flying_img);
    
            // Finding position of flying image
    
            const flying_img_pos = flying_img.getBoundingClientRect();
            const shopping_cart_pos = shopping_cart.getBoundingClientRect();
    
            let data = {
                left: shopping_cart_pos.left - (shopping_cart_pos.width / 2 + flying_img_pos.left + flying_img_pos.width / 2),
                top: shopping_cart_pos.bottom - flying_img_pos.bottom + 30
            }
    
            console.log(data.top);
    
            flying_img.style.cssText = `
                                    --left : ${data.left.toFixed(2)}px;
                                    --top : ${data.top.toFixed(2)}px;
                                    `;
    
    
            setTimeout(() => {
                target_parent.style.zIndex = "";
                target_parent.removeChild(flying_img);
                shopping_cart.classList.remove('active');
            }, 1000);
        } } },[]);

  const [childdata, setchilddata] = useState([])
  const [CartProducts, setCartProducts] = useState([])
  const cartProducts = childdata

  // Iterate through each array
  // Add other arrays here

  const ViewCart = () => {
    const matchedData = [];
    Products.forEach((array) => {
      // Iterate through names to match in each array
      cartProducts.forEach((name) => {
        const matchingObject = array.find((obj) => obj.name === name);
        if (matchingObject) {
          matchedData.push(matchingObject);
        }

      });
    });
    console.log(matchedData)
    setCartProducts(matchedData);

  }





  return (
    <>
      {
        check ? <Routes>
          <Route
            path="addcart"
            element={<Cart data={{ Products:CartProducts}} />}
          />
          {/* Other child routes */}
        </Routes> : <div className='body1 '>

       <div className='h-[30rem] bg-[#a5f3fc]'>
       <Carousel className='overflow-hidden' >
              {
                WelocomeProducts.map((ele, index) => {
                  return (
                  <div className='flex justify-center items-center w-full h-[28rem]'>
                    <div className='flex relative w-[70%] h-[28rem] '>
                    <div className='flex  justify-center items-center'>
                    <img className='h-[20rem] w-[86rem]' src={ele.img} alt={ele.name} />
                    
                    </div>
                    <div className=' flex flex-col justify-center items-center'>
                        <p className='text-4xl p-8 font-extrabold'>{ele.name}</p>
                        <p className='text-xl pl-[1rem] font-[500]'>{ele.data}</p>
                        <div className=" flex items-center justify-center gap-5 m-[1rem]">
                              <div className="card-star ">
                                <span className="rating-value ">{ele.star}</span>
                                <span className="star">&#9733;</span>
                              </div>
                              <p className="card-price">₹{ele.price}</p>
                            </div>
                            <div className=" flex justify-center items-center translate-y-0">
                              <button className="btn2 btn-success"  onClick={()=>Buybtn()}>Buy Now</button>
                              {childdata.indexOf(ele.name) === -1 ? <button value={ele.name} className="btn2 btn-border add-to-cart" id='Cart' onClick={() => {
                                setchilddata([...childdata, ele.name])
                              }} >Add to Cart</button> : <button value={ele.name} onClick={() => ViewCart()} className="btn2 btn-border add-to-cart" ><NavLink className={({ isActive }) => isActive ? "activeNav" : null} to="addcart" >View Cart</NavLink></button>}

                            </div>
                    </div>
                  </div>
                  </div>
                  
                  )
                })
              }

            </Carousel>
       </div>
          {
            Products.map((element, index) => {
              return (
                <section key={index} className="slider w-full">
                  {
                    element.map((ele, index) => {
                      return (
                        <div key={index} className="card ">
                          <div className="card-content">
                            <img src={ele.img} alt="" className="card-img" />
                            <h1 className="card-title">{ele.name}</h1>
                            <div className="card-body">
                              <div className="card-star">
                                <span className="rating-value ">{ele.star}</span>
                                <span className="star">&#9733;</span>
                              </div>
                              <p className="card-price">₹{ele.price}</p>
                            </div>
                            <div className="card-footer flex justify-center items-center">
                              <button className="btn2 btn-success"  onClick={()=>Buybtn()}>Buy Now</button>
                              {childdata.indexOf(ele.name) === -1 ? <button value={ele.name} className="btn2 btn-border add-to-cart" id='Cart' onClick={() => {
                                setchilddata([...childdata, ele.name])
                              }} >Add to Cart</button> : <button value={ele.name} onClick={() => ViewCart()} className="btn2 btn-border add-to-cart" ><NavLink className={({ isActive }) => isActive ? "activeNav" : null} to="addcart" >View Cart</NavLink></button>}

                            </div>
                            
                          </div>
                        </div>
                      )
                    })

                  }
                </section>
              )
            })
          }

          <NavLink className={({ isActive }) => isActive ? "activeNav" : null} to="addcart" > <div className="shopping-cart" data-product-count={childdata.length}>
            <span className="cart-icon"> <button onClick={()=>ViewCart()}>&#128722;</button></span>
          </div></NavLink>


        </div>
      }
    </>
  )


}
export function Cart(props) {
  const { data } = props; // Access the data prop
  let [Count,setCount]=useState(1)
  const Buybtn=()=>{
    alert("Your Order is Placed")
  }
  useEffect(()=>{if(data.Products.length!==0){
    
    const cards = document.querySelectorAll('.card');
    const right_arrow = document.querySelector('.arrow.right');
    const left_arrow = document.querySelector('.arrow.left');
   
    
    let left = 0;
    let card_size = 25.4;
    let total_card_size = cards.length * card_size - card_size * 4;
    
    if (window.matchMedia('(max-width: 768px)').matches) {
        card_size = 52;
        total_card_size = cards.length * card_size - card_size * 2;
    }
    
    left_arrow.onclick = () => {
        left -= card_size;
    
        if (left <= 0) left = 0;
        moveCards(left);
        checkArrowVisibility(left);
    }
    
    left_arrow.style.opacity = '0';
     if(data.Products.length<6){
    right_arrow.style.opacity = '0';

     }
    right_arrow.onclick = () => {
        left += card_size;
    
        if (left >= total_card_size) left = total_card_size;
        moveCards(left);
        checkArrowVisibility(left);
    }
    
    function moveCards(left) {
        for (const card of cards) {
            card.style.left = -left + "%";
        }
    }
    
    function checkArrowVisibility(pos) {
        if (pos === 0) {
            left_arrow.style.opacity = '0';
        } else {
            left_arrow.style.opacity = '1';
        }
        if (pos >= total_card_size) {
            right_arrow.style.opacity = '0';
        } else {
            right_arrow.style.opacity = '1';
        }
    }
 
  } },[])
  if(data.Products.length!==0){
    return (
      <div>
  
          <section className="slider w-full">
            {
              data.Products.map((ele, index) => {
               
                return (
                  <div key={index} className="card ">
                    <div className="card-content">
                      <img src={ele.img} alt="" className="card-img" />
                      <h1 className="card-title">{ele.name}</h1>
                      <div className="card-body">
                        <div className="card-star">
                          <span className="rating-value ">{ele.star}</span>
                          <span className="star">&#9733;</span>
                        </div>
                        <p className="card-price">₹{ele.price*Count}</p>
                      </div>
                      <div className="card-footer flex justify-center items-center">
                        <button className="btn2 btn-success" onClick={()=>Buybtn()}>Buy Now</button>
                         <div><button className='text-2xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold mr-[.75rem] px-3 hover:text-white border border-blue-500 hover:border-transparent rounded' disabled={Count<=0?true:false} onClick={()=>setCount(Count-1)}>-</button>{Count}<button className='bg-transparent text-2xl hover:bg-blue-500 text-blue-700 px-3 ml-[.75rem] font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded' onClick={()=>setCount(Count+1)}>+</button></div>
                      </div>
                     
                    </div>
                  </div>
                )
              })
  
            }
             <span className="arrow left"  >&#129120;</span>
          <span className="arrow right" >&#129122;</span>
          </section>
        
      </div>
    );
  }
  else{
    return(
      
    
       <div className='w-full h-[95vh] flex justify-center items-center'>
           { console.log(data.Products)}<NavLink to='..' className='text-3xl font-extrabold'>Cart is Empty Go Back</NavLink>
       </div>
    )
  }
}