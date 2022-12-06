
import Object from "../Object/Object";

import data from '../../data/data';

function Home() {
    data.link = data.link.sort((a, b) => a.name.localeCompare(b.name));
    console.log(data.link)
    return (
      <>
      {data.link.map((item, idx)=>
        {
          return (
            <Object
            key = {idx}
            name = {item.name}
            link = {item.link}
            />
          )
        }
      )}
      </>
    );
  }
  
  export default Home;
  //Note: phải có http://
  