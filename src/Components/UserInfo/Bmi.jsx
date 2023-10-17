import React, { useEffect, useState } from 'react';
import { Button} from 'flowbite-react';

function FoodAnalyzer() {
  // State to store user input
  const [foodText, setFoodText] = useState([]);
  const [count, setcount] = useState(0)
  const [nutrients, setnutrients] = useState([])
 const [spinner,setspinner]=useState(false)
  // State to store the analyzed data
  const [analyzedData, setAnalyzedData] = useState(null);

  const handleInputChange = (e) => {
    // Split the textarea value into an array of lines
    const data = e.target.value.split('\n');
    setFoodText(data);
  };

  const analyzeFood = async () => {
    try {
      // Replace 'YOUR_API_KEY' and 'YOUR_API_ID' with your actual API key and API ID
      setspinner(true)
      // console.log(true)
      const apiKey = '214703b1261b254d5b3f416d6955c273';
      const apiId = '6f8f6eca';
            
// d645afb0cdb623e31cf92a4e75f852c0
// 0f4e7e57
      // Create a JSON object representing the recipe data
      const recipeData = {
        title: 'Your Recipe Title',
        ingr: foodText, // Array of ingredients
      };

      // Construct the API URL
      const apiUrl = `https://api.edamam.com/api/nutrition-details?app_id=${apiId}&app_key=${apiKey}`;
   
      // Make a POST request using the fetch function
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response as JSON
      const jsonData = await response.json();

      // Update state with the analyzed data
      setAnalyzedData(jsonData);
      setspinner(false)
      // console.log(false)
      
    } catch (error) {
      console.error('Error analyzing food:', error);
      setspinner(false)
    alert("Your Item is Not in Our data base or entered incorrect item")

    }
  };

  useEffect(() => {
    // setspinner(true)
    let nutrientsArray = [];
    if (analyzedData && analyzedData.ingredients[0].parsed[0].nutrients) {
      nutrientsArray = Object.keys(analyzedData.ingredients[count].parsed[0].nutrients).map((nutrientKey) => {
        const nutrient = analyzedData.ingredients[count].parsed[0].nutrients[nutrientKey];
        return {
          key: nutrientKey,
          label: nutrient.label,
          quantity: nutrient.quantity,
          unit: nutrient.unit
        };
      });
    }
    setnutrients(nutrientsArray)
  }, [count, analyzedData])


 
  if(spinner){
return(
  
   <>
  <div className="flex justify-center w-full h-[91.9vh] items-center space-x-2">
  <div aria-label="Loading..." role="status">
    <svg className="animate-spin  w-[15rem] h-[15rem] stroke-slate-500" viewBox="0 0 256 256">
      <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
      </line>
      <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
      </line>
      <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
      </line>
      <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
      </line>
      <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
      </line>
      <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
      </line>
      <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
      </line>
      <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
      </line>
    </svg>
  </div>
  <span className="text-2xl font-medium text-slate-500">Loading...</span>
</div>

</>

)
  }
  else{
    return(
      <div className='w-full  relative flex justify-center  '>
        <div className='w-[60%]   flex flex-col  items-center '>
          <p className='m-[2rem] text-5xl font-extrabold'>Nutrition Analyser</p>
          <textarea
            className='w-[40rem]'
            placeholder="Enter food ingredients with measurments (one per line) like 1 cup chicken"
            value={foodText.join('\n')} // Join the array back into a newline-separated string
            rows='5'
            onChange={handleInputChange}
          />
          <Button
            gradientDuoTone="cyanToBlue"
            onClick={analyzeFood}
            className='mx-auto my-3 px-[1rem]'
            type='submit'
          >
            Analyze
          </Button>
          {analyzedData && (
            <>
              <div className='flex'>
                <div className="w-[10rem] mx-[1rem] h-[10rem] bg-[aliceblue] my-[1rem] rounded-lg  text-center">
                  <span className="block text-xl font-extrabold text-red-700  mt-[2rem]">{analyzedData.calories}</span>
                  <h4 className="text-base text-blue-900 uppercase pt-[1rem]"> Total Calories</h4>
                </div>
                <div className="w-[10rem]  mx-[1rem] h-[10rem] bg-[aliceblue] my-[1rem] rounded-lg text-center">
                  <span className="block text-xl font-extrabold text-red-700  mt-[2rem]">{analyzedData.totalCO2Emissions}</span>
                  <h4 className="text-base text-blue-900 uppercase pt-[1rem]"> TotalCO2Emissions</h4>
                </div>
                <div className="w-[10rem] mx-[1rem] h-[10rem] bg-[aliceblue] my-[1rem] rounded-lg text-center">
                  <span className="block text-xl font-extrabold text-red-700  mt-[2rem]">{analyzedData.co2EmissionsClass}</span>
                  <h4 className="text-base text-blue-900 uppercase pt-[1rem]"> co2EmissionsClass</h4>
                </div>
                <div className="w-[10rem]  mx-[1rem] h-[10rem] bg-[aliceblue] my-[1rem] rounded-lg text-center">
                  <span className="block text-xl font-extrabold text-red-700  mt-[2rem]">{analyzedData.totalWeight}</span>
                  <h4 className="text-base text-blue-900 uppercase pt-[1rem]"> Total Weight</h4>
                </div>
              </div>
              <table className="min-w-full text-left text-sm font-light border">
                <thead className="border-[4px] font-medium border-black">
                  <tr>
                    <th scope="col" className="px-6 text-[1.5rem] font-extrabold py-4">ID</th>
                    <th scope="col" className="px-6 text-[1.5rem] font-extrabold py-4">Food Name</th>
                    <th scope="col" className="px-6 text-[1.5rem] font-extrabold py-4">Quantity</th>
                    <th scope="col" className="px-6 text-[1.5rem] font-extrabold py-4">Measure</th>
                    <th scope="col" className="px-6 text-[1.5rem] font-extrabold py-4">weight</th>
                    <th scope="col" className="px-6 text-[1.5rem] font-extrabold py-4">Nutritions</th>
  
                  </tr>
                </thead>
                <tbody className='donorTableBody' id='donorTableBody'>
                  {analyzedData.ingredients.map((ingredient, index) => (
                    <tr key={index}>
                      <td className='px-6 text-[1rem] font-extrabold py-1'>{index + 1}</td>
                      <td className='px-6 text-[1rem] first-letter:capitalize font-extrabold py-1'>{ingredient.parsed[0].food}</td>
                      <td className='px-6 text-[1rem] font-extrabold py-1'>{ingredient.parsed[0].quantity}</td>
                      <td className='px-6 text-[1rem] first-letter:capitalize font-extrabold py-1'>{ingredient.parsed[0].measure}</td>
                      <td className='px-6 text-[1rem] font-extrabold py-1'>{ingredient.parsed[0].weight}</td>
                      <td className='px-6 text-[1rem] font-extrabold py-1'>   <Button gradientDuoTone="cyanToBlue" onClick={() => {
                        setcount(index)
                        // console.log(nutrients)
                        // console.log(count)
                      }} className='mx-auto my-3 px-[1rem]' type='submit'>
                        Check Nutritions
                      </Button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            
            </>
          )}
        </div>
         {
          analyzedData&&<div className='w-[40%] mt-[1rem] inline-block h-[91.9vh] overflow-y-scroll'>
          <p className='w-full text-5xl text-center py-[1rem]'>Nutritions of {analyzedData.ingredients[count].parsed[0].food}</p>
           <table className=" min-w-full  text-left text-sm font-light border">
             <thead className="border-[4px] relative font-medium border-black">
        
               <tr className="  text-[1.5rem] text-center font-extrabold w-full py-[1rem]"> 
                <th scope="col" className="px-6 text-left text-[1.5rem] font-extrabold py-4">Types</th>
                  <th scope="col" className="px-6 text-left text-[1.5rem] font-extrabold py-4">Weight</th>
                  </tr>
             </thead>
             <tbody>
               {
               nutrients&&nutrients.map((ele,index)=>{
                 return(
                   {
                     "key": "ZN",
                     "label": "Zinc, Zn",
                     "quantity": 2.262,
                     "unit": "mg"
                   },
                   <tr key={index}>
                   <td className='px-6 text-[1rem] font-extrabold py-4'>{ele.label}</td>
                   <td className='px-6 text-[1rem] font-extrabold py-4'>{ele.quantity}{ele.unit}</td>
                 </tr>
                 )
               })
               }
             </tbody>
           </table>
         
       </div>
         }
      </div>
    )
  }
  
  
}

export default FoodAnalyzer;