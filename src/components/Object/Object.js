import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../../data/data'

function Object({name, link}) {
	function openNewTab(url)
	{
		window.open(url, '_blank');
	}
  function getImageUrl()
  {
    //link
    for (let i = 0; i < data.type.length; i++)
    {
      if (link.includes(data.type[i].keyword)) return data.type[i].imageUrl;
    }
    return "https://th.bing.com/th/id/R.41d22b08d745d995729400638deb352c?rik=qrhTfesVMR5slQ&pid=ImgRaw&r=0";
  }
  return (
    <Card style={{ width: '200px', display: "inline-block", margin: "20px"}}>
      <Card.Img variant="top" src={getImageUrl()} height = "180px" style = {{padding: "10px"}}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary" onClick={()=>{openNewTab(link)}}>Click me!</Button>
      </Card.Body>
    </Card>
  );
}

export default Object;