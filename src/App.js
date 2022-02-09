import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  const peopleList = [
    {
      key: 1,
      people_img: "../images/people/singer.jpg",
      rating: "5.0",
      reviews: "9",
      place: "Greenland",
      description: "Singing Lessons from Matt",
      price: 120
    }
  ];
  return (
    <>
      <Navbar />
      
      <Hero />

      {peopleList.map((people, index) => {
        return(
        <Card key={index} 
        people_img={people.people_img}
         rating={people.rating} 
           reviews={people.reviews}
           place={people.place}
           description={people.description}
           price={people.price}
         />)
      })}
      
      <Content />
    </>
  );
}

export default App;
