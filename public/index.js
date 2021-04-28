document.querySelector("button").addEventListener("click", getRapName)


async function getRapName(){
  try{
    const rapName = document.querySelector('input').value
    const res = await fetch(`http://localhost:8000/api/${rapName}`)
    const data = await res.json()

    console.log(data)
  }

  catch(err){
    console.log(err);
  }

}
